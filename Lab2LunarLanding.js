let x = 250;
let y = 10;

function setup() {
  createCanvas(500, 500);
}
function draw() {
  push();
  translate(-2, 100);
  background(0, 100, 250);
  stroke(0);
  strokeWeight(3);

  fill(255, 255, 255);
  ellipse(x, y + 195, 130);
  // face
  rect(x - 35, y + 180, 70);
  // chest body
  rect(x - 45, y + 250, 90, 10);
  // body
  rect(x - 25, y + 260, 50, 50);

  // pants
  rect(x - 25, y + 260, 50, 35);

  // arms

  rect(x - 45, y + 260, 10, 50);
  rect(x + 35, y + 260, 10, 50);

  // foot/legs
  rect(x - 15, y + 310, 10, 30);
  rect(x + 5, y + 310, 10, 30);

  noFill();

  // eyes
  ellipse(x - 20, y + 200, 20);
  ellipse(x + 20, y + 200, 20);
  // Pupils
  ellipse(x - 20, y + 200, 10);
  ellipse(x + 20, y + 200, 10);
  // nose dots
  ellipse(x - 5, y + 210, 2);
  ellipse(x + 5, y + 210, 2);

  // upper teeth
  rect(x - 30, y + 220, 10);
  rect(x - 20, y + 220, 10);
  rect(x - 10, y + 220, 10);
  rect(x, y + 220, 10);
  rect(x + 10, y + 220, 10);
  rect(x + 20, y + 220, 10);

  // lower teeth
  rect(x - 30, y + 230, 10);
  rect(x - 20, y + 230, 10);
  rect(x - 10, y + 230, 10);
  rect(x, y + 230, 10);
  rect(x + 10, y + 230, 10);
  rect(x + 20, y + 230, 10);

  // ellipse(x, y + 195, 10);
  fill(255, 255, 255);
  ellipse(x - 40, y + 255, 20);
  ellipse(x + 40, y + 255, 20);
  noFill();
  pop();
}
