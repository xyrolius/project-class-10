var ship, ship_running, edges;
var seaImage;

function preload(){
  ship_floating = loadAnimation("ship.png 1","ship.png 2","ship.png 3"ship.png 4");
  seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(600,200);
  
  
  ship = createSprite(50,160,20,50);
  ship.addAnimation("floating", ship_floating);
  sea=createSprite(200,180,400,20)
  sea.addImage(sea image)
  
  ship.scale = 0.5;
  ship.x = 50
}


function draw(){
 
  background("white");
  
  
  console.log(ship.y)
  
  
  if(keyDown("space")){
    ship.velocityY = -10;
  }
  sea.velocityX=-2;
  ship.velocityY = trex.velocityY + 0.5;
  if(sea.x<0){
    sea.x=sea.width/2;
  }

  ship.collide(sea)
  drawSprites();
}