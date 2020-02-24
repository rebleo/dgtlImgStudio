let theClass = ["Shailee", "Amber", "Nancy", "Sumin", "Yiwei", "Tangent", "Shi", "Cara", "Mohit"];
console.log("js!");
var theNumber = 30;
var theOther = 70;
console.log(theNumber + theOther)

function setup() {
  createCanvas(windowWidth, windowHeight);
  // call the randomizing function
  theShuffle();
  // console.log(theClass);
}

function draw() {
  background(0, 200, 200);
  fill(250, 250, 250);
  textSize(24)
  text("the presentation order is:", 10, windowHeight - 200);
  for (let i = 0; i < theClass.length; i++) text(i + " " + theClass[i], 50, 30 * i + 100);
}
// this function uses native js + es6 arrow notation to randomize the
function theShuffle() {
  theClass.sort(() => Math.random() - 0.5);
}
