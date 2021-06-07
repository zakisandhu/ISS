//add variables
var bath, drink, brush, eat, gym, gym2, move, sleep;
var ISS, ISSImg;

function preload(){
  // interconnect the var to the images
  bath = loadAnimation("bath1.png", "bath2.png");

  drink = loadAnimation("drink1.png", "drink2.png");

  brush = loadImage("brush.png");

  eat = loadAnimation("eat1.png", "eat2.png");

  gym = loadAnimation("gym1.png", "gym2.png");

  gym2 = loadAnimation("gym11.png", "gym12.png");

  move = loadAnimation("move.png", "move1.png");

  sleep = loadImage("sleep.png");

  ISSImg = loadImage("iss.png");

}


function setup() {
  createCanvas(400, 400);

  //create Sprites
  ISS = creatSprite(200,200,400,400);
  ISS.addImage(ISSImg);




}

function draw() {
  background(220);

  drawSprites();


}