var horizontaIA = 50;
var verticalIA  = 85; // Em porcentagem
var horizontalInicioIA = horizontaIA;
var verticalInicioIA   = verticalIA;

var alturaIA = 40;
var larguraIA = 40;




function desenhaInimigo()
	{
		window.document.getElementById('i.a.').innerHTML = "<div style='position: fixed; right:"+horizontaIA+"px; bottom: "+verticalIA+"%; border-style: solid; border-color: red; width:"+larguraIA+"px; height: "+alturaIA+"px;'></div>";
		
		
		window.document.getElementById('horizontal').innerHTML = horizontaIA;
	}
desenhaInimigo();

var bolaDaVez = 1;

function andarDireita(){
	if (horizontaIA < 250 & bolaDaVez == 1 ) {
	
	horizontaIA = horizontaIA +5;
	desenhaInimigo();	
	}
	else{
		bolaDaVez = 0;
	}

	if (horizontaIA <= 250 & bolaDaVez == 0 & horizontaIA > 50 ) {
	
	horizontaIA = horizontaIA -5;
	desenhaInimigo();	
	}
	else{
		bolaDaVez = 1;
	}

}
setInterval("andarDireita()", 50);