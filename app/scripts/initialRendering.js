var Ball = require('./Ball');
var Computer = require('./Computer');
var Player = require('./Player');
var CanvasConfig = require('./canvasconfig');

var initialRendering = function () {

  var computerPaddle = Computer();
  var playerPaddle = Player();
  ball = new Ball(240, 200);

  CanvasConfig.drawPingPongLine();
  ball.render();

  console.log(playerPaddle);
  console.log(computerPaddle);

  playerPaddle.render();
  computerPaddle.render();
}



module.exports = initialRendering;
