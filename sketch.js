const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var bin
var ground;
var rb,lb, bb;

function preload()
{
	
}

function setup() {
	createCanvas(900, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground (450, 580, 900, 40)
	ball=new PaperBall(100,500,50);
	rb=new Box(810,510,20,100);
	lb=new Box(590,510,20,100);
	bb=new Box(700,550,200,20);
	bin = new Bin(700,400,130,175);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("White");
  ball.display();
	ground.display();
	rb.display();
  	lb.display();
  	bb.display();
	bin.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-150})
	}
}



