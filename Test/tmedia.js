//Single element selectors
console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));

//Multiple element selectors
console.log(document.querySelectorAll('.item'));

//loop
const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello'
ul.children[1].innerHTML = 'Brad'
ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

const btn = document.querySelector('.btn');
btn.style.background = 'plum';

btn.addEventListener('click', (e) => {
console.log('click');

});
