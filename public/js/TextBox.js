define(["./Window"], function(Window) {
  function TextBox() {
    this.w = new Window();
  }

  TextBox.prototype = {
    init: function(parent, canvas) {
      this.width = parent.width - (canvas.winBuffer * 2);
      this.height = parent.height * 1/8;
      this.x = parent.x + canvas.winBuffer;
      this.y = parent.y + (parent.height - this.height - canvas.winBuffer);

      this.w.init(this.x,
                  this.y,
                  this.width,
                  this.height);
    },

    render: function(time) {
      this.w.render(time);
    },

    draw: function(context) {
      this.w.draw(context);
    },
  };

  return TextBox;
});
