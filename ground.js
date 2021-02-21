/*class Ground{
    constructor(x,y,width,height){
       var opts ={
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,opts);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rect(pos.x,pos.y,this.width,this.height);
        console.log(pos.x,pos.y,this.width,this.height)
    }
}*/
class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };

