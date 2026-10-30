# Little Lantern — final release checklist

Use this after extracting the ZIP and before sharing the public URL.

- [ ] Put the files from this folder in the GitHub Pages publishing root (or `/docs`) so `index.html` is at that folder's root.
- [ ] Keep all JavaScript, CSS, `favicon.svg`, and `share-card.png` beside `index.html`.
- [ ] Publish, then test the live URL in a private/incognito window and on a phone.
- [ ] Test all six navigation views, all three subject libraries, every topic's notes, the focus timer, study planner, flashcards, CS multiple-choice questions, and trace-table exercise.
- [ ] Export a progress backup, refresh the site, import the backup, and check that notes, statuses, planned sessions and flashcard review dates return.
- [ ] Test reset only after making a backup; confirm the reset prompt and verify that all local progress is cleared.
- [ ] Check the browser console and network panel for missing files or errors.
- [ ] Confirm the intended examination year against Cambridge's official syllabus. The Mathematics and Physics packs in this release are mapped to earlier periods than the published 2028–2030 specifications.
- [ ] Replace relative `og:image` and `twitter:image` metadata with the absolute public URL for `share-card.png`.
- [ ] Add a repository-specific feedback/issues link to the footer once the public Little Lantern repository URL is known.
- [ ] Decide on a software/content licence before inviting others to reuse or redistribute the project.

Little Lantern is independent and is not endorsed by Cambridge International.

- [ ] Open `little-lantern/index.html` in a fresh browser tab and confirm the welcome screen appears. Dismissing it should not permanently suppress it on the next launch.
