
let x,y;
let size;
let choice;
function setup() {
  createCanvas(400, 400);
  size =20;
  choice = 0;
  frameRate(2);
  
}

function draw() {
  background(220);
  for(x =size/2;x<400; x =x+size){
    for(y=size/2;y<400;y=y+size){
      choice = random(0,1);
      if(choice <0.5){
      
   
    // ellipse(x,y,size,size);
      line(x-size/2,y-size/2,x+size/2,y+size/2);
  } else{  line(x+size/2,y-size/2,x-size/2,y+size/2);
        }
}
}
}