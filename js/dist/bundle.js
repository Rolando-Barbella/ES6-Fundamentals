(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = function (name) {
  var greeting = arguments.length <= 1 || arguments[1] === undefined ? 'Hello' : arguments[1];

  console.log(greeting + ' ' + name);
};

var VALUE = {};
VALUE.foo = 'bar';
console.log('value:', VALUE);

var API = 'XXX';
if (true) {
  var yes = 'bar';
  console.log('foo', yes);
}

},{}],2:[function(require,module,exports){
'use strict';

var greet = require('./greeting');

///EXAMPLE ES6
greet('Rolazxzx');

},{"./greeting":1}]},{},[2])
//# sourceMappingURL=main.js.map
