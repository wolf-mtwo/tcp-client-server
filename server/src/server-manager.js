module.exports = (function(module) {

  module.main = function(message) {
    console.log('new message on ServerManager');
    console.log(message.toString());
  }
  return module;
})({});
