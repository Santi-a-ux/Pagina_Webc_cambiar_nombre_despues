(function () {
  var formulario = document.getElementById("form-taller");
  if (!formulario) {
    return;
  }

  var campos = {
    nombre: formulario.querySelector("#nombre"),
    correo: formulario.querySelector("#correo"),
    mensaje: formulario.querySelector("#mensaje"),
    interes: formulario.querySelector("#interes")
  };

  var exito = document.getElementById("form-exito");

  function mostrarError(campo, mensaje) {
    var caja = document.getElementById("error-" + campo.id);
    campo.setAttribute("aria-invalid", "true");
    if (caja) {
      caja.textContent = mensaje;
      caja.hidden = false;
    }
  }

  function limpiarError(campo) {
    var caja = document.getElementById("error-" + campo.id);
    campo.removeAttribute("aria-invalid");
    if (caja) {
      caja.textContent = "";
      caja.hidden = true;
    }
  }

  function validarNombre() {
    var valor = campos.nombre.value.trim();
    if (!valor) {
      mostrarError(campos.nombre, "Escribe tu nombre.");
      return false;
    }
    if (valor.length < 3) {
      mostrarError(campos.nombre, "El nombre debe tener al menos 3 caracteres.");
      return false;
    }
    limpiarError(campos.nombre);
    return true;
  }

  function validarCorreo() {
    var valor = campos.correo.value.trim();
    var patron = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!valor) {
      mostrarError(campos.correo, "Escribe un correo.");
      return false;
    }
    if (!patron.test(valor)) {
      mostrarError(campos.correo, "El correo no tiene un formato válido.");
      return false;
    }
    limpiarError(campos.correo);
    return true;
  }

  function validarMensaje() {
    var valor = campos.mensaje.value.trim();
    if (!valor) {
      mostrarError(campos.mensaje, "Cuéntanos qué necesitas.");
      return false;
    }
    if (valor.length < 20) {
      mostrarError(campos.mensaje, "El mensaje debe tener al menos 20 caracteres.");
      return false;
    }
    limpiarError(campos.mensaje);
    return true;
  }

  function validarInteres() {
    if (!campos.interes.value) {
      mostrarError(campos.interes, "Elige un taller o un tipo de encargo.");
      return false;
    }
    limpiarError(campos.interes);
    return true;
  }

  campos.nombre.addEventListener("input", validarNombre);
  campos.correo.addEventListener("input", validarCorreo);
  campos.mensaje.addEventListener("input", validarMensaje);
  campos.interes.addEventListener("change", validarInteres);

  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    var nombreOk = validarNombre();
    var correoOk = validarCorreo();
    var mensajeOk = validarMensaje();
    var interesOk = validarInteres();

    if (!nombreOk || !correoOk || !mensajeOk || !interesOk) {
      var primero = formulario.querySelector("[aria-invalid='true']");
      if (primero) {
        primero.focus();
      }
      return;
    }

    formulario.reset();
    Object.keys(campos).forEach(function (clave) {
      limpiarError(campos[clave]);
    });
    if (exito) {
      exito.hidden = false;
      exito.focus();
    }
  });
})();
