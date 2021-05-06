class Paper{

constructor(x,y,r)
{
var options = { isStatic:false,
                restitution:0.7,
                friction:0.2,
                density:1
}

 this.body = Bodies.circle(x, y, r, options);
 this.radius = r
 World.add(world, this.body)



}
display(){
    var pos = this.body.position;
    push()
    fill("blue");
    ellipse(pos.x, pos.y, this.radius+this.radius, this.radius+this.radius)
    pop()
}

}