var ballx = (100, 900);
var bally = (100,900);
var ballSize = 80;
var score = 0;
var gameState = "L1";
var bg, img;

function preload() {
  bg = loadImage('jade_bkgd.png');
  img = loadImage('ball.png');
  font = loadFont('libraries/silkscreen/silkscreen-regular.ttf');
}

function setup() {
  createCanvas(1000, 1000);
  textAlign(CENTER);
  textFont(font);
  textSize(50);
  fill(255, 255, 255, 200);
}

function draw() {
  background(bg);
  if (gameState == "L1") {
    levelOne();
  }
  if (gameState == "L2") {
    levelTwo();
  }
  if (gameState == "L3") {
    levelThree();
  }
  if (gameState == "L4") {
    levelFour();
  }
  text(("Score: " + score), 500, 100);
}

function levelOne() {
  text("Level One", 500, height - 100);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize) {
    ballx = random(0, 950);
    bally = random(0, 950);
    score = score + 1;
  }
  if (score > 5) {
    gameState = "L2";
  }
  image(img, ballx, bally, ballSize, ballSize);
}

function levelTwo() {
  background(bg);
  text("Level Two", 500, height - 100);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize) {
    ballx = random(0, 960);
    bally = random(0, 960);
    ballSize = ballSize - 3
    score = score + 1;
  }
  if (score > 10) {
    gameState = "L3";
  }
  image(img, ballx, bally, ballSize, ballSize);
}

function levelThree() {
  background(bg);
  text("Level Three", 500, height - 100);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize) {
    ballx = random(0, 975);
    bally = random(0, 975);
    ballSize = ballSize - 5
    score = score + 1;
  }
  if (score > 15) {
    gameState = "L4";
  }
  image(img, ballx, bally, ballSize, ballSize);
}

function levelFour() {
  background(bg);
  text("Level Four", 500, height - 100);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize) {
    ballx = random(0, 975);
    bally = random(0, 975);
    ballSize = ballSize - 7
    score = score + 1;
  }
  if (score > 20) {
  }
  image(img, ballx, bally, ballSize, ballSize);
}