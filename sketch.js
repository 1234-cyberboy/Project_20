var car, wall;
var speed, weight;
var deformation;

function setup() {
  
  createCanvas(windowWidth, windowHeight);

  speed = random(55, 90);
  weight = random(400, 1500);
  
  
  car = createSprite(50, 200, 50, 50);

  car.velocityX = speed;

  car.shapeColor = color(50,60,70);

  wall = createSprite(windowWidth-300, 200, 60, windowHeight/2);
  wall.shapeColor = color(80,60,120);
}

function draw() {
  background(255,255,255);  
  
  if(wall.x-car.x < (car.width + wall.width)/2){
    car.velocityX = 0;
    deformation = 0.5 * weight * speed * speed / 22500;

    if(deformation > 180){
      car.shapeColor = color(255, 0, 0);
    }

    if(deformation <= 180 && deformation > 100)  {
      car.shapeColor = color(230, 230, 0);
    }

    if(deformation <= 100)  {
      car.shapeColor = color(0, 255, 0);
    }
  }
  
  drawSprites();
}