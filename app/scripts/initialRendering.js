var Ball = require('./Ball');
var Computer = require('./Computer');
var Player = require('./Player');

var initialRendering = function () {

computerPaddle = new Computer();
playerPaddle = new Player();
ball = new Ball();

}

module.exports = initialRendering;
