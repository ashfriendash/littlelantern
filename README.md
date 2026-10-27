# Little Lantern 🏮

A cozy, lightweight study companion for Cambridge AS & A Level students. This is the first working starter version, with a topic-level Mathematics 9709 tracker for the 2026–2027 syllabus.

## Run it

1. Download and unzip the folder.
2. Open `index.html` in a modern browser, or use VS Code with the Live Server extension.
3. Open **Syllabus library** and choose AS Level or Full A Level plus the paper route that matches your school entry.
4. Change a topic status, add a note, or mark it reviewed. Your progress is stored in this browser using `localStorage`.

No build step, package manager, API key, AI service, or backend is required.

## Included

- Cozy responsive dashboard and progress overview
- Mathematics 9709 topic headings for examination in 2026 and 2027
- AS route options: P1 + P2 (AS-only), P1 + P4, or P1 + P5
- Full A Level route options: P1 + P3 + P4 + P5 or P1 + P3 + P5 + P6
- Topic search and status filters
- Topic statuses, personal notes, review dates, and a revision queue
- 25-minute focus timer
- Export / reset for locally stored progress

## Accuracy note

The topic headings are based on Cambridge International's official syllabus overview for Mathematics 9709, examination in 2026 and 2027. This app is an independent study aid, not an official Cambridge product, and it does not reproduce every detailed learning objective. Always refer to the official syllabus PDF for definitive wording and examination requirements.

Official source: https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-international-as-and-a-level-mathematics-9709/

## Files

- `index.html` — pages and structure
- `style.css` — cozy theme, responsive layout, and interactions styling
- `app.js` — navigation, topic status, progress, timer, export, and storage
- `syllabus-data.js` — syllabus topic list and qualification/paper routes

## Next milestones

1. Verify the topic list and routes against the official Mathematics syllabus for the correct exam year.
2. Add Physics 9702 and Computer Science 9618 using their matching syllabus years.
3. Add detailed objective-level tracking only after the current official PDFs have been checked.
4. Test keyboard navigation, mobile layout, and save / export flows before publishing.
