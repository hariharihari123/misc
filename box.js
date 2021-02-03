
class Box {
    constructor(x, y, width, height)
     {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
     // this.imageWidth = 500;
     // this.imageHeight = 100;
      this.image = loadImage("c1p.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
     // fill("black")
     // rectMode(CENTER);
     // rect(0,0,this.width,this.height);
      imageMode(CENTER);
      image(this.image,0, 0,this.width,this.height);
      pop();
    }
}