// To run this code:
//
//   npm install -g browserify
//   npm install
//   browserify app.js -o bundle.js
//
// You can require node modules, as well as any of the standard node
// libraries listed here:
//
//    https://github.com/substack/node-browserify#compatibility

var greet = require("./greeter").greet;
var print = require("util").print;

greet("Bob").then(function(greeting) {
  document.querySelector("#target").innerHTML = greeting;
});
