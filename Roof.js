class Roof {
    constructor (x,y,width,height) {
        var options = {
            isStatic : true,
            'restitution' : 0,
            'friction' : 0 ,
            'density' : 1
        }
        this.body = Bodies.rectangle( x, y, width, height, options );
        this.width = width;
        this.height = height ;

        World.add(world, this.body);
    }
    display(){
        rectMode(CENTER)
        fill ("lack")
        stroke(187, 194, 204)
        strokeWeight(5)
        rect(this.body.position.x,this.body.position.y,this.width,this.height);

    }
}