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

      this.isFocused = false;
    },

    render: function(time) {
      this.w.render(time);

      if (this.isHovered && this.mouseDown) {
        this.isFocused = true;
        this.w.lineWidth = 4;
      } else if (!this.isHovered && this.mouseDown) {
        this.isFocused = false;
      } else if (this.isHovered && !this.isFocused) {
        this.w.lineWidth = 2;
      } else if (this.isFocused) {
        this.w.lineWidth = 3;
      } else {
        this.w.lineWidth = 1;
      }
    },

    draw: function(context) {
      this.w.draw(context);
    },

    // Explicitly flag mouse events here
    receiveMouseInput: function(state) {
      this.mouseDown = state.mouseDown;
      this.isHovered = state.isHovered;
    },
  };

  return TextBox;
});
