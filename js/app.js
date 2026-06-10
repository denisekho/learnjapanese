/* ============================================================
   げんきに日本語! — app logic
   Vanilla JS single-page app: hash router, Web Speech audio,
   exercise grading, localStorage progress.
   ============================================================ */

(function () {
"use strict";

/* ---------------- speech synthesis (pronunciation help) ---------------- */
let jpVoice = null;

function pickVoice() {
  const voices = window.speechSynthesis ? speechSynthesis.getVoices() : [];
  jpVoice = voices.find(v => v.lang === "ja-JP") ||
            voices.find(v => v.lang && v.lang.startsWith("ja")) || null;
  const status = document.getElementById("tts-status");
  if (status) {
    status.textContent = jpVoice ? "🔊 日本語 audio ready" : "🔇 no Japanese voice";
    status.title = jpVoice
      ? "Japanese audio: " + jpVoice.name
      : "Your browser has no Japanese voice installed. On Windows/macOS, add Japanese text-to-speech in system settings.";
  }
}
if (window.speechSynthesis) {
  pickVoice();
  speechSynthesis.onvoiceschanged = pickVoice;
}

function speak(text, rate) {
  if (!window.speechSynthesis) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "ja-JP";
  if (jpVoice) u.voice = jpVoice;
  u.rate = rate || 0.85;
  speechSynthesis.speak(u);
}
window._speak = speak; // used by inline handlers

/* ---------------- speech recognition (speaking checker) ---------------- */
const SR = window.SpeechRecognition || window.webkitSpeechRecognition || null;

function normalizeJa(s) {
  return (s || "")
    .replace(/[\s、。，．・！？!?～~「」『』()（）.,-]/g, "")
    // katakana → hiragana so recognizer output compares loosely
    .replace(/[ァ-ヶ]/g, ch => String.fromCharCode(ch.charCodeAt(0) - 0x60))
    .toLowerCase();
}

/* crude similarity: shared-bigram dice coefficient */
function similarity(a, b) {
  a = normalizeJa(a); b = normalizeJa(b);
  if (!a.length || !b.length) return 0;
  if (a === b) return 1;
  const grams = s => { const g = []; for (let i = 0; i < s.length - 1; i++) g.push(s.slice(i, i + 2)); return g; };
  const ga = grams(a), gb = grams(b);
  if (!ga.length || !gb.length) return a === b ? 1 : 0;
  const set = new Map();
  ga.forEach(g => set.set(g, (set.get(g) || 0) + 1));
  let hits = 0;
  gb.forEach(g => { const n = set.get(g) || 0; if (n > 0) { hits++; set.set(g, n - 1); } });
  return (2 * hits) / (ga.length + gb.length);
}

/* ---------------- progress storage ---------------- */
const STORE_KEY = "genki-companion-progress-v1";
function loadProgress() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch (e) { return {}; }
}
function saveProgress(p) { localStorage.setItem(STORE_KEY, JSON.stringify(p)); }
function recordScore(key, correct, total) {
  const p = loadProgress();
  const pct = Math.round((correct / total) * 100);
  if (!p[key] || pct >= p[key].pct) p[key] = { pct, correct, total, date: new Date().toISOString().slice(0, 10) };
  saveProgress(p);
  renderLessonNav();
}
function getScore(key) { return loadProgress()[key] || null; }

/* ---------------- tiny html helpers ---------------- */
function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function speakBtn(text, rate) {
  return `<button class="speak-btn" title="Listen" onclick="_speak('${esc(text).replace(/'/g, "\\'")}'${rate ? "," + rate : ""})">🔊</button>`;
}
const app = () => document.getElementById("app");

/* ============================================================
   PAGES
   ============================================================ */

function renderHome() {
  const cards = LESSONS.map(l => {
    const quiz = getScore("quiz-" + l.id);
    return `<a class="lesson-card" href="#/lesson/${l.id}">
      <span class="num">Lesson ${l.id} · ${esc(l.genkiRef)}</span>
      <h3><span class="jp">${esc(l.jpTitle)}</span> — ${esc(l.title)}</h3>
      <p>${esc(l.summary)}</p>
      ${quiz ? `<div class="score-line">✔ Quiz best: ${quiz.pct}%</div>` : ""}
    </a>`;
  }).join("");

  app().innerHTML = `
    <div class="hero">
      <h2>ようこそ！ Welcome to Japanese 1</h2>
      <p>A free companion course for first-semester Japanese, matched lesson-for-lesson to the
      <strong>Genki I</strong> chapter sequence (Lessons 1–6) used at most California community colleges.
      Learn the kana, work through each lesson's vocabulary, grammar, and dialogue, then complete the
      reading, writing, and speaking homework before taking the chapter quiz.</p>
    </div>

    <div class="notice">📖 <strong>Use alongside your textbook.</strong> This site follows the same chapter
    order and grammar points as Genki I so it slots into your class, but all dialogues, readings, and
    exercises here are original practice material — it is a study companion, not a replacement for the book
    your course requires.</div>

    <div class="card">
      <h3>How a lesson works (do it in this order)</h3>
      <ol>
        <li><strong>Vocabulary</strong> — listen 🔊 and repeat each word until it feels automatic.</li>
        <li><strong>Dialogue</strong> — listen line-by-line, then shadow the whole conversation.</li>
        <li><strong>Grammar</strong> — read each point; say every example sentence out loud.</li>
        <li><strong>Homework</strong> — reading, writing, and speaking sets. Self-correct as you go (just like turning in a self-corrected Genki workbook).</li>
        <li><strong>Quiz</strong> — 10 questions, instant grade, saved to your <a href="#/progress">Progress page</a>.</li>
      </ol>
      <p class="hint">New to Japanese? Start with the <a href="#/kana/hiragana">Hiragana unit</a> and the
      <a href="#/pronunciation">Pronunciation Guide</a> — weeks 1–2 of the <a href="#/syllabus">syllabus</a>.</p>
    </div>

    <h2 class="page-title">Lessons</h2>
    <div class="lesson-grid">${cards}</div>`;
}

function renderSyllabus() {
  const rows = SYLLABUS.weeks.map(w =>
    `<tr><td><strong>${esc(w.wk)}</strong></td><td>${esc(w.topic)}</td><td>${esc(w.app)}</td><td>${esc(w.hw)}</td></tr>`
  ).join("");
  const grading = SYLLABUS.grading.map(g => `<tr><td>${esc(g[0])}</td><td>${esc(g[1])}</td></tr>`).join("");

  app().innerHTML = `
    <h2 class="page-title">Syllabus &amp; Lesson Plans</h2>
    <p class="page-subtitle">${esc(SYLLABUS.intro)}</p>
    <div class="card">
      <h3>16-week plan</h3>
      <table class="syllabus">
        <tr><th>Week</th><th>Class topic (Genki I pacing)</th><th>Do on this site</th><th>Homework / assessment</th></tr>
        ${rows}
      </table>
    </div>
    <div class="card">
      <h3>Suggested grade weights</h3>
      <table class="syllabus">${grading}</table>
      <p class="hint">Modeled on common community-college Japanese 1 syllabi: frequent low-stakes homework
      that you self-correct, chapter quizzes, and an oral component.</p>
    </div>`;
}

/* ---------------- kana pages ---------------- */
function kanaGrid(rows) {
  return `<div class="kana-table">` + rows.map(row =>
    row.cells.map(c =>
      c ? `<div class="kana-cell" onclick="_speak('${esc(c[0])}', 0.7)"><span class="k">${esc(c[0])}</span><span class="r">${esc(c[1])}</span></div>`
        : `<div class="kana-cell blank"></div>`
    ).join("")
  ).join("") + `</div>`;
}

function renderKana(which) {
  const data = KANA[which];
  const drillScore = getScore("kana-" + which);
  app().innerHTML = `
    <h2 class="page-title">${esc(data.title)}</h2>
    <p class="page-subtitle">${esc(data.intro)}</p>
    <div class="card"><h3>Basic syllables</h3>${kanaGrid(data.rows)}</div>
    <div class="card"><h3>Voiced &amp; p- sounds (゛/ ゜)</h3>${kanaGrid(data.voiced)}</div>
    <div class="card"><h3>Combination sounds</h3>${kanaGrid(data.combos)}</div>
    <div class="card">
      <h3>Reading notes</h3>
      <ul>${data.notes.map(n => `<li>${esc(n)}</li>`).join("")}</ul>
    </div>
    <div class="card">
      <h3>Drill <span class="badge quiz">graded</span></h3>
      <p>10 random characters — pick the right reading. Best score saved.
      ${drillScore ? `<strong>Best: ${drillScore.pct}%</strong>` : ""}</p>
      <div id="kana-drill"><button class="primary" onclick="window._startKanaDrill('${which}')">Start drill</button></div>
    </div>`;
}

window._startKanaDrill = function (which) {
  const bank = KANA_DRILLS[which].slice();
  // shuffle, take 10
  for (let i = bank.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[bank[i], bank[j]] = [bank[j], bank[i]]; }
  const items = bank.slice(0, 10).map(it => {
    const choices = it.slice(1).map((c, i) => ({ text: c, ok: i === 0 }));
    for (let i = choices.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[choices[i], choices[j]] = [choices[j], choices[i]]; }
    return { q: `How do you read 「${it[0]}」?`, kana: it[0], choices };
  });
  let html = items.map((it, qi) => `
    <div class="exercise" data-q="${qi}">
      <div class="prompt"><span class="jp" style="font-size:1.6em">${esc(it.kana)}</span> ${speakBtn(it.kana, 0.7)} — choose the reading:</div>
      <div class="choices">
        ${it.choices.map((c, ci) => `<label><input type="radio" name="kd${qi}" value="${c.ok ? 1 : 0}" data-ci="${ci}"> ${esc(c.text)}</label>`).join("")}
      </div>
    </div>`).join("");
  html += `<button class="primary" id="kd-grade">Grade drill</button><div id="kd-result"></div>`;
  const box = document.getElementById("kana-drill");
  box.innerHTML = html;
  document.getElementById("kd-grade").onclick = function () {
    let correct = 0;
    items.forEach((it, qi) => {
      const sel = box.querySelector(`input[name="kd${qi}"]:checked`);
      const labels = box.querySelectorAll(`[data-q="${qi}"] label`);
      labels.forEach((lab, ci) => {
        lab.classList.remove("correct", "incorrect");
        if (it.choices[ci].ok) lab.classList.add("correct");
      });
      if (sel && sel.value === "1") correct++;
      else if (sel) sel.closest("label").classList.add("incorrect");
    });
    recordScore("kana-" + which, correct, items.length);
    const pct = Math.round(correct / items.length * 100);
    document.getElementById("kd-result").innerHTML =
      `<div class="score-banner ${pct >= 80 ? "good" : "bad"}">Score: ${correct}/${items.length} (${pct}%) ${pct >= 80 ? "— よくできました! (Well done!)" : "— Review the chart and try again."}</div>
       <button class="ghost" onclick="window._startKanaDrill('${which}')">Try again</button>`;
  };
};

/* ---------------- pronunciation guide ---------------- */
function renderPronunciation() {
  const sections = PRONUNCIATION_GUIDE.sections.map(s => `
    <div class="card">
      <h3>${esc(s.heading)}</h3>
      <p>${esc(s.body)}</p>
      ${s.examples.map(ex => `
        <div class="example">
          <span class="jp">${esc(ex[0])}</span> ${speakBtn(ex[0], 0.75)}
          <span class="romaji">${esc(ex[1])}</span>
          <span class="gloss">${esc(ex[2])}</span>
        </div>`).join("")}
    </div>`).join("");
  app().innerHTML = `
    <h2 class="page-title">${esc(PRONUNCIATION_GUIDE.title)}</h2>
    <p class="page-subtitle">Seven things that make English speakers sound foreign — and how to fix them from day one.</p>
    ${sections}`;
}

/* ---------------- lesson page (tabbed) ---------------- */
function renderLesson(id, tab) {
  const l = LESSONS.find(x => x.id === id);
  if (!l) { app().innerHTML = "<p>Lesson not found.</p>"; return; }
  tab = tab || "vocab";

  const tabs = [
    ["vocab", "Vocabulary"], ["dialogue", "Dialogue"], ["grammar", "Grammar"],
    ["reading", "HW: Reading"], ["writing", "HW: Writing"], ["speaking", "HW: Speaking"], ["quiz", "Quiz"]
  ];
  const tabBtns = tabs.map(t =>
    `<button class="${t[0] === tab ? "active" : ""}" onclick="location.hash='#/lesson/${id}/${t[0]}'">${t[1]}</button>`
  ).join("");

  let body = "";
  if (tab === "vocab") body = lessonVocab(l);
  else if (tab === "dialogue") body = lessonDialogue(l);
  else if (tab === "grammar") body = lessonGrammar(l);
  else if (tab === "reading") body = lessonReading(l);
  else if (tab === "writing") body = lessonWriting(l);
  else if (tab === "speaking") body = lessonSpeaking(l);
  else if (tab === "quiz") body = lessonQuiz(l);

  app().innerHTML = `
    <h2 class="page-title">Lesson ${l.id}: <span class="jp">${esc(l.jpTitle)}</span> — ${esc(l.title)}</h2>
    <p class="page-subtitle">${esc(l.genkiRef)} · ${esc(l.summary)}</p>
    <div class="card">
      <h3>Goals — by the end of this lesson you can:</h3>
      <ul>${l.objectives.map(o => `<li>${esc(o)}</li>`).join("")}</ul>
    </div>
    <div class="lesson-tabs">${tabBtns}</div>
    <div id="lesson-body">${body}</div>`;

  if (tab === "writing") wireWriting(l);
  if (tab === "quiz") wireQuiz(l);
  if (tab === "reading") wireReading(l);
  if (tab === "speaking") wireSpeaking(l);
}

function lessonVocab(l) {
  const rows = l.vocab.map(v => `
    <tr>
      <td><span class="jp">${esc(v[0])}</span> ${speakBtn(v[0])}</td>
      <td class="romaji">${esc(v[1])}</td>
      <td class="gloss">${esc(v[2])}</td>
    </tr>`).join("");
  return `<div class="card">
    <h3>Vocabulary (${l.vocab.length} words)</h3>
    <p class="hint">Listen 🔊 → repeat aloud → cover the English and test yourself. Three short sessions beat one long one.</p>
    <table class="vocab"><tr><th>Japanese</th><th>Romaji</th><th>English</th></tr>${rows}</table>
  </div>`;
}

function lessonDialogue(l) {
  const allJp = l.dialogue.lines.map(x => x[1]).join("");
  const lines = l.dialogue.lines.map(x => `
    <div class="dialogue-line">
      <div class="who">${esc(x[0])}</div>
      <div class="bubble">
        <span class="jp">${esc(x[1])} ${speakBtn(x[1])}</span>
        <span class="romaji">${esc(x[2])}</span>
        <span class="gloss">${esc(x[3])}</span>
      </div>
    </div>`).join("");
  return `<div class="card">
    <h3>Dialogue <button class="ghost" style="float:right" onclick="_speak('${esc(allJp).replace(/'/g, "\\'")}', 0.8)">▶ Play all</button></h3>
    <p class="hint">${esc(l.dialogue.setting)}</p>
    ${lines}
    <p class="hint">Shadow it: play each line, speak along half a beat behind, then perform one role with a partner (or with the audio as your partner).</p>
  </div>`;
}

function lessonGrammar(l) {
  return `<div class="card">` + l.grammar.map(g => `
    <div class="grammar-point">
      <h4>${esc(g.title)}</h4>
      <p>${esc(g.explanation)}</p>
      ${g.examples.map(ex => `
        <div class="example">
          <span class="jp">${esc(ex[0])}</span> ${speakBtn(ex[0])}
          <span class="romaji">${esc(ex[1])}</span>
          <span class="gloss">${esc(ex[2])}</span>
        </div>`).join("")}
    </div>`).join("") + `</div>`;
}

/* ----- homework: reading ----- */
function lessonReading(l) {
  const r = l.homework.reading;
  const passageJp = r.passage.replace(/\n/g, "<br>");
  const qHtml = r.questions.map((q, qi) => `
    <div class="exercise" data-q="${qi}">
      <div class="prompt">${qi + 1}. ${esc(q.q)}</div>
      <div class="choices">
        ${q.choices.map((c, ci) => `<label><input type="radio" name="rq${qi}" value="${ci}"> ${esc(c)}</label>`).join("")}
      </div>
    </div>`).join("");
  const best = getScore("reading-" + l.id);
  return `<div class="card">
    <h3><span class="badge reading">Reading HW</span> ${best ? `Best: ${best.pct}%` : ""}</h3>
    <p class="hint">${esc(r.instructions)}</p>
    <div class="passage">${passageJp} ${speakBtn(r.passage.replace(/\n/g, ""), 0.8)}
      <div class="romaji-block">${esc(r.romaji).replace(/\n/g, "<br>")}</div>
    </div>
    ${qHtml}
    <button class="primary" id="grade-reading">Grade reading HW</button>
    <div id="reading-result"></div>
  </div>`;
}

function wireReading(l) {
  const r = l.homework.reading;
  document.getElementById("grade-reading").onclick = function () {
    let correct = 0;
    r.questions.forEach((q, qi) => {
      const sel = document.querySelector(`input[name="rq${qi}"]:checked`);
      const labels = document.querySelectorAll(`[data-q="${qi}"] label`);
      labels.forEach((lab, ci) => {
        lab.classList.remove("correct", "incorrect");
        if (ci === q.answer) lab.classList.add("correct");
      });
      if (sel && Number(sel.value) === q.answer) correct++;
      else if (sel) sel.closest("label").classList.add("incorrect");
    });
    recordScore("reading-" + l.id, correct, r.questions.length);
    const pct = Math.round(correct / r.questions.length * 100);
    document.getElementById("reading-result").innerHTML =
      `<div class="score-banner ${pct >= 75 ? "good" : "bad"}">Score: ${correct}/${r.questions.length} (${pct}%)</div>`;
  };
}

/* ----- homework: writing ----- */
function normalizeAnswer(s) {
  return normalizeJa(s).replace(/　/g, "").replace(/ /g, "");
}

function lessonWriting(l) {
  const w = l.homework.writing;
  const best = getScore("writing-" + l.id);
  const items = w.items.map((it, i) => `
    <div class="exercise">
      <div class="prompt">${i + 1}. ${esc(it.prompt)}</div>
      <input type="text" class="answer" id="w${i}" lang="ja" autocomplete="off" placeholder="Type Japanese here…">
      <div class="feedback" id="wf${i}"></div>
      <div class="hint">Hint: ${esc(it.hint)}</div>
    </div>`).join("");
  return `<div class="card">
    <h3><span class="badge writing">Writing HW</span> ${best ? `Best: ${best.pct}%` : ""}</h3>
    <p class="hint">${esc(w.instructions)} Spaces and punctuation are ignored when grading. No Japanese keyboard yet? Most systems add one free (search "Japanese IME").</p>
    ${items}
    <button class="primary" id="grade-writing">Check my answers</button>
    <div id="writing-result"></div>
  </div>`;
}

function wireWriting(l) {
  const w = l.homework.writing;
  document.getElementById("grade-writing").onclick = function () {
    let correct = 0;
    w.items.forEach((it, i) => {
      const input = document.getElementById("w" + i);
      const fb = document.getElementById("wf" + i);
      const val = normalizeAnswer(input.value);
      const ok = it.accept.some(a => normalizeAnswer(a) === val) && val.length > 0;
      input.classList.remove("correct", "incorrect");
      input.classList.add(ok ? "correct" : "incorrect");
      if (ok) { correct++; fb.className = "feedback ok"; fb.textContent = "✔ Correct — " + it.accept[0]; }
      else { fb.className = "feedback no"; fb.textContent = "✘ Model answer: " + it.accept[0] + " — self-correct, then move on."; }
    });
    recordScore("writing-" + l.id, correct, w.items.length);
    const pct = Math.round(correct / w.items.length * 100);
    document.getElementById("writing-result").innerHTML =
      `<div class="score-banner ${pct >= 75 ? "good" : "bad"}">Score: ${correct}/${w.items.length} (${pct}%) — like a Genki workbook page, self-corrected work counts. Fix your answers and re-check.</div>`;
  };
}

/* ----- homework: speaking ----- */
function lessonSpeaking(l) {
  const s = l.homework.speaking;
  const best = getScore("speaking-" + l.id);
  const srNote = SR
    ? "Press 🎤, allow the microphone, and say the line. The recognizer compares what it heard to the target."
    : "⚠ Your browser doesn't support speech recognition (try Chrome or Edge). Use Listen-and-Repeat and grade yourself honestly with the ✓ button.";
  const items = s.items.map((it, i) => `
    <div class="speak-card" data-i="${i}">
      <span class="jp">${esc(it.jp)}</span>
      <span class="romaji">${esc(it.romaji)}</span> — <span class="gloss">${esc(it.en)}</span>
      <div class="controls">
        ${speakBtn(it.jp)} <span class="hint">listen</span>
        ${speakBtn(it.jp, 0.6)} <span class="hint">slow</span>
        ${SR ? `<button class="ghost" onclick="window._listen(${l.id},${i})">🎤 Say it</button>` : ""}
        <button class="ghost" onclick="window._selfPass(${l.id},${i})">✓ I said it well</button>
        <span class="heard" id="heard-${i}"></span>
      </div>
    </div>`).join("");
  return `<div class="card">
    <h3><span class="badge speaking">Speaking HW</span> ${best ? `Best: ${best.pct}%` : ""}</h3>
    <p class="hint">${esc(s.instructions)}</p>
    <p class="hint">${srNote}</p>
    ${items}
    <div id="speaking-result"></div>
  </div>`;
}

const speakingState = {};
function speakingKey(lid) { return "speaking-" + lid; }
function markSpoken(lid, i, how) {
  const l = LESSONS.find(x => x.id === lid);
  speakingState[lid] = speakingState[lid] || new Set();
  speakingState[lid].add(i);
  const total = l.homework.speaking.items.length;
  const done = speakingState[lid].size;
  recordScore(speakingKey(lid), done, total);
  const res = document.getElementById("speaking-result");
  if (res) res.innerHTML = `<div class="score-banner ${done === total ? "good" : "bad"}">${done}/${total} lines completed${done === total ? " — 完璧 (perfect)! Speaking HW done." : ""}</div>`;
}

window._selfPass = function (lid, i) {
  const el = document.getElementById("heard-" + i);
  if (el) el.textContent = "✓ self-checked";
  markSpoken(lid, i, "self");
};

window._listen = function (lid, i) {
  if (!SR) return;
  const l = LESSONS.find(x => x.id === lid);
  const target = l.homework.speaking.items[i].jp;
  const el = document.getElementById("heard-" + i);
  const rec = new SR();
  rec.lang = "ja-JP";
  rec.interimResults = false;
  rec.maxAlternatives = 3;
  el.innerHTML = '<span class="rec-on">● listening…</span>';
  rec.onresult = function (ev) {
    let bestSim = 0, bestText = "";
    for (const alt of ev.results[0]) {
      const sim = similarity(alt.transcript, target);
      if (sim > bestSim) { bestSim = sim; bestText = alt.transcript; }
    }
    if (bestSim >= 0.55) {
      el.textContent = `✓ Heard: 「${bestText}」 — nice!`;
      markSpoken(lid, i, "sr");
    } else {
      el.textContent = `Heard: 「${bestText || "…"}」 — listen again and retry (or use ✓ to self-check).`;
    }
  };
  rec.onerror = function (e) {
    el.textContent = e.error === "not-allowed"
      ? "Microphone blocked — allow mic access, or self-check with ✓."
      : "Couldn't hear you — try again closer to the mic.";
  };
  rec.onend = function () { if (el.querySelector(".rec-on")) el.textContent = "(no speech detected)"; };
  try { rec.start(); } catch (e) { el.textContent = "Recognizer busy — try again."; }
};

/* ----- chapter quiz ----- */
function lessonQuiz(l) {
  const best = getScore("quiz-" + l.id);
  const qs = l.quiz.map((q, qi) => `
    <div class="exercise" data-q="${qi}">
      <div class="prompt">${qi + 1}. ${esc(q.q)}</div>
      <div class="choices">
        ${shuffleChoices(q).map(c => `<label><input type="radio" name="qz${qi}" value="${c.ok ? 1 : 0}"> <span class="jp">${esc(c.text)}</span></label>`).join("")}
      </div>
    </div>`).join("");
  return `<div class="card">
    <h3><span class="badge quiz">Chapter Quiz</span> ${best ? `Best: ${best.pct}%` : ""} </h3>
    <p class="hint">10 questions, like an in-class chapter quiz. 80% or better = ready for the next lesson. Retakes allowed — your best score is kept.</p>
    ${qs}
    <button class="primary" id="grade-quiz">Submit quiz</button>
    <div id="quiz-result"></div>
  </div>`;
}

function shuffleChoices(q) {
  const arr = q.choices.map((text, i) => ({ text, ok: i === q.answer }));
  for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[arr[i], arr[j]] = [arr[j], arr[i]]; }
  return arr;
}

