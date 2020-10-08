class Box {
   constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution: 0.2,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
      var angle = this.body.angle;

      rectMode(CENTER);
      fill("brown");

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rect(0, 0, this.width, this.height);
      pop();
    }
}