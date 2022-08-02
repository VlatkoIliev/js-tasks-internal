// The optional chaining ?. is a safe way to access nested object properties, even if an intermediate property doesn't exist.

// stops the evaluation if the value before the ?. is undefined or null and returns undefined.

// in other words, value?.prop:
// works as value.prop, if value exists
// otherwise (when value is undefined or null) it returns undefined.

// let user = {};

// alert(user?.address?.street);

// variable before ?. must be declared!

// ?.() is used to call a function that may not exist

/* let userAdmin = {
  admin() {
    alert("I'm an admin");
  },
};

let userGuest = {};

userAdmin.admin?.();
userGuest.admin?.();
 */

// ?.[], also works if we'd like to use [] to access properties instead of dot;
// it allows to safely read a property from an object that may not exist

let key = 'firstName';

let user1 = {
  firstName: 'John',
};

let user2 = null;

alert(user1?.[key]); // John
alert(user2?.[key]); // undefined
