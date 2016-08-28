var CanvasConfig = (function () {
  var Constructor = {};

  var canvas = document.getElementById('pong-board');
  var context = canvas.getContext('2d');

  var drawPingPongLine = function () {
    context.beginPath();

    context.moveTo(canvas.width/2, 0);
    context.lineTo(canvas.width/2, canvas.height);
    context.lineWidth = 5;

    context.strokeStyle = '#fff';

    context.stroke();
  
  };

  Constructor.Paddle = function (x, y){
    this.x = x;
    this.y = y;

    context.beginPath();

    context.moveTo(x, y);
    context.lineTo(x, y + 200);

    context.lineWidth = 20;
    context.strokeStyle = '#fff';
    context.lineCap = 'round';

    context.stroke();

  }

  var rightPaddle = new Constructor.Paddle(30, 90);
  var leftPaddle = new Constructor.Paddle(710, 240);
  drawPingPongLine();


  return Constructor;
})();



module.exports = CanvasConfig;
