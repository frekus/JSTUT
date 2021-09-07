const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent = 'hello';

const listitems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listitems);