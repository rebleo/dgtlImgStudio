let theRandom;

function setup() {
  createCanvas(400, 400);
  theRandom = random(10, 255);
}

function draw() {
  background(220);
  fill(100, 100, theRandom);
  for (var i = 0; i < 7; i++) {
    ellipse(100 * i, 100, theRandom, theRandom);
  }
}
