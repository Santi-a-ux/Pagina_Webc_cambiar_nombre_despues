(function () {
  var grilla = document.getElementById("catalogo-grilla");
  var filtros = document.getElementById("catalogo-filtros");
  var vacio = document.getElementById("catalogo-vacio");
  var listaArtesanos = document.getElementById("lista-artesanos");

  function crearTarjeta(item) {
    var luthier = buscarLuthier(item.luthierId);
    var articulo = document.createElement("article");
    articulo.className = "tarjeta";
    articulo.dataset.categoria = item.categoria;

    var figura = document.createElement("figure");
    figura.className = "tarjeta-figura";

    var imagen = document.createElement("img");
    imagen.src = item.foto;
    imagen.alt = item.alt;
    imagen.width = 800;
    imagen.height = 560;
    imagen.loading = "lazy";
    imagen.decoding = "async";

    figura.appendChild(imagen);

    var cuerpo = document.createElement("div");
    cuerpo.className = "tarjeta-cuerpo";

    var etiqueta = document.createElement("p");
    etiqueta.className = "etiqueta";
    etiqueta.textContent = item.categoria;

    var titulo = document.createElement("h3");
    titulo.textContent = item.nombre;

    var texto = document.createElement("p");
    texto.textContent = item.descripcion;

    var meta = document.createElement("p");
    meta.className = "tarjeta-meta";
    meta.textContent = luthier
      ? "Hecho por " + luthier.nombre + " · " + luthier.ciudad
      : "";

    var pie = document.createElement("div");
    pie.className = "tarjeta-pie";

    var precio = document.createElement("p");
    precio.className = "precio";
    precio.textContent = formatearPrecio(item.precio);

    var enlace = document.createElement("a");
    enlace.className = "enlace-secundario";
    enlace.href = "talleres.html#formulario";
    enlace.textContent = "Encargar o consultar";

    pie.appendChild(precio);
    pie.appendChild(enlace);

    cuerpo.appendChild(etiqueta);
    cuerpo.appendChild(titulo);
    cuerpo.appendChild(texto);
    cuerpo.appendChild(meta);
    cuerpo.appendChild(pie);

    articulo.appendChild(figura);
    articulo.appendChild(cuerpo);
    return articulo;
  }

  function pintarCatalogo(lista) {
    if (!grilla) {
      return;
    }
    grilla.innerHTML = "";
    lista.forEach(function (item) {
      grilla.appendChild(crearTarjeta(item));
    });
    if (vacio) {
      vacio.hidden = lista.length > 0;
    }
  }

  if (grilla) {
    var limite = grilla.getAttribute("data-limite");
    var iniciales = limite ? instrumentos.slice(0, Number(limite)) : instrumentos.slice();
    pintarCatalogo(iniciales);

    if (filtros) {
      filtros.addEventListener("click", function (evento) {
        var boton = evento.target.closest("[data-filtro]");
        if (!boton) {
          return;
        }

        filtros.querySelectorAll("[data-filtro]").forEach(function (item) {
          item.classList.remove("es-activo");
          item.setAttribute("aria-pressed", "false");
        });
        boton.classList.add("es-activo");
        boton.setAttribute("aria-pressed", "true");

        var categoria = boton.getAttribute("data-filtro");
        if (categoria === "todos") {
          pintarCatalogo(instrumentos);
          return;
        }
        var filtrados = instrumentos.filter(function (item) {
          return item.categoria === categoria;
        });
        pintarCatalogo(filtrados);
      });
    }
  }

  function crearFichaArtesano(persona) {
    var articulo = document.createElement("article");
    articulo.className = "ficha-artesano";
    articulo.id = persona.id;

    var imagen = document.createElement("img");
    imagen.src = persona.foto;
    imagen.alt = persona.alt;
    imagen.width = 600;
    imagen.height = 600;
    imagen.loading = "lazy";

    var cuerpo = document.createElement("div");
    cuerpo.className = "ficha-cuerpo";

    var etiqueta = document.createElement("p");
    etiqueta.className = "etiqueta";
    etiqueta.textContent = persona.especialidad;

    var titulo = document.createElement("h2");
    titulo.textContent = persona.nombre;

    var ciudad = document.createElement("p");
    ciudad.className = "tarjeta-meta";
    ciudad.textContent = persona.ciudad;

    var bio = document.createElement("p");
    bio.textContent = persona.bio;

    var lista = document.createElement("ul");
    lista.className = "lista-obras";
    var obras = instrumentos.filter(function (item) {
      return item.luthierId === persona.id && item.categoria !== "accesorios";
    });
    obras.forEach(function (obra) {
      var li = document.createElement("li");
      li.textContent = obra.nombre + " — " + formatearPrecio(obra.precio);
      lista.appendChild(li);
    });

    cuerpo.appendChild(etiqueta);
    cuerpo.appendChild(titulo);
    cuerpo.appendChild(ciudad);
    cuerpo.appendChild(bio);
    cuerpo.appendChild(lista);

    articulo.appendChild(imagen);
    articulo.appendChild(cuerpo);
    return articulo;
  }

  if (listaArtesanos) {
    luthiers.forEach(function (persona) {
      listaArtesanos.appendChild(crearFichaArtesano(persona));
    });
  }
})();
