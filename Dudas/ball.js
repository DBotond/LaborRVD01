function Ball(x, y, r, fixed){
    var options = {
        friction: 0,
        restitution: 0.95,
        isStatic: fixed
    };
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
    
    World.add(engine.world, this.body);
    
    this.show = function(){
        var pos = this.body.position;
        
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(1);
        stroke(255);
        fill(127);
        ellipse(1, 1, this.r*2);
        pop();
    };    
}