function preparaColisao($objetoX, $objetoY, $larguraObjeto, $alturaObjeto)
	{
		// ic = início de colisão
		// fc = fim de colisão
		// e ou d = direita e esquerda. Portanto ice seria início de colisão direita. e Por ai vai...
		var toleranciaColisao = 8;
		var fimColisao = toleranciaColisao * 2;
		var ice = $objetoX - larguraJogador - toleranciaColisao ; // 235; // Início da colisão direita
		var fce = ice + fimColisao;

		var icd = $objetoX + $larguraObjeto + toleranciaColisao;
		var fcd = icd + toleranciaColisao;

		var bordaObjeto = $objetoY - toleranciaColisao - alturaJogador;
		var topoObjeto = $objetoY + $alturaObjeto + toleranciaColisao;

		var fimBordaObjeto = bordaObjeto - toleranciaColisao;
		var fimTopoObjeto  = topoObjeto + toleranciaColisao;


		// Colisão para esquerda
		if (jogadorX > ice & jogadorY > bordaObjeto & jogadorX < fce & jogadorY < topoObjeto) {
			esquerda = true;
		window.document.getElementById('colisaoEsquerda').innerHTML = 'Detectada :'+esquerda;
		jogadorX = jogadorX -6;
			}
			else{
						var esquerda = false;
						window.document.getElementById('colisaoEsquerda').innerHTML = 'Esquerda :'+esquerda;
				}

		// Colisão para direita
		if (jogadorX > icd & jogadorY > bordaObjeto & jogadorY < topoObjeto & jogadorX < fcd) {
			direita = true;
		window.document.getElementById('colisaoEsquerda').innerHTML = 'Detectada :'+direita;
		jogadorX = jogadorX +6;
			}
			else{
						var direita = false;
						window.document.getElementById('colisaoDireita').innerHTML = 'Direita :'+direita;
				}
			

		// Colisão para baixo
		if (jogadorX > ice & jogadorY < bordaObjeto & jogadorY > fimBordaObjeto & jogadorX < icd) {
		jogadorY = jogadorY -6;
			}

		// Colisão para cima
		if (jogadorX > ice & jogadorY > topoObjeto & jogadorY < fimTopoObjeto & jogadorX < icd) {
		jogadorY = jogadorY +6;
			}
			

				window.document.getElementById('inicioColisaoE').innerHTML = "início colisão esquerda: "+ice;
				window.document.getElementById('fimColisaoE').innerHTML = "fim colisão esquerda: "+fce;
			window.document.getElementById('inicioColisaoD').innerHTML = "início colisão direita: "+icd;
			window.document.getElementById('fimColisaoD').innerHTML = "fim colisão direita: "+fcd;
			window.document.getElementById('colisaoBaixo').innerHTML = "Colisão baixo: "+bordaObjeto;
			window.document.getElementById('colisaoCima').innerHTML = "Colisão Cima: "+topoObjeto;

			}	