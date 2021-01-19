// Objects entries return an matrix
const data = {
  front: 'Alex',
  end: 'Rel'
};

// Transform this object to a matrix
const entries = Object.entries(data);
console.log(entries);


// Transform an object to a values
const team = {
  lider: 'Lalo',
  secondary: 'Rey',
  finaly: 'Pedro'
};
const val = Object.values(team);
console.log(val);

// Assign start or end characters to a string
const string = 'hello';
console.log(string.padStart(12, '  hi      '));
console.log(string.padEnd(12, ' -> ')); // This will repeat the sentence to fill the 12 characters or not if not necessarily

// Async --> Await 
const helloWord = () => {
  return new Promise((resolve, reject) => {
    (false)
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Error'));
  });
};
// Async
const helloAsync = async () => {
  const hello = await helloWord();
  console.log(hello);
};
helloAsync();
// This is the correct way to use async await
const anotherFunc = async () => {
  try {
    const hello = await helloWord();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};
anotherFunc();