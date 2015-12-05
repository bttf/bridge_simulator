var port = 8000;
var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var engines = require('consolidate');
var path = require('path');
var io = require('socket.io')(server);

server.listen(port);
console.log("Lets have a listen on port "+ port + "...");

io.on('connection', function(socket) {
  console.log('hey this is socket, hi ');
});

app.enable('trust proxy');
app.engine('html', engines.mustache);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(err, req, res, next) {
  res.status(500);
  res.render('error', { error: err });
});

app.get('/', function(req, res) {
  res.render('index', { script: 'js/main.js' });
});

