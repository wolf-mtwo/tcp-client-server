
function Encrypt() {
  // this.initial = bar;
  // this.baz = 'baz'; // default value
}

Encrypt.prototype.build = function(object) {
  return JSON.stringify(object);
};

Encrypt.prototype.parse = function(string) {
  return JSON.parse(string);
}

// export the class
module.exports = Encrypt;
