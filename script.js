'use strict';
const btn = document.querySelectorAll('button');
const paragr = document.querySelector('p');
let numberEl;

const checkingEl = function (a) {
  if (a > 0) paragr.style.color = 'green';
  if (0 > a) paragr.style.color = 'red';
  if (0 == a) paragr.style.color = 'black';
};
const initial = function () {
  numberEl = 0;
  paragr.textContent = numberEl;
  paragr.style.color = 'black';
};
initial();
btn[0].addEventListener('click', function () {
  numberEl--;
  paragr.textContent = numberEl;
  checkingEl(numberEl);
});
btn[1].addEventListener('click', initial);
btn[2].addEventListener('click', function () {
  numberEl++;
  paragr.textContent = numberEl;
  checkingEl(numberEl);
});
