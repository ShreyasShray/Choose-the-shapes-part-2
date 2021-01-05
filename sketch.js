var square, square_image;
var circle, circle_image;
var triangle, triangle_image;
var mainShape;
var squareEnemy;
var triangleEnemy;
var circleEnemy;
var mainShapeState = "square";

function preload(){
  square_image = loadImage("rectangle.png");
  circle_image = loadImage("circle.png");
  triangle_image = loadImage("triangle.png");
}


function setup() {
  createCanvas(800,600);
  square = createSprite(140, 520, 40, 40);
  square.addImage(square_image);

  circle = createSprite(400, 520, 40, 40);
  circle.addImage(circle_image);

  triangle = createSprite(660, 520, 40, 40);
  triangle.addImage(triangle_image);

  mainShape = createSprite(400, 380, 40, 40);
  mainShape.addImage(square_image);

}

function draw() {
  background("grey");

  push();
  strokeWeight(10);
  line(0, 440, 800, 440);
  pop();

  if(mousePressedOver(circle)){
    mainShapeState = "circle";
    mainShape.addImage(circle_image);
  }

  if(mousePressedOver(triangle)){
    mainShapeState = "triangle";
    mainShape.addImage(triangle_image);
  }

  if(mousePressedOver(square)){
    mainShapeState = "square";
    mainShape.addImage(square_image);
  }

  textSize(18);
  fill("black");
  stroke("black");
  text("Click on the shapes given at the bottom", 30, 20);
  
  drawSprites();
}