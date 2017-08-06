	var	larguraCaixa = 150;
	var alturaCaixa  = 150;
	var perspective = 600;
	var rotateY = 65.1;
	var rotateX = 5;
	var zoom = 100;

	function rotacionaEsquerda()
		{
			perspective = perspective + 30;
			rotateY = rotateY - 0.6;
			window.document.getElementById('caixa').innerHTML = '<canvas style="background-color: blue; width: 150px; height: 150px; transform: perspective( 300px ) rotateY( '+rotateY+'deg ) rotateX( '+rotateX+'deg ); background-size:100% 100%; zoom: '+zoom+'%" class="poster">x</canvas>';
		} 
	function rotacionaDireita()
		{
			perspective = perspective + 30;
			rotateY = rotateY + 0.6;
			window.document.getElementById('caixa').innerHTML = '<canvas style="background-color: blue; width: 150px; height: 150px; transform: perspective( 300px ) rotateY( '+rotateY+'deg ) rotateX( '+rotateX+'deg ); background-size:100% 100%; zoom: '+zoom+'%" class="poster">x</canvas>';
		}

	function rotacionaCima()
		{
			perspective = perspective + 30;
			rotateX = rotateX + 0.6;
			window.document.getElementById('caixa').innerHTML = '<canvas style="background-color: blue; width: 150px; height: 150px; transform: perspective( 300px ) rotateY( '+rotateY+'deg ) rotateX( '+rotateX+'deg ); background-size:100% 100%; zoom: '+zoom+'%" class="poster">x</canvas>';
		}

	function rotacionaBaixo()
		{
			perspective = perspective + 30;
			rotateX = rotateX - 0.6;
			window.document.getElementById('caixa').innerHTML = '<canvas style="background-color: blue; width: 150px; height: 150px; transform: perspective( 300px ) rotateY( '+rotateY+'deg ) rotateX( '+rotateX+'deg ); background-size:100% 100%; zoom: '+zoom+'%" class="poster">x</canvas>';
		}

	function maisZoom()
		{
			perspective = perspective + 30;
			zoom = zoom + 1;
			window.document.getElementById('caixa').innerHTML = '<canvas style="background-color: blue; width: 150px; height: 150px; transform: perspective( 300px ) rotateY( '+rotateY+'deg ) rotateX( '+rotateX+'deg ); background-size:100% 100%; zoom: '+zoom+'%" class="poster">x</canvas>';
		}

	function menosZoom()
		{
			perspective = perspective + 30;
			zoom = zoom- 1;
			window.document.getElementById('caixa').innerHTML = '<canvas style="background-color: blue; width: 150px; height: 150px; transform: perspective( 300px ) rotateY( '+rotateY+'deg ) rotateX( '+rotateX+'deg ); background-size:100% 100%; zoom: '+zoom+'%" class="poster">x</canvas>';
		}

