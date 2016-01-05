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

console.log(...[1,2,3]);

var first = [1,2,3];
var second = [4,5,6];

first.push(...second);
console.log(first);

function addThreeThings(a,b,c){
  let result = a + b +c;
  console.log(result);
}

addThreeThings(...first);
