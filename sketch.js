
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
var bob1,bob2,bob3,bob4,bob5 ; 
var roof ;
var rope1, rope2, rope3, rope4, rope5 ;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 710);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob (320,450,20);
	bob2 = new Bob (360,450,20);
	bob3 = new Bob (400,450,20);
	bob4 = new Bob (440,450,20);
	bob5 = new Bob (480,450,20);

	roof = new Roof (400,250,300,20);

	rope1 = new Rope(bob1.body,roof.body,-80, 10);
    rope2 = new Rope(bob2.body,roof.body,-40, 10);
    rope3 = new Rope(bob3.body,roof.body,0,10);
    rope4 = new Rope(bob4.body,roof.body, 40,10);
    rope5 = new Rope(bob5.body,roof.body,80,10);


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  Engine.update(engine)

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}
function drawLine (constraint) {
	/*bobBodyPosition = constraint.bodyA.position;    
	roofBodyPosition = constraint.bodyB.position;
	roofBodyOffset = constraint.pointB;
	roofBodyX= roofBodyPositiion.x + roofBodyOffset.x;
	roofBodyY= roofBodyPosition.y + roofBodyOffset.y; 
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX, roofBodyY); */    
	//can also be written as 
	 line(constraint.bodyA.position.x, constraint.bodyA.position.y, constraint.bodyB.position.x + constraint.pointB.x, constraint.bodyB.position.y + constraint.pointB.y)      
}

function keyPressed () {
	if (keyCode === UP_ARROW) {
		isStatic : false;
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x: -50, y:-45});
	}
}




