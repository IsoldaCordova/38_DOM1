function validateForm(){
	/* Escribe tú código aquí */
	// nombre
	var name = document.getElementById("name").value;
	if( name == null || name == ""){
		alert("Por Favor Ingresa tu Nombre");
		return false;
	}else if (!/^[A-Z][a-z]*$/g.test (document.getElementById("name").value)){
		alert("caracteres invalidos, poner la primera en Mayúscula");
		return false;
	};
	function MaysPrimera(string){
  		return string.charAt(0).toUpperCase() + string.slice(1);
	};
	name = MaysPrimera(name.toLowerCase());
	// apellido
	var lastname = document.getElementById("lastname").value;
	if( lastname == null || lastname == ""){
		alert("Por Favor Ingresa tu Apellido");
		return false;
	}else if (!/^[A-Z][a-z]*$/g.test (document.getElementById("name").value)){
		alert("caracteres invalidos, poner la primera en Mayúscula");
		return false;
	};
	// email
	var email = document.getElementById("input-email").value;
	if( email == null || email == ""){
		alert("Por Favor Ingresa tu Correo");
		return false;
	};
	var email = 'me@example.com';
	validarEmail( email );
	function validarEmail( email ) {
    	expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    	if ( !expr.test(email) )
        alert("Error: La dirección de correo " + email + " es incorrecta.");
	};
     // contraseña
	var contrasena = document.getElementById("input-password").value;
	if( contrasena == null || contrasena == ""){
		alert("Por Favor Ingresa tu Password");
		return false;
	} else if (contrasena.length < 6){
		alert("La contraseña debe tener al menos 6 caracteres")
	}else if ((contrasena == 123456 ) || (contrasena == 098754) || (contrasena == "password")){
		alert("no se puede, cambia password");
	};
	// seleccion
	var bici = document.getElementById("lista").selectedIndex;
	if( bici == null || bici == 0){
		alert("Por Favor Selecciona tipo de bici");
		return false;
	}
}
