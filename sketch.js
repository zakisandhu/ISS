//add variables
var astronaut;

var bathImg;

var drinkImg;

var  brush;

var eatImg;

var gym2Img;

var moveImg;

var sleepImg

var ISS, ISSImg;

function preload(){

  // interconnect the var to the images
  bathImg = loadAnimation("bath1.png", "bath2.png");

  drinkImg = loadAnimation("drink1.png", "drink2.png");

  eatImg = loadAnimation("eat1.png", "eat2.png");

  gym2Img = loadAnimation("gym11.png", "gym12.png");

  moveImg = loadAnimation("move.png", "move1.png");

  sleepImg = loadImage("sleep.png");

  ISSImg = loadImage("iss.png");

}


function setup() {
  createCanvas(400, 400);

  //create Sprites

  ISS = createSprite(200,200,400,400);
  ISS.addImage(ISSImg);
  ISS.scale = 0.109;

  astronaut = createSprite(200,300,10,10);
  astronaut.addImage(sleepImg);
  astronaut.scale = 0.05;

}

function draw() {
  background(220);

  //add controls
  if(keyDown(UP_ARROW)){
    astronaut.addAnimation("bath", bathImg);
    astronaut.changeAnimation("bath");
  }

  if(keyDown(DOWN_ARROW)){
    astronaut.addAnimation("drink", drinkImg);
    astronaut.changeAnimation("drink");
  }

  if(keyDown(LEFT_ARROW)){
    astronaut.addAnimation("eat", eatImg);
    astronaut.changeAnimation("eat");
  }

  if(keyDown(RIGHT_ARROW)){
    astronaut.addAnimation("gym", gym2Img);
    astronaut.changeAnimation("gym");
  }

  if(keyDown('M')){
    astronaut.addAnimation("moving", moveImg);
    astronaut.changeAnimation("moving");
  }


  drawSprites();
  
  //add instuctions
  fill("white")
  //textSize(25)
  stroke("black")
  strokeWeight(3)
  text("Instructions:",0,30);
  text("Right arrow = gym session",0,50);
  text("Left arrow = eating",0,70);
  text("Down arrow = drink",0,90);
  text("'m' arrow = moving around",0,110);


}

