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


    });

