module.exports = function(name,greeting = 'Hello'){
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