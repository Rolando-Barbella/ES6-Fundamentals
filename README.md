#Javascript ES6 

A series of short examples to get the basic understanding on ES6 and some of their new features.

##Whats new? (from Wikipedia)

The Sixth Edition, known as ECMAScript 2015,[12] adds significant new syntax for writing complex applications, including classes and modules, but defines them semantically in the same terms as ECMAScript 5 strict mode. Other new features include iterators and for/of loops, Python-style generators and generator expressions, arrow functions, binary data, typed arrays, collections (maps, sets and weak maps), promises, number and math enhancements, reflection, and proxies (metaprogramming for virtual objects and wrappers). As the first “ECMAScript Harmony” specification, it is also known as “ES6 Harmony”.

##The Const variable
Support for constants (also known as "immutable variables"), i.e., variables which cannot be re-assigned new content. Notice: this only makes the variable itself immutable, not its assigned content (for instance, in case the content is an object, this means the object itself can still be altered).

The variable is recommend for example to use on cases when defining an API that we know no is not going to change, is recommend to declare it with capital letter.

###Examples
```javascript
const API = '//myapi.json'

const VALUE = {};
VALUE.foo = 'bar';
console.log('value:',VALUE); ==> value: Object {foo: "bar"}

if(true){
  const consoleBar = 'Bar';
  console.log('foo',consoleBar); ==> foo bar
}
```
##Working with modules
With ES6 you can import modules from other pages, this quite handy and powerful, less reputation will be done with this, it gives the language a similar look and feel to Python and Ruby.

###Examples
addition.js
```javascript

export function sum(a,b){
  return a + b;
};

export function sumMore(a,b,c){
  return a + b + c;
};
```
users.js
```javascript
export var users = [
  { 'user': 'barney', 'age': 36, 'active': false, 'pets': ['hoppy'] },
  { 'user': 'fred',   'age': 40, 'active': true, 'pets': ['baby puss', 'dino'] }
];
```
From addition.js
```javascript
import * as _ from 'lodash';
import {sum,sumMore as addTwo} from './addition'; // Calling external file ==> addition.js
import * as addition from './addition'; 
```
From  users.js
```javascript
import {users} from './users';
console.log(_.where(users,{age:36}));
console.log( "2+3", sum(2,3));
console.log( "2+3+5", addTwo(2,3,5));
console.log("second way of doing it", addition.sum(2,3));
```
###Object Enhancements
This syntactic sugar allows us to quickly create objects by passing the reference and it will create the property based on that.

###Examples
```javascript
var color = "red";
var speed = 100;
var drive = "fasts";

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

console.log('The color car is '+ car.color);
console.log('He runs at ' + car.speed + ' ' + 'Miles an hour');
car.go();
car.fasts() ==> slow;
```
##ES6 spread operator
You can get rid of an array in the most easy way you can ever imagine and off course do more complex things.

```javascript
  console.log(...[1,2,3]); ==> 1,2,3
```
```javascript
  console.log(...[1,2,3]);
  var first = [1,2,3];
  var second = [4,5,6];

  first.push(...second);
  console.log(first);
```
###Shorthand Properties
let is an alternatives to var when declaring variables,let is block-scoped instead of lexically scoped to a function,let is hoisted to the top of the block, while var declarations are hoisted to top of the function.

```javascript
  let name = 'Rolando';
  let surname = 'Barbella';
  let pet = "Dog";

  let person = {name, surname};

  let team = {person,pet}

  console.log(person); ==>{name: "Rolando", surname: "Barbella"}
  console.log(team); ==>{person: Object, pet: "Dog"}
```