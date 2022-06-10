// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
    let str = n + '';
   let sort = str.split('').sort((a,b) => b - a).join('')
   return Number(sort)
 }

  //takes in onlt + nums
  //retrun all nums in decending order

  // first turn in to a string and make it to an array
  //then sort it from decending order and join it back
  //convert it back to a number and return it

  //E:
  descendingOrder(42145) //54421
  descendingOrder(145263) //654321
  descendingOrder(123456789)//987654321

  function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }