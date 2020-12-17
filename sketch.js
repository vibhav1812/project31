const Bodies = Matter.Bodies;
const Body = Matter.Body;
const World = Matter.World;
const Engine = Matter.Engine;
var engine,world;
var ground;
var particles = [];
var pinkos = [];
var divisions = [];
var divisionHeight = 300;



function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240,790,480,20);

  for(var k = 0; k <= width ; k = k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  for(var j = 40; j <= width; j = j+50){
    pinkos.push(new Pinko(j,75));
  }

  for(var j = 15; j <= width-10; j = j+50){
    pinkos.push(new Pinko(j,175));
  }

  for(var j = 40; j <= width; j = j+50){
    pinkos.push(new Pinko(j,275));
  }

  for(var j = 15; j <= width-10; j = j+50){
    pinkos.push(new Pinko(j,375));
  }

  if(frameCount%60 === 0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }
  
  Engine.run(engine)
}

function draw() {
  background("black");  
  
 
  for(var k = 0; k<divisions.length; k++ ){
    divisions[k].display();
  }


  for(var j = 0; j<pinkos.length; j++ ){
    pinkos[j].display();
  }
  for(var j = 0; j<particles.length; j++ ){
    particles[j].display();
  }

  ground.display();


  

}