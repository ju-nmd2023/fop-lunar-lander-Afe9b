let x = 250;
let y = 10;
let ySpeed = 0;
let xSpeed = 0;
const gravity = 0.015;
const xAcceleration = 3;
const xDeceleration = 3;
let mode = 0;
let fuelvar = 100;
let fuelDecrease = 0.5;
let flames = false;
let landingFace = false;
let img;

let ground = {
  x: 175,
  y: 1175,
};

let starX = [];
let starY = [];
let starAlpha = [];
let arrowDownPressed = false;

function preload() {
  img = loadImage("image/robot.png");
  img2 = loadImage("image/Perfect Landning.png");
  img3 = loadImage("image/YouCrashed.png");
}

function setup() {
  createCanvas(500, 850);

  for (let i = 0; i < 500; i++) {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    const alpha = Math.random();

    starX.push(x);
    starY.push(y);
    starAlpha.push(alpha);
  }
}

function draw() {
  // Draw stars as background
  if (mode == 0) {
    background(0);
    fill(255, 0, 0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Press enter to start", 250, 250);
    image(img, 50, 140, 400, 100);
  } else if (mode == 1) {
    drawStars();
    push();
    translate(-2, -400); //-400 at start

    // Draw the robot and other elements...
    stroke(0);
    strokeWeight(3);

    if (flames) {
      fill(255, 0, 0);
      triangle(x - 45, y + 300, x - 35, y + 300, x - 40, y + 380); // Vänster arm
      triangle(x + 35, y + 300, x + 45, y + 300, x + 40, y + 380); // Höger arm

      triangle(x - 15, y + 300, x - 5, y + 300, x - 10, y + 430);
      triangle(x + 5, y + 300, x + 15, y + 300, x + 10, y + 430);
      noFill();
    }

    // helmet on head
    fill(199, 201, 200);
    ellipse(x, y + 195, 130);
    //Glass for helmet
    fill(180, 180, 200);
    ellipse(x, y + 205, 105);
    // face
    fill(3, 255, 74);
    rect(x - 35, y + 180, 70);

    // Chest body color
    fill(180, 180, 200);
    rect(x - 45, y + 250, 90, 10);

    // body
    fill(199, 201, 200);
    rect(x - 25, y + 260, 50, 50);

    // Jaws
    fill(180, 180, 200);

    rect(x - 35, y + 220, 70, 30);

    // pants
    fill(199, 201, 200);
    rect(x - 25, y + 260, 50, 35);

    // Small chest details
    fill(180, 180, 200);
    rect(x - 20, y + 260, 40, 5);

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

    fill(153, 79, 5);
    rect(0, 1175, 500, 500);
    noFill();

    fill(194, 188, 188);
    rect(ground.x, ground.y, 150, 15);

    noFill();

    if (landingFace) {
      fill(255, 0, 0);
      ellipse(x - 20, y + 200, 20);
      ellipse(x + 20, y + 200, 20);
      // Pupils
      ellipse(x - 20, y + 200, 10);
      ellipse(x + 20, y + 200, 10);
      //teeth
      fill(255, 0, 0);
      rect(x - 30, y + 220, 10);
      rect(x - 20, y + 220, 10);
      rect(x - 10, y + 220, 10);
      rect(x, y + 220, 10);
      rect(x + 10, y + 220, 10);
      rect(x + 20, y + 220, 10);

      // lower teeth
      fill(255, 0, 0);
      rect(x - 30, y + 230, 10);
      rect(x - 20, y + 230, 10);
      rect(x - 10, y + 230, 10);
      rect(x, y + 230, 10);
      rect(x + 10, y + 230, 10);
      rect(x + 20, y + 230, 10);
      noFill();
    }

    pop();
    textSize(24);

    text("Robot Fuel: " + fuelvar.toFixed(0), 250, 30);

    y += ySpeed;
    x += xSpeed;

    if (arrowDownPressed && fuelvar > 0) {
      fuelvar -= fuelDecrease;
      ySpeed = -0.5;
    }

    if (y < height - 12) {
      ySpeed += gravity;
    } else {
      ySpeed = 0;
      if (x < ground.x || x > ground.x + 150) {
        mode = 3;
      } else {
        mode = 2;
      }
    }
  }

  if (mode == 2) {
    image(img2, 50, 140, 400, 100);

    text("Press R to restart", 250, 120);
  }

  if (mode == 3) {
    image(img3, 50, 140, 400, 100);

    text("Press R to restart", 250, 120);
  }
}

function keyPressed() {
  if (keyCode === ENTER && mode === 0) {
    mode = 1;
    ySpeed = 10;
  } else if (key === "ArrowDown") {
    arrowDownPressed = true;
    flames = true;
    landingFace = true;
  } else if (keyCode === RIGHT_ARROW) {
    xSpeed = xAcceleration;
  } else if (keyCode === LEFT_ARROW) {
    xSpeed = -xAcceleration;
  } else if (key === "r" && (mode === 2 || mode === 3)) {
    resetGame();
  }
}

function keyReleased() {
  if (key === "ArrowDown") {
    arrowDownPressed = false;
    flames = false;
    landingFace = false;
  } else if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW) {
    xSpeed = 0;
  }
}

function resetGame() {
  mode = 0;
  x = 250;
  y = 10;
  ySpeed = 0;
  xSpeed = 0;
  fuelvar = 100;
  flames = false;
  ground.x = random(50, 350);
}

function drawStars() {
  background(0, 0, 0);

  fill(255, 255, 255);
  for (let index in starX) {
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], 2);
    starAlpha[index] = starAlpha[index] + 0.02;
  }
}
