// ============================================================
// PROJECTS PAGE SCRIPT — category filtering
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");
  const noResults = document.querySelector(".no-results");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");
      let visibleCount = 0;

      cards.forEach((card) => {
        const category = card.getAttribute("data-category");
        const show = filter === "all" || category === filter;
        card.classList.toggle("hidden-card", !show);
        if (show) visibleCount++;
      });

      if (noResults) {
        noResults.style.display = visibleCount === 0 ? "block" : "none";
      }
    });
  });
});
