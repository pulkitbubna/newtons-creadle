
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var world;
var roof;
var bob1,bob2,bob3,bob4,bob5,bob6;
var string1,string2,string3,string4,string5,string6;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new paper(250,600,20);
bob2 = new paper(280,600,20);
bob3 = new paper(310,600,20);
bob4 = new paper(340,600,20);
bob5 = new paper(370,600,20);
bob6 = new paper(400,600,20);
roof = new ground(340,200,150,20);	
string1 = new chain(bob1.body,roof.body,250,200);
string2 = new chain(bob2.body,roof.body,280,200);
string3 = new chain(bob3.body,roof.body,310,200);
string4 = new chain(bob4.body,roof.body,340,200);
string5 = new chain(bob5.body,roof.body,370,200);
string6 = new chain(bob6.body,roof.body,400,200);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  roof.display();
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
  string6.display();
  
    drawSprites();
 
}



