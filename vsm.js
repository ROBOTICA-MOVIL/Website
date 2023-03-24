// SE DEFINEN TODAS LAS VARIABLES.
var juego = new Phaser.Game(720, 480, Phaser.CANVAS, "vsm");
//
var fondojuego;
// BOTONES.
var boton1;
var boton2;
var boton3;
var boton4;
var botonp;
var botonl;
var flechaderecha;
var flechaizquierda;
var flechaarriba;
var flechaabajo;
// BOOLEANOS PARA BOTONES
var right = false;
var left = false;
var up = false;
var down = false;
var mas = false;
var menos = false;
var nueve = false;
var ocho = false;
var siete = false;
var seis = false;
var cinco = false;
var cuatro = false;
var tres = false;
var dos = false;
var uno = false;
var diez = false;
// BOOLEANOS PARA APARICIÓN DE BITMAP.
var updt9 = false;
var updt8 = false;
var updt7 = false;
var updt6 = false;
var updt5 = false;
var updt4 = false;
var updt3 = false;
var updt2 = false;
var updt1 = false;
var updt10 = false;

//VARIABLES DEL JUEGO PHASER.
var jugar = {
    // SE CARGAN LOS ARCHIVOS QUE SE USARÁN.
	preload: function () {
		this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
		juego.load.image("fondo", "img/vsm_full.png");
		juego.load.image("boton", "img/play.png");
        juego.load.image("botonR", "img/play2.png");
        juego.load.image("boton+", "img/plus.png");
        juego.load.image("boton-", "img/less.png");
        juego.load.image("botonL", "img/9.png");
	},
	// SE CREAN EL FONDO Y TODOS LOS BOTONES DE LA INTERFAZ.
	create: function () {
		fondojuego = juego.add.sprite(720, 480, "fondo"); //GENERA EL FONDO Y DEFINE SUS PROPORCIONES.
		fondojuego.position.x = 0;                                         //SE DEFINE LA POSICIÓN DEL FONDO EN X.
        fondojuego.position.y = 0;                                         //SE DEFINE LA POSICIÓN DEL FONDO EN Y.  
		
		boton1 = juego.add.button(25, 446, "boton", this.izquierda, this);   //SE GENERA EL BOTON, SU POSICIÓN, ID Y SE LE ASIGNA UNA FUNCIÓN.  
		boton1.anchor.setTo(0.5);                                             //SE CENTRAN LAS COORDENADAS DEL BOTÓN.
		boton1.scale.setTo(-1, 1);                                            //SE ROTA LA IMAGEN DEL BOTÓN CON RESPECTO A X.
		boton1.alpha = 0.4;                                                   //SE DEFINE UNA VISIBILIDAD INICIAL DE LA IMAGEN.
        
		boton2 = juego.add.button(118, 446, "boton", this.derecha, this);
		boton2.anchor.setTo(0.5);
		boton2.alpha = 0.4;
        
        boton3 = juego.add.button(72, 402, "botonR", this.arriba, this);
		boton3.anchor.setTo(0.5);
		boton3.alpha = 0.4;
        
        boton4 = juego.add.button(72, 446, "botonR", this.abajo, this);
		boton4.anchor.setTo(0.5);
		boton4.scale.setTo(1, -1);                                            //SE ROTA LA IMAGEN DEL BOTÓN CON RESPECTO A Y.
		boton4.alpha = 0.4;
        
        botonp = juego.add.button(40, 40, "boton+", this.plus, this);
		botonp.anchor.setTo(0.5);
		botonp.alpha = 0.4;
        botonp.visible = false;
        
        botonl = juego.add.button(40, 90, "boton-", this.less, this);
		botonl.anchor.setTo(0.5);
		botonl.alpha = 0.4;
        botonl.visible=false;
		
        //SE ASIGNAN EVENTOS A LOS BOTONES CREADOS PREVIAMENTE. 
        //BOTONES DE MOVIMIENTO:
		flechaderecha = juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);   //SE ULTILIZAN LAS FLECHAS DEL TECLADO PARA EL DESPLAZAMIENTO.
		flechaizquierda = juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        flechaarriba = juego.input.keyboard.addKey(Phaser.Keyboard.UP);
        flechaabajo = juego.input.keyboard.addKey(Phaser.Keyboard.DOWN);
		
        //LOS BOTÓNES SE ACTIVAN AL PASAR EL CURSOS POR ENCIMA Y/O AL PRESIONARLOS, ESTO PARA QUE EL PROGRAMA PUEDA SER USADO EN OTROS DISPOSITIVOS QUE NO TENGAN UN CURSOR DEFINIDO, COMO LAS PANTALLAS TÁCTILES.
		boton1.events.onInputOver.add(function () {left = true; });   //CADA EVENTO ASIGNADO CANBIA EL VALOR DEL BOOLEANO REFERENTE AL BOTÓN.
        boton1.events.onInputOut.add(function () {left = false; });   
        boton1.events.onInputDown.add(function () {left = true; });
        boton1.events.onInputUp.add(function () {left = false; });
		
		boton2.events.onInputOver.add(function () {right = true; });
        boton2.events.onInputOut.add(function () {right = false; });
        boton2.events.onInputDown.add(function () {right = true; });
        boton2.events.onInputUp.add(function () {right = false; });
        
        boton3.events.onInputOver.add(function () {up = true; });
        boton3.events.onInputOut.add(function () {up = false; });
        boton3.events.onInputDown.add(function () {up = true; });
        boton3.events.onInputUp.add(function () {up = false; });
		
		boton4.events.onInputOver.add(function () {down = true; });
        boton4.events.onInputOut.add(function () {down = false; });
        boton4.events.onInputDown.add(function () {down = true; });
        boton4.events.onInputUp.add(function () {down = false; });
        
        botonp.events.onInputDown.add(function () {mas = true; });
        botonp.events.onInputUp.add(function () {mas = false; });
        
        botonl.events.onInputDown.add(function () {menos = true; });
        botonl.events.onInputUp.add(function () {menos = false; });
	},
    
	//ACA SE ACTUALIZA EL JUEGO DEPENDIENDO DE CUALES DE LAS SIGUIENTES CONDICIONES SE CUMPLAN O NO.
	update: function () {
        //SE LE ASIGNA UNA FUNCIONALIDAD A LAS FLECHAS DEL TECLADO.
		if (flechaderecha.isDown) {
			this.derecha();
		}
		if (flechaizquierda.isDown) {
			this.izquierda();
		}
        if (flechaarriba.isDown) {
			this.arriba();
		}
        if (flechaabajo.isDown) {
			this.abajo();
		}
        //SE LE ASIGNA UNA FUNCIONALIDAD A TODOS LOS BOTONES DE MOVIMIENTO.
		if (right) {
			this.derecha();
		} else {
			boton2.alpha = 0.4;
		}
		if (left) {
			this.izquierda();
		} else {
			boton1.alpha = 0.4;
		}
        if (up) {
			this.arriba();
		} else {
			boton3.alpha = 0.4;
		}
        if (down) {
			this.abajo();
		} else {
			boton4.alpha = 0.4;
		}
        if (mas) {
            this.plus();
        } else {
            botonp.alpha = 0.4;
        }
        if (menos) {
            this.less();
        } else {
            botonl.alpha = 0.4;
        }
    },
    
    //DEFINICIÓN DE FUNCIONES DE MOVIMIENTO
    
    izquierda: function () {
        if (fondojuego.position.x < 0) {        //SE LIMITA EL MOVIMIENTO DEL FONDO EN X.
            fondojuego.position.x += 6;         //SE ASIGNA MOVIMIENTO AL FONDO.
            boton1.alpha = 1;           //SE DENOTA UNA VISIBILIDAD DEL 100% DE LA IMAGEN DEL BOTÓN MIENTRAS LA FUNCIÓN ESTÉ ACTIVA.
        }
    },
    derecha: function () {//////////
        if (fondojuego.position.x > -1580) {// le pone límite al desplazamiento del fondo
            fondojuego.position.x -= 6;
            boton2.alpha = 1;
        }
    },
    abajo: function () {///////////
        if (fondojuego.position.y > 0) {
            fondojuego.position.y -= 6;
            boton4.alpha = 1;
        }
    },
    arriba: function () {////////////
        if (fondojuego.position.y < 0) {
            fondojuego.position.y += 6;
            boton3.alpha = 1;
        }
    },
    plus: function () {
        juego.state.start("Zoom");                  //SE INICIA OTRO ESTADO DEL JUEGO AL PRESIONAR EL BOTÓN.
        botonp.alpha = 1;
    },
    less: function () {
        juego.state.start("Zatras");
        botonl.alpha = 1;
    },
};
juego.state.add("activo", jugar);       // SE AÑADE EL ESTADO DEL PHASER GAME.
juego.state.start("activo");            // SE DEFINE QUE EN ESTE ESTADO EMPEZARA EL JUEGO(MAPA).