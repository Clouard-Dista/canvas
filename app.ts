'use strict';
// Dependencies.
const  environment = require( './src/config/environement.ts');
const  express = require('express');
const  http = require('http');
const  path = require('path');
const  fs = require('fs');
const  socketIO = require('socket.io');

const  app = express();
const  server = http.Server(app);
const  io = socketIO(server);

var players = {};

console.log(process.env.npm_lifecycle_event,environment)
app.set('port', process.env.npm_package_config_port || 4000);
app.use('/static', express.static(__dirname + '/static'));

// Routing
app.get('/', function(request, response) {
  fs.readFile('static/index.html', (err, data) => {
    if (err) {
      response.writeHead(500);
      response.end(err);
      return;
    }

    data = data.toString().replace(/\{\{someVal\}\}/, '[81, 90, 68, 83]');
    response.writeHead(200);
    response.sendFile(path.join(__dirname, data));
    response.end(data, 'utf8'); 
  });
});

server.listen(app.get('port'), function() {
  console.log('Starting server on port '+app.get('port'));
});

io.on('connection', function(socket) {
  socket.on('new player', function() {
    players[socket.id] = {
      x: 300,
      y: 300
    };
  });
  socket.on('keyInput', function(data) {
    console.clear()
    console.log(data)
    var player = players[socket.id] || {};
    if (data.left) {
      player.x -= 5;
    }
    if (data.up) {
      player.y -= 5;
    }
    if (data.right) {
      player.x += 5;
    }
    if (data.down) {
      player.y += 5;
    }
  });
  socket.on('disconnect', function () {
    //console.log("user disconnected",players,socket.id);
    io.emit('user disconnected');
  });
});


setInterval(function() {
  io.sockets.emit('state', players);
}, 1000 / 60);
