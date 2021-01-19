// Here I put all the changes of es6 was maded before
// Set defaults on the parameters
function setName(name = "hector") {
  console.log(name);
}
setName();
setName('Hola');

// We can use `` to skip lines
let a = `hola 
mi 
nombre
es hector`;

// Destructuring objects
person = {
  "names": "hector",
  "age": 26,
  "greetings": 'hello'
};
let { names, age } = person;
console.log(names, age);

// Union of arrays []
let fastbikeVaronil = ['Pollo', 'Eduardo', 'Lalo'];
let fastbikeFemenil = ['Karina', 'Cassandra', 'Daniela'];
let coachAdded = ['Gaston', ...fastbikeVaronil, ...fastbikeFemenil];
console.log(coachAdded);

// Assign variables to blocke scope with let
{
  let team = 'fastbike';
  console.log(team); // print fastbike
}
// console.log(team); // throws error because isn't accessible

// Assign new objects 
let b = 'b';
let c = 'c';
let obj = { b, c };

// ArrowFunctions ==> () { }
const teams = [{ name: 'Fastbike', age: 4 }, { name: 'osi', age: 5 }];
let listOfTeams = teams.map(team => console.log(team));

// Promises
const helloTeamPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('HEY');
    } else {
      resolve('UPS');
    }
  });
};

helloTeamPromise()
  .then(response => console.log(response))
  .catch(error => console.log(error));

// Classes
class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const cal = new calculator();
console.log(cal.sum(2, 3));