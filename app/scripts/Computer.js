var Paddle = require('./Paddle');

var Computer = function (){

  return Object.assign(Object.create(Paddle), {
    x: 40,
    y: 90
  }
 );
}


  module.exports = Computer;

