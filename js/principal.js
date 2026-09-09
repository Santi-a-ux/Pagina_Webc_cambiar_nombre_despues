(function () {
  var botonMenu = document.querySelector("[data-menu-boton]");
  var menu = document.getElementById("menu-principal");
  var botonTema = document.querySelector("[data-tema-boton]");
  var raiz = document.documentElement;
  var claveTema = "casapua-tema";

  function aplicarTema(tema) {
    raiz.setAttribute("data-tema", tema);
    if (botonTema) {
      botonTema.setAttribute("aria-pressed", tema === "oscuro" ? "true" : "false");
      botonTema.setAttribute("aria-label", tema === "oscuro" ? "Cambiar a modo claro" : "Cambiar a modo oscuro");
      botonTema.textContent = tema === "oscuro" ? "Claro" : "Oscuro";
    }
  }

  var temaGuardado = localStorage.getItem(claveTema);
  if (temaGuardado === "oscuro" || temaGuardado === "claro") {
    aplicarTema(temaGuardado);
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    aplicarTema("oscuro");
  } else {
    aplicarTema("claro");
  }

  if (botonTema) {
    botonTema.addEventListener("click", function () {
      var actual = raiz.getAttribute("data-tema") === "oscuro" ? "oscuro" : "claro";
      var siguiente = actual === "oscuro" ? "claro" : "oscuro";
      aplicarTema(siguiente);
      localStorage.setItem(claveTema, siguiente);
    });
  }

  function cerrarMenu() {
    if (!botonMenu || !menu) {
      return;
    }
    botonMenu.setAttribute("aria-expanded", "false");
    menu.classList.remove("esta-abierto");
  }

  function abrirMenu() {
    botonMenu.setAttribute("aria-expanded", "true");
    menu.classList.add("esta-abierto");
  }

  if (botonMenu && menu) {
    botonMenu.addEventListener("click", function () {
      var abierto = botonMenu.getAttribute("aria-expanded") === "true";
      if (abierto) {
        cerrarMenu();
      } else {
        abrirMenu();
      }
    });

    menu.querySelectorAll("a").forEach(function (enlace) {
      enlace.addEventListener("click", cerrarMenu);
    });

    document.addEventListener("keydown", function (evento) {
      if (evento.key === "Escape") {
        cerrarMenu();
      }
    });
  }

  var anio = document.getElementById("anio-actual");
  if (anio) {
    anio.textContent = String(new Date().getFullYear());
  }
})();
