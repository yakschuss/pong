var Ball = require('./Ball');
var Computer = require('./Computer');
var Player = require('./Player');
var CanvasConfig = require('./canvasconfig');

var initialRendering = function () {

computerPaddle = new Computer();
playerPaddle = new Player();
ball = new Ball();
CanvasConfig.drawPingPongLine();

}

module.exports = initialRendering;
