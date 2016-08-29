
  var Paddle = function (x, y){

  var canvas = document.getElementById('pong-board');
  var context = canvas.getContext('2d');


    this.x = x;
    this.y = y;

    context.beginPath();

    context.moveTo(x, y);
    context.lineTo(x, y + 200);

    context.lineWidth = 40;
    context.strokeStyle = '#fff';
    context.lineCap = 'round';

    context.stroke();
  }

 module.exports = Paddle;
