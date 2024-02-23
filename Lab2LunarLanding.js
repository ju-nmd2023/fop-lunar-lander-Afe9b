let x = 250; // x-position for the robot
let y = 10; // y-position for the robot
let ySpeed = 0; //
let xSpeed = 0; //
const gravity = 0.015; // gravity
const xAcceleration = 3; // acceleration when the right/left arrows are pressed
const xDeceleration = 3; // deceleration acceleration when the right/left arrows are release
let mode = 0;
let fuelvar = 100;
let fuelDecrease = 0.5; // Reduction Speed ​​for "Robot fuel"
let flames = false; // variable to keep track of whether flames should show or not
let landingFace = false; //variable to keep track of whether robot landing face should show or not
let img; //variable for img

let ground = {
  //Landing platform
  x: 425,
  y: 1175,
};

let starX = [];
let starY = [];
let starAlpha = [];
let arrowDownPressed = false; // Flagga för att indikera om piltangenten ArrowDown hålls ned

function preload() {
  img = loadImage("image/robot.png");
  img2 = loadImage("image/Perfect Landning.png");
  img3 = loadImage("image/YouCrashed.png");
}

function setup() {
  createCanvas(800, 850);
  //cite from Garrit starts Video
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
  //start screen
  if (mode == 0) {
    background(0);
    fill(255, 0, 0);
    textSize(25);
    textAlign(CENTER, CENTER);
    text("Press enter to start", 400, 400);
    fill(255, 0, 0);
    textSize(20);
    text("Land the robot gentle on the landing platform", 400, 350);
    image(img, 50, 200, 700, 120);
  } else if (mode == 1) {
    //game starts
    drawStars();
    push();
    translate(150, -400);

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
    fill(199, 201, 200);
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

    //The Planet surface
    fill(153, 79, 5);
    rect(-150, 1175, 800, 100);
    noFill();
    //Landing platform
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
    textSize(30);

    text("Robot Fuel: " + fuelvar.toFixed(0), 400, 30); // Bränslet visas med två decimaler

    // Update the robots position based on the speed.
    y += ySpeed;
    x += xSpeed;

    // Decreasing the fuel if key ArrowDown is pressed and fuel is greater than 0.
    if (arrowDownPressed && fuelvar > 0) {
      fuelvar -= fuelDecrease;
      ySpeed = -0.5;
    }

    // Add gravity if the robot is not on the ground.
    if (y < height - 12) {
      //12
      ySpeed += gravity;
    } else {
      // When the robot hit the ground, y-speed reset to 0.
      ySpeed = 0;
      if (x < ground.x || x > ground.x + 150) {
        mode = 3; //If robot dont land inside the landing platform "ground.x" you crashed
      } else {
        mode = 2;
      }
      if (y < height - 11) {
        //11
        ySpeed += gravity;
      } else {
        // When the robot hit the ground, y-speed reset to 0.
        ySpeed = 0;
        mode = 3;
      }
    }
  }

  //Restarting the Game
  if (mode == 2) {
    image(img2, 50, 170, 700, 120);
    //text("Perfect landing! Good job", 250, 80);
    text("Press enter to play again", 400, 320);
  }

  if (mode == 3) {
    image(img3, 50, 170, 700, 120);
    //text("You Crashed, try again!", 250, 80);
    text("Press enter to play again", 400, 320);
  }
}

function keyPressed() {
  if (keyCode === ENTER && mode === 0) {
    mode = 1;
    ySpeed = 10; // RObot falling when the game starts
  } else if (key === "ArrowDown") {
    arrowDownPressed = true; // When ArrowDown is pressed, flames and Landingface will show
    flames = true; //show flames
    landingFace = true; // show landing face
  } else if (keyCode === RIGHT_ARROW) {
    // controll the robots x position with key RightArrow and LeftArrow
    xSpeed = xAcceleration;
  } else if (keyCode === LEFT_ARROW) {
    xSpeed = -xAcceleration;
  } else if (keyCode === ENTER && (mode === 2 || mode === 3)) {
    // After game results "perfect Landing" or "you crashed" amd press ENTER, game will resets
    resetGame();
  }
}

function keyReleased() {
  if (key === "ArrowDown") {
    arrowDownPressed = false; // When ArrowDown is released. the flame and landing face disapear
    flames = false; //Hide flames
    landingFace = false; //Hide Landing face
  } else if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW) {
    xSpeed = 0; // When Arrow left and right release, the x-speed resets
  }
}

//Resetting the game to deafult, and landing platform "ground x" get a random position
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
//Background stars
function drawStars() {
  background(0, 0, 0);
  //cite from Garrit starts Video
  fill(255, 255, 255);
  for (let index in starX) {
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], 2);
    starAlpha[index] = starAlpha[index] + 0.02;
  }
}
