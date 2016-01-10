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
console.log(team);

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


//String Templates
let sayHi = "Hi!";
let salutation = `${sayHi}, World`;
let salutationSpace = `
YOU
  ${sayHi}, 

World`

;

console.log(salutation);
console.log(salutationSpace);

let x = 1;
let y = 2;
let maths = `${x} + ${y} = ${x+y}`

console.log(maths);

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

console.log(message);

//Destructuring Assignment

let {firstName, lastName} = {
  "firstName": "Clinton",
  "lastName": "Ruiz",
  "phone": "1-403-985-0449",
  "email": "pharetra@facilisislorem.org",
  "address": "Ap #829-3443 Nec St."
}

console.log(firstName,lastName);

function listObj(){
  return {
    color:"blue",
    name:"Rolando",
    city:"Caracas",
    job:"coder"
  }
}
var {name,city} = listObj();
console.log(name);
console.log(city);

var [first,,,,fifth] = ["one","two","tree","four","five"];
console.log(first);
console.log(fifth);

var contacts = [
  {
    "firstName": "Clinton",
    "lastName": "Ruiz",
    "phone": "1-403-985-0449",
    "email": "pharetra@facilisislorem.org",
    "address": "Ap #829-3443 Nec St."
  },
  {
    "firstName": "Skyler",
    "lastName": "Carroll",
    "phone": "1-429-754-5027",
    "email": "Cras.vehicula.alique@diamProin.ca",
    "address": "P.O. Box 171, 1135 Feugiat St."
  },
  {
    "firstName": "Kylynn",
    "lastName": "Madden",
    "phone": "1-637-627-2810",
    "email": "mollis.Duis@ante.co.uk",
    "address": "993-6353 Aliquet, Street"
  },
  {
    "firstName": "Chaney",
    "lastName": "Edwards",
    "phone": "1-397-181-4501",
    "email": "rutrum@Nullamlobortis.net",
    "address": "P.O. Box 342, 9574 Egestas Street"
  }
]

contacts.forEach(({firstName})=>console.log(firstName));

var [,Skyler] = contacts;

function logEmail({email}){
  console.log(email);
}

logEmail(Skyler); 


//Default Values for Function Parameters
function anotherHello(hi,name = "Rolando"){
  console.log(hi + " , " + name);
}

anotherHello("Hello","Billy");

function receive(weird){
  weird();
}

receive(function(){
  console.log("weird");
});

function receive2(weird = ()=> console.log("Weird")){
  weird();
}

receive2();

*/
// Arrow Function =>

var arrowHello = (message,name) => `${message} ${name}`;
console.log(arrowHello("hello","mamma"));

var superMan = {
  name:"Clark",
  showMessage:function(message,lastName){
    lastName(message);
  },
  receive:function(){
    this.showMessage(" Kent", message => 
    console.log(this.name + message));
  }
}

superMan.receive();