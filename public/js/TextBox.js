define(["./Window"], function(Window) {
  function TextBox() {
    this.w = new Window();

  }

  TextBox.prototype = {
    init: function(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;

      this.w.init(x, y, width, height);

    },

    render: function(time) {
      this.w.render(time);

      this.w.lineWidth = this.isHovered ? 2 : 1;

    },

    draw: function(context) {
      this.w.draw(context);

    },

    receiveHoverEvent(state) {
      this.isHovered = state.isHover;
    },
  };

  return TextBox;

});
