window.sr = ScrollReveal();

ScrollReveal().reveal(".right", {
  duration: 2000,
  origin: "right",
  distance: "40px",
  reset: true,
});

ScrollReveal().reveal(".left", {
  duration: 2000,
  origin: "left",
  distance: "40px",
  reset: true,
});

ScrollReveal().reveal(".yo", {
  duration: 2000,
  origin: "left",
  distance: "100px",
});

ScrollReveal().reveal(".yoo", {
  duration: 2000,
  origin: "right",
  distance: "100px",
});

ScrollReveal().reveal(".info-content", {
  duration: 2000,
  origin: "top",
  distance: "100px",
});

ScrollReveal().reveal(".acerca-de", {
  duration: 2000,
  origin: "bottom",
  distance: "100px",
});

ScrollReveal().reveal(".skill", {
  scale: 0.85,
  interval: 16,
  delay: 300
});

function copiarMail() {
  // Copia lo que contiene el input al dar click
  var codigoACopiar = document.getElementById("email");
  navigator.clipboard.writeText(codigoACopiar.value);

  // Cambia el contenido del tooltip después de copiar
  var tooltipText = document.getElementById("tooltipText");
  tooltipText.innerText = "Copiado!";

  // Restaura el contenido original del tooltip
  setTimeout(function () {
    tooltipText.innerText = "Copiar";
  }, 1000);
}
