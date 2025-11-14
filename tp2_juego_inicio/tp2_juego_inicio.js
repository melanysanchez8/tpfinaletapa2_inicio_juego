let fondoAzul, fondoVioleta, jinxViJuntas, flechas, viPixel, jinxPixel;
let pantallaActual;

function preload() {
  fondoAzul = loadImage("assets/fondo-azul.jpg");
  fondoVioleta = loadImage("assets/fondo-violeta.jpg");
  jinxViJuntas = loadImage("assets/jinx-vi-juntas.jpeg");
  flechas = loadImage("assets/flechas-teclado.png");
  viPixel = loadImage("assets/vi-pixel.png");
  jinxPixel = loadImage("assets/jinx-pixel.png");
}

function setup() {
  createCanvas(640, 480);
  pantallaActual = new Pantalla();
}

function draw() {
  pantallaActual.actualizar();
}

function mousePressed() {
  pantallaActual.manejarClic(mouseX, mouseY);
}
