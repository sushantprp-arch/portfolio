// ============================================================
// ABOUT PAGE SCRIPT — timeline stagger reveal
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline-item");
  items.forEach((item, i) => {
    item.style.transitionDelay = `${i * 0.12}s`;
  });
});
