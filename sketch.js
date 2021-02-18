const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;
var basketball;

var attach;

var bin1, bin2, bin3;

var ground;

var hoop;


function preload(){
	backgroundImg = loadImage("background.png");
	hoop = loadImage("hoop.png");
}

function setup() {
	createCanvas(1200, 600);
	engine = Engine.create();
	world = engine.world;

    basketball = new ball(250,350,50)
	
	attach = new Chain(basketball.body,{x:250, y:350});

	//bin1 = new Bin(950,550,230,20);
	//bin2 = new Bin(825,490,20,130);
	//bin3 = new Bin(1075,490,20,130);

	//ground = new Ground(600,580,1200,20);
	
    Engine.run(engine); 

}

function draw() {
	background(backgroundImg);
	image(hoop,800,50,400,300);
	
	textSize(30);
	fill("white")
	text("Press space to restart",400,100)
	
    basketball.display();
	
	attach.display();
	
	//bin1.display();
	//bin2.display();
	//bin3.display();

	//ground.display();
	
}

function mouseDragged(){
	basketball.body.position.x = mouseX;
	basketball.body.position.y = mouseY;
}


function mouseReleased(){
    attach.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(basketball.body,{x:250, y:350});
    attach.attach(basketball.body);
  }
}


