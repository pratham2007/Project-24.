const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let ground;
let box1, box2, box3;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper_options = { 
	 'isStatic':false,
	 'restitution':0.3,
	 'friction':0.5,
	 'density':1.2
    }
   paper =  Bodies.circle(50, 250, 20, paper_options);
   World.add(world, paper);

   ground = new Ground();

   box1 = new Box(550, 605, 20, 100);
   box2 = new Box(635, 645, 150, 20);
   box3 = new Box(720, 605, 20, 100);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);


  ellipseMode(CENTER);
  fill(100, 255, 0);
  ellipse(paper.position.x, paper.position.y, 10*2);

  ground.display();

  box1.display();
  box2.display();
  box3.display();

  drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper, paper.position,{x:50, y:-85});
    }
}
