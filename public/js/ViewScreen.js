define(["./Window", "./Starfield"]);

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

  console.log('view screen width: %d', this.width);

  this.x = 0 + this.canvas.winBuffer;
  this.y = 0 + this.canvas.winBuffer;

  this.w.init(this.x,
              this.y,
              this.width,
              this.height);

  this.starfield.init(this.x,
                      this.y,
                      this.width,
                      this.height);

};

ViewScreen.prototype.render = function(time) {
  this.w.render(time);

  if (this.nav.entitiesVisible) {
    // draw entities (planets, ships, asteroids, etc)
  }
  
  this.starfield.render(this.nav.speed);

};

ViewScreen.prototype.draw = function(context) {
  this.w.draw(context);

  this.starfield.draw(context);

};

