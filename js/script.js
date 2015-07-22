function submitAnswers(){
	var respuestasTotales = 4;
	var puntuaje = 0;
	var respuestas = ['b','a','a','c'];

	//Capturando respuestas del usuario
	var q1 = document.forms["cuestionario"]["q1"].value;
	var q2 = document.forms["cuestionario"]["q2"].value;
	var q3 = document.forms["cuestionario"]["q3"].value;
	var q4 = document.forms["cuestionario"]["q4"].value;
	
	//validacion que esten respondidas las 4 preguntas
	for(i = 1; i <= respuestasTotales; i++){
		if(eval('q'+i) == null || eval('q'+i) == ""){
			alert("No has respondido la pregunta"+" "+ i);
			return false;
		}
	}

	//validacion respuestas correctas
	for(i = 1; i <= respuestasTotales; i++){
		if(eval('q'+i) == respuestas[i - 1]){
			puntuaje++;
		}
	}

	//mostrando respuestas correctas
	var resultados = document.getElementById('resultados');
	resultados.innerHTML = "<h3>Obtuviste "+ puntuaje+" de 4 preguntas</h3>"
	alert("Has respondido "+puntuaje+" de 4 preguntas de manera correcta");
	
	return false;
}