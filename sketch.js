const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22;
var ball, slingShot,ground,platform;

    
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform = new Platform(1000, 200, 300, 20);

    box1 = new Box(1000,170,30,30);
    box2 = new Box(1015,170,30,30);
    box3 = new Box(1030,170,30,30);
    box4 = new Box(1045,170,30,30);
    box5 = new Box(985,170,30,30);
    box6 = new Box(970,170,30,30);
    box7 = new Box(955,170,30,30);
    box8 = new Box(1000,150,30,30);
    box9 = new Box(1010,150,30,30);
    box10 = new Box(1020,150,30,30);
    box11 = new Box(990,150,30,30);
    box12 = new Box(980,150,30,30);
    box13 = new Box(1000,130,30,30);
    box14 = new Box(1000,370,30,30);
    box15= new Box(1010,370,30,30);
    box16 = new Box(1020,370,30,30);
    box17 = new Box(990,370,30,30);
    box18 = new Box(980,370,30,30);
    box19 = new Box(1000,350,30,30);
    box20 = new Box(1010,350,30,30);
    box21 = new Box(990,350,30,30);
    box22 = new Box(1000,330,30,30);
    
    ball = new Ball(100,100,30,30);

    slingShot = new SlingShot(ball.body,{x:200,y:200});
}

function draw(){
    background("white");
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    ground.display();
    ball.display();
    platform.display();
    slingShot.display(); 
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(ball.body);
    }
}
