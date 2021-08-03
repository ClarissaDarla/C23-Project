const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var base;
var con1,con2,con3,con4,con;
//Create multiple bobs, mulitple ropes varibale here
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

    var ball_options = {
		restitution:0.8,
		//isStatic:true,

	}

	roof = Bodies.rectangle(380,100,230,20,roof_options);
    World.add(world,roof);

	bob1 = Bodies.circle(300,300,20,ball_options);
	World.add(world,bob1);
	
	bob2 = Bodies.circle(340,300,20,ball_options);
	World.add(world,bob2);
	
	bob3 = Bodies.circle(380,300,20,ball_options);
	World.add(world,bob3);
	
	bob4 = Bodies.circle(420,300,20,ball_options);
	World.add(world,bob4);
	
	bob5 = Bodies.circle(460,300,20,ball_options);
	World.add(world,bob5);
	
	con = Matter.Constraint.create({
		pointA:{x:300,y:100},
		bodyB:bob1,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.1
	})

	World.add(world,con);

	con1 = Matter.Constraint.create({
		pointA:{x:340,y:100},
		bodyB:bob2,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.1
	})

	World.add(world,con1);

	con2 = Matter.Constraint.create({
		pointA:{x:380,y:100},
		bodyB:bob3,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.1
	})

	World.add(world,con2);

	con3 = Matter.Constraint.create({
		pointA:{x:420,y:100},
		bodyB:bob4,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.1
	})

	World.add(world,con3);

	con4 = Matter.Constraint.create({
		pointA:{x:460,y:100},
		bodyB:bob5,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.1
	})

	World.add(world,con4);

  
}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("#99004d");
  Engine.update(engine)

  rect(roof.position.x,roof.position.y,230,20);

 

  
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,20);
  ellipse(bob2.position.x,bob2.position.y,20);
  ellipse(bob3.position.x,bob3.position.y,20);
  ellipse(bob4.position.x,bob4.position.y,20);
  ellipse(bob5.position.x,bob5.position.y,20);
 
//call display() to show ropes here
  stroke (255)
  strokeWeight (2)
  line  (con.pointA.x,con.pointA.y,bob1.position.x,bob1.position.y)
  line  (con1.pointA.x,con1.pointA.y,bob2.position.x,bob2.position.y)
  line  (con2.pointA.x,con2.pointA.y,bob3.position.x,bob3.position.y)
  line  (con3.pointA.x,con3.pointA.y,bob4.position.x,bob4.position.y)
  line  (con4.pointA.x,con4.pointA.y,bob5.position.x,bob5.position.y)
}



//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
    if(keyCode == UP_ARROW){
    Matter.Body.applyForce(bob1,{x:0,y:0},{x:-0.05,y:0})
    }
}