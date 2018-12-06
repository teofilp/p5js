let x = 0;
let y = 0;
function setup() {
  createCanvas(400, 400);
  frameRate(60);
  // put setup code here
}

function draw() {
  background(0);
  ellipse(x, y, 50, 50);
  x += 5;
  y += 5;
  if(x == height - 25){
    x = 0;
    y = 0;
  }
  // put drawing code here
}