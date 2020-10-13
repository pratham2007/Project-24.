class Box{
    constructor(posx, posy, width, height){
        var option = {isStatic:true};
        this.body = Bodies.rectangle(posx, posy, width, height, option);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        fill(0, 150, 255);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}