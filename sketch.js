const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box, ground;

//buttons
var velocityButton, restitutionButton,  angleButton;

function setup() {
  var canvas = createCanvas(displayWidth, displayHeight);
  engine = Engine.create();
  world = engine.world;

  angleMode(RADIANS);

  ground = new Ground(displayWidth/2, displayHeight-100, displayWidth, 40);

  box = new Box(displayWidth/2, displayHeight-500, 50, 50);

  velocityButton = new PhysicsButton(220, 40, 'Change velocity', () => {
    Matter.Body.setVelocity(box.body, {
      x: 2,
      y: 3
    })
  });

  restitutionButton = new PhysicsButton(460, 40, 'Change Restitution', () => {
    box.body.restitution == 2 ? box.body.restitution = 0.1:box.body.restitution = 2;
  });  

  angleButton = new PhysicsButton(700, 40, 'Change Angle', () => {
    Matter.Body.setAngle(box.body, box.body.angle+10)
  });

  airFrictionButton = new PhysicsButton(220, 120, 'Change Air Friction', () => {
    print(box.body.frictionAir)
    box.body.frictionAir == 0.01 ? box.body.frictionAir = 0.1:box.body.frictionAir = 0.01
  });

  massButton = new PhysicsButton(460, 120, 'Change Mass', () => {
    print('mass =' + box.body.mass)

    box.body.mass == 5.0 ? box.body.mass = 0.1:box.body.mass = 5.0
  });
}

function draw() {
  background(0);

  Engine.update(engine);

  ground.display();

  box.display();

  velocityButton.display();
  restitutionButton.display();
  angleButton.display();
  airFrictionButton.display();
  massButton.display();

  drawSprites();
}