var net = require('net');
var config = require('./config');
var ServerManager = require('./src');
var clients = [];
var line = require('../common/line');
var Encrypt = require('../common/encrypt');
encrypt = new Encrypt()

var server = net.createServer(function(socket) {
  console.log('client connected');
  clients.push(socket);
  socket.on('end', function() {
    console.log('client disconnected');
  });
  socket.on('data', function(message) {
    ServerManager.main(message);
  });
  socket.write(encrypt.build({ip:"asdasd"}));
  // socket.pipe(socket);
});

// server.listen(1337, '127.0.0.1');
server.listen(config.port, function() {
  console.log('Server Starts');
});

line.read(function(line) {
  console.log(line);
});
