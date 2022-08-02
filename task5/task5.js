setTimeout(function () {
  for (let i = 1; i <= 5; i++) {
    let button = document.createElement('button');
    button.innerHTML = 'Click me!';
    button.id = i;
    button.name = `button_${i}`;
    document.body.appendChild(button);
  }
}, 500);

const res = document.querySelector('.result');

document.body.addEventListener('click', (e) => {
  if (e.target.nodeName === 'BUTTON') {
    let ime = e.target.getAttribute('name');
    res.innerHTML = ime;
  }
});
