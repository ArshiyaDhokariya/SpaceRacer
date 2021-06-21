var player , playerimg;
var obstacles , obstacleimg;
var bg,bgimg ;
var spaceshuttle , spsimg ; 
var asteroidGroup , SSPgroup , bulletGroup ;



function setup() {
  
  createCanvas(800,800);
  bg = createSprite(0,800,50,800)
  bg.addImage(bgimg);
  bg.scale = 2.3 ; 
 bg.velocityY = 4;
 
 player =createSprite(400,750 )
 player.addImage(playerimg)
 player.debug = true
 player.setCollider("rectangle",180,-60,80,150)

 asteroidGroup = new Group()
 bulletGroup = new Group()
 SSPgroup = new Group()


}
function preload(){
playerimg = loadImage("1.png");
obstacleimg = loadImage("ast1.png");
bgimg = loadImage("4.jpg"); 



}

function draw() {
  background(0);
  fill("white")
  
  console.log(bg.y)
  if (bg.y>800){
 bg.y =height /2

  } 
  if(keyWentDown("b")) 
  {
    spawnBullets();
  }
player.x = mouseX;
//player.y = mouseY ;

spawnAsteroids();
spawnSSP();

  drawSprites();
  text(mouseX+","+mouseY , mouseX,mouseY)
}
function spawnAsteroids(){
  if(frameCount%60 === 0  ){
    var asteroids = createSprite (random(50,750),random(50,100),10,10)
    asteroids.addImage(obstacleimg)
    asteroids.scale = 0.25;
    asteroids.velocityY = random(3,8);
    asteroids.velocityX =  random(-3,-8);
    asteroidGroup.add(asteroids)
    asteroids.lifetime = 233.3 
    
  }
}

  function spawnSSP(){
    if (frameCount%80=== 0)
  {
     spaceshuttle = createSprite (random(50,750),random(50,100),15,15);
     spaceshuttle.velocityY = 4
     SSPgroup.add(spaceshuttle)
     spaceshuttle.lifetime = 234;
  }
  }
 
  function spawnBullets()
  {
    var bullet = createSprite(100,600,10,10)
    bullet.x = player.x;
    bullet.velocityY = -6
    bulletGroup.add(bullet)
    bullet.lifetime = 234;
  }






