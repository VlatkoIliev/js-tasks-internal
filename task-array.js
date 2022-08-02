const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// a negative index can be used, indicating an offset from the end of the sequence

const len = animals.length;
// const res = animals.unshift(...animals.splice(len - 2));

animals.splice(-2);

console.log(animals);
