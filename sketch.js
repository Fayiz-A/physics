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

  ground = new Ground(displayWidth/2, displayHeight-100, displayWidth, 40);

  box = new Box(displayWidth/2, displayHeight-400, 50, 50);

  // velocityButton = new Clickable();
  // velocityButton.locate(200, 40);
  // velocityButton.color = 'green';
  // velocityButton.text = 'Change velocity';

  // velocityButton.onPress = function() {
  //   Matter.Body.setVelocity(box.body, {
  //     x: 2,
  //     y: 3
  //   })
  // }

  velocityButton = new PhysicsButton(220, 40, 'Change velocity', () => {
    Matter.Body.setVelocity(box.body, {
      x: 2,
      y: 3
    })
  });

  restitutionButton = new PhysicsButton(320, 40, 'Change Restitution', () => {
    box.body.restitution = 2;
  });  

  angleButton = new PhysicsButton(420, 40, 'Change Angle', () => {
    Matter.Body.setAngle(box.body, box.body.angle+=10)
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

  drawSprites();
}