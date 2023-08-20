let userName = 'Daniel';

userName ? console.log(`Hello, ${userName}`) : console.log(`Hello!`);

let userQuestion = 'Will I be married on the next 5 years?';

console.log(`${userName}, has asked:"${userQuestion}"`);

let randomNumber = Math.floor(Math.random()*8);
console.log(randomNumber);
let eightball = '';
switch (randomNumber){
  case 0:
  eightball = 'Yes, you will!';
  break;
  case 1:
  eightball = 'let\'s start looking on tinder tot';
  case 2:
  eightball = 'if you don\'t come out from your comfort zone, my answer is "NO"';
  break;
  case 3:
  eightball = 'your nieces need a good uncle';
  break;
  case 4:
  eightball = 'make one note for your fiancee to prepair her belly for 4 childs';
  break;
  case 5:
  eightball = 'have you done your hair transplant? if yes, yes!';
  break;
  case 6:
  eightball = 'You will, but let\'s improve your teeths urgent!'
  case 7:
  eightball = 'The angels are emphasizing that you needed facial harmonization by yesterday!'
  
}
console.log('---------*********______------********');
console.log(eightball);
console.log('---------*********______------***********');