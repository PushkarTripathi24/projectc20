var cat,catimg1,catimg2,catimg3
var rat,ratimg1,ratimg2,ratimg3
var bg,bgimg


function preload(){

  bgimg=loadImage("images/garden.png");


catimg1=loadAnimation("images/cat1.png");
catimg2=loadAnimation("images/cat2.png");
catimg3=loadAnimation("images/cat3.png");


ratimg1=loadAnimation("images/mouse2.png");
ratimg2=loadAnimation("images/mouse1.png");
ratimg3=loadAnimation("images/mouse3.png");


}


function setup(){

createCanvas(500,500)

cat=createSprite(410,420)
cat.addAnimation("catS",catimg1)
cat.scale = 0.1;

rat=createSprite(60,420)
rat.addAnimation("ratS",ratimg1)
rat.scale=0.1;

bg=createSprite(250,250);
bg.addAnimation("ground",bgimg)
bg.scale=0.8

bg.depth = cat.depth;
    cat.depth = cat.depth + 1;
}



function draw(){

background("black")

if(cat.x - rat.x < (cat.width - rat.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("catLastImage", catimg3);
        cat.x =410;
        cat.changeAnimation("catLastImage");

        rat.addAnimation("mouseLastImage", ratimg3);
        rat.changeAnimation("mouseLastImage");
    }  




keypressed();

drawSprites();
}


function keypressed(){
  if(keyDown ("space")){
    cat.velocityX =-5

    cat.addAnimation("catRunning", catimg2);
    cat.changeAnimation("catRunning");
    
    rat.addAnimation("mouseTeasing", ratimg2);
    rat.changeAnimation("mouseTeasing");

  }
}