document.addEventListener("astro:page-load", () => {
  const menuToggle = document.getElementById("menu-toggle"); // botón hamburguesa
  const closeMenu = document.getElementById("close-menu"); // botón de cerrar en mobile
  const desktopNav = document.getElementById("main-nav-desktop");
  const mobileNav = document.getElementById("mobile-nav");

  let isOpen = false;

  // Abrir / cerrar con el botón hamburguesa
  menuToggle.addEventListener("click", () => {
    isOpen = !isOpen;

    if (window.innerWidth >= 768) {
      // Desktop
      desktopNav.classList.toggle("opacity-0", !isOpen);
      desktopNav.classList.toggle("pointer-events-none", !isOpen);
    } else {
      // Mobile
      if (isOpen) {
        mobileNav.classList.remove("h-0");
        mobileNav.classList.add("h-screen");
      } else {
        mobileNav.classList.remove("h-screen");
        mobileNav.classList.add("h-0");
      }
    }
  });

  // Cerrar con el botón de "X" en mobile
  if (closeMenu) {
    closeMenu.addEventListener("click", () => {
      isOpen = false;
      mobileNav.classList.remove("h-screen");
      mobileNav.classList.add("h-0");
    });
  }
});
