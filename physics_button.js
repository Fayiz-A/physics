class PhysicsButton {
   constructor(x, y, text, callback) {
      this.button = new Clickable();
      this.button.textSize = 20;

      this.button.locate(x, y);
      this.button.color = 'green';
      this.button.text = text;

      this.button.width = 200;
      this.button.height = 70;
      
      this.button.onPress = function() {

         Matter.Body.setPosition(box.body, {x: box.x, y: box.y})
         callback();
      }
   }

   display() {
      push();
      rectMode(CORNER);
      this.button.draw();
      pop();
   }
}