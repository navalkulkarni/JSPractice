'use strict';

console.log('liver srver demo');



const checkFunction = function checkNumber(event)
{
  console.log('in check number'+document.querySelector('.guess').value);
  
  const guessValue = Number(document.querySelector('.guess').value);

  if(!guessValue){
    document.querySelector('.message').textContent = '🛑 No Number !';
  }

}

document.querySelector('.check').addEventListener('click', checkFunction);

