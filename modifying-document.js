// creating an element

// 1. document.createElement(tag)
// 2. document.createTextNode(text)

// most of the time we need to create element nodes, such as the div for the message

/* let div = document.createElement('div');
div.className = 'alert';
div.innerHTML = "<strong>Hi there!</strong> You've read an important message";

document.body.append(div); */

// for the list

ol.before('before'); // insert string 'before' before ol
ol.after('after'); // insert string 'after' after ol

let liFirst = document.createElement('li');
liFirst.innerHTML = 'prepend';
ol.prepend(liFirst); // insert liFirst at the beginning of ol

let liLast = document.createElement('li');
liLast.innerHTML = 'append';
ol.append(liLast); // insert liLast at the end of ol;

// for the div

let div = document.getElementById('div');

div.before('<p>hello</p>', document.createElement('hr'));
div.textContent = 'hi';
