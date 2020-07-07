/* global Matter*/
var Engine = Matter.Engine,
    World = Matter.World,
    Body = Matter.Body,
    Bodies = Matter.Bodies,
    Common = Matter.Common,
    Constraint = Matter.Constraint,
    Composites = Matter.Composites,
    MouseConstraint = Matter.MouseConstraint;
    // Gravitáció csúszka
function gravOutputUpdate(id, axis, value) {
  document.getElementById(id).innerHTML = value;
  motor.world.gravity[axis] = value;
}
//alap motor
var motor = Engine.create(document.body, {});
//gömbök kézi vezérlése
var mouseConstraint = MouseConstraint.create(motor);
World.add(motor.world, mouseConstraint);
// gravitáció meghatározása
motor.world.gravity.x = document.getElementById("x-val").innerHTML;
motor.world.gravity.y = document.getElementById("y-val").innerHTML;
// oszlopok
World.add(motor.world, [
    //vizszintes
  Bodies.rectangle(400, 400, 400, 50, { isStatic: true }),
  //függőleges
  Bodies.rectangle(400, 200, 50, 350 , { isStatic: true })
]);
//körök létrehozása hova generálja x,y sorban,oszlopban hány db
var stack = Composites.stack(25, 25,1, /*db*/3,0,0,function(x, y, column, row) {
  return Bodies.circle(x, y, Common.random(40,20));
  /* kezdő lufi értéke, utolsó lufi értéke*/
});
// összetevők hozzáadása
World.add(motor.world, stack);
//futtatás
Engine.run(motor);

