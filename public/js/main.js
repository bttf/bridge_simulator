window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       || 
          window.webkitRequestAnimationFrame || 
          window.mozRequestAnimationFrame    || 
          window.oRequestAnimationFrame      || 
          window.msRequestAnimationFrame     || 
          function(/* function */ callback, /* DOMElement */ element){
            window.setTimeout(callback, 1000 / 60);

          };
  })();

require(['js/Game'], function (Game) {
  var g = new Game();

  var init = function() {
    init_browser();
    g.init(canvas);

  };

  var init_browser = function() {
    body = document.getElementsByTagName("body")[0];

    canvas = document.createElement("canvas");
    canvas.id = "canvas";
    canvas.width = window.innerWidth - 15;
    canvas.height = window.innerHeight - 25;

    body.appendChild(canvas);

    context = canvas.getContext('2d');

    add_event_listeners();

  };

  var add_event_listeners = function() {
    // body.addEventListener("keydown", key_down, false);
    // body.addEventListener("keyup", key_up, false);
    // body.addEventListener("keypress", key_press, false);

    // body.addEventListener("mousedown", mouse_down, false);
    // body.addEventListener("mouseup", mouse_up, false);
    body.addEventListener("mousemove", g.events.onMouseMove.bind(g), false);

  };

  var loop = function(time) {
    requestAnimFrame(loop);
    context.clearRect(0, 0, canvas.width, canvas.height);
    render(time);
    draw(context);

  };

  var render = function(time) {
    g.render(time);
  };

  var draw = function(context) {
    g.draw(context);
  };

  init();
  loop(0);

});
