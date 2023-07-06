function verificarRegistro() {
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const unir = `${nombre} ${apellido}`;
  const contrasena = document.getElementById("contrasena").value;
  const verificar = document.getElementById("verificar").value;
  var email = document.getElementById("email").value;


  if (email.indexOf("@") >= 0 && contrasena == verificar) {
    alert("bienvenido " + unir);
  } else {
    alert("La dirección de correo electrónico o la contraseña enstan equibocados");
  }

}

function agregarPrecio(precio) {
  var campoSuma = document.getElementById("suma");
  var sumaActual = parseFloat(campoSuma.value);

  if (isNaN(sumaActual)) {
    sumaActual = 0;
  }
  var nuevaSuma = sumaActual + precio;
  campoSuma.value = nuevaSuma.toFixed(2);
}
