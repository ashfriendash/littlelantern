# Little Lantern 🏮

Little Lantern is an independent, browser-based Cambridge International A Level revision companion for Mathematics 9709, Physics 9702, and Computer Science 9618. It is designed as a calm study nook: warm parchment colours, sage details, soft lantern illustrations, clear reading spaces, and low-pressure progress tracking.

## Run it locally

1. Extract the `little-lantern` folder.
2. Open the folder in VS Code.
3. Open `index.html` in a modern browser. VS Code Live Server is recommended, but there is no build step and no package installation is required.
4. Select a subject from the welcome screen or use the subject tabs in the syllabus library.
5. Open a topic's revision notes, add a personal note, set a mastery status, or mark it reviewed.

The app uses local browser storage. It does not create an account or sync progress to a server. Use **Export backup** to download your planner, notes, flashcard schedule, and topic progress as JSON. Use **Import backup** to restore a previous Little Lantern backup in the same or another browser. Import replaces the progress currently saved in that browser after confirmation.

## Included study libraries

- **Mathematics 9709:** 38 topic packs covering the six listed paper areas: Pure Mathematics 1, Pure Mathematics 2, Pure Mathematics 3, Mechanics, Probability & Statistics 1, and Probability & Statistics 2.
- **Physics 9702:** 25 theory topics plus one practical-skills pack, covering AS topics 1–11, A Level topics 12–25, and practical skills, uncertainty, and evaluation.
- **Computer Science 9618:** 44 topic packs across Papers 1–4, from data representation and networks to algorithms, databases, advanced theory, object-oriented programming, and file processing.
- **108 topic packs** with key ideas, formula/concept reminders, worked examples, exam approach notes, common traps, and original practice questions.

## Study tools

- A welcome screen and responsive study dashboard.
- Syllabus library with subject, exam route, topic search, and status filters.
- Topic mastery states: Not started, Learning, Practising, and Confident.
- Personal notes saved alongside each topic.
- Revision queue based on topic status and review dates.
- A date-based study planner with subject, topic, duration, completion, and removal controls.
- Flashcards generated from the included revision packs. Cards can be rated Again or I knew it and receive a simple spaced-review date.
- A short interactive Computer Science concept quiz with feedback and explanations.
- A guided pseudocode trace-table exercise with per-cell checking.
- A 25-minute focus timer.
- Progress export and validated progress import.
- Responsive mobile navigation, keyboard focus styles, reduced-motion support, descriptive labels, and Open Graph / social-preview metadata.

## Syllabus alignment and exam-year caution

The syllabus period displayed in Little Lantern is the period its topic headings and revision notes were originally mapped against. Cambridge's syllabus year means the calendar year in which the examination is taken.

| Subject | Mapping in this project | Important note |
|---|---|---|
| Mathematics 9709 | 2026–2027 | Cambridge has published a newer 2028–2030 syllabus. The present notes have not been fully re-audited against that newer specification. |
| Physics 9702 | 2025–2027 | Cambridge has published a newer 2028–2030 syllabus. The present notes have not been fully re-audited against that newer specification. |
| Computer Science 9618 | 2027–2029 | Use the matching Cambridge syllabus and pseudocode guide, plus your school's programming-language instructions. |

Before studying, confirm the examination year and route that apply to your entry. A pack with a matching topic heading is not proof that every sub-point in the official syllabus is covered. Practical assessment requirements, required depth, command words, permitted programming language, and component combinations should be checked against the official documents.

Official Cambridge subject pages:

- Mathematics 9709: https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-international-as-and-a-level-mathematics-9709/
- Physics 9702: https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-international-as-and-a-level-physics-9702/
- Computer Science 9618: https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-international-as-and-a-level-computer-science-9618/

Cambridge FAQ on choosing a syllabus year: https://help.cambridgeinternational.org/hc/en-gb/articles/37189948709522-General-FAQ-Which-syllabus-year-should-I-use

## Accuracy, ownership, and limitations

Little Lantern is an independent student revision project, not an official Cambridge International product and not endorsed by Cambridge. The revision explanations and practice questions are independently written; they are not copied from Cambridge past papers. The flashcards are generated from those notes, and the CS quiz is a supplementary starter set rather than a full exam simulator.

Use the official specification and your teacher's instructions as the final authority. Always check working, units, command words, practical requirements, and programming conventions. A learner's progress is stored in the current browser profile only; clearing browser data can remove it, so keep a backup if the progress matters to you.

## Publishing with GitHub Pages

- Keep `index.html`, `style.css`, all JavaScript files, `favicon.svg`, and the preview image together in the published directory.
- Configure Pages to publish from the branch and folder containing `index.html` (repository root or `/docs`).
- After publishing, open the public URL on desktop and mobile and check the browser console, all navigation items, all topic notes, import/export, and all local assets.
- For social preview cards, replace the relative `og:image` and `twitter:image` values with the absolute public URL of `share-card.png` once the final site URL is known.

## Project files

- `index.html` — welcome screen and application structure
- `style.css` — responsive hearthlight visual theme and components
- `app.js` — navigation, filtering, progress, notes, planner, flashcards, CS quiz, timer, and backup import/export
- `syllabus-data.js` — Mathematics 9709 syllabus headings and exam routes
- `study-notes.js` — Mathematics revision packs
- `physics-cs-data.js` — Physics and Computer Science syllabus headings and routes
- `physics-notes.js` — Physics revision packs
- `cs-as-theory-notes.js` — Computer Science theory packs
- `cs-as-programming-notes.js` — Computer Science problem-solving and programming packs
- `cs-a2-notes.js` — Computer Science advanced theory and further programming packs
- `favicon.svg` — browser tab icon
- `share-card.png` / `share-card.svg` — social preview artwork

## Opening screen behavior

The welcome screen appears when Little Lantern is opened in a fresh browser tab. Dismissing it is remembered only for that tab session, so a new tab or fresh launch shows it again. To test it immediately in the same tab, close that tab and open `index.html` in a new one.
