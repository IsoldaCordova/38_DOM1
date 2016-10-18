function validateForm(){
	/* Escribe tú código aquí */
	// nombre
	var name = document.getElementById("name").value;
	if( name == null || name == ""){
		alert("Por Favor Ingresa tu Nombre");
		return false;
	}else if (!/^[a-z A-Z]*$/g.test (document.getElementById("name").value)){
		alert("caracteres invalidos");
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
	};
	// email
	var email = document.getElementById("input-email").value;
	if( email == null || email == ""){
		alert("Por Favor Ingresa tu Correo");
		return false;
	} else if ( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email)) ) {
      alert("fake!!");
      return false;
     }
     // contraseña
	var contrasena = document.getElementById("input-password").value;
	if( contrasena == null || constrasena == ""){
		alert("Por Favor Ingresa tu Password");
		return false;
	} else if (contrasena < 6){
		alert("La contraseña debe tener al menos 6 caracteres")
	}else if ((contrasena == 123456 ) || (contrasena == 098754) || (contrasena == "password")){
		alert("no se puede, cambia password");
	}
};
