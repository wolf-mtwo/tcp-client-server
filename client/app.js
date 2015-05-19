var net = require('net');
var PORT = 8123;
var Encrypt = require('../common/encrypt');
encrypt = new Encrypt()

var client = net.connect({port: PORT},
function() {
  console.log('connected to server!');
  // client.write('world!\r\n');
  // client.write('worldasdasd');
});

client.on('data', function(data) {
  console.log(encrypt.parse(data));
  // client.end();
});
client.on('end', function() {
  console.log('disconnected from server');
});


readline = require('readline');
readCommand = readline.createInterface({input: process.stdin, output: process.stdout});
readCommand.prompt();

readCommand.on('line', function(line) {
  console.log('================');
  client.write(line);
});
