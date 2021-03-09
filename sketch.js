
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
 	
}

function setup() 
{
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,height,1200,20)
	Dust1= new Dustbin(600,680,200,20);
	Dust2=new Dustbin(500,615,20,150);
    Dust3=new Dustbin(700,615,20,150);

   
	paper= new Paper (100,600,50);

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background(0);

  
  
  drawSprites();
 paper.display();
 ground.display();
 Dust1.display();
 Dust2.display();
 Dust3.display();
}

function keyPressed()
{

	if(keyCode === UP_ARROW) 
	{

   Matter.Body.applyForce(paper.body,paper.body.position,{x:400,y:-400});

	}



}

