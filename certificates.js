// ============================================================
// CERTIFICATES PAGE SCRIPT — lightbox viewer
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".cert-card");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const closeBtn = document.getElementById("lightboxClose");

  if (!lightbox) return;

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const img = card.querySelector("img");
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add("open");
    });
  });

  function closeLightbox() {
    lightbox.classList.remove("open");
  }

  closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
});
