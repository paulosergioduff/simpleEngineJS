
			console.log("touchscreen is", VirtualJoystick.touchScreenAvailable() ? "available" : "not available");
	
			var joystick	= new VirtualJoystick({
				touchArea	: document.getElementById('touchArea'),
				mouseSupport	: true,
			});
			joystick.addEventListener('touchStart', function(){
				console.log('down')
			})
			joystick.addEventListener('touchEnd', function(){
				console.log('up')
			})

			function esquerdaDetectada(){
				window.document.getElementById('esquerda').innerHTML = "Esquerda detectada";
			}

			setInterval(function(){
				var outputEl	= document.getElementById('result');
				outputEl.innerHTML	= '<b>Resulto Touch:</b> '
					+ ' dx:'+joystick.deltaX()
					+ ' dy:'+joystick.deltaY()
					+ (joystick.right()	? direita()	: '')
					+ (joystick.up()	? cima()		: '')
					+ (joystick.left()	? esquerda()	: '')
					+ (joystick.down()	? baixo() 	: '')	
			}, 1/30 * 1000);
				var horizontal = joystick.deltaX();

