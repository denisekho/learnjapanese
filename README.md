# げんきに日本語! — Japanese 1 Companion Course

A free, static web app for first-semester Japanese at a California community college.
The curriculum is aligned lesson-for-lesson with the **Genki I** chapter sequence
(Lessons 1–6 — the chapters a typical one-semester Japanese 1 course covers), so it
slots directly into a Genki-based class.

> **Note on the textbook:** Genki is a copyrighted textbook, so this app does not
> reproduce its text. It follows the same chapter order, grammar points, and
> vocabulary themes, with **original** explanations, dialogues, readings, and
> exercises. It is a study companion, not a textbook replacement.

## Features

- **Kana units** — full hiragana and katakana charts (basic, voiced, combination
  sounds) with click-to-hear audio and randomized graded drills.
- **Pronunciation guide** — vowels, mora timing, the Japanese r, devoiced vowels,
  pitch accent, and a shadowing method, all with audio examples.
- **Six lessons matching Genki I Ch. 1–6**, each with:
  - learning objectives,
  - a vocabulary table (~25–40 words) with per-word audio,
  - an original dialogue with line-by-line audio, romaji, and translation,
  - grammar points with audio example sentences,
  - **homework in three skills**, modeled on common community-college formats
    (self-corrected workbook pages, Canvas-style auto-graded quizzes):
    - 📖 *Reading*: original passage + comprehension questions,
    - ✍️ *Writing*: typed production exercises with instant checking (hiragana or
      romaji accepted early on, particles graded),
    - 🗣 *Speaking*: shadowing lines with normal/slow audio and a microphone
      checker (Web Speech recognition) with honest self-check fallback.
  - a 10-question **chapter quiz** with instant grading (80% = pass).
- **Syllabus page** — a 16-week lesson plan matching standard Genki I pacing,
  with suggested grade weights.
- **Progress page** — best scores per item, stored in `localStorage`.

## Running it

No build step, no server-side code. Either:

```bash
# open directly
open index.html

# or serve it (recommended for mic permissions)
python3 -m http.server 8000
# → http://localhost:8000
```

Audio uses your browser's Japanese text-to-speech voice (`ja-JP`); the speaking
checker uses the Web Speech recognition API (Chrome/Edge). Both degrade
gracefully when unavailable.

## Structure

```
index.html      app shell + navigation
css/style.css   styling
js/data.js      curriculum: kana, pronunciation guide, lessons 1–6, syllabus
js/app.js       router, audio, exercise grading, progress storage
```
