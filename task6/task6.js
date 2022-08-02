const formEl = document.getElementsByTagName('form')[0];

for (let elem of formEl.children) {
  let text = elem.children[0].innerHTML;
  elem.children[0].style.display = 'none';
  if (elem.children[1].nodeName === 'INPUT') {
    elem.children[1].placeholder = text;
  }
}
