function setup() {
  createCanvas(600,400);
}
let xbola = 300
let ybola = 200
let diametro = 35
let velocidadexbola = 7
let velocidadeybola =7 
function draw() {
  background(0);
  circle (xbola,ybola,diametro)
    xbola = xbola + velocidadexbola;
//  ybola = ybola + velocidadeybola;
if(xbola > width||xbola < 0){velocidadexbola = velocidadexbola * -1}
if(xbola < 0){velocidadedeybola = velocidadeybola * -1}
if(ybola > height|| ybola < 0){velocidadeybola = velocidaeybola * -1}
}