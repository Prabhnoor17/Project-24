
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(100,400,20);
	ground = new Ground(400,680,800,20);
	dustbin1 = new dustbin(500, 600, 20, 140);
	dustbin2 = new dustbin(550, 665, 123, 10);
    dustbin3 = new dustbin(600, 600, 20, 140);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
paper.display();
ground.display();

dustbin2.display();
dustbin1.display();
dustbin3.display();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:25, y:-90})
	}
}


