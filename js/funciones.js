function goTo(link)
{
	location.assign(link);
}

function showTxt(opt)
{
	info = document.getElementById('infoMid');
	switch (opt)
	{
		case 2:
			info.innerHTML = '<div class="midAp"><h2>Aplicaciones y Ventajas</h2><p>En términos generales, existen dos rutas para mejorarse a sí mismo y cambiar tu propia vida:<br />Una forma es abordar el habilidades necesarias para un cierto comportamiento deseado; es decir, estudiando habilidades de comunicación o técnicas de administración del tiempo.<br />' +
      'Como alternativa, se puede tomar el camino más largo cavando un poco más profundo y trabajar en el carácter: los hábitos fundamentales y los sistemas de creencias que forman tu visión del mundo.<br />' +
'El primer enfoque es efectivamente un intento de tomar un atajo hacia el éxito: hacerse rico sin trabajar por tu dinero, o lograr el crecimiento personal sin experimentar un desarrollo real.<br />' +
'Sin embargo, el crecimiento personal real no se puede alcanzar a través de atajos. En el camino hacia la verdadera efectividad, no te puedes permitir saltarte un solo paso.<br />' +
'Esto es cierto para logros tales como jugar al tenis o al piano, y tan cierto para el desarrollo emocional de una persona como para el desarrollo de su carácter.<br />' +
'Si realmente deseas cambiar, debes trabajar desde adentro hacia afuera. Sólo una vez que te hayas cambiado drásticamente, puedes comenzar a cambiar el mundo que te rodea. Si, por ejemplo, te gustaría tener un matrimonio feliz, primero debes convertirte en una persona más positiva.<br />' +
'Si quieres que te vean como una persona de fiar, no es bueno trabajar en tus habilidades de comunicación; en lugar de eso, debes trabajar para convertirte en una persona más de fiar.<br />' +
'En lugar de arañar la superficie, tienes que abordar realmente tu carácter interno.</p></div><div class="imgAp"><img class="img-responsive" src="sources/av1.jpg"></div>';
			break;
		case 3:
			/*info.innerHTML = '<iframe id="typeform-full" frameborder="0" src="https://jorge698.typeform.com/to/XJbyYR"></iframe> <script type="text/javascript" src="https://embed.typeform.com/embed.js"></script>';*/
			info.innerHTML = '<h2 id="titleTest">Test</h2>' + 
			'<div class="question">' +
			'<h3>¿Te gusta ser el primero en descubrir nuevas cosas?</h3>' +
  			'<input type="radio" name="q1" value="1" checked>Sí<br>' +
  			'<input type="radio" name="q1" value="0">No<br>' +
  		'</div>' +
  		'<div class="question">' +
			'<h3>¿Procuras hacer actividades diarias en una hora fija?</h3>' +
  			'<input type="radio" name="q2" value="1" checked> Sí<br>' +
  			'<input type="radio" name="q2" value="0"> No<br>' +
  		'</div>' +
  		'<div class="question">' +
			'<h3>¿Terminas tus tareas sin distracción?</h3>' +
  			'<input type="radio" name="q3" value="1" checked>Sí<br>' +
  			'<input type="radio" name="q3" value="0">No<br>' +
  		'</div>' +
  		'<div class="question">' +
			'<h3>¿Crees que el esfuerzo debe ser recompensado?</h3>' +
  			'<input type="radio" name="q4" value="1" checked> Sí<br>' +
  			'<input type="radio" name="q4" value="0"> No<br>' +
  		'</div>' +
  		'<div class="question">' +
			'<h3>¿Esperas a que otra persona termine de hablar para responder?</h3>' +
  			'<input type="radio" name="q5" value="1" checked>Sí<br>' +
  			'<input type="radio" name="q5" value="0">No<br>' +
  		'</div>' +
  		'<div class="question">' +
			'<h3>¿Tratas de adaptarte a tu entorno de trabajo?</h3>' +
  			'<input type="radio" name="q6" value="1" checked> Sí<br>' +
  			'<input type="radio" name="q6" value="0"> No<br>' +
  		'</div>' +
  		'<div class="question">' +
			'<h3>¿Sientes que tus actividades diarias te causan una satisfacción personal?</h3>' +
  			'<input type="radio" name="q7" value="1" checked>Sí<br>' +
  			'<input type="radio" name="q7" value="0">No<br>' +
  		'</div>' +
  		'<div class="question">' +
			'<h3>Si notas que algo requiere solución, ¿tratas de solucionarlo aunque nadie te lo pida?</h3>' +
  			'<input type="radio" name="q8" value="1" checked> Sí<br>' +
  			'<input type="radio" name="q8" value="0"> No<br>' +
  		'</div>' +
  		'<div class="question">' +
			'<h3>Te propones metas claras en tu vida</h3>' +
  			'<input type="radio" name="q9" value="1" checked>Sí<br>' +
  			'<input type="radio" name="q9" value="0">No<br>' +
  		'</div>' +
  		'<div class="question">' +
			'<h3>¿Das prioridad a tareas urgentes/importantes?</h3>' +
  			'<input type="radio" name="q10" value="1" checked> Sí<br>' +
  			'<input type="radio" name="q10" value="0"> No<br>' +
  		'</div>' +
  		'<div class="question">' +
			'<h3>¿Procuras ayudar a los demás?</h3>' +
  			'<input type="radio" name="q11" value="1" checked>Sí<br>' +
  			'<input type="radio" name="q11" value="0">No<br>' +
  		'</div>' +
  		'<div class="question">' +
			'<h3>¿Tratas de analizar todos los puntos de vista de los demás?</h3>' +
  			'<input type="radio" name="q12" value="1" checked> Sí<br>' +
  			'<input type="radio" name="q12" value="0"> No<br>' +
  		'</div>' +
  		'<div class="question">' +
			'<h3>Siempre buscas mejorar tus relaciones con los demás</h3>' +
  			'<input type="radio" name="q13" value="1" checked>Sí<br>' +
  			'<input type="radio" name="q13" value="0">No<br>' +
  		'</div>' +
  		'<div class="question">' +
			'<h3>¿Procuras estar bien contigo mismo física y emocionalmente?</h3>' +
  			'<input type="radio" name="q14" value="1" checked> Sí<br>' +
  			'<input type="radio" name="q14" value="0"> No<br>' +
  		'</div>' +
  		'<div class="question">' +
			'<h3>¿Haces las cosas a la primera? (Sin recordatorios)</h3>' +
  			'<input type="radio" name="q15" value="1" checked>Sí<br>' +
  			'<input type="radio" name="q15" value="0">No<br>' +
  		'</div>' +
  		'<div class="question">' +
			'<h3>Para ti, es importante planificar todo previamente</h3>' +
  			'<input type="radio" name="q16" value="1" checked> Sí<br>' +
  			'<input type="radio" name="q16" value="0"> No<br>' +
  		'</div>' +
  		'<div class="question">' +
			'<h3>¿Te consideras bueno para organizar tareas/actividades?</h3>' +
  			'<input type="radio" name="q17" value="1" checked>Sí<br>' +
  			'<input type="radio" name="q17" value="0">No<br>' +
  		'</div>' +
  		'<div class="question">' +
			'<h3>¿Te causa mayor satisfacción que todos ganen a solo ganar tú?</h3>' +
  			'<input type="radio" name="q18" value="1" checked> Sí<br>' +
  			'<input type="radio" name="q18" value="0"> No<br>' +
  		'</div>' +
  		'<div class="question">' +
			'<h3>¿Escuchas los comentarios de los demás en lugar de enojarte por lo que digan?</h3>' +
  			'<input type="radio" name="q19" value="1" checked>Sí<br>' +
  			'<input type="radio" name="q19" value="0">No<br>' +
  		'</div>' +
  		'<div class="question">' +
			'<h3>Aportas ideas a los proyectos conjuntos aunque no siempre se haga lo que dices</h3>' +
  			'<input type="radio" name="q20" value="1" checked> Sí<br>' +
  			'<input type="radio" name="q20" value="0"> No<br>' +
  		'</div>' +
  		'<div class="question">' +
			'<h3>Espiritualmente hablando, ¿consideras que te encuentras en una paz interior?</h3>' +
  			'<input type="radio" name="q21" value="1" checked>Sí<br>' +
  			'<input type="radio" name="q21" value="0">No<br>' +
  		'</div>' +
  		'<button id="getResults" onclick="results()">Resultados</button>';
			
			break;
		case 4:
			info.innerHTML = '<div class="content-lg container">'+
            '<div class="row margin-b-40"><div class="col-sm-6">'+
                    '<h2>Universidad Autónoma de Querétaro</h2>'+
                    '<p>Facultad de Informática</p>'+
            '</div></div>'+
            '<div class="row">'+
                '<div class="col-sm-4 sm-margin-b-50"><div class="bg-color-white margin-b-20"><div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">'+
                    '<img class="img-responsive prof" src="sources/p1.jpg" alt="Team Image">'+
                '</div></div>'+
                    '<h4><a href="#">Alejandro Avalos</a></h4>'+
                    '<p>alexavalosxp@gmail.com</p>'+
                '</div>'+
                '<div class="col-sm-4 sm-margin-b-50"><div class="bg-color-white margin-b-20"><div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">'+
                    '<img class="img-responsive" src="sources/avatar.png" alt="Team Image">'+
                '</div></div>'+
                    '<h4><a href="#">Jorge Maya</a></h4>'+
                    '<p>jorgemaya08@hotmail.com</p>'+
                '</div>'+
                '<div class="col-sm-4 sm-margin-b-50"><div class="bg-color-white margin-b-20"><div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">'+
                    '<img class="img-responsive prof" src="sources/p3.jpg" alt="Team Image">'+
                '</div></div>'+
                    '<h4><a href="#">Humberto Ávila</a></h4>'+
                    '<p>humberto.avila07@gmail.com</p>'+
                '</div>'+
            '</div>'+
        '</div>';
		/*'<h2>Facultad de Informática</h2>' +
				'<h1>UAQ</h1>' +
				'</div>';*/
			break;
		default:
			info.innerHTML = '<div id="initialMsg">Seleciona una opción para desplegar la información</div>';
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