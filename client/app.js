var net = require('net');
var PORT = 8123;
var client = net.connect({port: PORT},
function() {
  console.log('connected to server!');
  // client.write('world!\r\n');
  // client.write('worldasdasd');
});
client.on('data', function(data) {
  console.log(data.toString());
  // console.log(data.toString());
  // console.log('asdasdasd');
  // client.end();
});
client.on('end', function() {
  console.log('disconnected from server');
});
