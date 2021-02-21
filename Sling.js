class Sling{
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length : 50
        }
        this.sling = Constraint.create(options);
        World.add(world,this.sling)
    }
    attach(body){
          this.sling.bodyA = body
    }
    fly(){ 
        this.sling.bodyA = null;
    }
    display(){
        if( this.sling.bodyA ){
              var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        strokeWeight(4)
        line(pointA.x + 25, pointA.y+30, pointB.x -10, pointB.y);
        line(pointA.x + 25, pointA.y+30 , pointB.x + 30, pointB.y - 3);
        }
      else{
       // var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        strokeWeight(4);
          line(150,370, pointB.x -10, pointB.y);
          line(150,370,pointB.x +30, pointB.y-3)
      }
    }
}