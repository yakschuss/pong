var CanvasConfig = (function () {

  var canvas = document.getElementById('pong-board');
  var context = canvas.getContext('2d');

   drawPingPongLine = function () {
    context.beginPath();

    context.moveTo(canvas.width/2, 0);
    context.lineTo(canvas.width/2, canvas.height);
    context.lineWidth = 15;

    context.strokeStyle = '#fff';

    context.stroke();
  };

  var Paddle = function (x, y){
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

  var Ball = function () {
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

  var Computer = function (){new Paddle(40, 90)}
  var Player = function (){new Paddle(2850, 240)}

  drawPingPongLine();
  computerPaddle = new Computer();
  playerPaddle = new Player();
  ball = new Ball();
  
})();



module.exports = CanvasConfig;
