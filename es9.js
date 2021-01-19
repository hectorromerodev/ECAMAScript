// Destructuring data
const obj = {
  name: 'Hector',
  age: 26,
  country: 'MX'
};
let { country, age, ...all } = obj;
console.log(all);

// Union of objects
const ob1 = {
  name: 'Hector',
  age: 26
};
const ob2 = {
  ...ob1,
  country: 'MX'
};
console.log(ob1);
console.log(ob2);

// Promise finally
const helloWord = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Hello world'), 3000)
      : reject(new Error('Test Error'));
  });
};

helloWord()
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => console.log('The promise was resolved'));

// Regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('207203-05-21');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);