var body = document.getElementsByTagName('body')[0];

body.addEventListener('load', createElem(), false);

var numLoads = parseInt(getCookie('pageLoads'), 10);

if (isNaN(numLoads) || numLoads <= 0) {
  setCookie('pageLoads', 1);
} else {
  setCookie('pageLoads', numLoads + 1);
}

function createElem() {
  if (getCookie('pageLoads') % 2 === 0) {
    let btn = document.createElement('button');
    btn.textContent = `${getCookie('pageLoads')}`;
    document.body.append(btn);
  }

  let p = document.createElement('p');
  p.textContent = `The page is opened ${getCookie('pageLoads')} times`;
  document.body.append(p);
}

function setCookie(cookieName, cookieValue, nDays) {
  var today = new Date(),
    expire = new Date();

  if (nDays === null || nDays === 0) {
    nDays = 1;
  }

  expire.setTime(today.getTime() + 3600000 * 24 * nDays);

  document.cookie =
    cookieName + '=' + escape(cookieValue) + ';expires=' + expire.toGMTString();
}

function getCookie(cookieName) {
  var theCookie = ' ' + document.cookie,
    ind = theCookie.indexOf(' ' + cookieName + '=');

  if (ind === -1) {
    ind = theCookie.indexOf(';' + cookieName + '=');
  }
  if (ind === -1 || cookieName === '') {
    return '';
  }

  var ind1 = theCookie.indexOf(';', ind + 1);

  if (ind1 === -1) {
    ind1 = theCookie.length;
  }

  return unescape(theCookie.substring(ind + cookieName.length + 2, ind1));
}
