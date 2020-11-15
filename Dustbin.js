class Dustbin{

    // Properties
    constructor(xPosition, yPosition, width, height) {

        var box_motions = {
            isStatic : true
        }

        this.body = Bodies.rectangle(xPosition, yPosition, width, height,box_motions);
        World.add(world,this.body);
        this.width = width;
        this.height = height;
    }

    display() {
        var pos = this.body.position;
        // push();
        fill("white");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        // pop();
    }
}