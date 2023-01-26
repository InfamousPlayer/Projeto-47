var gameState = "Play"

function preload()
{
	backgroundMusic = loadSound("Neon Lights.mp3");
  treasureObtainedMusic = loadSound("139-item-catch.mp3");
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	strokeWeight(2);
  stroke(15);
  fill("yellow");
	mainWall = createSprite(20, 453, 15, 750);
	mainWall2 = createSprite(700, 20, 1230, 15);
	mainWall3 = createSprite(1307, 427, 15, 800);
	mainWall4 = createSprite(665, 820, 1280, 15);
  innerWall = createSprite(647, 100, 1240, 15);
  innerWall2 = createSprite(680, 400, 1240, 15);
  innerWall3 = createSprite(647, 600, 1240, 15);
  innerWall4 = createSprite(280, 695, 15, 190);
  innerWall5 = createSprite(680, 725, 15, 190);
  innerWall6 = createSprite(1080, 695, 15, 190);

  
  
	
  IndianaFodase = createSprite(20, 20, 15, 15);

  tesouro = createSprite(55, 790, 25, 25);

  backgroundMusic.play();
  backgroundMusic.loop();
  

  IndianaFodase.shapeColor = "red"
  mainWall.shapeColor = "blue"
  mainWall2.shapeColor = "blue"
  mainWall3.shapeColor = "blue"
  mainWall4.shapeColor = "blue"
  innerWall.shapeColor = "blue"
  innerWall2.shapeColor = "blue"
  innerWall3.shapeColor = "blue"
  innerWall4.shapeColor = "blue"
  innerWall5.shapeColor = "blue"
  innerWall6.shapeColor = "blue"
  tesouro.shapeColor = "gold"

  
  
  trapGroups=new Group();
  trapGroups2=new Group();
  trapGroups3=new Group();
  trapGroups4=new Group();
  trapGroups5=new Group();
  trapGroups6=new Group();
  trapGroups7=new Group();
  trapGroups8=new Group();
  trapGroups9=new Group();
  trapGroups10=new Group();
  trapGroups11=new Group();
  trapGroups12=new Group();
  trapGroups13=new Group();
  trapGroups14=new Group();
  
    traps();
    trapGroups.setVelocityYEach(5);
    trapGroups.setColorEach("white");

    trapGroups2.setVelocityYEach(-5);
    trapGroups2.setColorEach("white");

    trapGroups3.setColorEach("white");
    
    trapGroups4.setColorEach("white");

    trapGroups5.setVelocityXEach(-5);
    trapGroups5.setColorEach("white");

    trapGroups6.setVelocityXEach(5);
    trapGroups6.setColorEach("white");

    trapGroups7.setVelocityYEach(-10);
    trapGroups7.setColorEach("white");

    trapGroups8.setVelocityYEach(8);
    trapGroups8.setColorEach("white");

    trapGroups9.setVelocityYEach(6);
    trapGroups9.setColorEach("white");

    trapGroups10.setVelocityYEach(-6);
    trapGroups10.setColorEach("white");

    trapGroups11.setVelocityYEach(12);
    trapGroups11.setColorEach("white");

    trapGroups12.setVelocityYEach(-12);
    trapGroups12.setColorEach("white");

    trapGroups13.setVelocityXEach(8);
    trapGroups13.setColorEach("white");

    trapGroups14.setVelocityYEach(-8);
    trapGroups14.setColorEach("white");




}


