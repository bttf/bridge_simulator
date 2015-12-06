define(function() {
  function MouseMediator() {
    this.hoverObservers = [];

  }

  MouseMediator.prototype = {
    addHoverObserver: function(observer) {
      this.hoverObservers.push(observer);

    },

    receiveEvents(state) {
      this.mouseX = state.mouseX;
      this.mouseY = state.mouseY;

      if (this.mouseX && this.mouseY) {
        this.notifyHoverObservers();
      }

    },

    notifyHoverObservers() {
      var _this = this;
      this.hoverObservers.forEach(function(observer) {
        observer.receiveHoverEvent({ isHover: _this.isHovering(observer) });

      });
    },

    isHovering(entity) {
      var x1 = entity.x;
      var y1 = entity.y;
      var x2 = entity.x + entity.width;
      var y2 = entity.y + entity.height;
      var mx = this.mouseX;
      var my = this.mouseY;

      return mx >= x1 && mx <= x2 && my >= y1 && my <= y2;

    },
  };

  return MouseMediator;

});
