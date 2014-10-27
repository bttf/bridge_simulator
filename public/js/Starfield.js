function Starfield() {
  this.stars = [];
  this.numOfStars = 512;

  this.star1 = new Image();
  this.star1.src = 'img/star1.png';

}

Starfield.prototype.init = function(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;

  for (var i = 0; i < this.numOfStars; i++) {
    this.stars.push(newStar(this.x,
                           this.y,
                           this.width,
                           this.height));

  }
};

Starfield.prototype.render = function(speed) {
  for (var i = 0; i < this.numOfStars; i++) {
    if (this.stars[i].x < ((this.x + this.width) / 2)) {
      if (this.stars[i].y < ((this.y + this.height) / 2)) {
        this.stars[i].x -= speed;
        this.stars[i].y -= speed;

      }
      else {
        this.stars[i].x -= speed;
        this.stars[i].y += speed;

      }
    }
    else {
      if (this.stars[i].y < ((this.y + this.height) / 2)) {
        this.stars[i].x += speed;
        this.stars[i].y -= speed;

      }
      else {
        this.stars[i].x += speed;
        this.stars[i].y += speed;

      }
    }

    if (this.stars[i].x > (this.x + this.width) ||
        this.stars[i].y > (this.y + this.height) ||
        this.stars[i].x < this.x ||
        this.stars[i].y < this.y) {
      this.stars[i] = newStar(this.x,
                             this.y,
                             this.width,
                             this.height);

    }
  }
};

Starfield.prototype.draw = function(context) {
  for (var i = 0; i < this.numOfStars; i++) {
    context.drawImage(this.star1, this.stars[i].x, this.stars[i].y);

  }
};

function newStar(x, y, width, height) {
  return {
      x: Math.floor(Math.random() * width) + x,
      y: Math.floor(Math.random() * height) + y

  };
}
