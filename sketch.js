const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var bin1, bin2, bin3;

function setup() {
	createCanvas(1200, 800);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//bin class structure (x, y, width, height, angle).
	ground = new Ground(200, 780, 2000, 40);
	paper = new paperball(200, 400, 55);
	bin1 = new bin(900, 750, 200, 20 ,PI/2);
	bin2 = new bin(800, 700, 20, 100);
	bin3 = new bin(1000, 700, 20, 100);
	
	Engine.run(engine);
}

function draw() {
  	rectMode(CENTER);
	background(0);
	if (keyDown("UP_ARROW")) {
		Matter.Body.applyForce(paper.body, paper.body.position,{x:85,y:-85})
	}
	paper.display();
	ground.display();
	bin1.display();
	bin2.display();
	bin3.display();
}



