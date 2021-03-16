const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function preload(){
  
}
function setup() { 
  createCanvas(480,740);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 785, 680, 110);

  for (var i = 0; i <= width; i = i + 80){
    divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight));
  }

  //create plinko bodies
  for (var j = 15; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 100));
  }
  for (var j = 40; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 175));
  }
  for (var j = 15; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,250));
  }
  for (var j = 40; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 325));
  }


  
  
}

function draw() {
  Engine.update(engine);
  background('black');
  
  if (frameCount % 40 === 0){
    particles.push(new Particle(random(width/2-20, width/2+20), 10, 10));
  }

  ground.display();
  
  for (var k = 0; k < particles.length; k++){
    particles[k].display();
  }

  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  for (var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }

  drawSprites();
  
  
}

