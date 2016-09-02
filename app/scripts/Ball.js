

var Ball = function (x, y) {
  this.canvas = document.getElementById('pong-board');
  this.context = this.canvas.getContext('2d')

  this.x = x;
  this.y = y;
}

Ball.prototype.render = function () {

  var radius = 30;

  this.context.beginPath();
  this.context.arc(this.x , this.y, radius, 0, 2 * Math.PI, false);

  this.context.fillStyle = '#fff';
  this.context.fill();

  this.context.lineWidth = 2;
  this.context.strokeStyle = '#000';

  this.context.stroke();
}


module.exports = Ball;

