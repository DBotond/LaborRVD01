function LufiLe(x, y, radius) {
    this.body = Bodies.circle(x, y, radius);
    this.radius = radius;
    World.add(world, this.body);

    this.show = function() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(5);
        stroke(255);
        fill(255, 255, 0);
        circle(0, 0, this.radius * 2);
        pop();
    }
}
