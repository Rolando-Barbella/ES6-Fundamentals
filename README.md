#Javascript ES6 

A series of short examples to get the basic understanding on ES6 and some of their new features.

##Whats new? (from Wikipedia)

The Sixth Edition, known as ECMAScript 2015,[12] adds significant new syntax for writing complex applications, including classes and modules, but defines them semantically in the same terms as ECMAScript 5 strict mode. Other new features include iterators and for/of loops, Python-style generators and generator expressions, arrow functions, binary data, typed arrays, collections (maps, sets and weak maps), promises, number and math enhancements, reflection, and proxies (metaprogramming for virtual objects and wrappers). As the first “ECMAScript Harmony” specification, it is also known as “ES6 Harmony”.

##The Const variable
The variable es very recommend, for example to define an API that we no is not going to change.

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