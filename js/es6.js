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
car.fast();

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

//Shorthand Properties in ES6

let name = 'Rolando';
let surname = 'Barbella';
let pet = "Dog";

let person = {name, surname};

let team = {person,pet}

console.log(person);
console.log(team);*/

///ES6 (ES2015) - Generators

function* hey(){
  console.log(`You called 'hey()'`);
  yield "hello";
  console.log(`I am not called until the second next`);
  yield "are";
  console.log(`Called when done`);
  yield "you?";
}

let heyYou = hey();
console.log(heyYou.next().value);
console.log(heyYou.next().value);
console.log(heyYou.next().value);

for (let word of heyYou){
  console.log(word);
}

//---------
function* hello(){
    console.log(`You called 'next()'`);
    yield "hello";
}

let greeter = hello();
console.log(greeter);
let next = greeter.next();
console.log(next);
let done = greeter.next();
console.log(done);
//------------
function* hello(){
    let friendly = yield "How";
    friendly = yield friendly + "are";
    yield friendly + "you?";
}

var hello = hello();
console.log(hello.next("first").value);
console.log(hello.next(" the heck ").value);
console.log(hello.next(" silly ol'").value);

//-----------
function* graph(){
    let x = 0;
    let y = 0;
    while(true){
        yield {x:x, y:y}
        x += 2;
        y += 1;
    }
}


var graphGenerator = graph();
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);



