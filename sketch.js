// Hi my name is andrew albertino and this is my web project. i used p5 web gl.
// I learned thru using this tool. That javascript isnt that hard, and what exactly i can create using js.
// I had to use functions quite a bit to get my animation to run smoothly. I found it quite difficult to get arrays to work tho without messing up my code.
//defining a function using parameters was no problem at all. 

//creating an array
const numbers = [5, 10, 15]
 console.log(numbers)

 //defining a function using parameters
const name = "Final Project"


function logger() {
  console.log("FINAL PROJECTT!!!!")
  console.log("FINAL PROJECTT!!!!")
  console.log("FINAL PROJECTT!!!!")
  console.log("FINAL PROJECTT!!!!")
}


logger();




//creating my animation

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


