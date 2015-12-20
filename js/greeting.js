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