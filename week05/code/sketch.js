console.log("js!");
let theImage;
let theVariable = 100;
let theOther = "string"
let theArray = ["data", "structures", 100]

function preload() {
  theImage = loadImage("globe.png");
}

function setup() {
  console.log("p5!");
  createCanvas(windowWidth, windowHeight);
  console.log(windowHeight)
}

function draw() {
  background(100, 100, 100);
  image(theImage, 100, 100, 100, 100)
}
