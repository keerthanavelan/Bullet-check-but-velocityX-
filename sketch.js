var thickness,wall;
var speed,weight,bullet;
var damage;
function setup() {
  createCanvas(1600,400);
  speed = random(223,321)
  weight = random(30,52)
  thickness = random(22,83)
  car = createSprite(50,200,50,50)
  wall = createSprite(1200,200,thickness,height/2)
  bullet.velocityX = speed;
  car.shapeColor = color("paleturquoise")
}
function draw() {
  background(255,255,255);
  deformation = (0.5*weight*speed*speed)/(thickness*thickness*thickness)
  
  if (bullet.collide(wall)){
    bullet.velocityX = 0;
    if (damage < 10){
      wall.shapeColor = color(0, 255, 127);
    }
    if (deformation > 10){
      car.shapeColor = color(255, 99, 71);
    }
    
  }
  drawSprites();
}