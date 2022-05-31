//Definir variables globales
//Definir variables objetos
var sea,ship;
var seaImg,shipImg;

//Funcion de pre-carga imagenes y sonido
function preload(){

  //descomentar el código para agregar la animación del barco 

  //shipImg = loadAnimation("ship-1.png");
  //shipImg1 = loadAnimation("ship-1.png");
  //shipImg1 = loadAnimation("ship-1");
  shipImg = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png");
  //shipImg = loadAnimation("ship-1","ship-2","ship-1","ship-2");
  
  seaImg = loadImage("sea.png");
}
//Funcion de configuraciones
function setup(){
  //Diseño de area de juegos
  createCanvas(400,400);
 
  // Mover el fondo
  sea=createSprite(400,200);
  //Agregar imagen
  sea.addImage(seaImg);
  //Establecer velocidad del fondo
  sea.velocityX = -5;
  //Cambiar escala
  sea.scale=0.3;

  //Diseño del objeto barco
  ship = createSprite(130,200,30,30);
  //Agregar imagen de barco
  ship.addAnimation("movingShip",shipImg);
  //Cambiar escala
  ship.scale =0.25;
}

//Funcion de dibujo
function draw() {
  //Establecer color de fondo
  background(0);
  //
  //sea.velocityX = -3;

  //descomentar el código para reiniciar el fondo
  if(sea.x < 0){
    //sea.x = 0;
    //sea.x = sea.width;

    //Establecer ciclo de repeticion de imagen
    sea.x = sea.width/8;
    
    //sea.y = height;
  }

 //Codigo para proyectar objetos
  drawSprites();
}
