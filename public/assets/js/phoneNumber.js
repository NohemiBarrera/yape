function validar(){
	var siValidar = true;
	if(isNaN(document.getElementById("telephone").value)){
		siValidar = false;
	}
	if(!document.getElementById("filled-in-box").checked){
		siValidar = false;
	}
	if(!siValidar){
		alert("no");
	}

	return siValidar;
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