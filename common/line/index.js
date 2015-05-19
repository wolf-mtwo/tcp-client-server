readline = require('readline');
rl = readline.createInterface({input: process.stdin, output: process.stdout});
rl.setPrompt('server command> ');

module.exports = (function(module) {

  module.read = function(callback) {
    if (!(callback instanceof Function)) {
      throw new Error('callback is no a function');
    }
    rl.on('line', function(line) {
      line = line.trim();
      if (line) {
        rl.prompt();
        console.log(line);
        callback(line);
      }
    });
  }

  return module;
})({});
