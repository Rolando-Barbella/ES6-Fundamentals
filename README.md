#Javascript ES6 

A series of short examples to get the basic understanding on ES6 and some of their new features.

- [Definition](#definition)
- [Variables](#variables)
      - [const](#const)
      - [let](#let)
- [Shorthand Properties](#shorthand-properties)
- [Working with modules](#working-with-modules)
- [Object enhancements](#object-enhancements)
- [Spread operator](#spread-operator)
- [String templates](#string-templates)
- [Destructuring and parameter handling](#destructuring-and-parameter-handling)
- [Default values for function parameters](#default-values-for-function-parameters)
- [Arrow function](#arrow-function)
- [For loop](#foor-loop)


##Definition (from Wikipedia)

The Sixth Edition, known as ECMAScript 2015,[12] adds significant new syntax for writing complex applications, including classes and modules, but defines them semantically in the same terms as ECMAScript 5 strict mode. Other new features include iterators and for/of loops, Python-style generators and generator expressions, arrow functions, binary data, typed arrays, collections (maps, sets and weak maps), promises, number and math enhancements, reflection, and proxies (metaprogramming for virtual objects and wrappers). As the first “ECMAScript Harmony” specification, it is also known as “ES6 Harmony”.

## Variables
ES6 comes with two new variables, const and let, which will make you think if you ever need to use var again.

###Const 
Support for constants (also known as "immutable variables"), i.e., variables which cannot be re-assigned new content. 

> Notice: This only makes the variable itself immutable, not its assigned content (for instance, in case the content is an object, this means the object itself can still be altered).

The variable is recommend for example to use on cases when defining an API that we know no is not going to change, is recommend to declare it with capital letter.

```javascript
const something = 'My car is purple';
something = 'My car is red'// Uncaught TypeError: Assignment to constant variable.(…)

// But

const x = {
  y: 13
}

x.y = 14

console.log(x.y) // 14

const API = '//myapi.json'

const VALUE = {};
VALUE.foo = 'bar';
console.log('value:',VALUE); // value: bar

if(true){
  const consoleBar = 'Bar';
  console.log('foo',consoleBar); // foo bar
}
```
## let
let is a better alternatives to var when declaring variables, let is block-scoped instead of lexically scoped to a function, let is hoisted to the  top of the block, while var declarations are hoisted to top of the function.

```javascript

  // Whit ES5
  const i = 666
  for(var i = 0; i < 5; i++){
    console.log(i)
  } 
  console.log('After i', i)
  // 1 2 3 4 5
  // After i 5

  // Whit ES6 
  const i = 666
  for(let i = 0; i < 5; i++){
    console.log(i)
  } 
  console.log('After i', i)
  // 1 2 3 4 5
  // After i 666

``` 
##Shorthand Properties
You write less with shorthand property names in ES6

```javascript
  const name = 'Rolando';
  const surname = 'Barbella';
  const pet = "Dog";
  
  const person = {name, surname};
  
  const team = {person,pet};
  
  console.log(person); //{name: "Rolando", surname: "Barbella"}
  console.log(team.person); //{name: "Rolando", surname: "Barbella"}
  console.log(team.pet);// Dog 
```

##Working with modules
With ES6 you can import and export modules from other files, this is quite handy and powerful, less repetition will be done thanks to this new feature, it gives a similar look and feel to languages like Python and Ruby.

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
import {sum,sumMore as addTwo} from './addition'; // Calling external file -> addition.js
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
##Object enhancements
This syntactic sugar allows us to quickly create objects by passing the reference and it will create the property based on that.

```javascript
var color = "red";
var speed = 100;
var drive = "fasts";

var const = {
  color,
  speed,
  go(){
    console.log("vroom");
  },
  [drive]:function(){
    console.log("slow");
  }
};

console.log('The color car is '+ car.color);//The color car is red
console.log('He runs at ' + car.speed + ' ' + 'Miles an hour');//He runs at 100 Miles an hour
car.go();//vroom
car.fasts() // slow;
```
##Spread operator
You can get rid of an array in the most easy way you can ever imagine and of course do more complex things.

```javascript
  console.log(...[1,2,3]);// 1,2,3
```
```javascript
 const first = [1,2,3];
 const second = [4,5,6];

  first.push(...second);
  console.log(first) //1,2,3,4,5,6;
```
Another useful example
```javascript
  const numbers = [1,2,3]
  [...numbers,4];// [1,2,3,4]
  // Which is equal to numbers.concat([4]);
```
Using variables
```javascript
const a, b, rest;
[a, b, ...rest] = [1, 2, 3, 4, 5]
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]

const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2
```
##String templates
You can declare strings with (backticks), in addition to " and '. This make the language a bit more mature, specially when we just do something like ```javascript 
string +  ' ' + anotherString ; ``` this feels like if we are doing basic math, lets look at some examples on how we can do it now.

```javascript
const sayHi = "Hi!";
const salutation = `${sayHi}, World`;
console.log(salutation) // Hi!, World
```

```javascript
const salutationSpace = `
YOU
  ${sayHi}, 

World`

;
console.log(salutationSpace) ==> YOU
  Hi!, 

World
```
You can do cool maths like:
```javascript
const x = 1;
const y = 2;
const maths = `${x} + ${y} = ${x+y}`

console.log(maths)//3;
```
More complex scenario:
```javascript
function tag(strings, ...values){
  if(values[0]>22){
    values[1] = "sleepy";
  }
  else{
    values[1] = "awake";
  }
  return `${strings[0]}${values[0]}${strings[1]}${values[1]}`
}
const message = tag`It's ${new Date().getHours()} I'm ${""}`;

console.log(message); // It's 19 I'm awake // It's 23 I'm sleepy 
```
##Destructuring and parameter handling
There is ways of declaring variables with arrays while passing arguments, lets see how.
```javascript
const {firstName, lastName} = {
  "firstName": "Clinton",
  "lastName": "Ruiz",
  "phone": "1-403-985-0449",
  "email": "clinton-ruiz@facilisislorem.org",
  "address": "NW11 London"
}
console.log(firstName,lastName); // Clinton Ruiz
```

```javascript
const [first,,,,fifth] = ["one","two","tree","four","five"];
console.log(first); // one
console.log(fifth); // five
```

Parsing an array returned from a function
```javascript
  function foo(){
    return [1,2,3];
  };
  const a, c
  [a,,c] = foo();

  console.log(c) //3
```
Object destructuring
Example 1
```javascript
const obj = {price: 42, vailable: true};
const {price, vailable} = obj;

console.log(price); //42

```
Example 2

```javascript

const {name,location} ={
  name:'Rolando',
  surname:'Barbella',
  location:{city:'Cardiff',street:'Cwmdare street'},
  job:'Developer'
};

const getWhereYouLive = (name,location) =>{
  return `${name} lives in ${location.street}`;
};

console.log(getWhereYouLive(name,location));//Rolando lives in Cwmdare street

```
More:

```javascript
const contacts = [
  {
    "firstName": "Clinton",
    "lastName": "Ruiz",
    "phone": "1-403-985-0449",
    "email": "pharetra@facilisislorem.org",
    "address": "Ap #829-3443 Nec St."
  },
  {
    "firstName": "Rolando",
    "lastName": "Barbella",
    "phone": "1-429-754-5027",
    "email": "rolando.alique@diamProin.uk",
    "address": "Cf24 Cathays"
  }
  
]
const [Clinton,Rolando] = contacts;

function showEmail({email}){
  console.log(email);
}

showEmail(Rolando); // rolando.alique@diamProin.uk
showEmail(Clinton); // pharetra@facilisislorem.org
```
Argument objects

```javascript
 const getParameter = ()=>{
  console.log(parameter[1],parameter[0],parameter[2]);
 };

 getParameter(2,4,6); //4 2 6

```
Array from() in ES6 

```javascript

const sort(){
  var a = Array.from(arguments);
  return a.sort();
};

sort(40,20,50,30);//[20,30,40,50]
```
##Default values for function parameters
We can have default parameters inside a function and also overwrite them, lets see. 

```javascript
function anotherHello(hi,name = "Rolando"){
  console.log(hi + " , " + name);
}
anotherHello("Hello"); // Hello Rolando
anotherHello("Hello","Billy"); // Hello Billy

```
Another useful example using functions

```javascript
const getParam = ()=>{
  return 3;
};

const multiply = (a, b = getParam())=>{
  return a * b;
};

multiply(2,5);//10
multiply(2);//6
```

Mandatory Arguments 

```javascript
function throwError(){
  throw new Error('Missing Parameter');
};

function foo(param1 = throwError(),param2 = throwError()){
  //do something  
};
foo(10,20);//ok
foo(10);//Error:Missing Parameter

```

##Arrow function ()=>
We can use => as part of the new syntax, lets look at some of the benefits:

```javascript
const arrowHello = (message,name) => `${message} ${name}`;
console.log(arrowHello("Hello","Mamma"));// Hello Mamma
```
Clear syntax, no need to use return when you don't use the curly brackets (implicit return); 
```javascript
 const greeting =(message,name)=>message + name;

//In ES5
var greeting = function(message,name){
  return message + name;
}

//With one parameter

const message = message => 'Hello';

```
A shortcut for creating anonymous functions with this scope bound.

```javascript
const superMan = {
  name:"Clark",
  showLastName:(lastName,add)=>{
    add(lastName);
  },
  receive:function(){
    this.showLastName(" Kent", lastName=> console.log(this.name + lastName));
  }
};

superMan.receive();// Clark Kent

```
Adding a string to each element in an array

```javascript
const names = ['Wes', 'Kait', 'Lux'];

const fullNames = names.map((name) => {
  return `${name} Bos`;
});

console.log(fullNames); // Wes Bos, Kait Bos, Lux Bos

 ```
 No parameters

 ```javascript
  const fullNames5 = names.map(() => `Cool Bos`);

  console.log(fullNames5); // Cool Bos, Cool Bos, Cool Bos
```

## The entries() method
The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

> Note: No support on Explorer or Android devices

```javascript
const lettes = ['a','b','c'];

for(const[index,element] of letters.entries()){
  console.log(index,element);
};

```
##Promises
The Promise object is used for asynchronous computations. A Promise represents an operation that hasn't completed yet, but is expected in the future.

> Note: You should use .catch() for handling errors, rather than .then(null, fn). Using .catch() is more explicit and idiomatic; and when chaining you can have a single .catch() at the end of the chain to handle any rejection or thrown exceptions from either the original promise or any of it's handlers

```javascript

const d = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    if(true){
      resolve('Hello!');
    }else{
      reject('no bueno');
    }
  },2000);
});

d.then((data)=> {
  console.log('success :', data);
  return 'foo bar'
}).
then((data)=>console.log('success2:', data)).
catch((error)=> console.error('error:', error));
// success : Hello!
// success2: foo bar

```
### Promise.all()
Promise.all() takes an array of Promises and once all of them are fulfilled it fulfills its returned Promise with an array of their fulfilled values.This method can be useful for aggregating results of multiple promises together

```javascript
  var itemUrls = {  
    'http://www.api.com/items/1234',
    'http://www.api.com/items/4567'
  },
  itemPromises = itemUrls.map(fetchJSON);

Promise.all(itemPromises)  
  .then(function(results) {
     // we only get here if ALL promises fulfill
     results.forEach(function(item) {
       // process item
     });
  })
  .catch(function(err) {
    // Will catch failure of first failed promise
    console.log("Failed:", err);
  });

```
## For loop

ES6 for loop is the most concise, direct syntax yet for looping through array elements, it avoids all the pitfalls of for–in, unlike forEach(), it works with break, continue, and return.

```javascript
  const iterable = [0,1,2];

  for (let i of iterable) {
      console.log(i);
  }
  // 0 1 2
```
It also works on strings, treating the string as a sequence of Unicode characters:

```javascript
  for (let chr of "ab") {
    console.log(chr);
  }
  // a b
```
for–of does not work with plain old Objects, but if you want to iterate over an object’s properties you can either use for–in or the builtin Object.keys:

``` javascript
const someObject = {name:'Mike'}

for (let key of Object.keys(someObject)) {
  console.log(key + ": " + someObject[key]);
}
 // name: Mike
```

##Sources

- [es6-feature](http://es6-features.org/#Constants)
- [wikipedia](http://en.wikipedia.org/wiki/ECMAScript)
- [ponyfoo.com](http://ponyfoo.com/articles/es6#template-literals)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_6_support_in_Mozilla)
- [egghead.io](https://egghead.io/technologies/es6)
- [Dave Atchley](http://www.datchley.name/es6-promises/)
- [Wes Bos](http://wesbos.com/arrow-functions/)