function draw() {
  rectMode(CENTER);
  background("black");

  IndianaFodase.bounceOff(mainWall);
  IndianaFodase.bounceOff(mainWall2);
  IndianaFodase.bounceOff(mainWall3);
  IndianaFodase.bounceOff(mainWall4);
  IndianaFodase.bounceOff(innerWall);
  IndianaFodase.bounceOff(innerWall2);
  IndianaFodase.bounceOff(innerWall3);
  IndianaFodase.bounceOff(innerWall4);
  IndianaFodase.bounceOff(innerWall5);
  IndianaFodase.bounceOff(innerWall6);



  trapGroups.bounceOff(mainWall);
  trapGroups.bounceOff(mainWall2);
  trapGroups.bounceOff(mainWall3);
  trapGroups.bounceOff(mainWall4);

  trapGroups2.bounceOff(mainWall);
  trapGroups2.bounceOff(mainWall2);
  trapGroups2.bounceOff(mainWall3);
  trapGroups2.bounceOff(mainWall4);

  trapGroups3.bounceOff(innerWall);
  trapGroups3.bounceOff(innerWall2);
  trapGroups3.bounceOff(innerWall3);
  trapGroups3.bounceOff(innerWall4);
  trapGroups3.bounceOff(mainWall);
  trapGroups3.bounceOff(mainWall3);
  trapGroups3.setRotationSpeedEach(3);

  trapGroups.bounceOff(innerWall);
  trapGroups2.bounceOff(innerWall);
  trapGroups4.bounceOff(innerWall2);
  trapGroups4.bounceOff(innerWall3);

  trapGroups5.bounceOff(innerWall6);
  trapGroups5.bounceOff(mainWall3);

  trapGroups6.bounceOff(innerWall6);
  trapGroups6.bounceOff(mainWall3);

  trapGroups7.bounceOff(innerWall3);
  trapGroups7.bounceOff(mainWall4);

  trapGroups8.bounceOff(innerWall3);
  trapGroups8.bounceOff(mainWall4);

  trapGroups9.bounceOff(innerWall3);
  trapGroups9.bounceOff(mainWall4);

  trapGroups10.bounceOff(innerWall3);
  trapGroups10.bounceOff(mainWall4);

  trapGroups11.bounceOff(innerWall3);
  trapGroups11.bounceOff(mainWall4);

  trapGroups12.bounceOff(innerWall3);
  trapGroups12.bounceOff(mainWall4);

  trapGroups13.bounceOff(trapGroups4);
  trapGroups13.bounceOff(innerWall2);

  trapGroups14.bounceOff(trapGroups4);
  trapGroups14.bounceOff(innerWall2);
  


  if (keyDown(LEFT_ARROW)){
    IndianaFodase.x= IndianaFodase.x -4;
  }
  
  if (keyDown(RIGHT_ARROW)){
    IndianaFodase.x= IndianaFodase.x +4;
  }
  
  if (keyDown(UP_ARROW)){
    IndianaFodase.y= IndianaFodase.y -4;
  }
  
  if (keyDown(DOWN_ARROW)){
    IndianaFodase.y= IndianaFodase.y +4;
  }

  if (gameState == "Play"){
  if (IndianaFodase.isTouching(trapGroups)||IndianaFodase.isTouching(trapGroups2)||IndianaFodase.isTouching(trapGroups3)||IndianaFodase.isTouching(trapGroups4)||IndianaFodase.isTouching(trapGroups5)||IndianaFodase.isTouching(trapGroups6)||IndianaFodase.isTouching(trapGroups7)||IndianaFodase.isTouching(trapGroups8)||IndianaFodase.isTouching(trapGroups9)||IndianaFodase.isTouching(trapGroups10)||IndianaFodase.isTouching(trapGroups11)||IndianaFodase.isTouching(trapGroups12)||IndianaFodase.isTouching(trapGroups13)||IndianaFodase.isTouching(trapGroups14)){
    IndianaFodase.x= 20;
    IndianaFodase.y= 20;

  }
  if (IndianaFodase.isTouching(tesouro)){
     tesouro.destroy();
     treasureObtainedMusic.play();
     gameState = "Checkpoint"
  }
  }
  if (gameState == "Checkpoint"){
    if (IndianaFodase.isTouching(trapGroups)||IndianaFodase.isTouching(trapGroups2)||IndianaFodase.isTouching(trapGroups3)||IndianaFodase.isTouching(trapGroups4)||IndianaFodase.isTouching(trapGroups5)||IndianaFodase.isTouching(trapGroups6)||IndianaFodase.isTouching(trapGroups7)||IndianaFodase.isTouching(trapGroups8)||IndianaFodase.isTouching(trapGroups9)||IndianaFodase.isTouching(trapGroups10)||IndianaFodase.isTouching(trapGroups11)||IndianaFodase.isTouching(trapGroups12)||IndianaFodase.isTouching(trapGroups13)||IndianaFodase.isTouching(trapGroups14)){
      IndianaFodase.x= 55;
      IndianaFodase.y= 790;
    }
  
  if (IndianaFodase.x <= 20 && IndianaFodase.y <= 20){
    gameState = "EndGame"
  }
  }
  if (gameState == "EndGame"){
    fill("red");
    textSize(35);
    text("VOCÊ CONSEGUIU SEU MASOQUISTA DO CARALHO!!!!", 200,400);
    fill("red");
    textSize(35);
    text("Track: Neon Lights Music by https://www.fiftysounds.com", 210, 500)
    trapGroups.destroy();
    trapGroups2.destroy();
    trapGroups3.destroy();
    trapGroups4.destroy();
    trapGroups5.destroy();
    trapGroups6.destroy();
    trapGroups7.destroy();
    trapGroups8.destroy();
    trapGroups9.destroy();
    trapGroups10.destroy();
    trapGroups11.destroy();
    trapGroups12.destroy();
    trapGroups13.destroy();
    trapGroups14.destroy();

  }
  drawSprites();
 
}