function wireQuiz(l) {
  document.getElementById("grade-quiz").onclick = function () {
    let correct = 0, answered = 0;
    l.quiz.forEach((q, qi) => {
      const sel = document.querySelector(`input[name="qz${qi}"]:checked`);
      const labels = document.querySelectorAll(`[data-q="${qi}"] label`);
      labels.forEach(lab => {
        lab.classList.remove("correct", "incorrect");
        const input = lab.querySelector("input");
        if (input.value === "1") lab.classList.add("correct");
      });
      if (sel) {
        answered++;
        if (sel.value === "1") correct++;
        else sel.closest("label").classList.add("incorrect");
      }
    });
    recordScore("quiz-" + l.id, correct, l.quiz.length);
    const pct = Math.round(correct / l.quiz.length * 100);
    document.getElementById("quiz-result").innerHTML =
      `<div class="score-banner ${pct >= 80 ? "good" : "bad"}">
        Score: ${correct}/${l.quiz.length} (${pct}%)
        ${pct >= 80 ? "— 合格 (pass)! On to the next lesson." : "— Below 80%. Review the grammar tab and retake."}
      </div>`;
    document.getElementById("quiz-result").scrollIntoView({ behavior: "smooth" });
  };
}

/* ---------------- progress page ---------------- */
function renderProgress() {
  const p = loadProgress();
  const sections = [
    { key: "kana-hiragana", label: "Hiragana drill" },
    { key: "kana-katakana", label: "Katakana drill" }
  ];
  LESSONS.forEach(l => {
    sections.push({ key: "reading-" + l.id, label: `L${l.id} Reading HW` });
    sections.push({ key: "writing-" + l.id, label: `L${l.id} Writing HW` });
    sections.push({ key: "speaking-" + l.id, label: `L${l.id} Speaking HW` });
    sections.push({ key: "quiz-" + l.id, label: `L${l.id} Chapter Quiz` });
  });
  const rows = sections.map(s => {
    const sc = p[s.key];
    return `<tr>
      <td>${esc(s.label)}</td>
      <td>${sc ? sc.pct + "%" : "—"}</td>
      <td>${sc ? sc.correct + "/" + sc.total : ""}</td>
      <td>${sc ? sc.date : "not attempted"}</td>
      <td style="min-width:120px">${sc ? `<div class="progress-bar"><div style="width:${sc.pct}%"></div></div>` : ""}</td>
    </tr>`;
  }).join("");
  const attempted = sections.filter(s => p[s.key]).length;
  const overall = Math.round(attempted / sections.length * 100);
  app().innerHTML = `
    <h2 class="page-title">Grades &amp; Progress</h2>
    <p class="page-subtitle">Best scores, stored only in this browser. Course completion: ${attempted}/${sections.length} items (${overall}%).</p>
    <div class="progress-bar" style="height:14px;max-width:480px"><div style="width:${overall}%"></div></div>
    <div class="card" style="margin-top:20px">
      <table class="syllabus">
        <tr><th>Item</th><th>Best</th><th>Raw</th><th>Date</th><th></th></tr>
        ${rows}
      </table>
      <p style="margin-top:14px"><button class="ghost" id="reset-progress">Reset all progress</button></p>
    </div>`;
  document.getElementById("reset-progress").onclick = function () {
    if (confirm("Erase all saved scores in this browser?")) {
      localStorage.removeItem(STORE_KEY);
      renderProgress();
      renderLessonNav();
    }
  };
}

