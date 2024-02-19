let x = 250;
let y = 10;
let ySpeed = 0;
const gravity = 0.015;
mode = 0;
let fuelvar = 100;
let fuelDecrease = 1;
let flames = false;

let ground = {
  x: 175,
  y: 855,
};

function setup() {
  createCanvas(500, 500);
}

function draw() {
  if (mode == 0) {
    text("press enter to start", 20, 40);
  }
  if (mode == 1) {
  }
}

function draw() {
  // press enter to start
  if (mode == 0) {
    fill(255, 255, 255);
    textFont("verdana");
    textSize(45);
    text("press enter to start", 35, 250);
  }
  if (mode == 1) {
    push();
    translate(-2, -400); //-400 at start
    background(100, 100, 250);
    stroke(0);
    strokeWeight(3);

    // Rita figuren med dess position x och y
    // helmet on head
    ellipse(x, y + 195, 130);
    // face
    rect(x - 35, y + 180, 70);
    // chest body
    rect(x - 45, y + 250, 90, 10);
    // body
    rect(x - 25, y + 260, 50, 50);

    // pants
    rect(x - 25, y + 260, 50, 35);

    //Fire from arms, Fix This
    if (flames) {
      //fill(255,0,0);
      triangle(x - 45, y + 300, x - 35, y + 300, x - 40, y + 340); // Vänster arm
      triangle(x + 35, y + 300, x + 45, y + 300, x + 40, y + 340); // Höger arm
    }

    // arms
    rect(x - 45, y + 260, 10, 50);
    rect(x + 35, y + 260, 10, 50);

    // foot/legs
    rect(x - 15, y + 310, 10, 30);
    rect(x + 5, y + 310, 10, 30);

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
    ellipse(x - 40, y + 255, 20);
    ellipse(x + 40, y + 255, 20);

    rect(ground.x, ground.y, 150, 45);

    pop();
    textSize(24);

    text("fuel: " + fuelvar, 20, 50);

    y += ySpeed;

    if (y < height - 15) {
      ySpeed += gravity;
    } else {
      ySpeed = 0;
    }
  }
}
// Fix this later
if (mode == 2) {
  text("Perfect landing!", 20, 80);
}

if (mode == 3) {
  text("Crashed!", 20, 80);
}

function keyPressed() {
  if (keyCode === ENTER && mode === 0) {
    mode = 1;
    ySpeed = 5;
  } else if (key === "ArrowDown" && fuelvar > 0) {
    ySpeed = -0.1;
    fuelvar -= fuelDecrease;
    falmes = true;
  }
}

function keyReleased() {
  if (key === "ArrowDown") {
    flames = false;
  }
}
