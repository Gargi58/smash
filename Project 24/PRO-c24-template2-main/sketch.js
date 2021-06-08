const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;

function preload()
{
    bg = loadImage("Ground.jpg")
}
function setup()
{
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    rubber1 = new Rubber(900,100,30);
    iron1 = new Iron(500,0);
    plane = new Plane(600,590,1200,20)
    hammer = new Hammer(10,100);
    stone1 = new Stone(700,100);
   
   
  


}

function draw(){
    background(bg);
    Engine.update(engine);


    plane.display();
    hammer.display();
    iron1.display();
    stone1.display();
    rubber1.display();
    
 
}