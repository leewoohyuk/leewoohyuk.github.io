class Bubble{
  constructor(){
    this.x = 200;
    this.y = 200;
    this.r = random(0,255);
    this.g = random(0,255);
    this.b = random(0,255);
    this.size = random(250,300);
  }
  show(){
     fill(this.r, this.g, this.b,60);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
  }
  move(){
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
}