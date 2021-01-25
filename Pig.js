class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    //we are using this.visibility how much the pig object
    // to be transprantily removed from the screen.

    //we are using tint concept to assign transprency to the pig.
    //0 means fully off byte
    //255 means fully on byte
    this.Visibility=255

  }
display(){
  
  //console.log(this.body.speed);
  if(this.body.speed<3){
    super.display();
  }else{
    //tint(give transprancy values)
    //the given tint should apply to the image.
    push();
  World.remove(world,this.body);
  this.Visibility=this.Visibility-5;
  tint(255,this.Visibility)
  image(this.image,this.body.position.x,this.body.position.y,50,50)
  pop();
  }
}
};