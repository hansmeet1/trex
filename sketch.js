var box;


function setup() {
  createCanvas(400, 400);
  box=createSprite(200,200,50,50)
}

function draw() {
  background(0);

  if(keyDown("RIGHT_ARROW")){
    box.x=box.x+10;
  }
  if(keyDown("LEFT_ARROW")){
    box.x=box.x-10
  }
  if(keyDown("UP_ARROW")){
    box.y=box.y-10
  }
  if(keyDown("DOWN_ARROW")){
    box.y=box.y+10
  }
  drawSprites()
}