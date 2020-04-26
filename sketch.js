var fixedRect, movingRect;
var rect1,rect2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1=createSprite(200,400,40,40);
  rect2=createSprite(300,250,40,40);
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if (touching(movingRect,fixedRect)) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  }
  if (touching(movingRect,rect2)) {
    movingRect.shapeColor = "red";
    rect2.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
  rect2.shapeColor = "green";
  }
  drawSprites();
}
