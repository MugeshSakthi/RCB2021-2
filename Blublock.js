class Blublock{
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
        if(this.body.speed<8){
        var angle = this.body.angle;
        var pos=this.body.position;
        push();
        fill("blue");
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();

        }else{
            World.remove(world,this.body);
            push();
            this.visibility=this.visibility-5;
            pop();
        }
    }
}