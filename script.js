'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = '13';
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

// document.querySelector('.number').textContent = number;
const calculate = function (num) {
  Math.trunc(Math.random() * num) + 1;
};

const diplayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayBackground = function (background) {
  document.querySelector('body').style.backgroundColor = background;
};

const diplayAnswer = function (answer) {
  document.querySelector('.message').textContent = answer;
};
document.querySelector('.check').addEventListener('click', function () {
  const guest = Number(document.querySelector('.guess').value);

  if (!guest) {
    diplayMessage('Please put the right number');
    displayBackground('blue');
  } else if (guest === number) {
    diplayAnswer('You Correct!');
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = 'green';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guest !== number) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guest > number ? 'To high' : 'To Low';
      //   score--;

      diplayMessage(guest > number ? 'To high' : 'To Low');
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#222';
    } else {
      diplayAnswer('You Lose!');
      document.querySelector('.score').textContent = 0;
      displayBackground('red');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  diplayMessage(`Start guessing...`);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});

document.querySelector('.reset').addEventListener('click', function () {
  let highscore = 0;
  document.querySelector('.highscore').textContent = highscore;
});
