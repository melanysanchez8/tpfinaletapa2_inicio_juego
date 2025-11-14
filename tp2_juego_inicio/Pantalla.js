class Pantalla {
  constructor() {
    this.estado = "menu";

    // BOTONES DEL MENÚ PRINCIPAL
    this.botonesMenu = [
      new Boton(245, 200, 150, 50, null, "Start"),
      new Boton(245, 270, 150, 50, null, "Controles"),
      new Boton(245, 340, 150, 50, null, "Créditos")
    ];

    // BOTONES SELECCIÓN DE MODO DE JUEGO
    this.botonesJuegos = [
      new Boton(120, 400, 150, 40, null, "Jinx1 vs Vi2"),
      new Boton(370, 400, 150, 40, null, "Vi1 vs Jinx2")
    ];

    // BOTÓN PARA VOLVER
    this.botonVolver = new Boton(20, 20, 100, 40, null, "Volver");
  }
  
  
  actualizar() {
    background(0);
    this.mostrarSegunEstado();
  }

  // método que decide qué dibujar usando if/else
  mostrarSegunEstado() {
    if (this.estado === "menu") {
      this.dibujarMenu();
    } else if (this.estado === "seleccion") {
      this.dibujarSeleccion();
    } else if (this.estado === "controles") {
      this.dibujarControles();
    } else if (this.estado === "creditos") {
      this.dibujarCreditos();
    } else if (this.estado === "juego") {
      this.dibujarJuego();
    } else {
      this.estado = "menu";
      this.dibujarMenu();
    }
  }
  
  
  dibujarMenu() {
    image(fondoAzul, 0, 0, width, height);
    image(viPixel, 50, 330, 100, 120);
    image(jinxPixel, 500, 330, 100, 120);
    textFont("sans-serif, Arial Black");
    fill(255);
    textAlign(CENTER);
    textSize(40);
    text("ARCANE", width / 2, 100);
   
    for (let b of this.botonesMenu) b.dibujar();
  }

  dibujarSeleccion() {
    image(jinxViJuntas, 0, 0, width, height);
    fill(0, 150);
    rect(width / 2 - 195, 60 - 30, 400, 50, 10);
    fill(255);
    textSize(28);
    textAlign(CENTER);
    text("ELIGE EL MODO DE JUEGO", width / 2, 60);
    for (let b of this.botonesJuegos) b.dibujar();
    this.botonVolver.dibujar();
  }

  dibujarControles() {
    image(fondoVioleta, 0, 0, width, height);
    
    fill(255);
    textAlign(CENTER);
    textSize(30);
    text("¿CÓMO SE JUEGA?", width / 2, 60);

    // RECTÁNGULO PARA EL TEXTO
    fill(230);
    rect(60, 90, 520, 260, 12);

    // Texto dentro del rectángulo
    fill(0);
    textAlign(LEFT, TOP);
    textSize(14);
    text( "Modo de juego: Jinx1 vs Vi2\n\n" + "El juego consiste en que Jinx debe dispararle a Vi. Sin embargo, entre ellas hay varios obstáculos y Vi se mueve constantemente de un lado a otro, lo que hace que el desafío sea más difícil. Si Jinx logra acertarle un disparo a Vi, el jugador gana la partida.\n\n" +
    "Modo de juego: Vi1 vs Jinx2\n\n" + "El juego consiste en que Vi debe esquivar las balas que Jinx le dispara, mientras intenta acercarse a ella. Si Vi logra alcanzarla, gana la partida; pero si una de las balas la toca, pierde el juego.", 
    80, 110, 480, 220);
    

    image(flechas, width / 2 - 300, 360, 180, 100);
    fill(230);
    rect(width / 2 - 60, 470 - 55, 300, 36, 8);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(14);
    text("BARRA ESPACIADORA = DISPARAR", width / 2 + 80, 470 - 37);
    fill(255)
    text("FLECHAS = MOVERSE", width / 2 - 215, 470);

    this.botonVolver.dibujar();
  }

  dibujarCreditos() {
    image(fondoAzul, 0, 0, width, height);

    fill(255);
    textAlign(CENTER);
    textSize(30);
    text("CRÉDITOS", width / 2, 60);

    // RECTÁNGULO PARA CRÉDITOS
    fill(255, 240);
    rect(100, 100, 440, 260, 12);

    fill(10);
    textAlign(CENTER);
    textSize(20);
    text("ARCANE: JINX vs VI\n\n" + "Realizado por:\n" + "Abril Solana Antonuchi, Melany Sanchez\n\n" + "Comisión: 2\n\n" + "Materia: PMIW", width / 2 - 200, 120, 400, 220);

    this.botonVolver.dibujar();
  }

  dibujarJuego() {
    background(255);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(24);
    text("Pantalla de juego", width / 2, height / 2);
    this.botonVolver.dibujar();
  }

  manejarClic(px, py) {
    if (this.estado === "menu") {
      if (this.botonesMenu[0].clicDentro(px, py)) this.estado = "seleccion";
      if (this.botonesMenu[1].clicDentro(px, py)) this.estado = "controles";
      if (this.botonesMenu[2].clicDentro(px, py)) this.estado = "creditos";
      return;
    }

    if (this.estado === "seleccion") {
      if (this.botonesJuegos[0].clicDentro(px, py)) this.estado = "juego";
      if (this.botonesJuegos[1].clicDentro(px, py)) this.estado = "juego";
      if (this.botonVolver.clicDentro(px, py)) this.estado = "menu";
      return;
    }

    //Boton volver me devuelve al menu
    if (this.estado === "controles" || this.estado === "creditos" || this.estado === "juego") {
      if (this.botonVolver.clicDentro(px, py)) this.estado = "menu";
      return;
    }
  }
}
