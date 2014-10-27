define(["./Window"]);

function Communications() {
  this.w = new Window();

}

Communications.prototype = {
  init: function(canvas) {
    console.log('communications init\'ed');

    this.canvas = canvas;

    this.width = (this.canvas.width - this.canvas.winBuffer * 2) * 1/3;
    this.height = (this.canvas.height - this.canvas.winBuffer * 2) * 3/5;

    this.x = this.canvas.width * (2/3);
    this.y = 0 + this.canvas.winBuffer;

    this.w.init(this.x,
                this.y,
                this.width,
                this.height);

  },

  render: function(time) {
    this.w.render(time);

  },

  draw: function(context) {
    this.w.draw(context);
    this.drawText(context, this.fetchText());

  },

  fetchText: function() {
    var msgs = [{ name: 'Lt. Data', message: 'Answering full stop, sir.' },
                { name: 'Cmdr. Riker', message: 'Full stop!'},
                { name: 'Computer', message: 'The captain is not onboard the Enterprise' },
                { name: 'Cmdr. Riker', message: 'Computer, where is the captain currently?' },
                { name: 'Counsel. Troi', message: 'Where is the captain?' }];

    return msgs;

  },

  drawText: function(context, text) {
    for (var i = 0; i < text.length; i++) {
      var txt = text[i].name + ': ' + text[i].message;
      var x = this.x + this.canvas.winBuffer;
      var y = this.height - this.canvas.winBuffer * i;
      var maxWidth = this.width - (this.canvas.winBuffer * 2);

      context.font = '14px courier';
      context.fillStyle = 'white';
      context.fillText(txt, x, y, maxWidth);

    }
  }
};

