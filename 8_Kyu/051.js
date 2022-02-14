// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

var summation = function (num) {
    let sum = 0 // to store the sum variable
    for(let i = 0; i <= num; i++) { //loop thru the amount of num times
        sum += i  //add sum to the num every loop
    }
    return sum
}

  //fid the sum of all num
  //enter a num, +, float
  //return sum of all num
  summation(2) //3
  summation(8) //36
  summation(3) //6

//   var summation = function (num) {
//     return Array(num).fill(0).reduce((acc, _, index) => acc + index + 1, 0)
// }

const summation = n => n * (n + 1) / 2;