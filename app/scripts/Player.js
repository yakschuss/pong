var Paddle = require('./Paddle');

var Player = function (){

  return Object.assign(Object.create(Paddle), {
    x: 2850,
    y: 240
  }
  );
}



module.exports = Player;
