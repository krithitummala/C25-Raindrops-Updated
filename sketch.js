const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var raindrops = []
var letters = "ABCDEFGHIJKLMNOPQRSTU6VWXY012345789abcdefghijklpqrstuvexyz";

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    for(var i=0;i<100;i++)
    {
        raindrops.push(new Raindrop());
    }
}

function draw()
{

    background(0,100);
    for(var i=0;i<drops.length;i++)
    {
        raindrops[i].draw();
        raindrops[i].update();
    }
}