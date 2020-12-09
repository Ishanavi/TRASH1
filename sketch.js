
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1,bin2,bin3,paper1,ground1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	bin1 = new Bin(900,550,200,20)
	bin2 = new Bin(810,510,20,100)
	bin3 = new Bin(990,510,20,100)
	paper1 = new Paper(250,555,30)
	ground1 = new Ground(600,560,1300,10)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bin1.display();
  bin2.display();
  bin3.display();
  paper1.display();
  ground1.display();
 
}

function keyPressed()
{
    if(keyCode === UP_ARROW)
    {
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-95})
    }
}

