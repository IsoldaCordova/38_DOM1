
var titulo = document.getElementById("form-signin-heading");
titulo.innerHTML = "Por favor inicia sesión";

document.getElementById("inputEmail").setAttribute("placeholder", "Correo electrónico");
document.getElementById("inputPassword").setAttribute("placeholder", "Contraseña");

var checkbox = document.getElementsByTagName("span")[0];
checkbox.innerHTML = "Recordar Datos";
var submit = document.getElementsByTagName("button")[0];
submit.innerHTML = "Inicia Sesión";