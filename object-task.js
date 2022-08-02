// tasks

// Hello, object
// importance: 5
// Write the code, one line for each action:

// 1. Create an empty object user.
// 2. Add the property name with the value John.
// 3. Add the property surname with the value Smith.
// 4. Change the value of the name to Pete.
// 5. Remove the property name from the object.

/* let user = {};
user['name'] = 'John';
user.surname = 'Smith';

console.log(user);
user.name = 'Pete';
console.log(user.name);
delete user.name;
console.log(user); */

// comparison by reference

// two object are equal only if they are the same object

// cloning and merging, Object.assign

let user = {
  name: 'John',
  age: 33,
};

let clone = {};

/* for (let key in user) {
  clone[key] = user[key];
}

alert(clone.name);
 */

Object.assign(clone, user);

console.log(clone);

console.log(user);

// const objects can be modified
