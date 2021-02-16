class Particle{
    constructor(x,y,radius,circle){
      var options = {
          restitution:0.1,
          friction:2,
          density:0.2,   
      }
      this.body=circle(x,y,this.r,options)
      this.color=color(random(0,255),random(0,255),random(0,255))
      World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        push();
        translate(pos.x,pos.y)
        fill(this.color)
        ellipseMode(CENTER)
        ellipse(0,0,this.radius*2)
        pop();
    }
}