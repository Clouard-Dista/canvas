'use strict';
// Dependencies.
const  express = require('express');
const  http = require('http');
const  path = require('path');
const  fs = require('fs');
const  socketIO = require('socket.io');

const  app = express();
const  server = http.Server(app);
const  io = socketIO(server);

var players = {};

const  environment = require( './src/param/environement.ts');

app.set('port', environment.port || 4000);
app.use('/static', express.static(__dirname + '/static'));

// Routing
require('./src/param/routesLoader.ts')(app);

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
