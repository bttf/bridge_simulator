define(function() {
  function Window() {}

  Window.prototype.init = function(x, y, width, height) {
    console.log('window init\'ed');

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.lineWidth = 1;

  };

  Window.prototype.render = function(time) {
  };

  Window.prototype.draw = function(context) {
    context.lineWidth = this.lineWidth;
    context.strokeStyle = '#00dd00';

    context.beginPath();
    context.moveTo(this.x, this.y);
    context.lineTo(this.x + this.width, this.y);
    context.lineTo(this.x + this.width, this.y + this.height);
    context.lineTo(this.x, this.y + this.height);
    context.lineTo(this.x, this.y);
    context.stroke();
    context.closePath();
  };

  return Window;

});
