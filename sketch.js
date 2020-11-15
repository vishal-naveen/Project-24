
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1, bin2, bin3;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	bin1 = new Dustbin(1300,650,200,20);
	bin2 = new Dustbin(1200,600,20,100);
	bin3 = new Dustbin(1400,600,20,100);

	ball1 = new Paper(200, 600, 70, 20);

	ground = new Ground(750, 660, 10000, 10);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bin1.display();
  bin2.display();
  bin3.display();

  ball1.display();

  ground.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x: 300, y: -300})
	}
}



