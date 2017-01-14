
const characters = [
  'Harry Potter',
  'Ron Weasly',
  'Hermione Granger',
  'Nevel Longbottom',
  'Lavender Brown',
  'Scabbers',
  'Pigwidgeon',
]

const handler = {
	get(target, name) {
		if(name in target){
			return Reflect.get(target, name)
		} else {
			const index = Number(name)
			return Reflect.get(target, target.length + index)
		}
	}
};

const proxy = new Proxy(characters, handler);

console.log(proxy[0]);
console.log(proxy[-1]);
console.log(proxy[-4]);


