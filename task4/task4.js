const radioBtns = document.querySelectorAll('input[name=labels]');
const addBtn = document.getElementsByTagName('button')[0];
const second = document.querySelector('.second');
const first = document.querySelector('.first');
const third = document.querySelector('.third');

addBtn.addEventListener('click', () => {
  let selectedSize;

  for (const radioBtn of radioBtns) {
    if (radioBtn.checked) {
      selectedSize = radioBtn.value;
      break;
    }
  }

  let label = document.createElement('label');
  label.style.display = 'block';
  label.innerText = `Label ${selectedSize}`;
  let input = document.createElement('input');
  input.type = 'text';
  input.id = `${selectedSize}`;

  second.append(label);
  second.append(input);

  const filled = document.getElementById(`${selectedSize}`);

  filled.addEventListener('change', updateValue);

  function updateValue(e) {
    e.stopPropagation();
    let l = document.createElement('label');
    let id = filled.getAttribute('id');
    l.innerHTML = `Label ${id} - ${e.target.value}`;
    l.style.display = 'block';
    third.append(l);
  }
});