function traps() {
// 
  var trap1 = createSprite(120, 80, 15, 15);
  var trap2 = createSprite(160, 80, 15, 15);
  var trap3 = createSprite(200, 80, 15, 15);
  var trap4 = createSprite(240, 80, 15, 15);
  var trap5 = createSprite(280, 80, 15, 15);
  var trap6 = createSprite(320, 80, 15, 15);
  var trap7 = createSprite(360, 80, 15, 15);
  var trap8 = createSprite(400, 80, 15, 15);
  var trap9 = createSprite(440, 80, 15, 15);
  var trap10 = createSprite(480, 80, 15, 15);
  var trap11 = createSprite(520, 80, 15, 15);
  var trap12 = createSprite(560, 80, 15, 15);
  var trap13 = createSprite(600, 80, 15, 15);
  var trap14 = createSprite(640, 80, 15, 15);
  var trap15 = createSprite(680, 80, 15, 15);
  var trap16 = createSprite(720, 80, 15, 15);
  var trap17 = createSprite(760, 80, 15, 15);
  var trap18 = createSprite(800, 80, 15, 15);
  var trap19 = createSprite(840, 80, 15, 15);
  var trap20 = createSprite(880, 80, 15, 15);
  var trap21 = createSprite(920, 80, 15, 15);
  var trap22 = createSprite(960, 80, 15, 15);
  var trap23 = createSprite(1000, 80, 15, 15);
  var trap24 = createSprite(1040, 80, 15, 15);
  var trap25 = createSprite(1080, 80, 15, 15);
  var trap26 = createSprite(1120, 80, 15, 15);
  var trap27 = createSprite(1160, 80, 15, 15);
  var trap28 = createSprite(1200, 80, 15, 15);
  var trap29 = createSprite(1240, 80, 15, 15);
  //
  var trap30 = createSprite(1090, 250, 255, 20);
  var trap31 = createSprite(1090, 250, 20, 255);
  var trap32 = createSprite(790, 250, 255, 20);
  var trap33 = createSprite(790, 250, 20, 255);
  var trap34 = createSprite(490, 250, 255, 20);
  var trap35 = createSprite(490, 250, 20, 255);
  var trap36 = createSprite(190, 250, 255, 20);
  var trap37 = createSprite(190, 250, 20, 255);
  //
  var trap38= createSprite(200, 510, 280, 165);
  var trap39= createSprite(420, 564, 160, 57);
  var trap40= createSprite(731, 461, 377, 105);
  var trap41= createSprite(710, 564, 420, 57);
  var trap42= createSprite(1092, 580, 350, 25);
  var trap43= createSprite(1173, 518, 187, 100);
  var trap44= createSprite(1173, 429, 190, 40);
  //
  var trap45= createSprite(1105, 765, 15, 15);
  var trap46= createSprite(1285, 655, 15, 15);
  var trap47= createSprite(1140, 630, 15, 15);
  var trap48= createSprite(1250, 790, 15, 15);
  //
  var trap49= createSprite(1030, 790, 15, 15);
  var trap50= createSprite(980, 630, 15, 15);
  var trap51= createSprite(930, 790, 15, 15);
  var trap52= createSprite(880, 630, 15, 15);
  var trap53= createSprite(830, 790, 15, 15);
  var trap54= createSprite(780, 630, 15, 15);
  var trap55= createSprite(730, 790, 15, 15);
  //
  var trap56= createSprite(630, 630, 15, 15);
  var trap57= createSprite(580, 790, 15, 15);
  var trap58= createSprite(530, 630, 15, 15);
  var trap59= createSprite(480, 790, 15, 15);
  var trap60= createSprite(430, 630, 15, 15);
  var trap61= createSprite(380, 790, 15, 15);
  var trap62= createSprite(330, 630, 15, 15);
  //
  var trap63= createSprite(380, 450, 15, 15);
  var trap64= createSprite(500, 500, 15, 15);
  //
  var trap65= createSprite(950, 450, 15, 15);
  var trap66= createSprite(1050, 530, 15, 15);


  trapGroups.add(trap1)
  trapGroups2.add(trap2);
  trapGroups.add(trap3);
  trapGroups2.add(trap4);
  trapGroups.add(trap5);
  trapGroups2.add(trap6);
  trapGroups.add(trap7);
  trapGroups2.add(trap8);
  trapGroups.add(trap9);
  trapGroups2.add(trap10);
  trapGroups.add(trap11);
  trapGroups2.add(trap12);
  trapGroups.add(trap13);
  trapGroups2.add(trap14);
  trapGroups.add(trap15);
  trapGroups2.add(trap16);
  trapGroups.add(trap17);
  trapGroups2.add(trap18);
  trapGroups.add(trap19);
  trapGroups2.add(trap20);
  trapGroups.add(trap21);
  trapGroups2.add(trap22);
  trapGroups.add(trap23);
  trapGroups2.add(trap24);
  trapGroups.add(trap25);
  trapGroups2.add(trap26);
  trapGroups.add(trap27);
  trapGroups2.add(trap28);
  trapGroups.add(trap29);

  trapGroups3.add(trap30);
  trapGroups3.add(trap31);
  trapGroups3.add(trap32);
  trapGroups3.add(trap33);
  trapGroups3.add(trap34);
  trapGroups3.add(trap35);
  trapGroups3.add(trap36);
  trapGroups3.add(trap37);

  trapGroups4.add(trap38);
  trapGroups4.add(trap39);
  trapGroups4.add(trap40);
  trapGroups4.add(trap41);
  trapGroups4.add(trap42);
  trapGroups4.add(trap43);
  trapGroups4.add(trap44);

  trapGroups5.add(trap45);
  trapGroups6.add(trap46);
  trapGroups7.add(trap47);
  trapGroups8.add(trap48);

  trapGroups9.add(trap49)
  trapGroups10.add(trap50)
  trapGroups9.add(trap51)
  trapGroups10.add(trap52)
  trapGroups9.add(trap53)
  trapGroups10.add(trap54)
  trapGroups9.add(trap55)

  trapGroups11.add(trap56)
  trapGroups12.add(trap57)
  trapGroups11.add(trap58)
  trapGroups12.add(trap59)
  trapGroups11.add(trap60)
  trapGroups12.add(trap61)
  trapGroups11.add(trap62)

  trapGroups13.add(trap63)
  trapGroups13.add(trap64)

  trapGroups14.add(trap65)
  trapGroups14.add(trap66)

  
}