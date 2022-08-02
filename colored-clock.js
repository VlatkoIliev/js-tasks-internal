let btnStart = document.getElementById('start');
let btnStop = document.getElementById('stop');
let redSpan = document.querySelector('.hour');
let greenSpan = document.querySelector('.min');
let blueSpan = document.querySelector('.sec');

btnStart.addEventListener('click', startTime);
btnStop.addEventListener('click', stopTime);

let interval;

function startTime() {
  if (!interval) {
    interval = setInterval(start, 1000);
  }
  start();
}

function start() {
  let date = new Date();
  let hh = date.getHours();
  let ss = date.getSeconds();
  let mm = date.getMinutes();

  hh = hh < 10 ? '0' + hh : hh;
  redSpan.textContent = hh;

  mm = mm < 10 ? '0' + mm : mm;
  greenSpan.textContent = mm;

  ss = ss < 10 ? '0' + ss : ss;
  blueSpan.textContent = ss;
}

function stopTime() {
  clearInterval(interval);
  interval = null;
}
