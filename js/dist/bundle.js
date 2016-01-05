(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*module.exports = function(name,greeting = 'Hello'){
  console.log(`${greeting} ${name}`);
}

const VALUE = {};
VALUE.foo = 'bar';
console.log('value:',VALUE);

const API = 'XXX'
if(true){
  const yes = 'bar';
  console.log('foo',yes);
}

let answer = 42;
console.log(`the answer is ${answer}`);

/// Working with modules

import * as _ from 'lodash';
import {sum,sumMore as addTwo} from './addition';
import * as addition from './addition';
import {users} from './users';
console.log(_.where(users,{age:36}));
console.log( "2+3", sum(2,3));
console.log( "2+3+5", addTwo(2,3,5));
console.log("second way of doing it", addition.sum(2,3));

//Object Enhancements
var color = "red";
var speed = 100;
var drive = "fast";

var car = {
  color,
  speed,
  go(){
    console.log("vroom");
  },
  [drive]:function(){
    console.log("slow");
  }
};

console.log('the color car is '+ car.color);
console.log('he runs at ' + car.speed);
car.go();
car.fast();*/

///Using the ES6 spread operator

'use strict';

console.log.apply(console, [1, 2, 3]);

var first = [1, 2, 3];
var second = [4, 5, 6];

first.push.apply(first, second);
console.log(first);

function addThreeThings(a, b, c) {
  var result = a + b + c;
  console.log(result);
}

addThreeThings.apply(undefined, first);

//Shorthand Properties in ES6

var name = 'Rolando';
var surname = 'Barbella';
var pet = "Dog";

var person = { name: name, surname: surname };

var team = { person: person, pet: pet };

console.log(person);
console.log(team);

},{}],2:[function(require,module,exports){
'use strict';

var greet = require('./es6');

greet('Rolando');

},{"./es6":1}]},{},[2])
//# sourceMappingURL=main.js.map
