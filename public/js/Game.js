define(["./ViewScreen", "./Navigation", "./Communications"], function(ViewScreen, Navigation, Communications) {
  function Game() {
    this.winBuffer = 20;

    this.nav = new Navigation();
    this.viewScreen = new ViewScreen(this.nav);
    this.com = new Communications();

  }

  Game.prototype.init = function(canvas) {
    console.log('game init\'ed');

    this.canvas = (function(g) {
      canvas.winBuffer = g.winBuffer;
      return canvas;
    })(this);

    this.viewScreen.init(this.canvas);
    this.com.init(this.canvas);

  };

  Game.prototype.render = function(time) {
    this.viewScreen.render(time);
    this.com.render(time);

  };

  Game.prototype.draw = function(context) {
    context.fillStyle = "black";
    context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.viewScreen.draw(context);
    this.com.draw(context);

  };

  return Game;
});
