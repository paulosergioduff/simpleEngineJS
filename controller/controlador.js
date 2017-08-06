function cima()	
	{
		window.document.getElementById('cursorV').innerHTML = 'w '+jogadorY;
			     	jogadorY = jogadorY+4;
			     	desenhaNaTela(jogadorX, jogadorY);
	}
function baixo()
	{
		window.document.getElementById('cursorV').innerHTML = 's '+jogadorY;
			     	jogadorY = jogadorY-4;
			     	desenhaNaTela(jogadorX, jogadorY);

	}

function esquerda()
	{
		window.document.getElementById('cursorH').innerHTML = 'a '+jogadorX;
			     	jogadorX = jogadorX-4;
			     	desenhaNaTela(jogadorX, jogadorY);
			     	window.document.getElementById('sprite').innerHTML = '<img src="video/sprites/traz.png">';
	}

function direita()
	{
		window.document.getElementById('cursorH').innerHTML = 'd'+jogadorX;
			    	jogadorX = jogadorX+4;
			    	desenhaNaTela(jogadorX, jogadorY);
			    	window.document.getElementById('sprite').innerHTML = '<img src="video/sprites/frente.png">';

	}
function ligaMusica()
	{
		window.document.getElementById('channelSound').innerHTML = '<audio controls autoplay loop><source src="sound/channel1/CORNER.ogg" type="audio/ogg"></audio>';
	}
function desligaMusica()
	{
		window.document.getElementById('channelSound').innerHTML = '';
	}