'use strict';

const randomNum = Math.floor(Math.random() * 20) + 1;
console.log(randomNum);
const inputBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const inputValue = document.querySelector('.guess');
let message = document.querySelector('.message');
let correctNumDisplay = document.querySelector('.number');
let highScore = 0;

againBtn.addEventListener('click', function () {
  inputValue.value = '';
  message.textContent = 'Start guessing..';
  correctNumDisplay.textContent = '';
  document.body.style.background = '#222';
});

inputBtn.addEventListener('click', function () {
  let score = document.querySelector('.score');

  if (inputValue.value) {
    if (Number(inputValue.value) > randomNum) {
      message.textContent = 'Too High!';
    } else if (Number(inputValue.value) < randomNum) {
      message.textContent = 'Too Low!';
    } else {
      message.textContent = 'Correct Number!';
      correctNumDisplay.textContent = inputValue.value;
      document.body.style.background = '#60b347';
    }
  } else {
    alert('Please enter a value');
  }
});
