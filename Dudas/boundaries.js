function Boundaries(x, y, w, h) {
    var options = {
        isStatic: true,
        friction: 1,
        restitution: 0.5
    };
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    
    World.add(engine.world, this.body);
    
    this.show = function(){
        var pos = this.body.position;
        
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(1);
        stroke(255);
        fill(127);
        rect(1, 1, this.w, this.h);
        pop();
    }; 
}