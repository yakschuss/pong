var Canvas = (function () {
  var CanvasConfig = {};

  var canvas = document.getElementById('pong-board');
  var context = canvas.getContext('2d');

   CanvasConfig.drawPingPongLine = function () {

    context.beginPath();

    context.moveTo(canvas.width/2, 0);
    context.lineTo(canvas.width/2, canvas.height);
    context.lineWidth = 15;

    context.strokeStyle = '#fff';

    context.stroke();
  };


  return CanvasConfig;
  
})();



module.exports = Canvas;
