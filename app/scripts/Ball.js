

var Ball = function () {

  var canvas = document.getElementById('pong-board');
  var context = canvas.getContext('2d');


  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;

  var radius = 30;

  context.beginPath();
  context.arc(centerX - 100, centerY, radius, 0, 2 * Math.PI, false);

  context.fillStyle = '#fff';
  context.fill();

  context.lineWidth = 2;

  context.strokeStyle = '#000';
  context.stroke();

}



module.exports = Ball;

