'use strict';

console.log('liver server demo');

let secretNumber = Math.trunc(Math.random() * 20)+ 1;



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
    document.querySelector('.number').textContent = secretNumber;
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

const resetGame = function resetGame(event) {
 console.log('inside reset game func');
  secretNumber = Math.trunc(Math.random() * 20)+ 1;
  score = 10;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
}

