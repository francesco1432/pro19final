var spaceship, spaceshipImg;
var meteorImg, meteor, meteorGroup;
var space, spaceImg;
var gamestate = "PLAY"
var gamestate = "END"
 
function preload(){
spaceImg = loadImage("download (1).jpg");
meteorImg = loadImage("download (2).png");
spaceshipImg = loadImage("download (1).png");

}

function setup() {
    createCanvas(600, 600);
    space = createSprite(300,300);
    space.addImage("space",spaceImg);
    space.velocityY = 1.5;
    space.scale=0.2;

    spaceship = createSprite(200,200);
    spaceship.addImage("spaceship",spaceshipImg);
    spaceship.scale=0.2;

    meteorGroup=new Group();
}

function draw() {
 backround(200);
 spaceship.y = World.mouseY
    spaceship.x = World.mouseX
 if(gameState==="PLAY"){
   
  
    if(space.y > 500){
        space.y = 300
      }
      if(meteorGroup.isTouching(spaceship)||spaceship.y>600){
        spaceship.destroy();
        gameState="END"
      }
      drawSprites();
      spawnMeteors();
}
if(gameState==="END"){
    fill("blue");
    textSize(50);
    text("Gameover",300,300);
  }
  drawSprites();
}

function spawnMeteors(){
    if(frameCount % 100===0){
      meteor = createSprite(200,50);
      meteor.addImage("meteor",meteorImg);
      meteor.scale=0.2;
    meteor.x=Math.round(random(50,550));
    meteor.velocityY=1.2;
    meteor.lifetime=600;
    meteorGroup.add(meteor);
    }
}
