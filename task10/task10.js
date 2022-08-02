const header = document.querySelector('.js-header');
const box = document.querySelector('.box-item');
const footer = document.querySelector('.js-footer');
const container = document.querySelector('.container');

const headerHeight = header.offsetHeight;
const boxTop = box.offsetTop;
const containerHeight = container.offsetHeight;

window.onscroll = function () {
  scrollBox();
};

function scrollBox() {
  const sticky = headerHeight + boxTop;
  if (
    window.pageYOffset >= sticky &&
    window.pageYOffset < headerHeight + containerHeight
  ) {
    box.classList.add('sticky');
  } else {
    box.classList.remove('sticky');
  }
}
