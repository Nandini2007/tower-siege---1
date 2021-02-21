class Stone{
constructor(x,y){
    var opts ={
        isStatic : false
    }
    this.body = Bodies.rectangle(x,y,2,2,opts);
    this.width = 30;
    this.height = 30;
    this.image = loadImage("polygon.png");
    this.smokeImage = loadImage("smoke.png")
    this.trajectory = []
    World.add(world,this.body);
}
display(){
    var pos = this.body.position;
  //  rect(pos.x,pos.y,this.width,this.height);
    image(this.image,pos.x,pos.y,this.width,this.height)

    if(this.body.velocity.x > 0 && gameState === "hit"){
        var position = [this.body.position.x, this.body.position.y];
        this.trajectory.push(position);
      }
      for(var i=0; i<this.trajectory.length; i++){
        image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
      }
}
}