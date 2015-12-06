define(["./socket.io", "./Window", "./TextBox"], function(io, Window, TextBox) {
  function Communications() {
    this.msgs = [];

    this.w = new Window();
    this.textBox = new TextBox();

    this.io = io([window.location.protocol, '//', window.location.host].join(''));
    this.initSocketEvents();

  }

  Communications.prototype = {
    init: function(canvas) {
      console.log('communications init\'ed');

      this.canvas = canvas;

      this.width = (canvas.width - canvas.winBuffer * 2) * 1/3;
      this.height = (canvas.height - canvas.winBuffer * 2) * 3/5;

      this.x = canvas.width * (2/3);
      this.y = 0 + canvas.winBuffer;

      this.w.init(this.x,
                  this.y,
                  this.width,
                  this.height);

      var textBoxX = this.x + canvas.winBuffer;
      var textBoxWidth = this.width - (canvas.winBuffer * 2);
      var textBoxHeight = this.height * 1/8;
      var textBoxY = this.y + (this.height - textBoxHeight - canvas.winBuffer);
      this.textBox.init(textBoxX, textBoxY, textBoxWidth, textBoxHeight);

    },

    initSocketEvents: function() {
      var io = this.io;
      var msgs = this.msgs;

      io.on('message', function(data) {
        msgs.push(data);
        msgs = msgs.slice(0, 9);

      });
    },

    render: function(time) {
      this.w.render(time);
      this.textBox.render(time);

    },

    draw: function(context) {
      this.w.draw(context);
      this.drawText(context, this.fetchText());
      this.textBox.draw(context);

    },

    fetchText: function() {
      var msgs = [{ name: 'Lt. Data', message: 'Bull shit, sir?' },
                  { name: 'Cmdr. Riker', message: 'Bullshit!'},
                  { name: 'Computer', message: 'The captain is not onboard the Enterprise' },
                  { name: 'Cmdr. Riker', message: 'Computer, where is the captain currently?' },
                  { name: 'Counsel. Troi', message: 'Where is the captain?' }];

      return msgs;

    },

    drawText: function(context, text) {
      for (var i = 0; i < text.length; i++) {
        var txt = text[i].name + ': ' + text[i].message;
        var x = this.x + this.canvas.winBuffer;
        var y = this.height - this.textBox.height - this.canvas.winBuffer - this.canvas.winBuffer * i;
        var maxWidth = this.width - (this.canvas.winBuffer * 2);

        context.font = '14px courier';
        context.fillStyle = 'white';
        context.fillText(txt, x, y, maxWidth);

      }
    },
  };

  return Communications;
});
