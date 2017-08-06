function desenhaJogadorInicial()
	{
					window.document.getElementById('jogador').innerHTML = '<div style="position:fixed; bottom:'+jogadoInicioY+'px; left:'+jogadorInicioX+'px; width: '+larguraJogador+'px; height: '+alturaJogador+'px; border-style: solid; border-color: pink; "></div>';
			}

function desenhaNaTela()
			  	{
			  		window.document.getElementById('jogador').innerHTML = '<div style="position:fixed; bottom:'+jogadorY+'px; left:'+jogadorX+'px; height:'+alturaJogador+'px; width:'+larguraJogador+'px;" class="jogador"><div id="sprite"><img src="video/sprites/frente.png"></div></div></div>';
			  		preparaColisao(objeto2X, objeto2Y, larguraObjeto2, alturaObjeto2);
			  		preparaColisao(objetoX, objetoY, larguraObjeto, alturaObjeto);
			  		desenhaCenario()
			  		}
function desenhaObjeto()
	{
		window.document.getElementById('objeto').innerHTML = '<div style="width: '+larguraObjeto+'px; height: '+alturaObjeto+'px; position: fixed; bottom: '+objetoInicioY+'px; left: '+objetoInicioX+'px;" class="objeto"></div>';
	}

function desenhaObjeto2()
	{
		window.document.getElementById('objeto2').innerHTML = '<div style="width: '+larguraObjeto2+'px; height: '+alturaObjeto2+'px; position: fixed; bottom: '+objeto2InicioY+'px; left: '+objeto2InicioX+'px; border-style: solid; border-color: red;" ></div>';
		//alert('funcionando');
	}

function desenhaCenario()
	{	
		if (jogadorX < 42) {
			cenarioX = cenarioX +4;
			jogadorX = jogadorX +4;
		}

		if (jogadorX > 952) {
			cenarioX = cenarioX -4;
			jogadorX = jogadorX -4;
		}

		if (jogadorY < 34) {
			cenarioY = cenarioY -4;
			jogadorY = jogadorY +4;
		}

		if (jogadorY > 574) {
			cenarioY = cenarioY +4;
			jogadorY = jogadorY -4;
		}
		window.document.getElementById('cenario').innerHTML = '<img src="video/img/fundo.png" style="position: fixed; top: '+cenarioY+'px; left: '+cenarioX+'px" height="400%" width="400%">';
	}



