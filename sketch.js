let angle = 0;

function setup() {
  createCanvas(600, 600);
}


function draw() {
  background(50);
  push();
  translate(width/2, height/2);
  angle += radians(1);
  rotate(angle);
  fill(255);
  noStroke();
  rectMode(CENTER);
  circle(30, 30, 20);
  pop();
  for (let a=0; a<radians(360); a+=radians(30)) {
    push();
    translate(width/2, height/2);   
    rotate(a);                      
    translate(0, 200);              
    rotate(-angle);                 
    rectMode(CENTER);
    circle(30, 30, 20);
    pop();
  }
}
