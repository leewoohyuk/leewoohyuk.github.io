let x =25;
let dx =10;

function setup() {
  createCanvas(130, 50);
  frameRate(10);
}

function draw() {
  noStroke();
  fill(0,random(0,255),0);
  background(255);
  ellipse(x,25,50,50);
  x = x + dx;
  if( x>=130  || x<=0){
  dx = dx*-1; 
  }
}