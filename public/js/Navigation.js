define(function() {
  function Navigation() {
    this.speed = 5;

    this.entities = [];

  }

  Navigation.prototype.entitiesVisible = function() {
    if (this.entities.length > 0) {
      return true;
    }

    return false;

  };

  Navigation.prototype.setSpeed = function(speed) {
    this.speed = speed;
  };

  return Navigation;
});
