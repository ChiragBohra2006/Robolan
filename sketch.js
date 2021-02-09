var robot, r1;
var music;
var sky, skyImage, Osky, OskyImage;
var timer;
var laser, laserA, laserI, laserS;
var move = false;
var bullet, bulletA, bulletS;
var ground;
var spark, sparkS;

function preload(){
   
    r1= loadAnimation(
    "frame_04_delay-0.03s-removebg-preview.png", 
    "frame_08_delay-0.03s-removebg-preview.png", 
    "frame_12_delay-0.03s-removebg-preview.png");
    
    bulletA = loadAnimation(
    "frame_00_delay-0.1s-removebg-preview.png", 
    "frame_02_delay-0.1s-removebg-preview.png", 
    "frame_04_delay-0.1s-removebg-preview.png", 
    "frame_06_delay-0.1s-removebg-preview.png", 
    "frame_08_delay-0.1s-removebg-preview.png", 
    "frame_10_delay-0.1s-removebg-preview.png", 
    "frame_12_delay-0.1s-removebg-preview.png", 
    "frame_14_delay-0.1s-removebg-preview.png", 
    "frame_16_delay-0.1s-removebg-preview.png", 
    "frame_18_delay-0.1s-removebg-preview.png");

    skyImage = loadImage("joined.png");
    
    sparkS = loadSound("spark.mp3");
    
    music = loadSound("Undertale Asriel Dreemurr Theme.mp3");
    
    laserA = loadAnimation("lazer1-removebg-preview.png",
    "lazer3-removebg-preview.png",
    "lazer4-removebg-preview.png",
    "lazer5-removebg-preview.png",
    "lazer6-removebg-preview.png",
    "lazer7-removebg-preview.png", )

    laserI = loadImage("lazer7-removebg-preview.png");
 
    laserS = loadSound("laser.mp3");
    bulletS = loadSound("shot.mp3");
}


function setup(){

 
    canvas = createCanvas(1366, 656);

   
    
    sky = createSprite(683, 328, 1366, 656);
    sky.addImage("sky",skyImage);
    sky.velocityX = -8;
    sky.scale = 1.54;

    spark = createSprite(125, 570);
    spark.addAnimation("spark", bulletA);
    spark.rotation = 90;
    spark.scale = 0.3;
    

    bullet = createSprite(160, 450);
    bullet.addAnimation("bullet", bulletA);
    bullet.scale = 0.175;

    robot = createSprite(100, 450);
    robot.addAnimation("r", r1);
    robot.scale = 0.5;

  


    timer = createSprite(1000, 100, 100, 100);

    ground = createSprite(652, 550, 1366, 5);
    ground.visible = false;
    


    camera.x = 1000;
    camera.y = 331;


}

function draw() {
    background("black");


 robot.velocityY = 0;
 bullet.visible = false;
 spark.visible = false;

bullet.y = robot.y+61;

    if(mousePressedOver(timer) && camera.x === 1000)
    {
        music.play();
        music.setLoop(true);
        camera.x = 656;
        timer.x = 2000;
    }
    
  

    if(sky.x<-40)
    {
        sky.x = sky.width/2;
    }

   
    
     
   
      if(keyWentDown("space"))
      {
        laser = createSprite(135, 485);
        laser.y = robot.y-18;
        laser.addImage("laser", laserI);
        laser.rotation = 90;
        laser.velocityX = 50;
        laser.scale = 0.2;
        laser.lifetime = 40;
        laserS.play();
      }

        if(keyDown("s"))
        {
           robot.velocityY = 10;
           
        }
     
        if(keyDown("w"))
        {
            robot.velocityY = -10;
        }

      
        if(mouseDown("left") && camera.x === 656)
        {
            bulletS.play();
            bullet.visible = true;
        }
      


   
      robot.setCollider("rectangle", 0 ,0 ,300,300)
      
      if(robot.isTouching(spark))
      {
        sparkS.play();
        spark.visible = true;
        //health
      }

      robot.collide(ground);
      
drawSprites();
 
}
