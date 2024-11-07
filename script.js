'use strict';

let randomNum = Math.floor(Math.random() * 20) + 1;
const inputBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const inputValue = document.querySelector('.guess');
let message = document.querySelector('.message');
let correctNumDisplay = document.querySelector('.number');
let score = document.querySelector('.score');
let highScore = document.querySelector('.highscore');

againBtn.addEventListener('click', function () {
  inputValue.value = '';
  message.textContent = 'Start guessing..';
  correctNumDisplay.textContent = '?';
  document.body.style.background = '#222';
  score.textContent = '20';
  randomNum = Math.floor(Math.random() * 20) + 1;
});

inputBtn.addEventListener('click', function () {
  if (Number(inputValue.value)) {
    if (Number(inputValue.value) > randomNum) {
      message.textContent = 'Too High!';
      score.textContent = score.textContent - 1;
    } else if (Number(inputValue.value) < randomNum) {
      message.textContent = 'Too Low!';
      score.textContent = score.textContent - 1;
    } else {
      message.textContent = 'Correct Number!';
      correctNumDisplay.textContent = inputValue.value;
      document.body.style.background = '#60b347';
      if (highScore.textContent <= score.textContent) {
        highScore.textContent = score.textContent;
      }
    }
  } else {
    alert('Please enter a value between 1 and 20');
  }
});
