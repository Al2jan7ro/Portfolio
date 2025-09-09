document.addEventListener("astro:page-load", () => {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.getElementById("closeModal");

  if (!modal || !modalImg || !closeBtn) return; // 👈 Previene el error

  // Abrir modal
  document.querySelectorAll(".clickable").forEach(img => {
    img.addEventListener("click", () => {
      modal.classList.remove("opacity-0", "pointer-events-none");
      modalImg.src = img.src;
      modalImg.alt = img.alt;

      // Animación zoom-in
      setTimeout(() => {
        modalImg.classList.remove("scale-95");
        modalImg.classList.add("scale-100");
      }, 10);
    });
  });

  // Cerrar modal
  const closeModal = () => {
    modal.classList.add("opacity-0", "pointer-events-none");
    modalImg.classList.remove("scale-100");
    modalImg.classList.add("scale-95");
  };

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
});
