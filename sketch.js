//Create variables here
var dog ,dogImg, happyDog;
var database;
var foodS , foodStock,foodCount,foodCount,addFood,food,food1,foodObj;
var milk,milkImg;
var database;
var food1;
var canvas, feed,  input;
var lastFed,fedTime
function preload()
{
  dogImg=loadImage("Dog.png");
  happyDog=loadImage("happydog.png");
  milkImg=loadImage("Milk.png");
  
	//load images here
}

function setup() {
  database=firebase.database();
  createCanvas(500,500);
  
  dog=createSprite(250,250);
  dog.addImage(dogImg);
  dog.scale=0.1;

  foodStock=database.ref('Food');
  foodStock.on("value", readStock);
  
  milk=createSprite(565,300);
  milk.addImage(milkImg);
  milk.scale=0.1;
  milk.visible=false;
  milk.rotation = 55;

  food1 = new Food();
  food1.start();

  addFood = createButton("AddButton");
  addFood.position(370,45);
  addFood.mousePressed()
  
  input = createInput("Your Dog's name");
  input.position(150,70);

  feed= createButton("Feed your Dog");
  feed.position(450,45);
  food.mousePressed(feedDog);

  canvas = createCanvas(800,400);
}

function draw() {  
background("blue");

food1.display();

drawSprites();
}

function feedDog() {
  food1.getFoodStock();
  food1.updateFedTime();

  if(foodCount === 0) {
    foodCount = 0;
    milk.visible = false;
    dog.addImage(dogImg);
  } else {
    food1.updateFoodStock(foodCount - 1);
    milk.visible = true;
    dog.addImage(happyDogImg);
  }
}

function addFoods() {
 food1.getFoodStock();

 food1.updateFoodStock(foodCount + 1); 
}

