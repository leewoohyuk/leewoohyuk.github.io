let x = 200;
let y = 200;
let bubble1;
let bubble2;
let bubble3;

function setup() {
  background(220);
  frameRate(9);
  createCanvas(400, 400);
  bubble1 = new Bubble();
  bubble2 = new Bubble();
  bubble3 = new Bubble();
}

function draw() {
  rectMode(CENTER);
   noStroke();
  textSize(20);
  fill(('rgb(240,232,218)'));
  
  strokeWeight(4);
  text('funny illust file',100,200);
  bubble1.show();
  bubble1.move();
  bubble2.show();
  bubble2.move();
   bubble3.show();
  bubble3.move();
 
}
