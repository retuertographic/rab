// RAB ELECTRIC — interacciones básicas (sin dependencias)
(function () {
  "use strict";

  var WHATSAPP = "34680182651";

  // Menú móvil
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  // Subnavegación de Servicios: resalta la ficha visible
  var subLinks = document.querySelectorAll(".subnav a[href^='#']");
  if (subLinks.length && "IntersectionObserver" in window) {
    var byId = {};
    subLinks.forEach(function (a) { byId[a.getAttribute("href").slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        subLinks.forEach(function (a) { a.classList.remove("is-active"); });
        var link = byId[entry.target.id];
        if (link) link.classList.add("is-active");
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    Object.keys(byId).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) io.observe(el);
    });
  }

  // Formulario de contacto
  var form = document.getElementById("contact-form");
  if (!form) return;

  var hint = document.getElementById("branch-hint");
  var hints = {
    instalacion: ["inst", "Instalación nueva o reforma: te visitamos, te presupuestamos y todo sale con su certificado y 3 años de garantía."],
    mantenimiento: ["inst", "Si la instalación no la hicimos nosotros, empezamos por una auditoría. Así sabes exactamente de dónde partimos."],
    consultoria: ["inst", "Análisis de tu cuadro, tu instalación o tu proyecto. Sin obligación de que la obra la hagamos nosotros."],
    peritaje: ["peri", "Rama pericial: valoramos si necesitas un informe técnico (negociación) o pericial (juicio). Lo que peritamos no lo instalamos."]
  };

  function updateHint(value) {
    var h = hints[value];
    if (!h || !hint) return;
    hint.dataset.branch = h[0];
    hint.textContent = h[1];
  }

  form.querySelectorAll("input[name='servicio']").forEach(function (input) {
    input.addEventListener("change", function () { updateHint(input.value); });
  });

  // Preselección desde enlaces: contacto.html?tipo=peritaje
  var params = new URLSearchParams(window.location.search);
  var pre = params.get("tipo");
  if (pre) {
    var target = form.querySelector("input[name='servicio'][value='" + pre.replace(/[^a-z]/g, "") + "']");
    if (target) { target.checked = true; updateHint(pre); }
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.reportValidity()) return;
    var d = new FormData(form);
    var labels = {
      instalacion: "Instalación", mantenimiento: "Mantenimiento",
      consultoria: "Consultoría", peritaje: "Informe técnico / pericial"
    };
    var lines = [
      "Hola, RAB ELECTRIC.",
      "Servicio: " + (labels[d.get("servicio")] || d.get("servicio")),
      "Soy: " + d.get("cliente"),
      "Nombre: " + d.get("nombre"),
      "Ubicación: " + d.get("ubicacion"),
      d.get("telefono") ? "Teléfono: " + d.get("telefono") : "",
      d.get("email") ? "Email: " + d.get("email") : "",
      "",
      d.get("descripcion")
    ].filter(function (l, i, arr) { return l !== "" || arr[i - 1] !== ""; });
    var url = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(lines.join("\n"));
    var status = document.getElementById("form-status");
    if (status) status.classList.add("is-visible");
    window.open(url, "_blank", "noopener");
  });
})();
