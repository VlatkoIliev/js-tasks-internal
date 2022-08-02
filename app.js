'use strict';

// 1. function declaration

/* function sayHi() {
  alert('hi there');
}

alert(sayHi); */

// 2. function expression

// important - no matter how the function is created, a function is a value!

/* let sayHi = function () {
  alert('hello');
};

let func = sayHi;

func();
sayHi(); */

// 3. callback functions

/* function ask(question, yes, no) {
  if (confirm(question)) {
    yes();
  } else {
    no();
  }
}
 */
// callback functions
/* function showOk() {
  alert('You agreed');
}

function showCancel() {
  alert('You canceled the execution');
} */

// with function expressions - they have no name and are not accessible outside ask()

/* ask(
  'Do you agree',
  function () {
    alert('you agreed');
  },
  function () {
    alert('you canceled');
  }
);
 */

let age = 16;

let welcome;

/* if (age > 18) {
  welcome = function () {
    alert('Hi');
  };
} else {
  welcome = function () {
    alert('greetings');
  };
} */

welcome =
  age < 18
    ? function () {
        alert('ok');
      }
    : function () {
        alert('not ok');
      };

welcome(); // when the script is in strict mode it shows undefined, uncaught ref. err
