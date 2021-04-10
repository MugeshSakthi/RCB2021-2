class Ball{
    constructor(x,y,width,height,angle){
       var options={
           restitution:0.4,
           friction:1.0,
           isStatic:false
       }
       this.body=Bodies.rectangle(x,y,width,height,options);
       this.width=width;
       this.height=height;
       this.image=loadImage("Playbold.png");
       World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos=this.body.position;
        push();
        fill("blue");
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(3);
        stroke("black");
        fill("red");
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}