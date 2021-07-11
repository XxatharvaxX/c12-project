var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;
var leaves, leavesImg;
var leaves2, leaves2Img;
var leaves3, leaves3Img;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("leaf.png");
  leaves2Img = loadImage("orangeLeaf.png");
  leaves3Img = loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
rabbit.velocityX = mouseX;

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  var select_sprites = Math.round(random(1,2));

if(frameCount % 80 == 0)
{
if (select_sprites == 1)
{
createApples();
}
else
{
createLeaves();
createLeaves2();
createLeaves3();
}
}



rabbit.x = mouseX;

drawSprites();

}

function createLeaves()
{
leaves = createSprite(random(50, 350),40,10,10);
leaves.addImage(leavesImg);
leaves.scale = 0.1;
leaves.velocityY = 5;
if(leaves.y == 400)
{
  leaves.destroy();
}
}

function createLeaves2()
{
leaves2 = createSprite(random(50, 350),40,10,10);
leaves2.addImage(leaves2Img);
leaves2.scale = 0.1;
leaves2.velocityY = 5;
if(leaves2.y == 400)
{
  leaves2.destroy();
}
}

function createLeaves3()
{
leaves3 = createSprite(random(50, 350),40,10,10);
leaves3.addImage(leaves3Img);
leaves3.scale = 0.1;
leaves3.velocityY = 5;
if(leaves3.y == 400)
{
  leaves3.destroy();
}
}

function createApples()
{
apple = createSprite(random(50, 350),40,10,10);
apple.addImage(appleImg);
apple.velocityY = 5;
apple.scale = 0.1;
if(apple.y == 400)
{
  apple.destroy();
}
}