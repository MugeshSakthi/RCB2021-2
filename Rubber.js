class Rubber{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length:30
        }
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    attach(bodyA){
        this.rope.bodyA = bodyA;
    }
    
    fly(){
        this.rope.bodyA = null;
    }

    display(){
        
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(48,22,8);
            strokeWeight(4);
            line(pointB.x,pointB.y,pointA.x,pointA.y);
            pop();
        }
    }
    
}