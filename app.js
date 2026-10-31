(() => {
  "use strict";

  const SYLLABUS = window.LITTLE_LANTERN_SYLLABUS;
  const math = SYLLABUS["9709"];
  const NOTES_PACKAGE = window.LITTLE_LANTERN_NOTES || { topics: {} };
  const STUDY_NOTES = NOTES_PACKAGE.topics || {};
  const STORAGE_KEY = "littleLanternProgress_v2";
  const LEGACY_STORAGE_KEY = "littleLanternProgress_v1";
  const INTRO_KEY = "littleLanternIntroDismissedSessionV1";
  const STATUSES = ["Not started", "Learning", "Practising", "Confident"];
  const STATUS_RANK = { "Not started": 0, "Learning": 1, "Practising": 2, "Confident": 3 };
  const STATUS_HELP = {
    "Not started": "A fresh page",
    "Learning": "Revisit the basics",
    "Practising": "Try exam-style questions",
    "Confident": "Keep it fresh"
  };
  const ALL_TOPICS = Object.values(SYLLABUS).flatMap(subject => subject.papers.flatMap(paper =>
    paper.topics.map(([number, title]) => {
      const id = `${subject.subjectCode}-${number}`;
      return {
        id, number, title,
        subjectCode: subject.subjectCode,
        subjectName: subject.subjectName,
        syllabusYear: subject.syllabusYear,
        paperCode: paper.code,
        moduleCode: paper.alias || paper.code,
        paperTitle: paper.title,
        paperNumber: paper.number,
        hasStudyNotes: Boolean(STUDY_NOTES[id])
      };
    })
  ));

  const defaultState = {
    mastery: {}, notes: {}, reviewed: {}, plan: [], flashcardReviews: {},
    prefs: { subject: "9709", qualification: "ALL", route: "ALL_REQUESTED" }
  };
  let state = loadState();
  let activeView = "today";
  let timerSeconds = 25 * 60;
  let timerInterval = null;
  let timerRunning = false;
  let toastTimeout = null;
  let flashcardIndex = 0;
  let flashcardRevealed = false;
  let flashcardDeck = [];
  let flashcardBrowseAll = false;
  let csQuizIndex = 0;
  let csQuizChoice = null;
  let csQuizChecked = false;
  let csQuizScore = 0;

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  function loadState() {
    try {
      const currentRaw = localStorage.getItem(STORAGE_KEY);
      const legacyRaw = currentRaw ? null : localStorage.getItem(LEGACY_STORAGE_KEY);
      const saved = JSON.parse(currentRaw || legacyRaw || "null");
      if (!saved || typeof saved !== "object") return JSON.parse(JSON.stringify(defaultState));
      const migratedLegacy = !currentRaw && Boolean(legacyRaw);
      return {
        mastery: saved.mastery && typeof saved.mastery === "object" ? saved.mastery : {},
        notes: saved.notes && typeof saved.notes === "object" ? saved.notes : {},
        reviewed: saved.reviewed && typeof saved.reviewed === "object" ? saved.reviewed : {},
        plan: Array.isArray(saved.plan) ? saved.plan : [],
        flashcardReviews: saved.flashcardReviews && typeof saved.flashcardReviews === "object" ? saved.flashcardReviews : {},
         prefs: migratedLegacy ? { ...defaultState.prefs } : { ...defaultState.prefs, ...(saved.prefs || {}) }
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

  function getSubject() {
    return SYLLABUS[state.prefs.subject] || math;
  }

  function getRoute() {
    const subject = getSubject();
    const routes = subject.routes[state.prefs.qualification] || subject.routes.ALL || subject.routes.AS;
    return routes.find(route => route.id === state.prefs.route) || routes[0];
  }

  function getVisibleTopics() {
    const route = getRoute();
    const subject = getSubject();
    return ALL_TOPICS.filter(topic => topic.subjectCode === subject.subjectCode && route.papers.includes(topic.paperCode));
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

  function localDateISO(date = new Date()) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function addDays(dateString, days) {
    const date = new Date(`${dateString}T12:00:00`);
    date.setDate(date.getDate() + days);
    return localDateISO(date);
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
    if (!["today", "syllabus", "revision", "planner", "flashcards", "practice"].includes(view)) return;
    activeView = view;
    $$(".view").forEach(section => section.classList.toggle("active", section.id === `view-${view}`));
    $$(".nav-item").forEach(button => button.classList.toggle("active", button.dataset.view === view));
    const titles = { today: "Today", syllabus: "Syllabus library", revision: "Revision nook", planner: "Study planner", flashcards: "Flashcards", practice: "CS practice" };
    $("#currentCrumb").textContent = titles[view];
    if (view === "syllabus") renderSyllabus();
    if (view === "revision") renderRevision();
    if (view === "planner") renderPlanner();
    if (view === "flashcards") renderFlashcards();
    if (view === "practice") renderCSQuiz();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderDate() {
    $("#todayDate").textContent = formatDate();
  }

  function routeOptions() {
    const subject = getSubject();
    const qualification = $("#qualificationSelect").value || state.prefs.qualification || "ALL";
    const routes = subject.routes[qualification] || subject.routes.ALL || subject.routes.AS;
    const select = $("#routeSelect");
    const oldRoute = state.prefs.route;
    select.innerHTML = routes.map(route => `<option value="${escapeHTML(route.id)}">${escapeHTML(route.label)}</option>`).join("");
    const fallbackId = subject.subjectCode === "9709"
      ? (qualification === "AS" ? "AS_P1_P5" : qualification === "A2" ? "A_P1_P3_P4_P5" : "ALL_REQUESTED")
      : null;
    const selected = routes.find(route => route.id === oldRoute) || routes.find(route => route.id === fallbackId) || routes[0];
    select.value = selected.id;
    state.prefs.qualification = qualification;
    state.prefs.route = selected.id;
    saveState();
  }

  function renderSubjectTabs() {
    $$(".subject-tab").forEach(button => {
      const active = button.dataset.subject === getSubject().subjectCode;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function setSubject(subjectCode, options = {}) {
    if (!SYLLABUS[subjectCode]) return;
    state.prefs.subject = subjectCode;
    const routes = SYLLABUS[subjectCode].routes[state.prefs.qualification] || SYLLABUS[subjectCode].routes.ALL;
    if (!routes.some(route => route.id === state.prefs.route)) state.prefs.route = routes[0].id;
    $("#qualificationSelect").value = state.prefs.qualification;
    routeOptions();
    renderSubjectTabs();
    saveState();
    renderDashboard();
    renderSyllabus();
    renderRevision();
    if ($("#plannerSubject")) { $("#plannerSubject").value = subjectCode; populatePlannerTopics(); }
    if ($("#flashcardSubject")) { $("#flashcardSubject").value = subjectCode; flashcardIndex = 0; flashcardRevealed = false; flashcardBrowseAll = false; renderFlashcards(); }
    if (options.navigateTo) navigate(options.navigateTo);
  }

  function dismissOpeningScreen() {
    document.body.classList.remove("intro-pending");
    document.body.classList.add("intro-dismissed");
    try { sessionStorage.setItem(INTRO_KEY, "yes"); } catch (error) { }
  }

  function qualificationLabel() {
    if (state.prefs.qualification === "ALL") return "Study library";
    return state.prefs.qualification === "AS" ? "AS Level" : "Full A Level";
  }

  function displayModuleCode(topic) {
    return topic.moduleCode || topic.paperCode;
  }

  function renderDashboard() {
    const topics = getVisibleTopics();
    const progress = getProgress(topics);
    const subject = getSubject();
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
      container.innerHTML = `<div class="all-done"><span></span><strong>Your route is feeling lovely.</strong><p>Every visible topic is marked confident. Pick one to keep fresh or change your paper route.</p><button class="text-button" data-go="syllabus">Explore syllabus →</button></div>`;
    } else {
      container.innerHTML = steps.map((topic, index) => {
        const status = getStatus(topic.id);
        const label = status === "Not started" ? "A good place to begin" : STATUS_HELP[status];
        const icon = ["", "☘", ""][index];
        return `<article class="step-item"><span class="step-icon step-icon-${index}">${icon}</span><div class="step-copy"><span class="step-meta">${escapeHTML(displayModuleCode(topic))} · ${escapeHTML(label)}</span><strong>${escapeHTML(topic.number)} ${escapeHTML(topic.title)}</strong><small>${escapeHTML(topic.paperTitle)}</small></div><button class="round-arrow open-topic" data-topic-id="${topic.id}" aria-label="Open ${escapeHTML(topic.title)}">GO</button></article>`;
      }).join("");
    }
    if ($("#todaySubtitle")) $("#todaySubtitle").textContent = `Your ${subject.subjectName} study space: track what you know, revisit tricky ideas, and choose a gentle next step.`;
    if ($("#sourceStripTitle")) $("#sourceStripTitle").textContent = `${subject.subjectName} · Cambridge ${subject.subjectCode}`;
    if ($("#sourceStripText")) $("#sourceStripText").textContent = subject.mappingNote || `Original revision explanations mapped to the ${subject.syllabusYear} syllabus. Check the official specification for your exam year.`;
    if ($("#sourceStripLink")) $("#sourceStripLink").href = subject.sourceUrl;
    renderRouteHint();
  }

  function renderRouteHint() {
    const route = getRoute();
    const subject = getSubject();
    const note = route.note;
    if ($("#routeHint")) $("#routeHint").innerHTML = `<span>☼</span><span>${escapeHTML(note)}</span>`;
    if ($("#routeTitle")) $("#routeTitle").textContent = `${subject.subjectName} · ${route.shortLabel}`;
    if ($("#routeSubtitle")) $("#routeSubtitle").textContent = route.subtitle;
    if ($("#syllabusStamp")) $("#syllabusStamp").innerHTML = `CAMBRIDGE<br><strong>${escapeHTML(subject.subjectCode)}</strong><br>${escapeHTML(subject.syllabusYear)}`;
    if ($("#officialSyllabusLink")) $("#officialSyllabusLink").href = subject.sourceUrl;
    if ($("#syllabusSubtitle")) $("#syllabusSubtitle").textContent = `Explore ${subject.subjectName.toLowerCase()} concepts, open revision notes, practise, and track your progress.`;
    if ($("#syllabusAccuracyText")) $("#syllabusAccuracyText").textContent = `${subject.mappingNote || `Mapped to the ${subject.syllabusYear} syllabus.`} These independent notes are revision aids; the official Cambridge specification remains the final authority.`;
    renderSubjectTabs();
  }

  function renderSyllabus() {
    if (!$("#syllabusGroups")) return;
    const visibleTopics = getVisibleTopics();
    const route = getRoute();
    const subject = getSubject();
    const query = $("#topicSearch").value.trim().toLowerCase();
    const statusFilter = $("#statusFilter").value;
    const visiblePapers = subject.papers.filter(paper => route.papers.includes(paper.code)).map(paper => ({
      ...paper,
      topics: paper.topics.map(([number, title]) => ALL_TOPICS.find(topic => topic.subjectCode === subject.subjectCode && topic.number === number && topic.paperCode === paper.code)).filter(Boolean)
        .filter(topic => !query || `${topic.number} ${topic.title} ${topic.paperTitle} ${topic.paperCode} ${topic.subjectName}`.toLowerCase().includes(query))
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
      const overline = paper.label ? `CAMBRIDGE ${subject.subjectCode} · ${paper.label}` : `CAMBRIDGE ${subject.subjectCode} · ${paper.alias || paper.code} · PAPER ${paper.number}`;
      return `<section class="paper-card">
        <div class="paper-card-head"><div class="paper-number">${escapeHTML(paper.code)}</div><div class="paper-title-wrap"><span class="paper-overline">${escapeHTML(overline)}</span><h3>${escapeHTML(paper.title)}</h3><small>${paperExplored} of ${paperTopics.length} shown topics explored</small></div><div class="paper-mini-progress"><span style="width:${paperTopics.length ? Math.round((paperExplored / paperTopics.length) * 100) : 0}%"></span></div></div>
        <div class="topics-list">${paperTopics.map(topic => renderTopic(topic)).join("")}</div>
      </section>`;
    }).join("");
  }

  function renderTopic(topic) {
    const status = getStatus(topic.id);
    const note = state.notes[topic.id] || "";
    const reviewed = state.reviewed[topic.id];
    const noteLabel = note.trim() ? "Edit note" : "Add a note";
    const reviewLabel = reviewed === localDateISO() ? "Reviewed today Good" : "Mark reviewed";
    return `<article class="topic-row" id="topic-${topic.id}">
      <div class="topic-main"><span class="topic-code">${escapeHTML(topic.number)}</span><div class="topic-text"><strong>${escapeHTML(topic.title)}</strong><small>${escapeHTML(displayModuleCode(topic))} · ${escapeHTML(topic.paperTitle)}</small></div></div>
      <div class="topic-actions"><label class="sr-only" for="status-${topic.id}">Status for ${escapeHTML(topic.title)}</label><select class="topic-status status-${status.toLowerCase().replace(/\s+/g, "-")}" id="status-${topic.id}" data-topic-id="${topic.id}" aria-label="Status for ${escapeHTML(topic.title)}">${STATUSES.map(option => `<option value="${option}" ${status === option ? "selected" : ""}>${option}</option>`).join("")}</select>${topic.hasStudyNotes ? `<button class="study-toggle" data-action="study" data-topic-id="${topic.id}">Open notes GO</button>` : `<span class="notes-coming">Notes coming later</span>`}<button class="note-toggle" data-action="note" data-topic-id="${topic.id}">${noteLabel}</button><button class="review-toggle ${reviewed === localDateISO() ? "reviewed" : ""}" data-action="reviewed" data-topic-id="${topic.id}" title="Mark this topic as revised">${reviewLabel}</button></div>
      <div class="topic-note-wrap ${note.trim() ? "is-open" : ""}" data-note-wrap="${topic.id}"><label for="note-${topic.id}">A note to your future self</label><textarea id="note-${topic.id}" class="topic-note" data-note-id="${topic.id}" rows="2" placeholder="A formula to remember, a question to revisit, or a tiny win…">${escapeHTML(note)}</textarea></div>
    </article>`;
  }

  function renderStudyNotes(topicId) {
    const topic = ALL_TOPICS.find(item => item.id === topicId);
    const pack = STUDY_NOTES[topicId];
    if (!topic || !pack) {
      showToast("Notes for this topic are not in this revision pack yet.");
      return;
    }
    const moduleCode = displayModuleCode(topic);
    const content = $("#studyContent");
    const list = items => `<ul>${(items || []).map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`;
    content.innerHTML = `
      <div class="study-dialog-top">
        <div><p class="eyebrow">${escapeHTML(moduleCode)} · ${escapeHTML(topic.number)} · REVISION NOTES</p><h2 id="studyDialogTitle">${escapeHTML(topic.title)}</h2><p class="study-subtitle">${escapeHTML(topic.paperTitle)} · Cambridge ${escapeHTML(topic.subjectCode)} · ${escapeHTML(topic.syllabusYear)}</p></div>
        <button type="button" class="study-close" data-action="close-study" aria-label="Close notes">×</button>
      </div>
      ${pack.prerequisite ? `<div class="study-prerequisite"><strong>Prerequisite note</strong><p>${escapeHTML(pack.prerequisite)}</p></div>` : ""}
      <section class="study-section study-intro"><h3>The big idea</h3><p>${escapeHTML(pack.intro)}</p></section>
      <section class="study-section"><h3>What to know</h3>${list(pack.learn)}</section>
      ${pack.examStrategy?.length ? `<section class="study-section exam-method"><h3>How to approach exam questions</h3>${list(pack.examStrategy)}</section>` : ""}
      <section class="study-section"><h3>Formula shelf</h3><div class="formula-grid">${(pack.formulae || []).map(formula => `<div class="formula-card"><span>${escapeHTML(formula)}</span></div>`).join("")}</div></section>
      <section class="study-section worked-example"><h3>A worked example</h3><p class="example-question">${escapeHTML(pack.example.question)}</p>${list(pack.example.steps)}<p class="example-answer"><strong>Result:</strong> ${escapeHTML(pack.example.answer)}</p></section>
      ${(pack.workedExamples || []).map((example, index) => `<section class="study-section worked-example"><h3>Worked example ${index + 2}</h3><p class="example-question">${escapeHTML(example.question)}</p>${list(example.steps)}<p class="example-answer"><strong>Result:</strong> ${escapeHTML(example.answer)}</p></section>`).join("")}
      ${pack.focusChecklist?.length ? `<section class="study-section focus-checklist"><h3>Before you move on</h3>${list(pack.focusChecklist)}</section>` : ""}
      <section class="study-section common-traps"><h3>Little things to watch</h3>${list(pack.watch)}</section>
      <section class="study-section practice-section"><div class="practice-heading"><div><p class="eyebrow">TRY THESE YOURSELF FIRST</p><h3>Practice corner</h3></div><span class="practice-badge">${(pack.questions || []).length} questions</span></div><p class="practice-intro">These are original structured-question-style exercises, arranged from warm-up to challenge. They are not copied from Cambridge past papers.</p>
        ${(pack.questions || []).map((question, index) => `<article class="practice-card"><div class="practice-card-top"><span class="practice-level level-${index + 1}">${escapeHTML(question.level)}</span><span class="practice-number">Q${index + 1}</span></div><p class="practice-question">${escapeHTML(question.question)}</p><details class="solution-details"><summary>Reveal worked solution</summary><div class="solution-content"><p class="solution-answer"><strong>Answer:</strong> ${escapeHTML(question.answer)}</p>${list(question.steps)}</div></details></article>`).join("")}
      </section>
      <div class="study-dialog-footer"><span> Small steps still count.</span><div><button class="button button-light-bordered" data-action="study-reviewed" data-topic-id="${topic.id}">Mark reviewed</button><button class="button button-primary" data-action="close-study">Back to syllabus</button></div></div>
      <p class="study-source-note">${escapeHTML((NOTES_PACKAGE.subjectSources && NOTES_PACKAGE.subjectSources[topic.subjectCode]) || `These are independently written revision summaries mapped to Cambridge International ${topic.subjectName} ${topic.subjectCode}. Use the official syllabus for the definitive learning objectives and practical requirements.`)}</p>`;
    const dialog = $("#studyDialog");
    if (!dialog.open) dialog.showModal();
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
      return `<article class="revision-card"><div class="revision-rank">${String(index + 1).padStart(2, "0")}</div><div class="revision-card-copy"><div class="revision-label-row"><span class="revision-label ${status.toLowerCase().replace(/\s+/g, "-")}">${escapeHTML(urgency)}</span><span class="revision-paper">${escapeHTML(displayModuleCode(topic))} · ${escapeHTML(topic.number)}</span></div><h3>${escapeHTML(topic.title)}</h3><p>${detail}</p></div><div class="revision-card-actions"><select class="topic-status status-${status.toLowerCase().replace(/\s+/g, "-")}" data-topic-id="${topic.id}" aria-label="Status for ${escapeHTML(topic.title)}">${STATUSES.map(option => `<option value="${option}" ${status === option ? "selected" : ""}>${option}</option>`).join("")}</select><button class="button button-light-bordered open-topic" data-topic-id="${topic.id}">Open topic GO</button></div></article>`;
    }).join("");
  }


  function populatePlannerTopics() {
    const subjectCode = $("#plannerSubject").value || state.prefs.subject;
    const topics = ALL_TOPICS.filter(topic => topic.subjectCode === subjectCode);
    $("#plannerTopic").innerHTML = topics.map(topic => `<option value="${topic.id}">${escapeHTML(topic.number)} · ${escapeHTML(topic.title)}</option>`).join("");
  }

  function renderPlanner() {
    if (!$("#plannerList")) return;
    const today = localDateISO();
    const sessions = [...state.plan].sort((a, b) => a.date.localeCompare(b.date) || a.id.localeCompare(b.id));
    $("#plannerCount").textContent = `${sessions.length} ${sessions.length === 1 ? "session" : "sessions"}`;
    if (!sessions.length) {
      $("#plannerList").innerHTML = `<div class="planner-empty"><strong>Your planner is a blank page.</strong><span>Add one small session above. It does not have to be a perfect plan to be useful.</span></div>`;
      return;
    }
    $("#plannerList").innerHTML = sessions.map(session => {
      const topic = ALL_TOPICS.find(item => item.id === session.topicId);
      if (!topic) return "";
      const date = new Date(`${session.date}T12:00:00`);
      const day = new Intl.DateTimeFormat("en", { weekday: "short" }).format(date);
      const dayNumber = new Intl.DateTimeFormat("en", { day: "numeric" }).format(date);
      const month = new Intl.DateTimeFormat("en", { month: "short" }).format(date);
      const dateLabel = session.date === today ? "Today" : session.date < today ? "Past" : day;
      return `<article class="planner-session ${session.done ? "is-done" : ""}">
        <div class="planner-date-badge"><small>${escapeHTML(dateLabel)}</small><strong>${escapeHTML(dayNumber)}</strong><small>${escapeHTML(month)}</small></div>
        <div><h3>${escapeHTML(topic.title)}</h3><p>${escapeHTML(topic.subjectName)} · ${escapeHTML(topic.paperCode)} · ${session.duration} minutes${session.done ? " · Completed" : ""}</p></div>
        <div class="planner-actions"><button type="button" data-plan-action="open" data-topic-id="${escapeHTML(topic.id)}">Open</button><button type="button" data-plan-action="toggle" data-plan-id="${escapeHTML(session.id)}" aria-pressed="${session.done ? "true" : "false"}">${session.done ? "Undo" : "Done"}</button><button type="button" class="planner-delete" data-plan-action="delete" data-plan-id="${escapeHTML(session.id)}" aria-label="Remove ${escapeHTML(topic.title)} from your plan">Remove</button></div>
      </article>`;
    }).join("");
  }

  function addPlannerSession(event) {
    event.preventDefault();
    const topicId = $("#plannerTopic").value;
    const date = $("#plannerDate").value;
    const duration = Number($("#plannerDuration").value);
    if (!ALL_TOPICS.some(topic => topic.id === topicId) || !/^\d{4}-\d{2}-\d{2}$/.test(date) || ![15, 25, 40, 50, 60].includes(duration)) {
      showToast("Choose a topic, date, and study length first.");
      return;
    }
    state.plan.push({ id: `plan-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, topicId, date, duration, done: false });
    saveState();
    renderPlanner();
    showToast("A little session has been added to your plan. ");
  }

  function updatePlannerSession(action, sessionId, topicId) {
    if (action === "open" && topicId) { openTopic(topicId); return; }
    const item = state.plan.find(session => session.id === sessionId);
    if (!item) return;
    if (action === "toggle") item.done = !item.done;
    if (action === "delete") state.plan = state.plan.filter(session => session.id !== sessionId);
    saveState();
    renderPlanner();
  }


  function getFlashcards(subjectCode) {
    const cards = [];
    for (const topic of ALL_TOPICS.filter(item => item.subjectCode === subjectCode)) {
      const pack = STUDY_NOTES[topic.id];
      if (!pack) continue;
      (pack.learn || []).slice(0, 5).forEach((text, index) => cards.push({
        id: `${topic.id}-idea-${index}`, topicId: topic.id, topicTitle: topic.title,
        front: `Can you explain this idea from ${topic.title}?`, back: text, kind: "Core idea"
      }));
      (pack.formulae || []).slice(0, 4).forEach((text, index) => cards.push({
        id: `${topic.id}-formula-${index}`, topicId: topic.id, topicTitle: topic.title,
        front: `Recall a key relationship used in ${topic.title}.`, back: text, kind: "Formula / reminder"
      }));
      (pack.watch || []).slice(0, 2).forEach((text, index) => cards.push({
        id: `${topic.id}-watch-${index}`, topicId: topic.id, topicTitle: topic.title,
        front: `What is one common trap to avoid in ${topic.title}?`, back: text, kind: "Common trap"
      }));
    }
    return cards;
  }

  function renderFlashcards() {
    if (!$("#flashcardStage")) return;
    const subjectCode = $("#flashcardSubject").value || state.prefs.subject;
    const allCards = getFlashcards(subjectCode);
    const today = localDateISO();
    const due = allCards.filter(card => !state.flashcardReviews[card.id] || (state.flashcardReviews[card.id].due || "0000-00-00") <= today);
    const scheduled = allCards.filter(card => state.flashcardReviews[card.id] && state.flashcardReviews[card.id].due > today);
    flashcardDeck = flashcardBrowseAll ? allCards : due;
    flashcardIndex = Math.min(flashcardIndex, Math.max(0, flashcardDeck.length - 1));
    $("#flashcardDueCount").textContent = due.length;
    $("#flashcardDeckCount").textContent = allCards.length;
    const stage = $("#flashcardStage");
    if (!allCards.length) {
      stage.innerHTML = `<div class="flashcard-empty"><h3>No cards in this shelf yet.</h3><p>Open a topic pack with revision notes to study its key ideas here.</p></div>`;
      return;
    }
    if (!flashcardDeck.length) {
      stage.innerHTML = `<div class="flashcard-empty"><h3>You've tended today's cards.</h3><p>${scheduled.length} card${scheduled.length === 1 ? " is" : "s are"} scheduled for a later review. You can still browse the full shelf.</p><button class="button button-primary" id="browseFlashcards">Browse all cards</button></div>`;
      const browse = $("#browseFlashcards");
      if (browse) browse.addEventListener("click", () => { flashcardBrowseAll = true; flashcardIndex = 0; renderFlashcards(); });
      return;
    }
    const card = flashcardDeck[flashcardIndex];
    stage.innerHTML = `<article class="flashcard" id="activeFlashcard" role="button" tabindex="0" aria-label="Flashcard. Activate to ${flashcardRevealed ? "hide" : "reveal"} the answer">
      <div class="flashcard-kicker">${escapeHTML(card.kind)} · ${flashcardIndex + 1} of ${flashcardDeck.length}</div>
      <div class="flashcard-question">${escapeHTML(card.front)}</div>
      ${flashcardRevealed ? `<div class="flashcard-answer">${escapeHTML(card.back)}</div>` : `<p class="flashcard-topic">Think of your answer, then turn the card.</p>`}
      <div class="flashcard-topic">${escapeHTML(card.topicTitle)}</div>
    </article>
    <div class="flashcard-actions">${flashcardRevealed ? `<button type="button" class="flashcard-again" id="flashcardAgain">Again · review tomorrow</button><button type="button" class="flashcard-known" id="flashcardKnown">I knew it · space it out</button>` : `<button type="button" id="flipFlashcard">Turn the card</button>`}</div>`;
    const active = $("#activeFlashcard");
    const flip = () => { flashcardRevealed = !flashcardRevealed; renderFlashcards(); };
    active.addEventListener("click", flip);
    active.addEventListener("keydown", event => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); flip(); } });
    if ($("#flipFlashcard")) $("#flipFlashcard").addEventListener("click", flip);
    if ($("#flashcardAgain")) $("#flashcardAgain").addEventListener("click", () => rateFlashcard(false));
    if ($("#flashcardKnown")) $("#flashcardKnown").addEventListener("click", () => rateFlashcard(true));
  }

  function rateFlashcard(knewIt) {
    const card = flashcardDeck[flashcardIndex];
    if (!card) return;
    const previous = state.flashcardReviews[card.id] || { interval: 0 };
    const interval = knewIt ? Math.min(previous.interval ? previous.interval * 2 : 3, 30) : 1;
    state.flashcardReviews[card.id] = { interval, due: addDays(localDateISO(), interval), reviewed: localDateISO() };
    saveState();
    flashcardIndex = flashcardBrowseAll ? (flashcardIndex + 1) % flashcardDeck.length : 0;
    flashcardRevealed = false;
    renderFlashcards();
  }

  
  const CS_QUIZ = [
    { topic: "Data representation  1.1", question: "Which 8-bit two's-complement pattern represents −5?", options: ["00000101", "11111011", "11111010", "10000101"], answer: 1, explanation: "Write +5 as 00000101, invert the bits to 11111010, then add 1. The result is 11111011." },
    { topic: "Networks  2.1", question: "Which service translates a domain name such as example.com into an IP address?", options: ["DNS", "DHCP", "FTP", "SMTP"], answer: 0, explanation: "DNS resolves domain names to IP addresses so clients can locate services on a network." },
    { topic: "Logic circuits  3.2", question: "An AND gate has inputs A = 1 and B = 0. What is its output?", options: ["0", "1", "Undefined", "It depends on the clock"], answer: 0, explanation: "An AND gate outputs 1 only when every input is 1. Since B is 0, the output is 0." },
    { topic: "CPU architecture  4.1", question: "Which register holds the address of the next instruction to be fetched?", options: ["Accumulator", "Program Counter", "Memory Data Register", "Status Register"], answer: 1, explanation: "The Program Counter (PC) stores the address of the next instruction. It is updated as instructions are fetched or control flow changes." },
    { topic: "Data integrity  6.2", question: "A validation check confirms that entered data follows a required format. Does it prove that the data is correct?", options: ["Yes, always", "No; valid format does not guarantee truth", "Only if the field is numeric", "Only in a DBMS"], answer: 1, explanation: "Validation checks whether data meets rules, such as a permitted range or format. It cannot by itself prove that the value is accurate." },
    { topic: "Databases  8.1", question: "What is the main purpose of normalisation?", options: ["Increase repeated data", "Reduce unnecessary duplication and update anomalies", "Encrypt every field", "Sort records alphabetically"], answer: 1, explanation: "Normalisation structures relations to reduce redundancy and avoid insertion, update and deletion anomalies." },
    { topic: "SQL  8.3", question: "Which SQL clause filters rows before they are returned?", options: ["ORDER BY", "WHERE", "GROUP BY", "CREATE"], answer: 1, explanation: "WHERE applies a condition to rows. ORDER BY sorts the resulting rows; GROUP BY groups rows for aggregate operations." },
    { topic: "Algorithms  9.2", question: "A binary search can be applied correctly only when the data is…", options: ["Stored in a stack", "Already sorted", "All strings", "Exactly 100 items long"], answer: 1, explanation: "Binary search repeatedly halves the remaining search interval. Its direction decision depends on the data being ordered." },
    { topic: "Data structures  10.4", question: "Which principle describes a stack?", options: ["FIFO", "LIFO", "Random access only", "First-in, middle-out"], answer: 1, explanation: "A stack uses last-in, first-out (LIFO): the most recently pushed item is the first one popped." },
    { topic: "Programming  11.2", question: "What is the purpose of a loop condition?", options: ["To decide whether the loop continues", "To declare a constant", "To store a file", "To define a class"], answer: 0, explanation: "A loop condition controls repetition. The loop continues while its condition is true, or until its terminating condition is met, depending on the construct." },
    { topic: "Recursion  19.2", question: "Why does a recursive algorithm need a base case?", options: ["To sort the input", "To stop recursive calls", "To create a global variable", "To make the function iterative"], answer: 1, explanation: "The base case gives a condition where no further recursive call is made. Without a reachable base case, calls may continue until a runtime limit is reached." },
    { topic: "File handling  20.2", question: "Why should a program check for an end-of-file condition while reading a file?", options: ["To detect when no more data remains", "To encrypt the file", "To rename the file", "To convert text into SQL"], answer: 0, explanation: "An end-of-file condition indicates that there is no further data to read, helping the program stop safely rather than attempting an invalid read." }
  ];

  function renderCSQuiz() {
    const host = $("#csQuizCard");
    if (!host) return;
    const question = CS_QUIZ[csQuizIndex];
    if (!question) return;
    const checkedClass = (index) => csQuizChecked && index === question.answer ? "is-correct" : csQuizChecked && index === csQuizChoice ? "is-wrong" : csQuizChoice === index ? "is-selected" : "";
    host.innerHTML = `<div class="quiz-topline"><span class="quiz-topic">${escapeHTML(question.topic)}</span><span class="quiz-count">Question ${csQuizIndex + 1} of ${CS_QUIZ.length}</span></div>
      <h2 class="quiz-question">${escapeHTML(question.question)}</h2>
      <div class="quiz-options" role="radiogroup" aria-label="Answer choices">${question.options.map((option, index) => `<label class="quiz-option ${checkedClass(index)}"><input type="radio" name="csQuizAnswer" value="${index}" ${csQuizChoice === index ? "checked" : ""} ${csQuizChecked ? "disabled" : ""}><span>${escapeHTML(option)}</span></label>`).join("")}</div>
      ${csQuizChecked ? `<div class="quiz-feedback ${csQuizChoice === question.answer ? "" : "is-wrong"}" role="status"><strong>${csQuizChoice === question.answer ? "That's right." : "Not quite — here's why."}</strong> ${escapeHTML(question.explanation)}</div>` : ""}
      <div class="quiz-controls"><p>${csQuizChecked ? `Your score so far: ${csQuizScore} / ${csQuizIndex + 1}` : "Choose one answer, then check your thinking."}</p>${csQuizChecked ? `<button class="button button-primary" id="csQuizNext">${csQuizIndex === CS_QUIZ.length - 1 ? "See your result" : "Next question"} →</button>` : `<button class="button button-primary" id="csQuizCheck" ${csQuizChoice === null ? "disabled" : ""}>Check answer</button>`}</div>`;
    host.querySelectorAll('input[name="csQuizAnswer"]').forEach(input => input.addEventListener("change", event => {
      if (csQuizChecked) return;
      csQuizChoice = Number(event.target.value);
      renderCSQuiz();
    }));
    if ($("#csQuizCheck")) $("#csQuizCheck").addEventListener("click", () => {
      if (csQuizChoice === null) return;
      csQuizChecked = true;
      if (csQuizChoice === question.answer) csQuizScore += 1;
      renderCSQuiz();
    });
    if ($("#csQuizNext")) $("#csQuizNext").addEventListener("click", () => {
      if (csQuizIndex === CS_QUIZ.length - 1) {
        host.innerHTML = `<div class="quiz-empty"><span class="eyebrow">A LITTLE CHECK-IN</span><h2 class="quiz-question">You scored ${csQuizScore} out of ${CS_QUIZ.length}.</h2><p>Review the explanations, revisit any tricky topics, and try again whenever you're ready.</p><button class="button button-primary" id="csQuizRestart">Try the set again</button></div>`;
        $("#csQuizRestart").addEventListener("click", restartCSQuiz);
      } else {
        csQuizIndex += 1; csQuizChoice = null; csQuizChecked = false; renderCSQuiz();
      }
    });
  }

  function restartCSQuiz() { csQuizIndex = 0; csQuizChoice = null; csQuizChecked = false; csQuizScore = 0; renderCSQuiz(); }

  function checkTraceTable() {
    const expected = [[1, 1, 0], [2, 0, 2], [3, 1, 2], [4, 0, 6]];
    let correct = 0;
    const cells = $$(".trace-cell");
    cells.forEach(cell => {
      const row = Number(cell.dataset.traceRow);
      const col = Number(cell.dataset.traceCol);
      const value = cell.value.trim();
      const matches = value !== "" && Number(value) === expected[row][col];
      cell.classList.toggle("trace-correct", matches);
      cell.classList.toggle("trace-incorrect", value !== "" && !matches);
      if (matches) correct += 1;
    });
    const feedback = $("#traceFeedback");
    if (correct === 12) {
      feedback.textContent = "All 12 entries are correct. The loop adds 2 and then 4, so the final value of Total is 6. Lovely tracing.";
      feedback.classList.add("is-correct");
      feedback.classList.remove("is-wrong");
    } else {
      feedback.textContent = `${correct} of 12 entries are correct. Trace each iteration in order: calculate i MOD 2, then update Total only when the remainder is 0.`;
      feedback.classList.add("is-wrong");
      feedback.classList.remove("is-correct");
    }
  }

  function resetTraceTable() {
    $$(".trace-cell").forEach(cell => { cell.value = ""; cell.classList.remove("trace-correct", "trace-incorrect"); });
    $("#traceFeedback").textContent = "The table will give you feedback when you check it.";
    $("#traceFeedback").classList.remove("is-correct", "is-wrong");
  }

  
  async function importProgressFile(file) {
    if (!file) return;
    if (file.size > 2_000_000) { showToast("That backup is larger than expected. Choose a Little Lantern JSON backup."); return; }
    let previousState = null;
    try {
      const parsed = JSON.parse(await file.text());
      const incoming = parsed && parsed.progress;
      if (parsed.app !== "Little Lantern" || !incoming || typeof incoming !== "object") throw new Error("Not a Little Lantern backup");
      if (!window.confirm("Import this backup? It will replace the progress and notes currently saved in this browser.")) return;
      previousState = state;
      const knownIds = new Set(ALL_TOPICS.map(topic => topic.id));
      const cleanMap = (source, mapper) => Object.fromEntries(Object.entries(source || {}).filter(([key]) => knownIds.has(key)).map(([key, value]) => [key, mapper(value)]).filter(([, value]) => value !== null));
      const mastery = cleanMap(incoming.mastery, value => STATUSES.includes(value) ? value : null);
      const notes = cleanMap(incoming.notes, value => typeof value === "string" ? value.slice(0, 5000) : null);
      const reviewed = cleanMap(incoming.reviewed, value => typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value) ? value : null);
      const plan = (Array.isArray(incoming.plan) ? incoming.plan : []).slice(0, 200).filter(item => item && knownIds.has(item.topicId) && /^\d{4}-\d{2}-\d{2}$/.test(item.date) && [15,25,40,50,60].includes(Number(item.duration))).map((item, index) => ({ id: `import-${index}-${Date.now()}`, topicId: item.topicId, date: item.date, duration: Number(item.duration), done: Boolean(item.done) }));
      const flashcardReviews = Object.fromEntries(Object.entries(incoming.flashcardReviews || {}).filter(([key, value]) => /^[\w.-]+$/.test(key) && value && /^\d{4}-\d{2}-\d{2}$/.test(value.due || "") && Number.isFinite(Number(value.interval))).slice(0, 10000).map(([key, value]) => [key, { due: value.due, interval: Math.max(0, Math.min(30, Number(value.interval))), reviewed: /^\d{4}-\d{2}-\d{2}$/.test(value.reviewed || "") ? value.reviewed : value.due }]));
      const prefs = incoming.prefs || {};
      state = { mastery, notes, reviewed, plan, flashcardReviews, prefs: { ...defaultState.prefs, subject: SYLLABUS[prefs.subject] ? prefs.subject : "9709", qualification: ["ALL","AS","A2"].includes(prefs.qualification) ? prefs.qualification : "ALL", route: typeof prefs.route === "string" ? prefs.route.slice(0, 64) : defaultState.prefs.route } };
      $("#plannerSubject").value = state.prefs.subject;
      populatePlannerTopics();
      $("#flashcardSubject").value = state.prefs.subject;
      $("#qualificationSelect").value = state.prefs.qualification;
      routeOptions(); renderSubjectTabs(); renderDashboard(); renderSyllabus(); renderRevision(); renderPlanner(); renderFlashcards();
      if (!saveState()) {
        state = previousState;
        renderSubjectTabs(); renderDashboard(); renderSyllabus(); renderRevision(); renderPlanner(); renderFlashcards();
        throw new Error("Could not save the imported backup");
      }
      showToast("Your Little Lantern backup has been restored. ");
    } catch (error) {
      if (previousState) {
        state = previousState;
        $("#qualificationSelect").value = state.prefs.qualification;
        $("#plannerSubject").value = state.prefs.subject; populatePlannerTopics();
        $("#flashcardSubject").value = state.prefs.subject;
        routeOptions(); renderSubjectTabs(); renderDashboard(); renderSyllabus(); renderRevision(); renderPlanner(); renderFlashcards();
      }
      showToast(error.message === "Not a Little Lantern backup" ? "This file is not a valid Little Lantern backup." : "We couldn't restore that backup. Your saved progress has been kept.");
    }
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
        showToast("Focus session complete. Take a little break. ");
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
      backupVersion: 2,
      exportedAt: new Date().toISOString(),
      activeSyllabus: { subjectCode: getSubject().subjectCode, subjectName: getSubject().subjectName, syllabusYear: getSubject().syllabusYear, sourceUrl: getSubject().sourceUrl },
      availableSubjects: Object.values(SYLLABUS).map(subject => ({ subjectCode: subject.subjectCode, subjectName: subject.subjectName, syllabusYear: subject.syllabusYear, sourceUrl: subject.sourceUrl })),
      progress: state
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `little-lantern-progress-${localDateISO()}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    showToast("Your progress backup is ready. Keep it somewhere safe. ");
  }

  function resetProgress() {
    state = JSON.parse(JSON.stringify(defaultState));
    saveState();
    $("#qualificationSelect").value = state.prefs.qualification;
    routeOptions();
    $("#topicSearch").value = "";
    $("#statusFilter").value = "ALL";
    $("#plannerSubject").value = state.prefs.subject;
    $("#flashcardSubject").value = state.prefs.subject;
    populatePlannerTopics();
    flashcardIndex = 0; flashcardRevealed = false; flashcardBrowseAll = false;
    renderDashboard();
    renderSyllabus();
    renderRevision();
    renderPlanner();
    renderFlashcards();
    showToast("A fresh page. Your progress has been reset.");
  }

  function bindEvents() {
    $$(".nav-item").forEach(button => button.addEventListener("click", () => navigate(button.dataset.view)));
    $$(".subject-tab").forEach(button => button.addEventListener("click", () => setSubject(button.dataset.subject)));
    $("#enterStudy").addEventListener("click", () => dismissOpeningScreen());
    $("#skipWelcome").addEventListener("click", () => dismissOpeningScreen());
    $$("[data-start-subject]").forEach(button => button.addEventListener("click", () => {
      dismissOpeningScreen();
      setSubject(button.dataset.startSubject, { navigateTo: "syllabus" });
    }));

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
      if (action.dataset.action === "study") {
        renderStudyNotes(topicId);
        return;
      }
      if (action.dataset.action === "close-study") {
        const studyDialog = $("#studyDialog");
        if (studyDialog.open) studyDialog.close();
        return;
      }
      if (action.dataset.action === "study-reviewed") {
        state.reviewed[topicId] = localDateISO();
        saveState();
        renderDashboard();
        renderRevision();
        showToast("Review date saved. Nice work. ");
        return;
      }
      if (action.dataset.action === "note") {
        const wrap = $(`[data-note-wrap="${CSS.escape(topicId)}"]`);
        if (wrap) {
          wrap.classList.toggle("is-open");
          if (wrap.classList.contains("is-open")) $(`#note-${CSS.escape(topicId)}`).focus();
        }
      }
      if (action.dataset.action === "reviewed") {
        state.reviewed[topicId] = localDateISO();
        saveState();
        renderSyllabus();
        renderRevision();
        showToast("Review date saved. Nice work. ");
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
    $("#plannerSubject").addEventListener("change", populatePlannerTopics);
    $("#plannerForm").addEventListener("submit", addPlannerSession);
    $("#plannerList").addEventListener("click", event => {
      const button = event.target.closest("[data-plan-action]");
      if (button) updatePlannerSession(button.dataset.planAction, button.dataset.planId, button.dataset.topicId);
    });
    $("#flashcardSubject").addEventListener("change", () => { flashcardIndex = 0; flashcardRevealed = false; flashcardBrowseAll = false; renderFlashcards(); });
    $("#importProgress").addEventListener("click", () => $("#progressFile").click());
    $("#checkTrace").addEventListener("click", checkTraceTable);
    $("#resetTrace").addEventListener("click", resetTraceTable);
    $("#progressFile").addEventListener("change", async event => {
      await importProgressFile(event.target.files && event.target.files[0]);
      event.target.value = "";
    });
  }

  function init() {
    if (!SYLLABUS[state.prefs.subject]) state.prefs.subject = "9709";
    renderDate();
    bindEvents();
    try {
      if (sessionStorage.getItem(INTRO_KEY) === "yes") dismissOpeningScreen();
    } catch (error) {}
    $("#qualificationSelect").value = state.prefs.qualification;
    routeOptions();
    renderSubjectTabs();
    renderDashboard();
    renderSyllabus();
    renderRevision();
    $("#plannerDate").value = localDateISO();
    $("#plannerSubject").value = state.prefs.subject;
    populatePlannerTopics();
    $("#flashcardSubject").value = state.prefs.subject;
    renderPlanner();
    renderFlashcards();
    renderCSQuiz();
    renderTimer();
  }

  document.addEventListener("DOMContentLoaded", init);
})();