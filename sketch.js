const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body=Matter.Body;
var engine,world;

var rubber,ball,ground;
var sg1,sg2;
var rcb;
var mallaya;
var rcb_img;

function preload(){
    rcb_img=loadImage("Playbold.png"); 
}

function setup(){
createCanvas(950,400);    
engine = Engine.create();
world = engine.world;

ground=new Ground(450,375,1000,50);

sg1=new Ground(420,300,230,20);
sg2=new Ground(740,220,200,20);

ball=new Ball(150,150,80,80);

rubber=new Rubber(ball.body,{x:150,y:150});

block1=new Yelblock(360,275,30,40);
block2=new Yelblock(390,275,30,40);
block3=new Yelblock(420,275,30,40);
block4=new Yelblock(450,275,30,40);
block5=new Yelblock(480,275,30,40);

block6=new Blublock(390,235,30,40);
block7=new Blublock(420,235,30,40);
block8=new Blublock(450,235,30,40);

block9=new Orblock(420,195,30,40);

block10=new Yelblock(670,190,30,40);
block11=new Yelblock(700,190,30,40);
block12=new Yelblock(730,190,30,40);
block13=new Yelblock(760,190,30,40);
block14=new Yelblock(790,190,30,40);

block15=new Blublock(700,150,30,40);
block16=new Blublock(730,150,30,40);
block17=new Blublock(760,150,30,40);

block18=new Orblock(730,110,30,40);


Engine.run(engine);

}

function draw(){
background("skyblue");

Engine.update(engine);

ground.display();
sg1.display();
sg2.display();

if(keyCode==="space"){

 attach(ball.body);

}

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();

block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();

ball.display();

rubber.display();

backto();

}

function mouseDragged(){

  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){

    rubber.fly();   

}



function backto(){

    if(keyCode === "space"){

        rubber.attach(ball.body);
    
    }

}
