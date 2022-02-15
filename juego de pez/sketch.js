var fondo
var arturo,arturo_imagen;
var gameState = "play";
var edges;

var basura_1;
var basura_2;
var basura_3;
var basura_4;
var basura_5;
var basura_6;
var basura_7;
var basura_8;
var basura_9;
var grupoBasura;

var pez_1;
var pez_2;
var pez_3;
var pez_4;
var pez_5;
var pez_6;
var pez_7;
var pez_8;
var pez_9;
var grupoPez;
var puntuacion = 0;

var golpedeagua;

function preload(){
    fondo = loadImage("img/fondo.jpg");
    arturo_imagen = loadImage("img/arturo.png");
    basura_1 = loadImage("img/b1.png");
    basura_2 = loadImage("img/b2.png");
    basura_3 = loadImage("img/b3.png");
    basura_4 = loadImage("img/b4.png");
    basura_5 = loadImage("img/b5.png");
    basura_6 = loadImage("img/b6.png");
    basura_7 = loadImage("img/b7.png");
    basura_8 = loadImage("img/b8.png");
    basura_9 = loadImage("img/b9.png");

    pez_9 = loadImage("img/P9.png");
    pez_8 = loadImage("img/P8.png");
    pez_7 = loadImage("img/P7.png");
    pez_6 = loadImage("img/P6.png");
    pez_5 = loadImage("img/P5.png");
    pez_4 = loadImage("img/P4.png");
    pez_3 = loadImage("img/P3.png");
    pez_2 = loadImage("img/P2.png");
    pez_1 = loadImage("img/P1.png");
    golpedeagua = loadSound("agua.wav");

}


function setup(){
    createCanvas(screen.width,screen.height-100);
    edges = createEdgeSprites();
    arturo = createSprite(width/2-50,height/2,50,50);
    arturo.addImage("pez", arturo_imagen);
    arturo.scale = 0.02
    grupoBasura = new Group()
    grupoPez = new Group()
}

function draw(){
    background(fondo);
   
    if(gameState === "play"){
        if(keyDown("RIGHT")){
            arturo.x += +5
        }
        if(keyDown("LEFT")){
            arturo.x += -5;
        }
        if(keyDown("SPACE")){
            
            arturo.velocityY = -8
        }
        arturo.velocityY += 1
        basuras();
        pez();
        puntuacion = puntuacion+Math.round(getFrameRate()/60);
        if(arturo.isTouching(edges[2]) || arturo.isTouching(edges[3])|| arturo.isTouching(grupoBasura)||arturo.isTouching(grupoPez)){

            golpedeagua.play();

            gameState = "GameOver"
        }
    }
   else if(gameState === "GameOver"){
    strokeWeight(5);
    stroke("white");
    fill("black");
    textSize(40);
    text("GameOver",width/2,height/2);
    arturo.x = width/2-50;
    arturo.y = height/2;
    arturo.velocityY = 0;
    grupoBasura.setVelocityXEach(0);
    grupoBasura.setLifetimeEach(-1);
    grupoPez.setVelocityYEach(0);
    grupoPez.setLifetimeEach(-1);
   }
   strokeWeight(5);
   stroke("white");
   fill("black");
   textSize(40);
   text("puntos"+puntuacion,width-300,height-100);
    drawSprites();
}

function basuras() {
   if(frameCount %50===0 ) {
  var basura = createSprite(-10,-10,30,30);
  basura.y = Math.round(random(0, height));

  var num = Math.round(random(1,9));
  switch (num){
      case 1: basura.addImage(basura_1);
      break;
      case 2: basura.addImage(basura_2);
      break;
      case 3: basura.addImage(basura_3);
      break;
      case 4: basura.addImage(basura_4);
      break;
      case 5: basura.addImage(basura_5);
      break;
      case 6: basura.addImage(basura_6);
      break;
      case 7: basura.addImage(basura_7);
      break;
      case 8: basura.addImage(basura_8);
      break;
      case 9: basura.addImage(basura_9);
      break;
  }//cierre switch
  basura.velocityX = Math.round(random(1,5));
  basura.scale = 0.45
  basura.lifetime = 800
  grupoBasura.add(basura)
  }//cierre if frameCount
}//cierre funcion

function pez() {
    if(frameCount %150===0 ) {
   var pez = createSprite(-10,height-10,30,30);
   pez.x = Math.round(random(0,width));
 
   var num = Math.round(random(1,9));
   switch (num){
       case 1: pez.addImage(pez_1);
       break;
       case 2: pez.addImage(pez_2);
       break;
       case 3: pez.addImage(pez_3);
       break;
       case 4: pez.addImage(pez_4);
       break;
       case 5: pez.addImage(pez_5);
       break;
       case 6: pez.addImage(pez_6);
       break;
       case 7: pez.addImage(pez_7);
       break;
       case 8: pez.addImage(pez_8);
       break;
       case 9: pez.addImage(pez_9);
       break;
   }//cierre switch
   pez.velocityY = -6
   pez.scale = 0.1
   pez.lifetime = 800
   grupoPez.add(pez);
}
}
