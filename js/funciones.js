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
			info.innerHTML = '<h2>Aplicaciones y Ventajas</h2><p></p>';
			break;
		case 3:
			/*info.innerHTML = '<iframe id="typeform-full" frameborder="0" src="https://jorge698.typeform.com/to/XJbyYR"></iframe> <script type="text/javascript" src="https://embed.typeform.com/embed.js"></script>';*/
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
			info.innerHTML = '<div class="content-lg container">'+
            '<div class="row margin-b-40"><div class="col-sm-6">'+
                    '<h2>Meet the Team</h2>'+
                    '<p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua enim minim veniam exercitation</p>'+
            '</div></div>'+
            '<div class="row">'+
                '<div class="col-sm-4 sm-margin-b-50"><div class="bg-color-white margin-b-20"><div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">'+
                    '<img class="img-responsive" src="sources/avatar.png" alt="Team Image">'+
                '</div></div>'+
                    '<h4><a href="#">Alicia Keys</a> <span class="text-uppercase margin-l-20">Project Manager</span></h4>'+
                    '<p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor</p>'+
                '</div>'+
                '<div class="col-sm-4 sm-margin-b-50"><div class="bg-color-white margin-b-20"><div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">'+
                    '<img class="img-responsive" src="sources/avatar.png" alt="Team Image">'+
                '</div></div>'+
                    '<h4><a href="#">Alicia Keys</a> <span class="text-uppercase margin-l-20">Project Manager</span></h4>'+
                    '<p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor</p>'+
                '</div>'+
                '<div class="col-sm-4 sm-margin-b-50"><div class="bg-color-white margin-b-20"><div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">'+
                    '<img class="img-responsive" src="sources/avatar.png" alt="Team Image">'+
                '</div></div>'+
                    '<h4><a href="#">Alicia Keys</a> <span class="text-uppercase margin-l-20">Project Manager</span></h4>'+
                    '<p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor</p>'+
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