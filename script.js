'use strict';

console.log('liver server demo');

const secretNumber = Math.trunc(Math.random() * 20)+ 1;

document.querySelector('.number').textContent = secretNumber;

let score = 10;
document.querySelector('.score').textContent = score;
const checkFunction = function checkNumber(event)
{
  console.log('in check number'+document.querySelector('.guess').value);
  
  const guessValue = Number(document.querySelector('.guess').value);

  if(!guessValue){
    document.querySelector('.message').textContent = '🛑 No Number !';
  }
  else if( guessValue === secretNumber){
    document.querySelector('.message').textContent = '🥳 Correct Guess';
    score = score +1 ;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
  }
  else if( guessValue < secretNumber){
    if(score>0){
      document.querySelector('.message').textContent = 'Too Low 📉';
      score = score -1;
      document.querySelector('.score').textContent = score;
    }else{
      document.querySelector('.message').textContent = ' 😥 Sorry you lost the game, Try Again';
      score = 0;
      document.querySelector('.score').textContent = score;
    }
    
  }
  else if( guessValue > secretNumber){
    if(score>0){
      document.querySelector('.message').textContent = 'Too High 📈';
      score = score -1;
      document.querySelector('.score').textContent = score;
    }else{
      document.querySelector('.message').textContent = ' 😥 Sorry you lost the game, Try Again';
      score = 0;
      document.querySelector('.score').textContent = score;
    }
    
  }

}

//document.querySelector('.check').addEventListener('click', checkFunction);

