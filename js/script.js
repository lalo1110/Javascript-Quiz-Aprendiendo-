function submitAnswers(){
	var respuestasTotales = 5;
	var puntuaje = 0;
	//Capturando respuestas del usuario
	var q1 = document.forms["cuestionario"]["q1"].value;
	var q2 = document.forms["cuestionario"]["q2"].value;
	var q3 = document.forms["cuestionario"]["q3"].value;
	var q4 = document.forms["cuestionario"]["q4"].value;
	
	//validacion que esten respondidas las 4 preguntas
	for(i = 1; 1 <= respuestasTotales; i++){
		if(eval("q"+i) == null || eval("q"+i) == ""){
			alert("No has respondido la pregunta"+" "+ i);
			return false;
		}
	}

	//validacion respuestas correctas
	var respuestas = ["b","a","a","c"];
	if(q1 == respuestas[0]){
		puntuaje++;
	}
	if(q2 == respuestas[1]){
		puntuaje++;
	}
	if(q3 == respuestas[2]){
		puntuaje++;
	}
	if(q4 == respuestas[3]){
		puntuaje++;
	}

	alert(puntuaje);

	return false;
}