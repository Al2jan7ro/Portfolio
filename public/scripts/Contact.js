
  const form = document.getElementById("contactForm");
  const alertBox = document.getElementById("form-alert");
  const alertMessage = document.getElementById("alert-message");
  const closeAlert = document.getElementById("close-alert");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        showAlert("¡Mensaje enviado con éxito!", "bg-green-500");
        form.reset();
      } else {
        showAlert("Ocurrió un error. Intenta de nuevo.", "bg-red-500");
      }
    } catch (error) {
      showAlert("Error de conexión.", "bg-yellow-500");
    }
  });

  function showAlert(message, colorClass) {
    alertMessage.textContent = message;
    alertBox.className = `mb-4 p-4 rounded-lg text-white font-semibold relative ${colorClass}`;
    alertBox.classList.remove("hidden");

    setTimeout(() => {
      alertBox.classList.add("hidden");
    }, 5000);
  }

