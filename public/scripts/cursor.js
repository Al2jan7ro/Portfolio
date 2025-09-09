document.addEventListener("astro:page-load", () => {
  // Solo activar si la resolución es >= 1280px (xl en Tailwind)
  if (window.innerWidth >= 1280) {
    // Crear el div del cursor
    const cursor = document.createElement("div");
    cursor.id = "custom-cursor";
    cursor.className =
      "fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] transition-transform duration-150 ease-out";
    document.body.appendChild(cursor);

    // Color inicial y mezcla
    cursor.style.backgroundColor = "white";
    cursor.style.mixBlendMode = "difference";

    let mouseX = 0;
    let mouseY = 0;
    let isHovering = false;

    // Seguir el movimiento del mouse
    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX - 8;
      mouseY = e.clientY - 8;

      const scale = isHovering ? 2 : 1; // tamaño más grande al hacer hover
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) scale(${scale})`;
    });

    // Detectar elementos clickeables
    const hoverable = ["a","img", "button", "input", "textarea", "select", "[role='button']"];

    hoverable.forEach((selector) => {
      document.querySelectorAll(selector).forEach((el) => {
        el.addEventListener("mouseenter", () => {
          isHovering = true;
          cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) scale(2)`;
        });
        el.addEventListener("mouseleave", () => {
          isHovering = false;
          cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) scale(1)`;
        });
      });
    });
  }
});
