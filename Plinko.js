class Plinko{
    constructor(x,y,radius){
       var options = {
            isStatic:true
        }
        this.body = circle(x,y,10,options)
        this.radius = this.body.circleRadius
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,this.radius,this.radius)
    }
}