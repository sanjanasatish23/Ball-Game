
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1;
var box, box1, box2
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new ground(width/2,670,width,20);
	paper1 = new Paper(200,450,20,20);
	dustbin = new dustbin(1200,650);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground1.display();
  paper1.display();
  dustbin.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
	}
}