/* ---------------- nav + router ---------------- */
function renderLessonNav() {
  const nav = document.getElementById("lesson-nav");
  if (!nav) return;
  nav.innerHTML = LESSONS.map(l => {
    const quiz = getScore("quiz-" + l.id);
    const done = quiz && quiz.pct >= 80;
    return `<a href="#/lesson/${l.id}" data-route="lesson-${l.id}">
      ${l.id}. ${esc(l.title)} <span class="jp" style="font-size:.85em">${esc(l.jpTitle)}</span>
      ${done ? '<span class="done-mark">✔</span>' : ""}
    </a>`;
  }).join("");
}

function setActive(route) {
  document.querySelectorAll(".sidebar a").forEach(a => {
    a.classList.toggle("active", a.dataset.route === route);
  });
}

function router() {
  const hash = location.hash || "#/home";
  const parts = hash.replace(/^#\//, "").split("/");
  window.scrollTo(0, 0);
  if (window.speechSynthesis) speechSynthesis.cancel();
  document.getElementById("sidebar").classList.remove("open");

  if (parts[0] === "home" || parts[0] === "") { renderHome(); setActive("home"); }
  else if (parts[0] === "syllabus") { renderSyllabus(); setActive("syllabus"); }
  else if (parts[0] === "kana" && (parts[1] === "hiragana" || parts[1] === "katakana")) {
    renderKana(parts[1]); setActive("kana-" + parts[1]);
  }
  else if (parts[0] === "pronunciation") { renderPronunciation(); setActive("pronunciation"); }
  else if (parts[0] === "lesson") {
    const id = parseInt(parts[1], 10);
    renderLesson(id, parts[2]);
    setActive("lesson-" + id);
  }
  else if (parts[0] === "progress") { renderProgress(); setActive("progress"); }
  else { renderHome(); setActive("home"); }
}

document.getElementById("menu-toggle").onclick = function () {
  document.getElementById("sidebar").classList.toggle("open");
};

window.addEventListener("hashchange", router);
renderLessonNav();
router();

})();
