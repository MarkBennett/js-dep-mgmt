var Q = require("q");

exports.greet = function greet(name) {
  return Q.when("Hello, " + name + "!");
};
