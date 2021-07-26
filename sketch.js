
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, paper1, dustbin1, dustbin,  ground, dustbinimage;

function preload(){

	dustbinimage = loadImage("dustbingreen.png")

}

function setup() {
	createCanvas(800, 1700);


	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(100,5,40);
	ground = new Ground(400,650,800,20);

	
   
	dustbin = createSprite(650,555,150,180)
	dustbin.addImage(dustbinimage)
	dustbin.scale = 0.5
	
	leftdustbin = new Dustbin(729,564,10,150)
	rightdustbin = new Dustbin(578,565,10,150)
	bottomdustbin = new Dustbin(650,635,150,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(240);
  
  Engine.update(engine);

  drawSprites();
  ground.display();
  rightdustbin.display();
  paper1.display();
  dustbin.display()
  leftdustbin.display();
  bottomdustbin.display();
 
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paper1.body, paper1.body.position, {x:150,y:-150});
	}
}

