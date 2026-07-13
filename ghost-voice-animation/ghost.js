(() => {
  const THEME_KEY = "ghost-voice-theme";
  const themeToggle = document.getElementById("themeToggle");

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    themeToggle.textContent = theme === "dark" ? "🌙" : "☀️";
  }

  const storedTheme = localStorage.getItem(THEME_KEY);
  const systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
  applyTheme(storedTheme || systemTheme);

  themeToggle.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  });

  const micButton = document.getElementById("micButton");
  const statusEl = document.getElementById("status");
  const meterFill = document.getElementById("meterFill");
  const voiceWrapper = document.getElementById("ghostVoice");
  const mouth = document.getElementById("ghostMouth");
  const glowGroup = document.getElementById("ghostGlowGroup");

  const MOUTH_MIN_SCALE = 0.35; // closed
  const MOUTH_MAX_SCALE = 2.1; // wide open
  const SMOOTHING = 0.35; // higher = snappier response to volume
  const JITTER_STRENGTH = 26; // px of extra float motion at full volume
  const GLOW_MAX_BLUR = 22;

  let audioCtx = null;
  let analyser = null;
  let dataArray = null;
  let rafId = null;
  let smoothedVolume = 0;
  let listening = false;

  function setStatus(text) {
    statusEl.textContent = text;
  }

  function computeVolume() {
    analyser.getByteTimeDomainData(dataArray);
    let sumSquares = 0;
    for (let i = 0; i < dataArray.length; i++) {
      const centered = (dataArray[i] - 128) / 128;
      sumSquares += centered * centered;
    }
    const rms = Math.sqrt(sumSquares / dataArray.length);
    // Speech RMS typically peaks well under 1; scale up and clamp for a responsive range.
    return Math.min(1, rms * 4.5);
  }

  function animate() {
    const rawVolume = listening ? computeVolume() : 0;
    smoothedVolume += (rawVolume - smoothedVolume) * SMOOTHING;

    const mouthScale =
      MOUTH_MIN_SCALE + (MOUTH_MAX_SCALE - MOUTH_MIN_SCALE) * smoothedVolume;
    mouth.style.transform = `scaleX(${mouthScale.toFixed(3)}) scaleY(${(
      1 + smoothedVolume * 0.15
    ).toFixed(3)})`;

    const t = performance.now() / 1000;
    const jitterX = Math.sin(t * 5.3) * JITTER_STRENGTH * smoothedVolume;
    const jitterY = Math.cos(t * 6.7) * JITTER_STRENGTH * 0.6 * smoothedVolume;
    const bump = 1 + smoothedVolume * 0.06;
    voiceWrapper.style.transform = `translate(${jitterX.toFixed(
      2
    )}px, ${jitterY.toFixed(2)}px) scale(${bump.toFixed(3)})`;

    const blur = 8 + smoothedVolume * GLOW_MAX_BLUR;
    glowGroup.style.filter = `drop-shadow(0 0 ${blur.toFixed(
      1
    )}px rgba(130, 190, 255, ${(0.25 + smoothedVolume * 0.55).toFixed(2)}))`;

    meterFill.style.width = `${Math.round(smoothedVolume * 100)}%`;

    rafId = requestAnimationFrame(animate);
  }

  async function startListening() {
    try {
      setStatus("Requesting microphone access...");
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      analyser = audioCtx.createAnalyser();
      analyser.fftSize = 512;
      dataArray = new Uint8Array(analyser.frequencyBinCount);

      const source = audioCtx.createMediaStreamSource(stream);
      source.connect(analyser);

      listening = true;
      micButton.textContent = "🎙️ Listening...";
      micButton.dataset.listening = "true";
      setStatus("Talk and watch the ghost react.");

      if (!rafId) animate();
    } catch (err) {
      listening = false;
      setStatus("Microphone access denied - showing idle animation only.");
      micButton.textContent = "🎤 Enable voice";
      micButton.dataset.listening = "false";
      if (!rafId) animate();
    }
  }

  function stopListening() {
    listening = false;
    if (audioCtx) {
      audioCtx.close();
      audioCtx = null;
    }
    micButton.textContent = "🎤 Enable voice";
    micButton.dataset.listening = "false";
    setStatus("Click to let the ghost hear you");
  }

  micButton.addEventListener("click", () => {
    if (listening) {
      stopListening();
    } else {
      startListening();
    }
  });

  // Kick off the render loop immediately so the ghost floats even before
  // the mic is enabled (mouth stays closed / idle until there's real volume).
  animate();
})();
