var bullet, wall, thickness;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50,200,50,20);

  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  speed = random(223,321);
  weight = random(30,52);

  bullet.velocityX=speed;
}

function draw() {
  background("white");  

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if(damage >10){
      wall.shapeColor = color(255,0,0);
    }else if(damage <10 ){
      wall.shapeColor = color(0,255,0);
    }
  }
  
  drawSprites();
}

function hasCollided(bullet, wall){
  var bulletRightEdge = bullet.x+bullet.width/2;
  var wallLeftEdge = wall.x-wall.width/2;
  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }else{
    return false;
  }
}