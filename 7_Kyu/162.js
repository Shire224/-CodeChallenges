// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

//Parameter: Number, its positive not negative. 
//Return: an array with all of the integer's divisors (expect for 1 and the number itself)
/*
1. First I decalrated the variable "r" tha contains an empty array.
2. After that start loop that will iterate from 2 to the integer value, in every iteration check if "i" is divisible by the integer, and if it is push it to the "r" array.
2. After that check if the length of array isn't 0, it'll return the array, and if it is 0, it'll return ${integer} is prime, return this result.
*/

function divisors(integer) {
  let r = []
  for(let i = 2; i < integer; i++){
    if(integer % i == 0) r.push(i)
  }
  let result = r.length !== 0 ? r : `${integer} is prime`
  return result 
};

// function divisors(integer) {
//     var res = []
//     for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
//     return res.length ? res : integer + ' is prime'
//   };
