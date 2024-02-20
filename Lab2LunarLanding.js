let x = 250; // x-position för figuren
let y = 10; // y-position för figuren
let ySpeed = 0; // hastighet i y-riktning för figuren
const gravity = 0.015; // gravitationskonstant
let mode = 0;
let fuelvar = 100;
let fuelDecrease = 1;
let flames = false; // boolsk variabel för att hålla reda på om eldflammor ska visas eller inte
let landingFace = false;

let ground = {
  x: 175,
  y: 855,
};

function setup() {
  createCanvas(500, 500);
}

function draw() {
  if (mode == 0) {
    background(0, 0, 0);
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

    if (flames) {
      fill(255, 0, 0);
      triangle(x - 45, y + 300, x - 35, y + 300, x - 40, y + 340); // Vänster arm
      triangle(x + 35, y + 300, x + 45, y + 300, x + 40, y + 340); // Höger arm
      noFill();
    }

    // Rita figuren med dess position x och y
    // helmet on head
    fill(199, 201, 200);
    ellipse(x, y + 195, 130);
    // face
    fill(3, 255, 74);
    rect(x - 35, y + 180, 70);
    // chest body
    fill(199, 201, 200);
    rect(x - 45, y + 250, 90, 10);
    // body
    fill(199, 201, 200);
    rect(x - 25, y + 260, 50, 50);

    // pants
    fill(199, 201, 200);
    rect(x - 25, y + 260, 50, 35);

    // arms
    fill(199, 201, 200);

    rect(x - 45, y + 260, 10, 50);
    rect(x + 35, y + 260, 10, 50);

    // foot/legs
    fill(199, 201, 200);
    rect(x - 15, y + 310, 10, 30);
    rect(x + 5, y + 310, 10, 30);

    noFill();

    // eyes
    fill(255, 255, 0);
    ellipse(x - 20, y + 200, 20);
    ellipse(x + 20, y + 200, 20);
    // Pupils
    ellipse(x - 20, y + 200, 10);
    ellipse(x + 20, y + 200, 10);
    // nose dots
    ellipse(x - 5, y + 210, 2);
    ellipse(x + 5, y + 210, 2);

    // upper teeth
    fill(255, 255, 255);
    rect(x - 30, y + 220, 10);
    rect(x - 20, y + 220, 10);
    rect(x - 10, y + 220, 10);
    rect(x, y + 220, 10);
    rect(x + 10, y + 220, 10);
    rect(x + 20, y + 220, 10);

    // lower teeth
    fill(255, 255, 255);
    rect(x - 30, y + 230, 10);
    rect(x - 20, y + 230, 10);
    rect(x - 10, y + 230, 10);
    rect(x, y + 230, 10);
    rect(x + 10, y + 230, 10);
    rect(x + 20, y + 230, 10);

    // ellipse(x, y + 195, 10);
    fill(199, 201, 200);
    ellipse(x - 40, y + 255, 20);
    ellipse(x + 40, y + 255, 20);
    noFill();

    fill(0, 255, 0);
    rect(ground.x, ground.y, 150, 45);
    noFill();

    if (landingFace) {
      fill(255, 0, 0);
      ellipse(x - 20, y + 200, 20);
      ellipse(x + 20, y + 200, 20);
      // Pupils
      ellipse(x - 20, y + 200, 10);
      ellipse(x + 20, y + 200, 10);
      noFill();
    }

    pop();
    textSize(24);

    text("fuel: " + fuelvar, 20, 50);

    // Uppdatera figurens position baserat på dess hastighet
    y += ySpeed;

    // Lägg till gravitationseffekt om figuren inte är vid marken
    if (y < height - 10) {
      ySpeed += gravity;
    } else {
      // När figuren når marken, nollställ y-hastigheten
      ySpeed = 0;
      mode = 2;
    }
    if (y < height - 8) {
      ySpeed += gravity;
    } else {
      // När figuren når marken, nollställ y-hastigheten
      ySpeed = 0;
      mode = 3;
    }
  }

  //Restarting the Game

  if (mode == 2) {
    text("Perfect landing! Good job", 20, 80);
    text("Press R to restart", 20, 120);
  }

  if (mode == 3) {
    text("You Crashed, try again!", 20, 80);
    text("Press R to restart", 20, 120);
  }
}

function keyPressed() {
  if (keyCode === ENTER && mode === 0) {
    mode = 1;
    ySpeed = 5;
  } else if (key === "ArrowDown" && fuelvar > 0) {
    ySpeed = -0.1;
    fuelvar -= fuelDecrease;
    flames = true;
    landingFace = true; // Sätt flames till true när ArrowDown trycks ned för att visa eldflammor
  } else if (key === "r" && (mode === 2 || mode === 3)) {
    resetGame();
  }
}

function keyReleased() {
  if (key === "ArrowDown") {
    flames = false;
    landingFace = false; // Sätt flames till false när ArrowDown släpps för att dölja eldflammor
  }
}

function resetGame() {
  mode = 0;
  x = 250;
  y = 10;
  ySpeed = 0;
  fuelvar = 100;
  flames = false;
}
