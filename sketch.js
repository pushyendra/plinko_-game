const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;



function preload() {

}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,490,600,10)

    // for(var k=0;k<=innerWidth;k = k +80){
    //   divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
    // }


}

function draw(){
    background(170)
    Engine.update(engine);
      
    ground.display();
drawSprites();
}
