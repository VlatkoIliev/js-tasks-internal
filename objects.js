// Objects - basics

// 1. Creation of objects

let user = new Object(); // object constructor
let user2 = {}; // object literal syntax

let user3 = {
  name: 'John',
  age: 33,
};

// alert(user3.age);

// add property

// user3.isAdmin = true;

// alert(user3.name);
// alert(user3.isAdmin);

// delete property from the object

delete user3.isAdmin;

// console.log(user3);

// for multiword properties use square brackets

user3['guitar hero'] = 'fender';

// alert(user3['guitar hero']);

let user4 = {
  name: 'vins',
  age: 30,
};

// let key = prompt('What do you want to know about the user', 'age');

// alert(user4[key]);

// computed properties - we can use square brackets in an objectliteral, when creating an object

// let fruit = prompt('Which fruit to buy', 'apple');

// let bag = {
//   [fruit]: 5,  the name of the property is taken from the variable fruit
// };

// alert(bag.apple);

// console.log(bag);

// Most of the time, when property names are known and simple, the dot notation is used.
// And if we need something more complex, we use the square brackets.

// Property value shorthand

// function makeUser(name, age) {
//   return {
//     name,
//     age,
//   };
// }

// let user5 = makeUser('Frank', 55);
// console.log(user5.age);

// Property existence test, 'in' operator

// reading a non-existing property returns undefined

// alert('age' in user6);

// let key = 'name';
// alert(key in user6);
// alert('height' in user6);

// The for..in loop - iterate all keys of an object

// output all properties of user6
/* let user6 = { name: 'john', age: 21 };

for (let key in user6) {
  // keys
  alert(key);
  // values for the keys
  alert(user6[key]);
}
 */
// integer properties are sorted, others appear in creation order

let codes = {
  '+49': 'Germany',
  '+41': 'Switzerland',
  '+44': 'Great Britain',
  // ..,
  '+1': 'USA',
};

for (let code in codes) {
  alert(+code); // 49, 41, 44, 1
}

// Summary

// objects are associative arrays wih several special features

// they store properties (key-value) pairs, where:

// prop keys must be strings os symbols
// values can be of any type

// to access a property, we can use:
// the dot notation: obj.prop
// square brackets notation: obj['prop']

// additional operators:
// to delete a prop: delete obj.prop
// to check if a property with a given key exists: 'key' in obj
// to iterate over an object: for (let key in obj) loop
