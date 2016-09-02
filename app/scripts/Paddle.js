
var Paddle = {
  canvas: document.getElementById('pong-board'),

  render: function () {

    this.context = this.canvas.getContext('2d'),

    this.context.beginPath();

    this.context.moveTo(this.x, this.y);
    this.context.lineTo(this.x, this.y + 200);

    this.context.lineWidth = 40;
    this.context.strokeStyle = '#fff';
    this.context.lineCap = 'round';

    this.context.stroke();  
  }

}

module.exports = Paddle;
