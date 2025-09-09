//Carrusel Script
  document.addEventListener("astro:page-load", () => {
      const carousel = document.getElementById("carousel");

      // Duplicar los items para scroll infinito
      carousel.innerHTML += carousel.innerHTML;

      let speed = 1; // velocidad en px por frame
      let position = 0;

      function animate() {
        position -= speed;

        // Resetear la posición cuando la mitad de la lista se haya desplazado
        if (position <= -carousel.scrollWidth / 2) {
          position = 0;
        }

        carousel.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animate);
      }

      animate();

      
    //Email copy

    const copyBtn = document.querySelector("#myinfo button");
    const emailText = document.querySelector("#emailtext");
    const tooltip = document.querySelector("#copy-tooltip");

    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(emailText.textContent.trim());

        // Mostrar tooltip
        tooltip.classList.remove("opacity-0");
        tooltip.classList.add("opacity-100");

        // Ocultar después de 1.5 segundos
        setTimeout(() => {
          tooltip.classList.remove("opacity-100");
          tooltip.classList.add("opacity-0");
        }, 1500);
      } catch (err) {
        console.error("Error al copiar el texto: ", err);
      }
    });

    });

