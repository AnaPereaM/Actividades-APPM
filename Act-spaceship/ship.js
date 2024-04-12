function Ship () {
  this.x = 0;
  this.y = 0;
  this.width = 25;
  this.height = 20;
  this.rotation = 0;
  this.showFlame = false;
}

Ship.prototype.draw = function (context) {
  var nave = new Image();
  nave.src ="Astronauta.png";

  context.save();
  context.translate(this.x, this.y);
  context.rotate(this.rotation);

  context.drawImage(nave, -nave.width/2, -nave.height/2);

  if (this.showFlame) {
    context.beginPath();
    context.moveTo(-7.5, -5);
    context.lineTo(-15, 0);
    context.lineTo(-7.5, 5);
    context.stroke();
  }
  context.restore();
};
