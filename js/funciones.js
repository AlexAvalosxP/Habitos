function goTo(link)
{
	location.assign(link);
}

function showTxt(opt)
{
	info = document.getElementById('infoMid');
	switch (opt)
	{
		case 1:
			info.innerHTML = '<h2>Introducción</h2><h2>Los 7 hábitos de la gente altamente efectiva son los siguientes:</h2>' +
			'<h3 class="der">El hábito de la proactividad nos da la libertad para poder escoger nuestra respuesta a los estímulos del medioambiente. Nos faculta para responder de acuerdo con nuestros principios y valores. En esencia, es lo que nos hace humanos y nos permite afirmar que somos los arquitectos de nuestro propio destino.</h3>' +
			'<div class="imgH1"></div>' +
			'<h3 class="izq">Comenzar con un fin en mente hace posible que nuestra vida tenga razón de ser, pues la creación de una visión de lo que queremos lograr permite que nuestras acciones estén dirigidas a lo que verdaderamente es significativo en nuestras vidas.</h3>' +
			'<div class="imgH2"></div>' +
			'<h3 class="der">Poner primero lo primero nos permite liberarnos de la tiranía de lo urgente para dedicar tiempo a las actividades que en verdad dan sentido a nuestras vidas. Es la disciplina de llevar a cabo lo importante, lo cual nos permite convertir en realidad la visión que forjamos en el hábito 2.</h3>' +
			'<div class="imgH3"></div>' +
			'<h3 class="izq">Pensar en Ganar-Ganar nos permite desarrollar una mentalidad de abundancia material y espiritual, pues nos cuestiona la premisa de que la vida es un “juego de suma cero” donde para que yo gane alguien tiene que perder.</h3>' +
			'<div class="imgH4"></div>' +
			'<h3 class="der">Buscar entender primero y ser entendido después es la esencia del respeto a los demás. La necesidad que tenemos de ser entendidos es uno de los sentimientos más intensos de todos los seres humanos. Este hábito es la clave de las relaciones humanas efectivas y posibilita llegar a acuerdos de tipo Ganar-Ganar.</h3>' +
			'<div class="imgH5"></div>' +
			'<h3 class="izq">Sinergizar es el resultado de cultivar la habilidad y la actitud de valorar la diversidad. La síntesis de ideas divergentes produce ideas mejores y superiores a las ideas individuales. El logro del trabajo en equipo y la innovación son el resultado de este hábito.</h3>' +
			'<div class="imgH6"></div>' +
			'<h3 class="der">Afilar la sierra es usar la capacidad que tenemos para renovarnos física, mental y espiritualmente. Es lo que nos permite establecer un equilibrio entre todas las dimensiones de nuestro ser, a fin de ser efectivos en los diferentes papeles (roles) que desempeñamos en nuestras vidas.</h3>' +
			'<div class="imgH7"></div>' +
			'';
			break;
		case 2:
			info.innerHTML = '<h2>Aplicaciones y Ventajas</h2><p></p>';
			break;
		case 3:
			info.innerHTML = '<h2>Test</h2>' + 
			'<div class="question">' +
			'<h3>[Insert question 1 here]</h3>' +
  			'<input type="radio" name="q1" value="1" checked>Sí<br>' +
  			'<input type="radio" name="q1" value="0">No<br>' +
  		'</div>' +
  		'<div class="question">' +
			'<h3>[Insert question 2 here]</h3>' +
  			'<input type="radio" name="q2" value="1" checked> Sí<br>' +
  			'<input type="radio" name="q2" value="0"> No<br>' +
  		'</div>' +
  		'<div class="question">' +
			'<h3>[Insert question 3 here]</h3>' +
  			'<input type="radio" name="q3" value="1" checked>Sí<br>' +
  			'<input type="radio" name="q3" value="0">No<br>' +
  		'</div>' +
  		'<div class="question">' +
			'<h3>[Insert question 4 here]</h3>' +
  			'<input type="radio" name="q4" value="1" checked> Sí<br>' +
  			'<input type="radio" name="q4" value="0"> No<br>' +
  		'</div>' +
  		'<div class="question">' +
			'<h3>[Insert question 5 here]</h3>' +
  			'<input type="radio" name="q5" value="1" checked>Sí<br>' +
  			'<input type="radio" name="q5" value="0">No<br>' +
  		'</div>' +
  		'<div class="question">' +
			'<h3>[Insert question 6 here]</h3>' +
  			'<input type="radio" name="q6" value="1" checked> Sí<br>' +
  			'<input type="radio" name="q6" value="0"> No<br>' +
  		'</div>' +
  		'<div class="question">' +
			'<h3>[Insert question 7 here]</h3>' +
  			'<input type="radio" name="q7" value="1" checked>Sí<br>' +
  			'<input type="radio" name="q7" value="0">No<br>' +
  		'</div>' +
  		'<div class="question">' +
			'<h3>[Insert question 8 here]</h3>' +
  			'<input type="radio" name="q8" value="1" checked> Sí<br>' +
  			'<input type="radio" name="q8" value="0"> No<br>' +
  		'</div>' +
  		'<div class="question">' +
			'<h3>[Insert question 9 here]</h3>' +
  			'<input type="radio" name="q9" value="1" checked>Sí<br>' +
  			'<input type="radio" name="q9" value="0">No<br>' +
  		'</div>' +
  		'<div class="question">' +
			'<h3>[Insert question 10 here]</h3>' +
  			'<input type="radio" name="q10" value="1" checked> Sí<br>' +
  			'<input type="radio" name="q10" value="0"> No<br>' +
  		'</div>' +
  		'<div class="question">' +
			'<h3>[Insert question 11 here]</h3>' +
  			'<input type="radio" name="q11" value="1" checked>Sí<br>' +
  			'<input type="radio" name="q11" value="0">No<br>' +
  		'</div>' +
  		'<div class="question">' +
			'<h3>[Insert question 12 here]</h3>' +
  			'<input type="radio" name="q12" value="1" checked> Sí<br>' +
  			'<input type="radio" name="q12" value="0"> No<br>' +
  		'</div>' +
  		'<div class="question">' +
			'<h3>[Insert question 13 here]</h3>' +
  			'<input type="radio" name="q13" value="1" checked>Sí<br>' +
  			'<input type="radio" name="q13" value="0">No<br>' +
  		'</div>' +
  		'<div class="question">' +
			'<h3>[Insert question 14 here]</h3>' +
  			'<input type="radio" name="q14" value="1" checked> Sí<br>' +
  			'<input type="radio" name="q14" value="0"> No<br>' +
  		'</div>' +
  		'<div class="question">' +
			'<h3>[Insert question 15 here]</h3>' +
  			'<input type="radio" name="q15" value="1" checked>Sí<br>' +
  			'<input type="radio" name="q15" value="0">No<br>' +
  		'</div>' +
  		'<div class="question">' +
			'<h3>[Insert question 16 here]</h3>' +
  			'<input type="radio" name="q16" value="1" checked> Sí<br>' +
  			'<input type="radio" name="q16" value="0"> No<br>' +
  		'</div>' +
  		'<div class="question">' +
			'<h3>[Insert question 17 here]</h3>' +
  			'<input type="radio" name="q17" value="1" checked>Sí<br>' +
  			'<input type="radio" name="q17" value="0">No<br>' +
  		'</div>' +
  		'<div class="question">' +
			'<h3>[Insert question 18 here]</h3>' +
  			'<input type="radio" name="q18" value="1" checked> Sí<br>' +
  			'<input type="radio" name="q18" value="0"> No<br>' +
  		'</div>' +
  		'<div class="question">' +
			'<h3>[Insert question 19 here]</h3>' +
  			'<input type="radio" name="q19" value="1" checked>Sí<br>' +
  			'<input type="radio" name="q19" value="0">No<br>' +
  		'</div>' +
  		'<div class="question">' +
			'<h3>[Insert question 20 here]</h3>' +
  			'<input type="radio" name="q20" value="1" checked> Sí<br>' +
  			'<input type="radio" name="q20" value="0"> No<br>' +
  		'</div>' +
  		'<div class="question">' +
			'<h3>[Insert question 21 here]</h3>' +
  			'<input type="radio" name="q21" value="1" checked>Sí<br>' +
  			'<input type="radio" name="q21" value="0">No<br>' +
  		'</div>' +
  		'<button id="getResults" onclick="results()">Resultados</button>';
			break;
		case 4:
			info.innerHTML = '<h2>Acerca de</h2>' +
				'<div class="profile"><img src=""><h1>Alejandro Ávalos</h1><h2>alexavalosxp@gmail.com</h2></div>' +
				'<div class="profile"><img src=""><h1>Humberto Ávila</h1><h2>humberto.avila07@gmail.com</h2></div>' +
				'<div class="profile"><img src=""><h1>Jorge Maya</h1><h2>jorgitomaya1@gmail.com</h2></div>' +
				'<div class="uniInfo">' +
				'<h2>Facultad de Informática</h2>' +
				'<h1>UAQ</h1>' +
				'</div>';
			break;
		default:
			info.innerHTML = '<h2>ERROR</h2>';
			break;
	}
}

