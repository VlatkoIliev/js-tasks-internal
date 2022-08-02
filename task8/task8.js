const titles = document.querySelectorAll('.section > h2');
const sections = document.querySelectorAll('.section-wrapper > div');
const wrapper = document.querySelector('.section-wrapper');

window.onscroll = function () {
  titlesFixPosition();
};

function titlesFixPosition() {
  for (let page of sections) {
    let br = page.getBoundingClientRect();
    for (let title of page.children) {
      if (br.top < 0 && br.bottom > 0) {
        title.classList.add('sticky');
      } else {
        title.classList.remove('sticky');
      }
    }
  }
}
