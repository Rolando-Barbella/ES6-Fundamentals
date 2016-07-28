#Javascript ES6 

A series of short examples to get the basic understanding on ES6 and some of their new features.

##What's new? (from Wikipedia)

The Sixth Edition, known as ECMAScript 2015,[12] adds significant new syntax for writing complex applications, including classes and modules, but defines them semantically in the same terms as ECMAScript 5 strict mode. Other new features include iterators and for/of loops, Python-style generators and generator expressions, arrow functions, binary data, typed arrays, collections (maps, sets and weak maps), promises, number and math enhancements, reflection, and proxies (metaprogramming for virtual objects and wrappers). As the first “ECMAScript Harmony” specification, it is also known as “ES6 Harmony”.

##The Const variable
Support for constants (also known as "immutable variables"), i.e., variables which cannot be re-assigned new content. Notice: this only makes the variable itself immutable, not its assigned content (for instance, in case the content is an object, this means the object itself can still be altered).

The variable is recommend for example to use on cases when defining an API that we know no is not going to change, is recommend to declare it with capital letter.

```javascript
const API = '//myapi.json'

const VALUE = {};
VALUE.foo = 'bar';
console.log('value:',VALUE); // value: Object {foo: "bar"}

if(true){
  const consoleBar = 'Bar';
  console.log('foo',consoleBar); // foo bar
}
```
##Working with modules
With ES6 you can import modules from other pages, this quite handy and powerful, less reputation will be done with this, it gives the language a similar look and feel to Python and Ruby.


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
car.fasts() // slow;
```
##Spread operator
You can get rid of an array in the most easy way you can ever imagine and off course do more complex things.

```javascript
  console.log(...[1,2,3]);// 1,2,3
```
```javascript
  var first = [1,2,3];
  var second = [4,5,6];

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
var a, b, rest;
[a, b, ...rest] = [1, 2, 3, 4, 5]
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]

var x = [1, 2, 3, 4, 5];
var [y, z] = x;
console.log(y); // 1
console.log(z); // 2
```

##Shorthand Properties
let is an alternatives to var when declaring variables,let is block-scoped instead of lexically scoped to a function,let is hoisted to the top of the block, while var declarations are hoisted to top of the function.

```javascript
  let name = 'Rolando';
  let surname = 'Barbella';
  let pet = "Dog";

  let person = {name, surname};

  let team = {person,pet}

  console.log(person); //{name: "Rolando", surname: "Barbella"}
  console.log(team); //{person: {person: {name:'Rolando',surname:'Barbella'}, pet: "Dog"}, pet: "Dog"}
```
###String Templates
You can declare strings with (backticks), in addition to " and '. This make the language a bit more mature, specially when we just do something like ```javascript 
string +  ' ' + anotherString ; ``` this feels like if we are doing basic math, lets look at some examples on how we can do it now.

```javascript
let sayHi = "Hi!";
let salutation = `${sayHi}, World`;
console.log(salutation) // Hi!, World
```

```javascript
let salutationSpace = `
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
let x = 1;
let y = 2;
let maths = `${x} + ${y} = ${x+y}`

console.log(maths) ==> 1 + 2 = 3;
```
More complex scenario:
```javascript
function tag(strings, ...values){
  if(values[0]<20){
    values[1] = "awake";
    return `${strings[0]}${values[0]}${strings[1]}${values[1]}`
  }
  else{
    values[1] = "sleep";
  }
}
var message = tag`It's ${new Date().getHours()} I'm ${" "} `;

console.log(message); // It's 19 I'm awake
```
##Destructuring and parameter handling
There is ways of declaring variables with arrays while passing arguments, lets see how.
```javascript
let {firstName, lastName} = {
  "firstName": "Clinton",
  "lastName": "Ruiz",
  "phone": "1-403-985-0449",
  "email": "clinton-ruiz@facilisislorem.org",
  "address": "NW11 London"
}
console.log(firstName,lastName); // Clinton Ruiz
```

```javascript
var [first,,,,fifth] = ["one","two","tree","four","five"];
console.log(first); // one
console.log(fifth); // five
```
You can also do:
```javascript
var [first,second,,,fifth] = ["one","two","tree","four","five"];
console.log(second); ==> two
```
Parsing an array returned from a function
```javascript
  function foo(){
    return [1,2,3];
  };
  var a, c
  [a,,c] = foo();

  console.log(c) //3
```
Object destructuring
```javascript
var obj = {price: 42, vailable: true};
var {price, vailable} = obj;

console.log(price); //42

------------------------

const {name,location} ={
  name:'Rolando',
  surname:'Barbella',
  location:{city:'Cardiff',street:'Cwmdare street'},
  job:'Developer'
};

const getLocationStreet = ({name,location}) =>{
  return location.street;
};

getLoactionStreet()//Cwmdare street
```
More:
```javascript
var contacts = [
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
  },
  .......
]
var [,Rolando] = contacts;

function showEmail({email}){
  console.log(email);
}

showEmail(,Rolando); // rolando.alique@diamProin.uk
showEmail(Clinton); // pharetra@facilisislorem.org
```
##Default Values for Function Parameters
We can have default parameters inside a function and also overwrite them, lets see. 

```javascript
function anotherHello(hi,name = "Rolando"){
  console.log(hi + " , " + name);
}
anotherHello("Hello"); // Hello Rolando
anotherHello("Hello","Billy"); // Hello Billy

```
Another useful example

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
##Arrow Function =>
We can use => as part of the new syntax and do stuff like

```javascript
var arrowHello = (message,name) => `${message} ${name}`;
console.log(arrowHello("hello","Mamma")); ==> Hello Mamma
```

We can also go deeper into functions and do something like:
```javascript
var arrowHello = (message,name) => `${message} ${name}`;
console.log(arrowHello("hello","Mamma")); ==> Hello Mamma
```

```javascript
var superMan = {
  name:"Clark",
  showLastName:function(lastName,add){
    add(lastName);
  },
  receive:function(){
    this.showLastName(" Kent", lastName => 
    console.log(this.name + lastName));
  }
}

superMan.receive(); // Clark Kent
```
## entries() method
The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

*Note: No support on Explorer or Android devices

```javascript
const lettes = [a,b,c];
var entries = letters.entries();

for(let e of entries){console.log(e)} // [0,a],[1,b],[2,c];

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

##Sources

- [es6-feature](http://es6-features.org/#Constants)
- [wikipedia](http://en.wikipedia.org/wiki/ECMAScript)
- [ponyfoo.com](http://ponyfoo.com/articles/es6#template-literals)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_6_support_in_Mozilla)
- [egghead.io](https://egghead.io/technologies/es6)
- [Dave Atchley](http://www.datchley.name/es6-promises/)
