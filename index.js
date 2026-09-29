// ============================================================
// INDEX PAGE SCRIPT — typewriter effect
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  const phrases = [
    "Generative AI Enthusiast",
    "Front-End Developer",
    "Python & Django Learner",
    "Building Real-World Web Projects",
  ];
  const el = document.getElementById("typed-text");
  if (!el) return;

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = phrases[phraseIndex];

    if (!deleting) {
      el.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1400);
        return;
      }
    } else {
      el.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }
    setTimeout(tick, deleting ? 40 : 70);
  }

  tick();
});
