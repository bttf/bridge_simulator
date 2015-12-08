define(function() {
  function EventAggregator() {
    this.observers = [];
    this.eventState = {};
  }

  EventAggregator.prototype = {
    addObserver: function(observer) {
      this.observers.push(observer);
    },

    onMouseMove: function(evt) {
      this.eventState.mouseX = evt.clientX;
      this.eventState.mouseY = evt.clientY;
      this.notify();
    },

    onMouseDown: function() {
      this.eventState.mouseDown = true;
      this.notify();
    },

    onMouseUp: function() {
      this.eventState.mouseDown = false;
      this.notify();
    },

    notify: function() {
      var _this = this;
      this.observers.forEach(function(observer) {
        observer.receiveEvents(_this.eventState);
      });
    },
  };

  return EventAggregator;
});
