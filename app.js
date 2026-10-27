(() => {
  "use strict";

  const SYLLABUS = window.LITTLE_LANTERN_SYLLABUS;
  const math = SYLLABUS["9709"];
  const STORAGE_KEY = "littleLanternProgress_v1";
  const STATUSES = ["Not started", "Learning", "Practising", "Confident"];
  const STATUS_RANK = { "Not started": 0, "Learning": 1, "Practising": 2, "Confident": 3 };
  const STATUS_HELP = {
    "Not started": "A fresh page",
    "Learning": "Revisit the basics",
    "Practising": "Try exam-style questions",
    "Confident": "Keep it fresh"
  };
  const ALL_TOPICS = math.papers.flatMap(paper => paper.topics.map(([number, title]) => ({
    id: `9709-${number}`,
    number,
    title,
    paperCode: paper.code,
    paperTitle: paper.title,
    paperNumber: paper.number
  })));

  const defaultState = {
    mastery: {}, notes: {}, reviewed: {},
    prefs: { qualification: "AS", route: "AS_P1_P5" }
  };
  let state = loadState();
  let activeView = "today";
  let timerSeconds = 25 * 60;
  let timerInterval = null;
  let timerRunning = false;
  let toastTimeout = null;

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (!saved || typeof saved !== "object") return structuredClone(defaultState);
      return {
        mastery: saved.mastery && typeof saved.mastery === "object" ? saved.mastery : {},
        notes: saved.notes && typeof saved.notes === "object" ? saved.notes : {},
        reviewed: saved.reviewed && typeof saved.reviewed === "object" ? saved.reviewed : {},
        prefs: { ...defaultState.prefs, ...(saved.prefs || {}) }
      };
    } catch (error) {
      return JSON.parse(JSON.stringify(defaultState));
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      return true;
    } catch (error) {
      showToast("This browser could not save progress. Try opening the app in a regular browser tab.");
      return false;
    }
  }

  function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>\"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[char]));
  }

  function getRoute() {
    const routes = math.routes[state.prefs.qualification] || math.routes.AS;
    return routes.find(route => route.id === state.prefs.route) || routes[0];
  }

  function getVisibleTopics() {
    const route = getRoute();
    return ALL_TOPICS.filter(topic => route.papers.includes(topic.paperCode));
  }

  function getStatus(topicId) {
    return STATUSES.includes(state.mastery[topicId]) ? state.mastery[topicId] : "Not started";
  }

  function getProgress(topics = getVisibleTopics()) {
    const total = topics.length;
    const explored = topics.filter(topic => getStatus(topic.id) !== "Not started").length;
    const confident = topics.filter(topic => getStatus(topic.id) === "Confident").length;
    const needsWork = topics.filter(topic => ["Learning", "Practising"].includes(getStatus(topic.id))).length;
    return { total, explored, confident, needsWork, percent: total ? Math.round((explored / total) * 100) : 0 };
  }

  function formatDate(date = new Date()) {
    return new Intl.DateTimeFormat("en", { weekday: "short", month: "short", day: "numeric" }).format(date);
  }

  function showToast(message) {
    const toast = $("#toast");
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove("show"), 3000);
  }

  function navigate(view) {
    if (!["today", "syllabus", "revision"].includes(view)) return;
    activeView = view;
    $$(".view").forEach(section => section.classList.toggle("active", section.id === `view-${view}`));
    $$(".nav-item").forEach(button => button.classList.toggle("active", button.dataset.view === view));
    const titles = { today: "Today", syllabus: "Syllabus library", revision: "Revision nook" };
    $("#currentCrumb").textContent = titles[view];
    if (view === "syllabus") renderSyllabus();
    if (view === "revision") renderRevision();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderDate() {
    $("#todayDate").textContent = formatDate();
  }

  function routeOptions() {
    const qualification = $("#qualificationSelect").value;
    const routes = math.routes[qualification];
    const select = $("#routeSelect");
    const oldRoute = state.prefs.route;
    select.innerHTML = routes.map(route => `<option value="${route.id}">${escapeHTML(route.label)}</option>`).join("");
    const fallback = routes[0];
    const selected = routes.find(route => route.id === oldRoute) || routes.find(route => route.id === (qualification === "AS" ? "AS_P1_P5" : "A_P1_P3_P4_P5")) || fallback;
    select.value = selected.id;
    state.prefs.qualification = qualification;
    state.prefs.route = selected.id;
    saveState();
  }

  function renderDashboard() {
    const topics = getVisibleTopics();
    const progress = getProgress(topics);
    $("#exploredPercent").textContent = progress.percent;
    $("#exploredBar").style.width = `${progress.percent}%`;
    $("#exploredCount").textContent = `${progress.explored} of ${progress.total}`;
    $("#confidentCount").textContent = progress.confident;
    $("#needsWorkCount").textContent = progress.needsWork;

    const steps = topics
      .filter(topic => getStatus(topic.id) !== "Confident")
      .sort((a, b) => {
        const rankDiff = STATUS_RANK[getStatus(a.id)] - STATUS_RANK[getStatus(b.id)];
        return rankDiff || a.number.localeCompare(b.number, undefined, { numeric: true });
      })
      .slice(0, 3);
    const container = $("#todaySteps");
    if (!steps.length) {
      container.innerHTML = `<div class="all-done"><span>✿</span><strong>Your route is feeling lovely.</strong><p>Every visible topic is marked confident. Pick one to keep fresh or change your paper route.</p><button class="text-button" data-go="syllabus">Explore syllabus →</button></div>`;
    } else {
      container.innerHTML = steps.map((topic, index) => {
        const status = getStatus(topic.id);
        const label = status === "Not started" ? "A good place to begin" : STATUS_HELP[status];
        const icon = ["✿", "☘", "✧"][index];
        return `<article class="step-item"><span class="step-icon step-icon-${index}">${icon}</span><div class="step-copy"><span class="step-meta">${escapeHTML(topic.paperCode)} · ${escapeHTML(label)}</span><strong>${escapeHTML(topic.number)} ${escapeHTML(topic.title)}</strong><small>${escapeHTML(topic.paperTitle)}</small></div><button class="round-arrow open-topic" data-topic-id="${topic.id}" aria-label="Open ${escapeHTML(topic.title)}">↗</button></article>`;
      }).join("");
    }
    renderRouteHint();
  }

  function renderRouteHint() {
    const route = getRoute();
    const note = route.note;
    if ($("#routeHint")) $("#routeHint").innerHTML = `<span>☼</span><span>${escapeHTML(note)}</span>`;
    if ($("#routeTitle")) $("#routeTitle").textContent = `${state.prefs.qualification === "AS" ? "AS Level" : "Full A Level"} · ${route.shortLabel}`;
    if ($("#routeSubtitle")) $("#routeSubtitle").textContent = route.subtitle;
  }

  function renderSyllabus() {
    if (!$("#syllabusGroups")) return;
    const visibleTopics = getVisibleTopics();
    const route = getRoute();
    const query = $("#topicSearch").value.trim().toLowerCase();
    const statusFilter = $("#statusFilter").value;
    const visiblePapers = math.papers.filter(paper => route.papers.includes(paper.code)).map(paper => ({
      ...paper,
      topics: paper.topics.map(([number, title]) => ALL_TOPICS.find(topic => topic.number === number && topic.paperCode === paper.code)).filter(Boolean)
        .filter(topic => !query || `${topic.number} ${topic.title} ${topic.paperTitle} ${topic.paperCode}`.toLowerCase().includes(query))
        .filter(topic => statusFilter === "ALL" || (statusFilter === "NEEDS_WORK" ? ["Learning", "Practising"].includes(getStatus(topic.id)) : getStatus(topic.id) === statusFilter))
    })).filter(paper => paper.topics.length);

    const filteredTopics = visiblePapers.flatMap(paper => paper.topics);
    const progress = getProgress(visibleTopics);
    $("#visibleTopicCount").textContent = filteredTopics.length;
    $("#viewProgress").textContent = `${progress.percent}%`;
    renderRouteHint();
    $("#emptySearch").classList.toggle("hidden", filteredTopics.length !== 0);

    $("#syllabusGroups").innerHTML = visiblePapers.map(paper => {
      const paperTopics = paper.topics;
      const paperExplored = paperTopics.filter(topic => getStatus(topic.id) !== "Not started").length;
      return `<section class="paper-card">
        <div class="paper-card-head"><div class="paper-number">${escapeHTML(paper.code)}</div><div class="paper-title-wrap"><span class="paper-overline">CAMBRIDGE 9709 · PAPER ${paper.number}</span><h3>${escapeHTML(paper.title)}</h3><small>${paperExplored} of ${paperTopics.length} shown topics explored</small></div><div class="paper-mini-progress"><span style="width:${paperTopics.length ? Math.round((paperExplored / paperTopics.length) * 100) : 0}%"></span></div></div>
        <div class="topics-list">${paperTopics.map(topic => renderTopic(topic)).join("")}</div>
      </section>`;
    }).join("");
  }

  function renderTopic(topic) {
    const status = getStatus(topic.id);
    const note = state.notes[topic.id] || "";
    const reviewed = state.reviewed[topic.id];
    const noteLabel = note.trim() ? "Edit note" : "Add a note";
    const reviewLabel = reviewed === new Date().toISOString().slice(0, 10) ? "Reviewed today ✓" : "Mark reviewed";
    return `<article class="topic-row" id="topic-${topic.id}">
      <div class="topic-main"><span class="topic-code">${escapeHTML(topic.number)}</span><div class="topic-text"><strong>${escapeHTML(topic.title)}</strong><small>${escapeHTML(topic.paperTitle)}</small></div></div>
      <div class="topic-actions"><label class="sr-only" for="status-${topic.id}">Status for ${escapeHTML(topic.title)}</label><select class="topic-status status-${status.toLowerCase().replace(/\s+/g, "-")}" id="status-${topic.id}" data-topic-id="${topic.id}" aria-label="Status for ${escapeHTML(topic.title)}">${STATUSES.map(option => `<option value="${option}" ${status === option ? "selected" : ""}>${option}</option>`).join("")}</select><button class="note-toggle" data-action="note" data-topic-id="${topic.id}">${noteLabel}</button><button class="review-toggle ${reviewed === new Date().toISOString().slice(0, 10) ? "reviewed" : ""}" data-action="reviewed" data-topic-id="${topic.id}" title="Mark this topic as revised">${reviewLabel}</button></div>
      <div class="topic-note-wrap ${note.trim() ? "is-open" : ""}" data-note-wrap="${topic.id}"><label for="note-${topic.id}">A note to your future self</label><textarea id="note-${topic.id}" class="topic-note" data-note-id="${topic.id}" rows="2" placeholder="A formula to remember, a question to revisit, or a tiny win…">${escapeHTML(note)}</textarea></div>
    </article>`;
  }

  function renderRevision() {
    const topics = getVisibleTopics();
    const queue = topics.map(topic => ({ ...topic, status: getStatus(topic.id), reviewed: state.reviewed[topic.id] || null }))
      .filter(topic => topic.status !== "Confident" || (topic.reviewed && daysSince(topic.reviewed) >= 7))
      .sort((a, b) => {
        const dueA = a.reviewed ? daysSince(a.reviewed) : 999;
        const dueB = b.reviewed ? daysSince(b.reviewed) : 999;
        const score = topic => topic.status === "Learning" ? 0 : topic.status === "Not started" ? 1 : topic.status === "Practising" ? 2 : 3;
        return score(a) - score(b) || dueB - dueA || a.number.localeCompare(b.number, undefined, { numeric: true });
      }).slice(0, 12);
    $("#revisionListTitle").textContent = queue.length ? `${queue.length} gentle next steps` : "Everything in this route feels confident";
    if (!queue.length) {
      $("#revisionList").innerHTML = `<div class="revision-empty"><span>☼</span><h3>Look at you, tending your garden.</h3><p>All topics on this route are marked confident and none are due for a refresh. You can keep them fresh by marking a topic reviewed after practice.</p><button class="button button-primary" data-go="syllabus">Choose a topic to revisit</button></div>`;
      return;
    }
    $("#revisionList").innerHTML = queue.map((topic, index) => {
      const status = topic.status;
      let detail = status === "Not started" ? "An easy first step: read the topic overview and try one worked example." : status === "Learning" ? "Revisit the core idea, then work through a couple of guided examples." : status === "Practising" ? "Try a short set of exam-style questions and check your method." : "A little spaced practice can help this topic stay familiar.";
      if (topic.reviewed) detail += ` Last reviewed ${escapeHTML(new Intl.DateTimeFormat("en", { month: "short", day: "numeric" }).format(new Date(`${topic.reviewed}T12:00:00`)))}.`;
      const urgency = status === "Not started" ? "Begin here" : status === "Learning" ? "Revisit gently" : status === "Practising" ? "Build fluency" : "Keep it fresh";
      return `<article class="revision-card"><div class="revision-rank">${String(index + 1).padStart(2, "0")}</div><div class="revision-card-copy"><div class="revision-label-row"><span class="revision-label ${status.toLowerCase().replace(/\s+/g, "-")}">${escapeHTML(urgency)}</span><span class="revision-paper">${escapeHTML(topic.paperCode)} · ${escapeHTML(topic.number)}</span></div><h3>${escapeHTML(topic.title)}</h3><p>${detail}</p></div><div class="revision-card-actions"><select class="topic-status status-${status.toLowerCase().replace(/\s+/g, "-")}" data-topic-id="${topic.id}" aria-label="Status for ${escapeHTML(topic.title)}">${STATUSES.map(option => `<option value="${option}" ${status === option ? "selected" : ""}>${option}</option>`).join("")}</select><button class="button button-light-bordered open-topic" data-topic-id="${topic.id}">Open topic ↗</button></div></article>`;
    }).join("");
  }

  function daysSince(dateString) {
    const then = new Date(`${dateString}T12:00:00`).getTime();
    return Math.floor((Date.now() - then) / 86400000);
  }

  function openTopic(topicId) {
    navigate("syllabus");
    $("#topicSearch").value = "";
    $("#statusFilter").value = "ALL";
    renderSyllabus();
    setTimeout(() => {
      const item = $(`#topic-${CSS.escape(topicId)}`);
      if (item) {
        item.scrollIntoView({ behavior: "smooth", block: "center" });
        item.classList.add("topic-highlight");
        setTimeout(() => item.classList.remove("topic-highlight"), 1800);
      }
    }, 80);
  }

  function updateTopicStatus(topicId, status) {
    if (!STATUSES.includes(status) || !ALL_TOPICS.some(topic => topic.id === topicId)) return;
    state.mastery[topicId] = status;
    saveState();
    renderDashboard();
    if (activeView === "syllabus") renderSyllabus();
    if (activeView === "revision") renderRevision();
  }

  function toggleTimer() {
    if (timerRunning) {
      clearInterval(timerInterval);
      timerInterval = null;
      timerRunning = false;
      $("#timerStart").textContent = "Resume focus";
      $("#timerMessage").textContent = "paused, take your time";
      return;
    }
    if (timerSeconds <= 0) timerSeconds = 25 * 60;
    timerRunning = true;
    $("#timerStart").textContent = "Pause gently";
    $("#timerMessage").textContent = "you are doing enough";
    timerInterval = setInterval(() => {
      timerSeconds -= 1;
      renderTimer();
      if (timerSeconds <= 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        timerRunning = false;
        $("#timerStart").textContent = "Begin again";
        $("#timerMessage").textContent = "lovely work — time to rest";
        showToast("Focus session complete. Take a little break. ✿");
      }
    }, 1000);
  }

  function renderTimer() {
    const mins = Math.floor(timerSeconds / 60).toString().padStart(2, "0");
    const secs = (timerSeconds % 60).toString().padStart(2, "0");
    $("#timerDisplay").textContent = `${mins}:${secs}`;
    const progress = 1 - (timerSeconds / (25 * 60));
    $(".timer-ring").style.setProperty("--timer-progress", `${Math.round(progress * 100)}%`);
  }

  function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    timerRunning = false;
    timerSeconds = 25 * 60;
    $("#timerStart").textContent = "Begin focus";
    $("#timerMessage").textContent = "one thing at a time";
    renderTimer();
  }

  function exportProgress() {
    const payload = {
      app: "Little Lantern",
      exportedAt: new Date().toISOString(),
      syllabus: { subjectCode: "9709", subjectName: "Mathematics", syllabusYear: "2026–2027", sourceUrl: math.sourceUrl },
      progress: state
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `little-lantern-progress-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    showToast("Your progress backup is ready. Keep it somewhere safe. ✿");
  }

  function resetProgress() {
    state = JSON.parse(JSON.stringify(defaultState));
    saveState();
    $("#qualificationSelect").value = state.prefs.qualification;
    routeOptions();
    $("#topicSearch").value = "";
    $("#statusFilter").value = "ALL";
    renderDashboard();
    renderSyllabus();
    renderRevision();
    showToast("A fresh page. Your progress has been reset.");
  }

  function bindEvents() {
    $$(".nav-item").forEach(button => button.addEventListener("click", () => navigate(button.dataset.view)));

    $("#qualificationSelect").value = state.prefs.qualification;
    routeOptions();
    $("#routeSelect").value = state.prefs.route;
    $("#qualificationSelect").addEventListener("change", event => {
      state.prefs.qualification = event.target.value;
      routeOptions();
      renderSyllabus();
      renderDashboard();
      saveState();
    });
    $("#routeSelect").addEventListener("change", event => {
      state.prefs.route = event.target.value;
      saveState();
      renderSyllabus();
      renderDashboard();
      if (activeView === "revision") renderRevision();
    });
    $("#topicSearch").addEventListener("input", renderSyllabus);
    $("#statusFilter").addEventListener("change", renderSyllabus);

    $("#syllabusGroups").addEventListener("change", event => {
      const select = event.target.closest(".topic-status");
      if (select) updateTopicStatus(select.dataset.topicId, select.value);
    });
    $("#revisionList").addEventListener("change", event => {
      const select = event.target.closest(".topic-status");
      if (select) updateTopicStatus(select.dataset.topicId, select.value);
    });
    document.addEventListener("click", event => {
      const go = event.target.closest("[data-go]");
      if (go) { navigate(go.dataset.go); return; }
      const open = event.target.closest(".open-topic");
      if (open) { openTopic(open.dataset.topicId); return; }
      const action = event.target.closest("[data-action]");
      if (!action) return;
      const topicId = action.dataset.topicId;
      if (action.dataset.action === "note") {
        const wrap = $(`[data-note-wrap="${CSS.escape(topicId)}"]`);
        if (wrap) {
          wrap.classList.toggle("is-open");
          if (wrap.classList.contains("is-open")) $(`#note-${CSS.escape(topicId)}`).focus();
        }
      }
      if (action.dataset.action === "reviewed") {
        state.reviewed[topicId] = new Date().toISOString().slice(0, 10);
        saveState();
        renderSyllabus();
        renderRevision();
        showToast("Review date saved. Nice work. ✿");
      }
    });
    $("#syllabusGroups").addEventListener("input", event => {
      const note = event.target.closest(".topic-note");
      if (!note) return;
      state.notes[note.dataset.noteId] = note.value;
      saveState();
    });

    $("#timerStart").addEventListener("click", toggleTimer);
    $("#timerReset").addEventListener("click", resetTimer);
    $("#exportProgress").addEventListener("click", exportProgress);
    const dialog = $("#resetDialog");
    $("#resetProgress").addEventListener("click", () => dialog.showModal());
    $("#cancelReset").addEventListener("click", () => dialog.close());
    $("#confirmReset").addEventListener("click", () => { dialog.close(); resetProgress(); });
  }

  function init() {
    renderDate();
    bindEvents();
    renderDashboard();
    renderSyllabus();
    renderRevision();
    renderTimer();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
