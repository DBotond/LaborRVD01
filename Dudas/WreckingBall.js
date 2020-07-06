var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Mouse = Matter.Mouse,
    Constraint = Matter.Constraint,
    MouseConstraint = Matter.MouseConstraint;

var engine;
var world;
var box1;
var b1;
var b2;

var ground;
var leftWall;
var rightWall;
var ceiling;
var targetLower;
var targetHigher;
var targetCeiling;
var obstacle;
var boxes = [];
var balls = [];

var options;
var constraint;
var mConstraint;


function setup() {
  var canvas = createCanvas(1350, 630);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Boundaries(200, height-2, width*2, 10);
  leftWall = new Boundaries(1, height/2, 10, height);
  rightWall = new Boundaries(width-2, height/2, 20, height);
  lowerTarget = new Boundaries(width*0.8, height, 30, height);
  upperTarget  = new Boundaries(width*0.8, 1, 30, height-100);
  targetCeiling = new Boundaries(width*0.8+((width - width*0.8)/2), 2, 300, 10);
  //ceilingWall = new Boundaries(200, height-10, width*2, 10);
  obstacle = new Boundaries(400, -300, 60, 80);

    for (var i = 0; i < 12; i++) {
        boxes.push(new Box(570, 200, 45, 45));
        boxes.push(new Box(510, 200, 45, 45));
        boxes.push(new Box(630, 200, 45, 45));
    }
  b1 = new Ball(300, 100, 10, true);
  b2 = new Ball(300, 500, 70);

  balls.push(b1);
  balls.push(b2);

  constraint = Constraint.create(options = {
                                             bodyA: b1.body,
                                             bodyB: b2.body,
                                             length: 350,
                                             stiffnes: 0.2,
                                             damping: 1
                                           }
  );
  canvasMouse = Mouse.create(canvas.elt);
  canvasMouse.pixelRatio = pixelDensity();
  mConstraint = MouseConstraint.create(engine, options ={
                                                            mouse: canvasMouse
                                                        }
  );

  World.add(world, ground);
  World.add(world, constraint);
  World.add(world, mConstraint);
}

function draw() {
  background(51);
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].show();
    }
    fill(170);
    rectMode(CENTER);
    ground.show();
    b1.show();
    b2.show();
    leftWall.show();
    rightWall.show();
    lowerTarget.show();
    upperTarget.show();
    obstacle.show();
    targetCeiling.show();
    line(b1.body.position.x, b1.body.position.y, b2.body.position.x, b2.body.position.y);
    stroke(255,255,255);
}
