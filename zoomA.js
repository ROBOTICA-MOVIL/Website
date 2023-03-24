//ESTE ARCHIVO CORRESPONDE A UN ESTADO ADICIONAL DEL JUEGO.
//ESTE ES UN ESTADO EN EL QUE LA IMAGEN DE FONDO ES MAS PEQUEÑA, CREANDO UN EFECTO DE ALEJAMIENTO.
var Zatras = {

    preload: function () {
        juego.load.image("fondo", "img/vsm_full.png");
        juego.load.image("boton", "img/play.png");
        juego.load.image("botonR", "img/play2.png");
        juego.load.image("boton+", "img/plus.png");
        juego.load.image("boton-", "img/less.png");
        juego.load.image("botonL", "img/92.png");
    },
    
    create: function () {
        fondojuego = juego.add.sprite(720, 480, "fondo");
        fondojuego.position.x = 0;
        fondojuego.position.y = 120;
        fondojuego.scale =0.5;
        //juego.physics.startSystem(Phaser.Physics.ARCADE);

        //BOTÓNES MOVIMIENTO.
        
        boton1 = juego.add.button(602, 446, "boton", this.izquierda, this);
        boton1.anchor.setTo(0.5);
        boton1.scale.setTo(-1, 1);
        boton1.alpha = 0.4;

        boton2 = juego.add.button(695, 446, "boton", this.derecha, this);
        boton2.anchor.setTo(0.5);
        boton2.alpha = 0.4;

        boton3 = juego.add.button(648, 402, "botonR", this.arriba, this);
        boton3.anchor.setTo(0.5);
        boton3.alpha = 0.4;

        boton4 = juego.add.button(648, 446, "botonR", this.abajo, this);
        boton4.anchor.setTo(0.5);
        boton4.scale.setTo(1, -1);
        boton4.alpha = 0.4;

        botonp = juego.add.button(40, 40, "boton+", this.plus, this);
        botonp.anchor.setTo(0.5);
        botonp.alpha = 0.4;

        botonl = juego.add.button(40, 90, "boton-", this.less, this);
        botonl.anchor.setTo(0.5);
        botonl.alpha = 0.4;
        
        //BOTÓNES BITMAP.
        
        botonLE9 = juego.add.button(181, 313, "botonL", this.nine, this);
        botonLE9.anchor.setTo(0.5);
        botonLE9.alpha = 0.4;
        
        botonLE8 = juego.add.button(324, 227, "botonL", this.eight, this);
		botonLE8.anchor.setTo(0.5);
        botonLE8.alpha = 0.4;

        botonLE7 = juego.add.button(410, 88, "botonL", this.seven, this);
		botonLE7.anchor.setTo(0.5);
        botonLE7.alpha = 0.4;
        
        botonLE6 = juego.add.button(454, 189, "botonL", this.six, this);
		botonLE6.anchor.setTo(0.5);
        botonLE6.alpha = 0.4;
        
        botonLE5 = juego.add.button(386, 87, "botonL", this.five, this);
		botonLE5.anchor.setTo(0.5);
        botonLE5.alpha = 0.4;
        
        botonLE4 = juego.add.button(437, 159, "botonL", this.four, this);
		botonLE4.anchor.setTo(0.5);
        botonLE4.alpha = 0.4;
        
        botonLE3 = juego.add.button(440, 86, "botonL", this.three, this);
		botonLE3.anchor.setTo(0.5);
        botonLE3.alpha = 0.4;
        
        botonLE2 = juego.add.button(489, 124, "botonL", this.two, this);
		botonLE2.anchor.setTo(0.5);
        botonLE2.alpha = 0.4;
        
        botonLE1 = juego.add.button(407, 186, "botonL", this.one, this);
		botonLE1.anchor.setTo(0.5);
        botonLE1.alpha = 0.4;
        
        botonLE10 = juego.add.button(541, 396, "botonL", this.ten, this);
		botonLE10.anchor.setTo(0.5);
        botonLE10.alpha = 0.4;
		
		flechaderecha = juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		flechaizquierda = juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        flechaarriba = juego.input.keyboard.addKey(Phaser.Keyboard.UP);
        flechaabajo = juego.input.keyboard.addKey(Phaser.Keyboard.DOWN);
		
		boton1.events.onInputOver.add(function () {left = true; });
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
        
        botonLE9.events.onInputOver.add(function () {nueve = true; });
        botonLE9.events.onInputOut.add(function () {nueve = false; });
        botonLE9.events.onInputDown.add(function () {nueve = true; });
        botonLE9.events.onInputUp.add(function () {nueve = false; });
        
        botonLE8.events.onInputOver.add(function () {ocho = true; });
        botonLE8.events.onInputOut.add(function () {ocho = false; });
        botonLE8.events.onInputDown.add(function () {ocho = true; });
        botonLE8.events.onInputUp.add(function () {ocho = false; });
        
        botonLE7.events.onInputOver.add(function () {siete = true; });
        botonLE7.events.onInputOut.add(function () {siete = false; });
        botonLE7.events.onInputDown.add(function () {siete = true; });
        botonLE7.events.onInputUp.add(function () {siete = false; });
        
        botonLE6.events.onInputOver.add(function () {seis = true; });
        botonLE6.events.onInputOut.add(function () {seis = false; });
        botonLE6.events.onInputDown.add(function () {seis = true; });
        botonLE6.events.onInputUp.add(function () {seis = false; });
        
        botonLE5.events.onInputOver.add(function () {cinco = true; });
        botonLE5.events.onInputOut.add(function () {cinco = false; });
        botonLE5.events.onInputDown.add(function () {cinco = true; });
        botonLE5.events.onInputUp.add(function () {cinco = false; });
        
        botonLE4.events.onInputOver.add(function () {cuatro = true; });
        botonLE4.events.onInputOut.add(function () {cuatro = false; });
        botonLE4.events.onInputDown.add(function () {cuatro = true; });
        botonLE4.events.onInputUp.add(function () {cuatro = false; });
        
        botonLE3.events.onInputOver.add(function () {tres = true; });
        botonLE3.events.onInputOut.add(function () {tres = false; });
        botonLE3.events.onInputDown.add(function () {tres = true; });
        botonLE3.events.onInputUp.add(function () {tres = false; });
        
        botonLE2.events.onInputOver.add(function () {dos = true; });
        botonLE2.events.onInputOut.add(function () {dos = false; });
        botonLE2.events.onInputDown.add(function () {dos = true; });
        botonLE2.events.onInputUp.add(function () {dos = false; });
        
        botonLE1.events.onInputOver.add(function () {uno = true; });
        botonLE1.events.onInputOut.add(function () {uno = false; });
        botonLE1.events.onInputDown.add(function () {uno = true; });
        botonLE1.events.onInputUp.add(function () {uno = false; });
        
        botonLE10.events.onInputOver.add(function () {diez = true; });
        botonLE10.events.onInputOut.add(function () {diez = false; });
        botonLE10.events.onInputDown.add(function () {diez = true; });
        botonLE10.events.onInputUp.add(function () {diez = false; });
	},
	
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
        //SE LE ASIGNA UNA FUNCIONALIDAD A LOS BOTONES REFERENTES A LOS BITMAPS.
        if (nueve) {
            this.nine();
        } else if (!nueve && updt9) {
            botonLE9.alpha = 0.4;
            this.borrarBMnine();
        }
        if (ocho) {
            this.eight();
        } else if (!ocho && updt8) {
            botonLE8.alpha = 0.4;
            this.borrarBMeight();
        }
        if (siete) {
            this.seven();
        } else if (!siete && updt7) {
            botonLE7.alpha = 0.4;
            this.borrarBMseven();
        }
        if (seis) {
            this.six();
        } else if (!seis && updt6) {
            botonLE6.alpha = 0.4;
            this.borrarBMsix();
        }
        if (cinco) {
            this.five();
        } else if (!cinco && updt5) {
            botonLE5.alpha = 0.4;
            this.borrarBMfive();
        }
        if (cuatro) {
            this.four();
        } else if (!cuatro && updt4) {
            botonLE4.alpha = 0.4;
            this.borrarBMfour();
        }
        if (tres) {
            this.three();
        } else if (!tres && updt3) {
            botonLE3.alpha = 0.4;
            this.borrarBMthree();
        }
        if (dos) {
            this.two();
        } else if (!dos && updt2) {
            botonLE2.alpha = 0.4;
            this.borrarBMtwo();
        }
        if (uno) {
            this.one();
        } else if (!uno && updt1) {
            botonLE1.alpha = 0.4;
            this.borrarBMone();
        }
        if (diez) {
            this.ten();
        } else if (!diez && updt10) {
            botonLE10.alpha = 0.4;
            this.borrarBMten();
        }
    },
    
    /////
    
    izquierda: function () {
        if (fondojuego.position.x < 0) {
            fondojuego.position.x += 2; 
            botonLE9.position.x += 2;
            botonLE8.position.x += 2;
            botonLE7.position.x += 2;
            botonLE6.position.x += 2;
            botonLE5.position.x += 2;
            botonLE4.position.x += 2;
            botonLE3.position.x += 2;
            botonLE2.position.x += 2;
            botonLE1.position.x += 2;
            botonLE10.position.x += 2;
            boton1.alpha = 1;
        }
    },
    derecha: function () {
        if (fondojuego.position.x > 0) {
            fondojuego.position.x -= 2;
            botonLE9.position.x -= 2;
            botonLE8.position.x -= 2;
            botonLE7.position.x -= 2;
            botonLE6.position.x -= 2;
            botonLE5.position.x -= 2;
            botonLE4.position.x -= 2;
            botonLE3.position.x -= 2;
            botonLE2.position.x -= 2;
            botonLE1.position.x -= 2;
            botonLE10.position.x -= 2;
            boton2.alpha = 1;
        }
    },
    abajo: function () {
        if (fondojuego.position.y > -103) {
            fondojuego.position.y -= 2;
            botonLE9.position.y -= 2;
            botonLE8.position.y -= 2;
            botonLE7.position.y -= 2;
            botonLE6.position.y -= 2;
            botonLE5.position.y -= 2;
            botonLE4.position.y -= 2;
            botonLE3.position.y -= 2;
            botonLE2.position.y -= 2;
            botonLE1.position.y -= 2;
            botonLE10.position.y -= 2;
            boton4.alpha = 1;
        }
    },
    arriba: function () {
        if (fondojuego.position.y < 0) {
            fondojuego.position.y += 2;
            botonLE9.position.y += 2;
            botonLE8.position.y += 2;
            botonLE7.position.y += 2;
            botonLE6.position.y += 2;
            botonLE5.position.y += 2;
            botonLE4.position.y += 2;
            botonLE3.position.y += 2;
            botonLE2.position.y += 2;
            botonLE1.position.y += 2;
            botonLE10.position.y += 2;
            boton3.alpha = 1;
        }
    },
    plus: function () {
        juego.state.start("activo");
        botonp.alpha = 1;
    },
    less: function () {
        //juego.state.start("activo")
        botonl.alpha = 1;
    },
    nine: function () {
        botonLE9.alpha = 1;
        if (cuenta9 < 1) {
            BM9 = juego.add.bitmapData(210, 350);       //SE CREA EL BITMAP.
            BM9.fill(255, 228, 196, 0.8);               //SE RELLENA CON COLOR Y VISIBILIDAD DEL 80%.
            BM9.addToWorld(500, 20, 0, 0, 1, 1);        //SE AÑADE EL BITMAP. 
            //SE CREA EL TÍTULO Y DEFINEN TIPO Y COLOR DE LA FUENTE.
            tituloBM9 = juego.make.text(0, 0, "Canada War Museum", {font: "bold 14px Rhonde-Free", fill: "#000000"});
            BM9.draw(tituloBM9, 5, 20, null, null);     //SE DIBUJA EL TEXTO EN EL BITMAP.
            imgBM9 = juego.make.sprite(0, 0, "WarM");   //SE CREA UN SPRITE PARA ASIGNAR LA IMAGEN AL BITMAP.
            imgBM9.scale.setTo(0.5);                    //SE ESCALA LA IMAGEN AL 50%.
            BM9.draw(imgBM9, 5, 40, 400, 200);          //SE DIBUJA LA IMAGEN EN EL BITMAP.
            //SE CREA UN PARRAFO Y DEFINEN TIPO Y COLOR DE LA FUENTE.
            parrafoBM9 = juego.make.text(0, 0, "Inició en 1880 y posteriormente fue\n transladado junto al rio ottawa en\n el año 2005. Este museo alberga\nNumerosos equipos y vehiculos de\nguerra mostrando distintas\n facetas del pasado militar del\n ejercito canadiense.", {font: "bold 12px Rhonde-Free", fill: "#000000"});
            BM9.draw(parrafoBM9, 5, 150, null, null, null);//SE DIBUJA EL TEXTO EN EL BITMAP.
            updt9 = true;        //SE CAMBIA EL VALOR DEL BOOLEANO PARA QUE SE PUEDA BORRAR EL BITMAP POSTERIORMENTE.
            cuenta9 += 1;        //SE AUMENTA EN 1 EL VALOR DEL CONTADOR PARA QUE EL BITMAP SE CREE SOLO UNA VEZ.
        }
    },
    eight: function () {
        botonLE8.alpha = 1;
        if (cuenta8 < 1) {
            BM8 = juego.add.bitmapData(210, 350);
            BM8.fill(255, 228, 196, 0.8);
            BM8.addToWorld(500, 20, 0, 0, 1, 1);
            tituloBM8 = juego.make.text(0, 0, "Corte Suprema", {font: "bold 14px Rhonde-Free", fill: "#000000"});
            BM8.draw(tituloBM8, 5, 20, null, null);
            imgBM8 = juego.make.sprite(0, 0, "CS");
            imgBM8.scale.setTo(0.5);
            BM8.draw(imgBM8, 5, 40, 400, 200);
            parrafoBM8 = juego.make.text(0, 0, "La Corte Suprema de Canadá\n es el más alto tribunal de\n justicia de canadá; formada por\n ocho jueces y un presidente.\n Se formó en abril de 1875 y \nsesionó por primera vez el 17\n de enero de 1876.", {font: "bold 12px Rhonde-Free", fill: "#000000"});
            BM8.draw(parrafoBM8, 5, 150, null, null, null);
            updt8 = true;
            cuenta8 += 1;
        }
    },
    seven: function () {
        botonLE7.alpha = 1;
        if (cuenta7 < 1) {
            BM7 = juego.add.bitmapData(210, 350);
            BM7.fill(255, 228, 196, 0.8);
            BM7.addToWorld(500, 20, 0, 0, 1, 1);
            tituloBM7 = juego.make.text(0, 0, "Galería Nacional", {font: "bold 14px Rhonde-Free", fill: "#000000"});
            BM7.draw(tituloBM7, 5, 20, null, null);
            imgBM7 = juego.make.sprite(0, 0, "GN");
            imgBM7.scale.setTo(0.5);
            BM7.draw(imgBM7, 5, 40, 400, 200);
            parrafoBM7 = juego.make.text(0, 0, "Es un museo de arte y uno\n de los más importantes del\n continente. El edificio se destaca\n por su arquitectura moderna.\n Fue diseñado por Moshe Safie e\n inaugurado en 1988.", {font: "bold 12px Rhonde-Free", fill: "#000000"});
            BM7.draw(parrafoBM7, 5, 150, null, null, null);
            updt7 = true;
            cuenta7 += 1;
        }
    },
    six: function () {
        botonLE6.alpha = 1;
        if (cuenta6 < 1) {
            BM6 = juego.add.bitmapData(210, 350);
            BM6.fill(255, 228, 196, 0.8);
            BM6.addToWorld(500, 20, 0, 0, 1, 1);
            tituloBM6 = juego.make.text(0, 0, "Plaza de la Confederación", {font: "bold 14px Rhonde-Free", fill: "#000000"});
            BM6.draw(tituloBM6, 5, 20, null, null);
            imgBM6 = juego.make.sprite(0, 0, "OPC");
            imgBM6.scale.setTo(0.5);
            BM6.draw(imgBM6, 5, 40, 400, 200);
            parrafoBM6 = juego.make.text(0, 0, "Es el segundo centro de ceremonias\n más importante de la ciudad,\n despues de Parlament Hill.\nSu forma es casi triangular,\ncon el Memorial Nacional de Guerra\n en el centro y el Memorial de los\n Valientes en su periferia.\nFue designada Lugar Histórico Nacional\n en 1984.", {font: "bold 12px Rhonde-Free", fill: "#000000"});
            BM6.draw(parrafoBM6, 5, 150, null, null, null);
            updt6 = true;
            cuenta6 += 1;
        }
    },
    five: function () {
        botonLE5.alpha = 1;
        if (cuenta5 < 1) {
            BM5 = juego.add.bitmapData(210, 350);
            BM5.fill(255, 228, 196, 0.8);
            BM5.addToWorld(500, 20, 0, 0, 1, 1);
            tituloBM5 = juego.make.text(0, 0, "Comision Capitál Nacional", {font: "bold 14px Rhonde-Free", fill: "#000000"});
            BM5.draw(tituloBM5, 5, 20, null, null);
            imgBM5 = juego.make.sprite(0, 0, "CNC");
            imgBM5.scale.setTo(0.5);
            BM5.draw(imgBM5, 5, 40, 400, 200);
            parrafoBM5 = juego.make.text(0, 0, "Es la corporación responsable del\n desarrollo, conservación y\n mejoramiento de la región capitál.\n Fue fundada en 1959 para\n reemplazar a la FDC y a la\n antigua comisión de\n mejoramiento de ottawa.", {font: "bold 12px Rhonde-Free", fill: "#000000"});
            BM5.draw(parrafoBM5, 5, 150, null, null, null);
            updt5 = true;
            cuenta5 += 1;
        }
    },
    four: function () {
        botonLE4.alpha = 1;
        if (cuenta4 < 1) {
            BM4 = juego.add.bitmapData(210, 350);
            BM4.fill(255, 228, 196, 0.8);
            BM4.addToWorld(500, 20, 0, 0, 1, 1);
            tituloBM4 = juego.make.text(0, 0, "Canal Rideau", {font: "bold 14px Rhonde-Free", fill: "#000000"});
            BM4.draw(tituloBM4, 5, 20, null, null);
            imgBM4 = juego.make.sprite(0, 0, "RC");
            imgBM4.scale.setTo(0.5);
            BM4.draw(imgBM4, 5, 40, 400, 200);
            parrafoBM4 = juego.make.text(0, 0, "Es un canal artificial de 200km que\n divide la ciudad y es uno de los \npuntos turísticos de mayor\n importancia en la ciudad.\nSe inauguró en 1832 y fue\n declarado patrimonio de la\n humanidad en 2007.", {font: "bold 12px Rhonde-Free", fill: "#000000"});
            BM4.draw(parrafoBM4, 5, 150, null, null, null);
            updt4 = true;
            cuenta4 += 1;
        }
    },
    three: function () {
        botonLE3.alpha = 1;
        if (cuenta3 < 1) {
            BM3 = juego.add.bitmapData(210, 350);
            BM3.fill(255, 228, 196, 0.8);
            BM3.addToWorld(500, 20, 0, 0, 1, 1);
            tituloBM3 = juego.make.text(0, 0, "Basílica Catedral Nuestra Señora", {font: "bold 14px Rhonde-Free", fill: "#000000"});
            BM3.draw(tituloBM3, 5, 20, null, null);
            imgBM3 = juego.make.sprite(0, 0, "BCNS");
            imgBM3.scale.setTo(0.5);
            BM3.draw(imgBM3, 5, 40, 400, 200);
            parrafoBM3 = juego.make.text(0, 0, "Es una basílica menor católica y\n sitio histórico nacional desde 1990.\n Empezó como una pequeña iglesia de\nmadera en 1832 y en 1941 y 1990\n fue renovada para ser como lo es\n hoy en día. La misa se dá en \n inglés y francés. ", {font: "bold 12px Rhonde-Free", fill: "#000000"});
            BM3.draw(parrafoBM3, 5, 150, null, null, null);
            updt3 = true;
            cuenta3 += 1;
        }
    },
    two: function () {
        botonLE2.alpha = 1;
        if (cuenta2 < 1) {
            BM2 = juego.add.bitmapData(210, 350);
            BM2.fill(255, 228, 196, 0.8);
            BM2.addToWorld(500, 20, 0, 0, 1, 1);
            tituloBM2 = juego.make.text(0, 0, "Byward Market", {font: "bold 14px Rhonde-Free", fill: "#000000"});
            BM2.draw(tituloBM2, 5, 20, null, null);
            imgBM2 = juego.make.sprite(0, 0, "BWM");
            imgBM2.scale.setTo(0.5);
            BM2.draw(imgBM2, 5, 40, 400, 200);
            parrafoBM2 = juego.make.text(0, 0, "Es un distrito al este del distrito\n financiero. En este se sitúa\n un enorme mercado al aire libre\n con diferentes productos como:\n Alimentos, Recuerdos, Joyería,\n entre otros.\n Sus precios son asequibles y está\n regulado por el gobierno de la ciudad.", {font: "bold 12px Rhonde-Free", fill: "#000000"});
            BM2.draw(parrafoBM2, 5, 150, null, null, null);
            updt2 = true;
            cuenta2 += 1;
        }
    },
    one: function () {
        botonLE1.alpha = 1;
        if (cuenta1 < 1) {
            BM1 = juego.add.bitmapData(210, 350);
            BM1.fill(255, 228, 196, 0.8);
            BM1.addToWorld(500, 20, 0, 0, 1, 1);
            tituloBM1 = juego.make.text(0, 0, "Parliament Hill", {font: "bold 14px Rhonde-Free", fill: "#000000"});
            BM1.draw(tituloBM1, 5, 20, null, null);
            imgBM1 = juego.make.sprite(0, 0, "PH");
            imgBM1.scale.setTo(0.5);
            BM1.draw(imgBM1, 5, 40, 400, 200);
            parrafoBM1 = juego.make.text(0, 0, "Es el área del centro de ottawa\n perteneciente a la corona y es la\n sede del parlamento canadiense.\n es una zona con arquitectura neogótica\n impresionante. Su construcción data de\n 1859 y tras el incendio de 1916 tomó\n la forma que tiene hoy. Se encuentra\n en renovación desde 2002 y hasta 2020. ", {font: "bold 12px Rhonde-Free", fill: "#000000"});
            BM1.draw(parrafoBM1, 5, 150, null, null, null);
            updt1 = true;
            cuenta1 += 1;
        }
    },
    ten: function () {
        botonLE10.alpha = 1;
        if (cuenta10 < 1) {
            BM10 = juego.add.bitmapData(210, 350);
            BM10.fill(255, 228, 196, 0.8);
            BM10.addToWorld(500, 20, 0, 0, 1, 1);
            tituloBM10 = juego.make.text(0, 0, "Canadian Museum of Nature", {font: "bold 14px Rhonde-Free", fill: "#000000"});
            BM10.draw(tituloBM10, 5, 20, null, null);
            imgBM10 = juego.make.sprite(0, 0, "CMN");
            imgBM10.scale.setTo(0.5);
            BM10.draw(imgBM10, 5, 40, 400, 200);
            parrafoBM10 = juego.make.text(0, 0, "Es el museo de ciencia e historia natural\n de la ciudad; fue termiado en 1912\n y tiene una arquitectura gótica;\n Es un lugar histórico nacional y \n tiene objetos invaluables en sus\n coleciones.", {font: "bold 12px Rhonde-Free", fill: "#000000"});
            BM10.draw(parrafoBM10, 5, 150, null, null, null);
            updt10 = true;
            cuenta10 += 1;
        }
    },
    
    // DEFINICIÓN DE FUNCIONES REFERENTES A LA ELIMINACIÓN DE BITMAPS.
    
    borrarBMnine: function () {
        BM9.destroy();              //SE DESTRUYE EL BITMAP RESPECTIVO.
        cuenta9 = 0;                //SE REINICIA EL CONTADOR.
    },
    borrarBMeight: function () {
        BM8.destroy();
        cuenta8 = 0;
    },
    borrarBMseven: function () {
        BM7.destroy();
        cuenta7 = 0;
    },
    borrarBMsix: function () {
        BM6.destroy();
        cuenta6 = 0;
    },
    borrarBMfive: function () {
        BM5.destroy();
        cuenta5 = 0;
    },
    borrarBMfour: function () {
        BM4.destroy();
        cuenta4 = 0;
    },
    borrarBMthree: function () {
        BM3.destroy();
        cuenta3 = 0;
    },
    borrarBMtwo: function () {
        BM2.destroy();
        cuenta2 = 0;
    },
    borrarBMone: function () {
        BM1.destroy();
        cuenta1 = 0;
    },
    borrarBMten: function () {
        BM10.destroy();
        cuenta10 = 0;
    }
};
juego.state.add("Zatras", Zatras);