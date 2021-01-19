// Objects flat
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(array.flat(2)); // The number 2 is the level of depth

// Object flatMap
let arr = [1, 2, 3, 4, 5];
console.log(arr.flatMap(value => [value, value * 3]));

// trimStart
let hello = '                hello word';
console.log(hello);
console.log(hello.trimStart());

// trimEnd
let name = 'hector         ';
console.log(name);
console.log(name.trimEnd());

// The catch(error) now we can opt out use it.
try {
  throw new Error('FFFF');
} catch {
  // error
}

// return from array to objects or vice versa
let entries = [["name", "hector"], ["age", 26]];
console.log(Object.fromEntries(entries));

// Object symbol
let mySymbol = 'My symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);