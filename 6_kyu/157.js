// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
  }

//P: array of numbers, any order, all positives
//R: if number is odd sort it ascending order, in even leave it in the same index
/* Psudo code
need to sort odd numbers but even numbers need to stay in the smae index 
1. Creat new array and Filter array to show only even numbers and sort it from smallest to largest
2. map thru array, if its a even number then add it to the front of new array.
*/