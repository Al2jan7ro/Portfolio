document.addEventListener("astro:page-load", () => {
  const scrollBtn = document.getElementById("scroll-top-btn");
  const toggleBtn = document.getElementById("toggle-float");
  const floatingItems = document.getElementById("floating-items");

  let open = false;

  // Mostrar botón subir solo al final
  const toggleScrollBtn = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= pageHeight - 50) {
      scrollBtn.classList.remove("hidden");
    } else {
      scrollBtn.classList.add("hidden");
    }
  };

  toggleScrollBtn();
  window.addEventListener("scroll", toggleScrollBtn);

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

 
  toggleBtn.addEventListener("click", () => {
    if (!open) {
      floatingItems.classList.remove("translate-y-4", "opacity-0", "pointer-events-none");
      floatingItems.classList.add("translate-y-0", "opacity-100", "pointer-events-auto");
      open = true;
    } else {
      floatingItems.classList.add("translate-y-4", "opacity-0", "pointer-events-none");
      floatingItems.classList.remove("translate-y-0", "opacity-100", "pointer-events-auto");
      open = false;
    }
  });
  
});