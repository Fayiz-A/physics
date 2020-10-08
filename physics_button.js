class PhysicsButton {
   constructor(x, y, text, callback) {
      this.button = new Clickable();
      this.button.locate(x, y);
      this.button.color = 'green';
      this.button.text = text;
    
      this.button.onPress = function() {
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