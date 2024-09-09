function setup() {
  createCanvas(400, 400);
  frameRate(3);
}

function draw() {
  noStroke();
  background(220);
  for( let x = 0; x <= width; x= x+30){
    for(let y = 0; y <=height; y=y+30){
    fill(random(0),random(0),random(255), 70);
    ellipse(x,y,50);
  }  
  }
}