function results()
{
	var rest = [0,0,0,0,0,0,0];
	for (var i = 0; i < 21; i++) {
		rest[i%7] = rest[i%7] + parseInt(document.querySelector('input[name="q' + (i+1) + '"]:checked').value);
		//rest.push(document.querySelector('input[name="q' + i + '"]:checked').value);
	}
	console.log(rest);
 
	var del = ["requiere ser trabajada", "puede mejorar", "es aceptable", "es excelente"];

	info = document.getElementById('infoMid');
	info.innerHTML	= "<div class='resText'>Tu desempeño en el hábito \"proactividad\" " + del[rest[0]] + "<br />" +
		"Tu desempeño en el hábito \"tener un fin en mente\" " + del[rest[1]] + "<br />" +
		"Tu desempeño en el hábito \"primero lo primero\" " + del[rest[2]] + "<br />" +
		"Tu desempeño en el hábito \"ganar-ganar\" " + del[rest[3]] + "<br />" +
		"Tu desempeño en el hábito \"entender primero para ser entendido\" " + del[rest[4]] + "<br />" +
		"Tu desempeño en el hábito \"sinergia\" " + del[rest[5]] + "<br />" +
		"Tu desempeño en el hábito \"afilar la sierra\" " + del[rest[6]] + "</div>";
}