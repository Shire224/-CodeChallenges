/ let userName = 'Jane'
// if(userName === 'Jane'){
//   console.log('Hello Jane!')
// }else{
//  console.log('Hello!')
// }
// const userQuestion = `Will ${userName} be a FUll Stack Web Developer By the summer????`
// console.log(userQuestion)
// let randomNumber = Math.floor(Math.random() * 8)
//let eightBall = randomNumber

let userName = 'Jane';
userName ? console.log(`Hello ${userName} !`) : console.log('Hello !');
const userQuestion = 'Will you be a FUll Stack Web Developer By the summer???';
console.log(`${userName}'s question is : "${userQuestion}".`);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

/*
switch (randomNumber){
  case 0:
    eightBall = 'It is certain'
    break
  case 1:
    eightBall = 'It is decidely so'
    break
  case 2:
    eightBall = 'Reply hazy try again'
    break
  case 3:
    eightBall = 'Reply hazy try again'
    break
  case 4:
    eightBall = 'Cannot predict now'
    break
  case 5:
    eightBall = 'Do not count on it'
    break
  case 6:
    eightBall = 'My sources say no'
    break
  case 7:
    eightBall = 'Outlook not so good'
    break
  case 8:
    eightBall = 'Signs point to yes'
    break
  default:
}

console.log(eightBall)
*/
if (randomNumber === 0) {
  eightBall = 'It is certain';
} else if (randomNumber === 1) {
  eightBall = 'It is decidedly so';
} else if (randomNumber === 2) {
  eightBall = 'Reply hazy try again';
} else if (randomNumber === 3) {
  eightBall = 'Cannot predict now';
} else if (randomNumber === 4) {
  eightBall = 'Do not count on it';
} else if (randomNumber === 5) {
  eightBall = 'My sources say no';
} else if (randomNumber === 6) {
  eightBall = 'Outlook not so good';
} else {
  eightBall = 'Signs point to yes';
}
           
console.log(eightBall);


