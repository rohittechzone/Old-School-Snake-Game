const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var gamestate = "stop";

function setup(){
    var canvas = createCanvas(750,750);
    engine = Engine.create();
    world = engine.world;
    snaketest = new Snake(375,375,50,50);
    food = new Food(random(200,550),random(200,550));
    //food.body.position.x=random(200,550);
    //food.body.position.y=random(200,550);
}

function draw(){
    background("black");
    Engine.update(engine);
    if(keyDown(LEFT_ARROW)){
     gamestate = "left";
    }
    else if(keyDown(RIGHT_ARROW)){
      gamestate = "right";
    }
    else if(keyDown(UP_ARROW)){
      gamestate = "up";
    }
    else if(keyDown(DOWN_ARROW)){
      gamestate = "back";
    }

    if(gamestate === "left"){
      snaketest.body.position.x = snaketest.body.position.x + -5 ;
    }
    else if(gamestate === "right"){
      snaketest.body.position.x = snaketest.body.position.x + 5 ;
    }
    else if(gamestate === "up"){
      snaketest.body.position.y = snaketest.body.position.y + -5 ;
    }
    else if(gamestate === "back"){
      snaketest.body.position.y = snaketest.body.position.y + 5 ;
    }
    snaketest.display();
    food.display();
    eat();
}

function eat(){
if(snaketest.body.position.x >= food.body.position.x-15 && snaketest.body.position.y >= food.body.position.y-15){
  console.log("hi");
}
}