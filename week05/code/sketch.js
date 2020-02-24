console.log("js!");
let theImage;

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
