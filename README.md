# Little Lantern 🏮

A cozy, browser-based Cambridge International Mathematics 9709 revision library and progress tracker. This revision-pack version includes topic pages for **Pure Mathematics 1 (P1), Mechanics (M1 / Paper 4), Probability & Statistics 1 (S1 / Paper 5), and Probability & Statistics 2 (S2 / Paper 6)** using the 2026–2027 syllabus structure.

## Run it

1. Download and extract the project ZIP.
2. Open the `little-lantern` folder in VS Code.
3. Open `index.html` in a modern browser. VS Code's Live Server extension is recommended, but no build step is required.
4. Select **All requested modules** to study P1, M1, S1 and S2 together, then choose **Open notes** on any topic.
5. Change mastery status, add your personal notes, mark a topic reviewed, and use the revision queue. Progress is saved locally in the browser.

## What's included

- Cozy, readable typography: **Nunito Sans** for interface text and **Lora** for titles and note headings, with sensible fallbacks.
- Syllabus library for the 23 headline topics in the four requested modules.
- Topic-level revision pages with a big idea, key concepts, formula shelf, worked example, common mistakes, and practice section.
- **71 original practice questions**, usually three per topic (warm-up, developing, challenge), with worked solutions hidden behind a reveal. Two topics also have an extension question covering sampling variance and Type II error.
- Progress statuses: Not started, Learning, Practising, Confident.
- Personal notes, review dates, a revision queue, a 25-minute focus timer, and JSON export / reset.
- Local-first: no account, API key, AI service, backend or package installation is needed.

## How the syllabus view works

The default **All requested modules** view groups P1, M1, S1 and S2 for studying. It is **a study-library grouping, not an official Cambridge exam entry combination**. The app also offers actual AS and Full A Level paper-route selections; use the combination your school entered you for. For Full A Level, Paper 3 is required in addition to P1 and the applicable applied components.

The PDF the user supplied was used as a reference for P1 explanations and worked-method coverage. To avoid republishing that PDF's wording, the topic notes and practice questions in this app are written independently. The practice questions are inspired by the skills and structured style found in Cambridge examinations; **they are not copied past-paper questions**. The user-provided PDF has a chapter called Vectors, but vectors are not a P1 topic in the current 9709 syllabus; they belong to Pure Mathematics 3, so the revision library does not label them as P1 content.

## Accuracy notes

The topic headings and paper structure are mapped to the official Cambridge International Mathematics 9709 syllabus for examinations in 2026 and 2027. These are revision summaries, not a replacement for the full official syllabus, lessons, or mark schemes. Check the official syllabus for the complete learning objectives and your teacher's paper entry.

Official syllabus page: https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-international-as-and-a-level-mathematics-9709/
Official 2026–2027 PDF: https://www.cambridgeinternational.org/Images/697427-2026-2027-syllabus.pdf

## Files

- `index.html` — app structure and pages
- `style.css` — cozy palette, typography, responsive layout and study-note modal
- `app.js` — navigation, topic statuses, saved progress, study notes, timer and export
- `syllabus-data.js` — syllabus topic map and paper routes
- `study-notes.js` — the 23 topic note packs and 71 practice questions

Progress is stored in the current browser using `localStorage`; it doesn't automatically sync between devices or browsers. Use **Export progress** to save a backup before clearing browser data or changing devices.
