/* let sayHi = () => alert('Hi');

sayHi(); */

/* let age = prompt('What is your age?', 18);

let welcome = age < 18 ? () => alert('Hello!') : () => alert('Greetings!');

welcome(); */

// if we use curly braces we must use return

/* let sum = (a, b) => {
  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

alert(sum(1, 2)); // 3 */

// rewrite with arrow functions

function ask(question, yes, no) {
  if (confirm(question)) {
    yes();
  } else {
    no();
  }
}

ask(
  'Do you agree?',
  () => alert('You agreed.'),
  () => alert('You canceled the execution.')
);
