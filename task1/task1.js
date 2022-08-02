let btns = document.getElementsByTagName('button');
let result = document.querySelector('.result');
let len = btns.length;

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function (e) {
    e = e || window.event;
    let target = e.target || e.srcElement;
    let text = target.textContent || target.innerText;
    console.log(text); // prints the btn text
    let color = text.toLowerCase();
    result.textContent = text;
    result.style.color = `${color}`;
  });
}
