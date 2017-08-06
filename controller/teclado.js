function tecla(){
			     //window.alert("O código da tecla pressionada foi: " + event.keyCode);
			     var retorno = event.keyCode;
			     //window.alert(retorno);
			     var soma = jogadorX+retorno;
			     if (retorno == 87) {
			     	cima();
			     }
			     if (retorno == 119) {
			     	cima();
			     }

			     if (retorno == 83) {
			     	baixo();
			     }
			     if (retorno == 115) {
			     	baixo();
			     }

			     if (retorno == 65) {
			     	esquerda();
			     }
			     if (retorno == 97) {
			     	esquerda();
			     }

			     if (retorno == 68) {
			     	direita();
			     }
			     if (retorno == 100) {
			     	direita();
			     	
			     }
			     // Liga e desliga musica
			      if (retorno == 50) {
			     	desligaMusica();
			     	
			     }

			     if (retorno == 49) {
			     	ligaMusica();
			     	
			     }

			    
			  }

			  document.body.onkeypress = tecla;
			
			  			//tecla();