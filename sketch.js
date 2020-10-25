//Create variables here
var  dog , happyDog ; 
var  foodS , foodStock ;
function preload()
{
  //load images here
  
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(200,200);
  
}


function draw() {  
backGround(46,139,87);

if(keyWentUp(UP_ARROW)) {
writeStock(foodS);
dog.addImage(dogHappy);

}
  drawSprites();
  //add styles here
  Text("foodStock")
  textSize(30);
   Fill(red);
   stroke(10);


}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
 database.ref('/').update({
 
  Food:x

 })
 
}

