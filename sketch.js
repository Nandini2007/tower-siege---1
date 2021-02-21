
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var backgroundIMG;
var gameState = "onSling"
function preload()
{
   backgroundIMG = loadImage("towerSiegeBackground.gif");
}

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;


	//Create stone and sling
    stone = new Stone(150,300);
    sling = new Sling(stone.body,{x : 150,y:300})

    // create base ground
    baseGround = new Ground(width/2,height,width,100);

    // create level 1 
    groundLevelONE = new Ground(350,190,100,10)
	Engine.run(engine);
  
}


function draw() {
 
  background(backgroundIMG);
 fill("black")
stone.display();
  sling.display();
  baseGround.display();
  groundLevelONE.display();
  drawSprites();
  textSize(20)
  textFont("algerian")
 text("Ant Smasher",width/2,20)
}

function mouseDragged(){
    if(gameState === "onSling"){
          stone.body.position.x = mouseX;
    stone.body.position.y = mouseY;
    }
  
//Matter.body.setPosition(stone.body,{x: mouseX,y: mouseY});
}

function mouseReleased(){
    sling.fly();
    gameState = "hit"
}
function keyPressed(){
    if (keyCode === 32 && gameState != "onSling"){
        sling.attach(stone.body);
         Matter.Body.setPosition(stone.body,{x :150 ,y :300 })
         stone.trajectory = [];
        gameState = "onSling"
    }
}

