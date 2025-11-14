class Boton {
  constructor(x, y, w, h, img, texto) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = img;
    this.texto = texto;
  }

  dibujar() {
    // si hubiera imagen, se mostraría; ahora usamos rect
    if (this.img) {
      image(this.img, this.x, this.y, this.w, this.h);
    } else {
      // efecto hover simple
      if (this.clicDentro(mouseX, mouseY)) {
        fill(180, 120, 255);
      } else {
        fill(100, 60, 200);
      }
      noStroke();
      rect(this.x, this.y, this.w, this.h, 12);
      fill(255);
      textAlign(CENTER, CENTER);
      textSize(18);
      text(this.texto, this.x + this.w / 2, this.y + this.h / 2);
    }
  }

  clicDentro(px, py) {
    return px > this.x && px < this.x + this.w && py > this.y && py < this.y + this.h;
  }
}
