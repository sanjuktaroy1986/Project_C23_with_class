const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG,packageIMG;
var packageBody,ground;
var myengine,myworld;
var leftBody,rightBody,bottomBody;
var hx=400;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 600);
	myengine = Engine.create();
	myworld = myengine.world;

  packageBody = Bodies.rectangle(400 , 200 , 40 , 40, {restitution:1, isStatic:true});
  World.add(myworld, packageBody);

  //Create a Ground
  ground=new StaticBody(400, 580, 800, 20)

  //Create leftBody,rightBody,bottomBody
  leftBody=new StaticBody(450,520,20,100);
  rightBody=new StaticBody(650,520,20,100);
  bottomBody=new StaticBody(550,560,200,20);
  
}

function draw() {
	
  background(0);
  Engine.update(myengine);
  
  //draw package
  imageMode(CENTER);
  image(packageIMG,packageBody.position.x,packageBody.position.y,40,40)
 
  //draw helicopter
  imageMode(CENTER);
  image(helicopterIMG,hx,200,250,150);

  //draw ground
  ground.display();
  
  //draw leftBody,rightBody,bottomBody
  fill("red")
  leftBody.display();
  rightBody.display();
  noStroke();
  bottomBody.display();
  
  //move packageBody & helicopter right
  if(keyDown("RIGHT_ARROW")){
    Body.translate(packageBody,{x:5,y:0});
    hx=hx+5;
  }
  
  //move packageBody & helicopter left
  if(keyDown("LEFT_ARROW")){
    Body.translate(packageBody,{x:-5,y:0})
    hx=hx-5;
  }

  //make package fall down
  if(keyDown("DOWN_ARROW")){
	Body.setStatic(packageBody,false);
  }

  }




