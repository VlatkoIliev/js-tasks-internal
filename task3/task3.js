let increaseBtn = document.querySelector('.increase');
let decreaseBtn = document.querySelector('.decrease');
let counterParagraph = document.querySelector('.counter > span');
let increaseParagraph = document.querySelector('.increase-clicks > span');
let decreaseParagraph = document.querySelector('.decrease-clicks > span');
let counter = 0;
let counterRes = 0;
let decreaseCounter = 0;

increaseBtn.addEventListener('click', function () {
  ++counter;
  counterRes++;
  increaseParagraph.innerText = counter;
  counterParagraph.innerText = counterRes;
  localStorage.setItem('increase', counter);
  localStorage.setItem('result', counterRes);
});
counter = localStorage.getItem('increase');
increaseParagraph.innerText = counter;
counterRes = localStorage.getItem('result');
counterParagraph.innerText = counterRes;

decreaseBtn.addEventListener('click', function () {
  counter--;
  decreaseParagraph.innerText = counter;
  ++counterRes;
  counterParagraph.innerText = counterRes;
  localStorage.setItem('result', counterRes);
  localStorage.setItem('decrease', counter);
});
decreaseCounter = localStorage.getItem('decrease');
decreaseParagraph.innerText = decreaseCounter;
counterRes = localStorage.getItem('result');
counterParagraph.innerText = counterRes;
