var fixedRect,movingRect;
var rect1,rect2;

function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(700, 200, 80, 30);
  movingRect.velocityX=3;
  fixedRect.velocityX=-3;

  rect1=createSprite(600,150,40,50);
  rect2=createSprite(600,400,70,40);
}

function draw() {
  background(255,255,255);  
  rect1.x=World.mouseX;
  rect1.y=World.mouseY;

  if(isTouching(rect1,rect2)) {
    rect1.shapeColor="blue";
    rect2.shapeColor="red";
  }
  else{
    rect1.shapeColor="yellow";
    rect2.shapeColor="purple";

  }
  bounceOff(fixedRect,movingRect);


  drawSprites();
}
