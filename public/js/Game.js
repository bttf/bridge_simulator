define([
  "./ViewScreen",
  "./Navigation",
  "./Communications",
  "./EventAggregator",
  "./MouseObserver",
], function(ViewScreen, Navigation, Communications, EventAggregator, MouseObserver) {

  function Game() {
    this.winBuffer = 20;

    this.nav = new Navigation();
    this.viewScreen = new ViewScreen(this.nav);
    this.com = new Communications();

    this.ea = new EventAggregator();
    this.mo = new MouseObserver();

  }

  Game.prototype.init = function(canvas) {
    console.log('game init\'ed');

    this.canvas = (function(g) {
      canvas.winBuffer = g.winBuffer;
      return canvas;
    })(this);

    this.viewScreen.init(this.canvas);
    this.com.init(this.canvas);

    this.ea.addObserver(this.mo);
    this.mo.addHoverObserver(this.com.textBox);

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

  Game.prototype.events = {
    onMouseMove: function(evt) {
      this.ea.onMouseMove(evt);

    },
  };

  return Game;

});
