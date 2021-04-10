class Yelblock{
    constructor(x,y,width,height){
       var options={
           restitution:0.4,
           friction:1.0,
           isStatic:false
       }
       this.body=Bodies.rectangle(x,y,width,height,options);
       this.width=width;
       this.height=height;
       this.visibility=255;
       World.add(world,this.body);
    }
    display(){
        if(this.body.speed<7){
        var angle = this.body.angle;
        var pos=this.body.position;
        push();
        fill("yellow");
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();

        }else{
            World.remove(world,this.body);
            push();
            tint(255,this.visibility);
            this.visibility=this.visibility-5;
            pop();
        }
    }
}