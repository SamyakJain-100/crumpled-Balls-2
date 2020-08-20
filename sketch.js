
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world, engine ;
var  ground;
var rect1,rect2,rect3;
var paper1 ;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	
	
	paper1 = new Paper(200,200,0,0)
	ground= new Ground(200,height,400,20);
	

	rect1 =createSprite(500,600,20,100)
	rect1.shapeColor ="white";
	rect2 =createSprite(680,600,20,100)
	rect2.shapeColor ="white";
	rect3 =createSprite(590,650,160,20)
	rect3.shapeColor ="white";
    
	
	
   
	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
 
	rectMode(CENTER);
  background(0);
  rectMode(CENTER);
    ellipseMode(RADIUS);
	ellipse(100,650,10,10);
	paper1.display();
	ground.display();
	rect1.display();
	rect2.display();
	rect3.display();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   // Look at the hints in the dsocument and understand how to make the package body fall only on
	   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85, y:-85});

   
   
	 }
   }


