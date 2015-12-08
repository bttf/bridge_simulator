define(["./lodash.min"], function(_) {
  function MouseObserver() {
    this.observers = [];
    this.eventState = {};
  }

  MouseObserver.prototype = {
    addObserver: function(observer) {
      this.observers.push(observer);
    },

    receiveEvents: function(state) {
      this.eventState.mouseX = state.mouseX;
      this.eventState.mouseY = state.mouseY;
      this.eventState.mouseDown = state.mouseDown;
      this.notify();
    },

    notify: function() {
      var _this = this;
      this.observers.forEach(function(observer) {
        var state = _.assign(_this.eventState, {
          isHovered: _this.isHovering(observer),
        });

        observer.receiveMouseInput(state);
      });
    },


    isHovering: function(entity) {
      var x1 = entity.x;
      var y1 = entity.y;
      var x2 = entity.x + entity.width;
      var y2 = entity.y + entity.height;
      var mx = this.eventState.mouseX;
      var my = this.eventState.mouseY;

      return mx >= x1 && mx <= x2 && my >= y1 && my <= y2;
    },
  };

  return MouseObserver;
});
