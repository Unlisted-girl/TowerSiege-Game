const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7;

var stand1, stand2;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
 // createSprite(400, 200, 50, 50);

  stand1 = new Ground(340, 340, 250, 15);

  sqr = new Ground(150, 200, 20,20);

  block1 = new Block(250+5, 340-20-10, 30, 40);
  block2 = new Block(283+5, 340-20-10, 30, 40);
  block3 = new Block(316+5, 340-20-10, 30, 40);
  block4 = new Block(349+5, 340-20-10, 30, 40);
  block5 = new Block(382+5, 340-20-10, 30, 40);
  block6 = new Block(415+5, 340-20-10, 30, 40);
}

function draw() {
  background("black");  
  drawSprites();

  stand1.display();
  sqr.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
}