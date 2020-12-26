
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObj1, bobObj2, bobObj3, bobObj4, bobObj5;
var roof;
var rope1, roeppe2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObj1 = new Bob(190, 300, 10);
	bobObj2 = new Bob(200, 300, 10);
	bobObj3 = new Bob(210, 300, 10);
	bobObj4 = new Bob(220, 300, 10);
	bobObj5 = new Bob(230, 300, 10);
	roof = new Roof(400, 350, 800, 20);
	rope1 = new Rope(bobObject1.body, roof.body, bobDiameter*2, 0);
	rope2 = new Rope(bobObject2.body, roof.body, bobDiameter*2, 0);
	rope3 = new Rope(bobObject3.body, roof.body, bobDiameter*2, 0);
	rope4 = new Rope(bobObject4.body, roof.body, bobDiameter*2, 0);
	rope5 = new Rope(bobObject5.body, roof.body, bobDiameter*2, 0);
	

		//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(keyCode==UP_ARROW){
	  Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:30, y:10});
  }
  
  drawSprites();
 
}



