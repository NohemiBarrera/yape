$(document).ready(function (){
	cargarPagina();
});

function validar (e){
	e.preventDefault()
	var telefono = $("#telephone");
	var $check = $("#filled-in-box").is(":checked")
	if($check && telefono.length == 10){
		console.log("miau")
	}
}

function validarNumero (e){
	var codigo = e.keyCode;		//devuelve el código de caracter unicode de la tecla que activó el evento (onkeypress, onkeyup u onkedown)
								//key code es un numero que representa una tecla del teclado
	var $ingresoNum = $("#telephone");  //se obtiene el elemento con el id
	if (codigo != 13) {		//si la tecla no es un retorno 
		if($ingresoNum.val().length > 9 || codigo <=48 || codigo > 57){		//si el contenido del input es mayor a 9 y las teclas presionadas no son números
			return false;		//entonces retorna falso
		} else if($ingresoNum.val().length == 9){
			$("#continue").toggleClass('disabled');	//
			return true;
			console.log("miau")
		};
	};
};


function cargarPagina(){
	$(document).on("keypress","#telephone",validarNumero);
	$(document).on('click',"#continue",validar);
	$(document).on('submit',"#formNum",validar);
};
/*
$.post('http://localhost:3000/api/registerNumber', {
	"phone": "1234567890",
	"terms": true
}).then(function (response){
	console.log(response);
}).catch(function (error){
	console.log ()
})*/