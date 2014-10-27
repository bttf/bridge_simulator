function Navigation() {
  this.speed = 0;

  this.entities = [];

}

Navigation.prototype.entitiesVisible = function() {
  if (this.entities.length > 0)
    return true;

  return false

};

Navigation.prototype.setSpeed = function(speed) {
  this.speed = speed;
};
