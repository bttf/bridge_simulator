define(["./Window", "./Starfield"], function(Window, Starfield) {
  function ViewScreen(nav) {
    this.nav = nav;
    this.starfield = new Starfield();
    this.w = new Window();

  }

  ViewScreen.prototype.init = function(canvas) {
    console.log('viewscreen init\'ed');

    this.canvas = canvas;

    this.width = (this.canvas.width - this.canvas.winBuffer * 2) * 2/3;
    this.height = (this.canvas.height - this.canvas.winBuffer * 2) * 3/5;

    this.x = 0 + this.canvas.winBuffer;
    this.y = 0 + this.canvas.winBuffer;

    this.w.init(this.x,
                this.y,
                this.width,
                this.height);

                // this.starfield.init(this.x,
                //                     this.y,
                //                     this.width,
                //                     this.height);

                this.starfield.init(this.width - this.canvas.winBuffer,
                                    this.height - this.canvas.winBuffer,
                                    (this.x + this.width / 2),
                                    (this.y + this.height / 2),
                                    512,
                                    4,
                                    256);
  };

  ViewScreen.prototype.render = function(time) {
    this.w.render(time);

    if (this.nav.entitiesVisible) {
      // draw entities (planets, ships, asteroids, etc)
    }

    this.starfield.render(this.nav.speed);

  };

  ViewScreen.prototype.draw = function(context) {
    this.starfield.draw(context);
    this.w.draw(context);

  };

  return ViewScreen;

});
