document.addEventListener("astro:page-load", () => {
  if (window.innerWidth >= 1280) {
    const cursor = document.createElement("div");
    cursor.id = "custom-cursor";
    cursor.className =
      "fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] transition-transform duration-150 ease-out";
    document.body.appendChild(cursor);

    // Estilos básicos (para Firefox)
    cursor.style.backgroundColor = "white";
    cursor.style.border = "1px solid black"; // 🔹 asegura visibilidad
    cursor.style.mixBlendMode = "difference";

    let mouseX = 0;
    let mouseY = 0;
    let isHovering = false;

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX - 8;
      mouseY = e.clientY - 8;
      const scale = isHovering ? 2 : 1;
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) scale(${scale})`;
    });

    const hoverable = ["a","img","button","input","textarea","select","[role='button']"];

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
