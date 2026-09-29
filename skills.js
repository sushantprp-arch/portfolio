// ============================================================
// SKILLS PAGE SCRIPT — animate progress bars on scroll
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".skill-bar-fill");
  if (!bars.length) return;

  const animateBar = (bar) => {
    const level = bar.getAttribute("data-level") || 0;
    bar.style.width = level + "%";
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateBar(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    bars.forEach((bar) => observer.observe(bar));
  } else {
    bars.forEach(animateBar);
  }
});
