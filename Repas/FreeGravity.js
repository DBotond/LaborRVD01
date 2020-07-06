var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var world;
var lufik = [];
var tank;
var akadalyok = [];
var pos = 25;

function setup() {
    canvaswidth = 1425;
    canvasheight = 820;
    createCanvas(canvaswidth, canvasheight);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    var options = {
      isStatic: true
    }
    world.gravity.x = 0;
    world.gravity.y = 0;

    tank = new Tank(canvaswidth/2, canvasheight/2, canvaswidth/20, canvaswidth/20);
}

function keyTyped() {
  if(key === ' ') {
    world.gravity.x = 0;
    world.gravity.y = 0;
  }
}

function draw() {
    background(50);
    tank.show();
    if(keyIsDown(UP_ARROW)) {
      lufik.push(new LufiFel(Math.floor(Math.random() * canvasheight) + 300, Math.floor(Math.random() * canvasheight/5) + 100, 15));
      world.gravity.y = -0.5;
    }
    else if (keyIsDown(DOWN_ARROW)) {
    lufik.push(new LufiLe(Math.floor(Math.random() * canvasheight) + 300, Math.floor(Math.random() * canvasheight/5) + 500, 15));
    world.gravity.y = 0.5;
    }
    else if(keyIsDown(LEFT_ARROW)) {
      lufik.push(new LufiBalra(Math.floor(Math.random() * 300) + 100, Math.floor(Math.random() * canvasheight/2) + 200, 15));
      world.gravity.x = -0.5;
    }
    else if (keyIsDown(RIGHT_ARROW)) {
    lufik.push(new LufiJobbra(Math.floor(Math.random() * 300) + 1000, Math.floor(Math.random() * canvasheight/2) + 200, 15));
    world.gravity.x = 0.5;
    }

    for (var i = 0; i < lufik.length; i++) {
          lufik[i].show();
          if (lufik.length > 1500) {
            lufik = [];
          }
        }
    noStroke(255);
    fill(170);
    strokeWeight(4);
    rectMode(CENTER);
}
