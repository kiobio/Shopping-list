'use strict';

const items = [
  {
    name: 'bananas',
    amount: '1kg',
  },
  {
    name: 'apples',
    amount: 5,
  },
  {
    name: 'tomatos',
    amount: 10,
  },
  {
    name: 'butter',
    amount: '250g',
  },
];

const listElm = document.querySelector('#list');
items.forEach((item) => {
  listElm.innerHTML += `<div class="item">${item.name}, ${item.amount}</div>`;
});
