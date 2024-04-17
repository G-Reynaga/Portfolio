window.sr = ScrollReveal();

ScrollReveal().reveal(".home");

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

ScrollReveal().reveal(".skill", {
  scale: 0.85,
  interval: 16,
  delay: 300,
});

function copiarMail() {
  // Copia lo que contiene el input al dar click
  var codigoACopiar = document.getElementById("email");
  navigator.clipboard.writeText(codigoACopiar.value);
}
