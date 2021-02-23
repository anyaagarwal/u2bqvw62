var block1,block2,block3,block4,block5;
var bg;

function preload(){
  
  bg=loadImage("b.PNG");
}
function setup(){
  createCanvas(500,677)
  
  
  background=createSprite(250,338.5);
  background.addImage("iv",bg);
  background.scale=3;
  
  borderRec1=createSprite(5,5,1000,5);
  borderRec1.shapeColor=("black");
  
  borderRec2=createSprite(5,5,5,1354);
  borderRec2.shapeColor=("black");
  
  borderRec3=createSprite(495,5,5,1354);
  borderRec3.shapeColor=("black");
  
  borderRec4=createSprite(5,672,1000,5);
  borderRec4.shapeColor=("black");
  
  block1=createSprite(50,580,90,20);
  block1.shapeColor=("pink");
  
  block2=createSprite(150,580,90,20);
  block2.shapeColor=("lavender");
  
  block3=createSprite(250,580,90,20);
  block3.shapeColor=("cyan");
  
  block4=createSprite(350,580,90,20);
  block4.shapeColor=("yellow");
  
  block5=createSprite(450,580,90,20);
  block5.shapeColor=("lightgreen");
  
  ball=createSprite(250,300,27,33);
  ball.shapeColor="white";
  
}

function draw(){
  ball.bounceOff(borderRec1);
  ball.bounceOff(borderRec2);
  ball.bounceOff(borderRec3);
  ball.bounceOff(borderRec4);
  
  
  if(n(block1)===true){
    ball.velocityY=ball.velocityY*-1;
    ball.shapeColor="pink";
}
  
  if(n(block2)===true){
    ball.velocityY=ball.velocityY*-1;
    ball.shapeColor="lavender";
}
  
  if(n(block3)===true){
    ball.velocityY=ball.velocityY*-1;
    ball.shapeColor="cyan";
}
  
  if(n(block4)===true){
   ball.velocityY=ball.velocityY*-1;
    ball.shapeColor="yellow";
}
  
  if(n(block5)===true){
    ball.velocityY=ball.velocityY*-1;
    ball.shapeColor="lightgreen";
}
  
  
  
  if(mousePressedOver(ball)){
    ball.velocityY=6;
    ball.velocityX=4;
}
  drawSprites();
}

function n(ob){

if(ball.x - ob.x < ob.width/2 + ball.width/2&&
     ob.x - ball.x < ob.width/2 + ball.width/2 && 
     ball.y - ob.y < ob.height/2 + ball.height/2&&
     ob.y - ball.y < ob.height/2 + ball.height/2){
    return(true);
    
    
  }else{
    return(false);
  }
  }