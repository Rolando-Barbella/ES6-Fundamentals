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
```javascript
const API = 'XXX'

const VALUE = {};
VALUE.foo = 'bar';
console.log('value:',VALUE);

if(true){
  const yes = 'bar';
  console.log('foo',yes);
}
```
addition.js
/////
export function sum(a,b){
  return a + b;
};

export function sumMore(a,b,c){
  return a + b + c;
};
//////
On another file
import * as _ from 'lodash';
import {sum,sumMore as addTwo} from './addition'; // Calling external file ==> addition.js
import * as addition from './addition'; 
import {users} from './users';
console.log(_.where(users,{age:36}));
console.log( "2+3", sum(2,3));
console.log( "2+3+5", addTwo(2,3,5));
console.log("second way of doing it", addition.sum(2,3));