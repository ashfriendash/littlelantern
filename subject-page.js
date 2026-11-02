(() => {
  "use strict";

  const subjectCode = document.body.dataset.subject;
  const subjects = window.LITTLE_LANTERN_SYLLABUS || {};
  const notesPackage = window.LITTLE_LANTERN_NOTES || {};
  const notes = notesPackage.topics || {};
  const subject = subjects[subjectCode];
  const host = document.getElementById("subjectContent");

  function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>\"]/g, character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;"
    }[character]));
  }

  function renderList(items, className = "study-list") {
    if (!Array.isArray(items) || items.length === 0) return "";

    return `<ul class="${className}">
      ${items.map(item => `<li>${escapeHTML(item)}</li>`).join("")}
    </ul>`;
  }

  function renderExample(example, heading = "Worked example") {
    if (!example || (!example.question && !example.answer)) return "";

    return `
      <section class="notes-block worked-example">
        <h4>${escapeHTML(heading)}</h4>

        ${example.question
          ? `<p class="example-question">${escapeHTML(example.question)}</p>`
          : ""}

        ${renderList(example.steps, "step-list")}

        ${example.answer
          ? `<p class="example-answer"><strong>Answer:</strong> ${escapeHTML(example.answer)}</p>`
          : ""}
      </section>`;
  }

  function renderQuestion(question, index) {
    const steps = renderList(question.steps, "step-list");

    return `
      <article class="practice-question-card">
        <div class="practice-question-meta">
          <span>Question ${index + 1}</span>
          ${question.level ? `<span>${escapeHTML(question.level)}</span>` : ""}
        </div>

        <p class="practice-question-text">
          ${escapeHTML(question.question)}
        </p>

        <div class="practice-answer">
          <p class="answer-label">Answer</p>
          <p>${escapeHTML(question.answer)}</p>
          ${steps}
        </div>
      </article>`;
  }

  function renderTopic(number, title, paper, pack) {
    const questions = Array.isArray(pack.questions)
      ? pack.questions
      : [];

    const extraExamples = Array.isArray(pack.workedExamples)
      ? pack.workedExamples
      : [];

    return `
      <article class="topic-notes">

        <div class="topic-heading">
          <span class="topic-number">${escapeHTML(number)}</span>

          <div>
            <h3>${escapeHTML(title)}</h3>
            <p>${escapeHTML(paper.title || paper.label || paper.code || "")}</p>
          </div>
        </div>

        ${pack.intro ? `
          <section class="notes-block">
            <h4>What is this topic man?</h4>
            <p>${escapeHTML(pack.intro)}</p>
          </section>
        ` : ""}

        ${pack.prerequisite ? `
          <section class="notes-block">
            <h4>Before you begin</h4>
            <p>${escapeHTML(pack.prerequisite)}</p>
          </section>
        ` : ""}

        ${pack.learn?.length ? `
          <section class="notes-block">
            <h4>Notes</h4>
            ${renderList(pack.learn)}
          </section>
        ` : ""}

        ${pack.examStrategy?.length ? `
          <section class="notes-block">
            <h4>Exam tip for nerders</h4>
            ${renderList(pack.examStrategy)}
          </section>
        ` : ""}

        ${pack.formulae?.length ? `
          <section class="notes-block">
            <h4>Formulae for you</h4>
            ${renderList(pack.formulae, "formula-list")}
          </section>
        ` : ""}

        ${renderExample(pack.example)}

        ${extraExamples.map((example, index) =>
          renderExample(example, `Worked example ${index + 2}`)
        ).join("")}

        ${pack.focusChecklist?.length ? `
          <section class="notes-block">
            <h4>Check your understanding</h4>
            ${renderList(pack.focusChecklist)}
          </section>
        ` : ""}

        ${pack.watch?.length ? `
          <section class="notes-block common-mistakes">
            <h4>Common mistakes to avoid</h4>
            ${renderList(pack.watch)}
          </section>
        ` : ""}

        ${questions.length ? `
          <section class="practice-section">

            <div class="practice-heading">
              <div>
            
                <h4>Practice Now</h4>
              </div>

              <span>${questions.length} questions</span>
            </div>

            

            ${questions.map(renderQuestion).join("")}

          </section>
        ` : ""}

      </article>`;
  }

  function renderPage() {
    if (!host) return;

    if (!subject) {
      host.innerHTML = `
        <p class="page-error">
          This subject page could not be loaded.
          Return to the subject selection page and choose a subject again.
        </p>`;
      return;
    }

    const paperSections = [];
    let topicCount = 0;
    let questionCount = 0;

    subject.papers.forEach(paper => {

      const paperTopics = (paper.topics || []).map(([number, title]) => {

        const pack = notes[`${subjectCode}-${number}`];

        if (!pack) return "";

        topicCount += 1;

        questionCount += Array.isArray(pack.questions)
          ? pack.questions.length
          : 0;

        return renderTopic(number, title, paper, pack);

      }).filter(Boolean);

      if (!paperTopics.length) return;

      paperSections.push(`
        <section class="paper-section">

          <header class="paper-heading">
            <p class="section-kicker">
              ${escapeHTML(paper.label || `CAMBRIDGE ${subjectCode}  ${paper.code}`)}
            </p>

            <h2>
              ${escapeHTML(paper.title || paper.label || paper.code)}
            </h2>
          </header>

          ${paperTopics.join("")}

        </section>`);
    });

    if (!paperSections.length) {
      host.innerHTML = `
        <p class="page-error">
          No notes have been added to this subject yet.
          Check that the subject's notes files are in the same folder as this page.
        </p>`;
      return;
    }

    host.innerHTML = `
      <div class="content-summary">
        <span>${topicCount} topics</span>
        <span>${questionCount} practice questions</span>
      </div>

      ${paperSections.join("")}

      <footer class="subject-footer">

        <p>
          ${escapeHTML(
            notesPackage.subjectSources?.[subjectCode] ||
            `${subject.subjectName} ${subjectCode}: also use official syllabus`
          )}
        </p>

        <a
          href="${escapeHTML(subject.sourceUrl || "https://www.cambridgeinternational.org/")}"
          target="_blank"
          rel="noreferrer">
          Read the official syllabus
        </a>

        <a href="index.html">
          Back to the three subjects
        </a>

      </footer>`;
  }

  renderPage();

})();