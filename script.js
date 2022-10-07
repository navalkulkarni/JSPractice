'use strict';

console.log('liver srver demo');

const secretNumber = Math.trunc(Math.random() * 20)+ 1;

document.querySelector('.number').textContent = secretNumber;

const checkFunction = function checkNumber(event)
{
  console.log('in check number'+document.querySelector('.guess').value);
  
  const guessValue = Number(document.querySelector('.guess').value);

  if(!guessValue){
    document.querySelector('.message').textContent = '🛑 No Number !';
  }
  else if( guessValue === secretNumber){
    document.querySelector('.message').textContent = '🥳 Correct Guess';
  }
  else if( guessValue < secretNumber){
    document.querySelector('.message').textContent = 'Too Low 📉';
  }
  else if( guessValue > secretNumber){
    document.querySelector('.message').textContent = 'Too High 📈';
  }

}

document.querySelector('.check').addEventListener('click', checkFunction);

