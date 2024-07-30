'use strict';

// selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//rolling the dice btn--new, btn--roll, btn--hold
btnRoll.addEventListener('click', function () {
  //1. generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  //2 display the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //3. checked for rolled 1. if tru switch players
});
