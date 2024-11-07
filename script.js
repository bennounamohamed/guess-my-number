'use strict';

let randomNum = Math.floor(Math.random() * 20) + 1;
const inputBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const inputValue = document.querySelector('.guess');
let correctNumDisplay = document.querySelector('.number');
let score = document.querySelector('.score');
let highScore = document.querySelector('.highscore');

againBtn.addEventListener('click', function () {
  inputValue.value = '1';
  displayMessage('Start guessing..');
  correctNumDisplay.textContent = '?';
  changeBackground('#222');
  score.textContent = '20';
  randomNum = Math.floor(Math.random() * 20) + 1;
});

inputBtn.addEventListener('click', function () {
  if (Number(inputValue.value) && Number(inputValue.value) <= 20) {
    // when guess is wrong

    if (Number(inputValue.value) !== randomNum) {
      if (Number(score.textContent) > 1) {
        displayMessage(
          Number(inputValue.value) < randomNum ? 'Too Low!' : 'Too High!'
        );
        score.textContent--;
      } else {
        displayMessage('You lost the game!');
        score.textContent = '0';
      }
    } else {
      displayMessage('Correct Number!');
      correctNumDisplay.textContent = inputValue.value;
      changeBackground('#60b347');

      if (highScore.textContent <= score.textContent) {
        highScore.textContent = score.textContent;
      }
    }
  } else {
    alert('Enter a number between 1 & 20');
  }
});

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function changeBackground(color) {
  document.body.style.backgroundColor = color;
}
