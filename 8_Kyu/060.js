// Your task is to sum the differences between consecutive pairs in the array in descending order.

// For example:

// [2, 1, 10]  ->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 ( Nothing in Haskell ).

// function sumOfDifferences(arr) {
//     if (arr.length == 1){
//         return 0;
//     }else if (arr == []){
//         return [];
//     }else{
//         for(let i = 0; i < arr.length; i++){
//             for(let j = 0; j < arr.length; j++){
//                 if(arr[j] < arr[j + 1]){
//                     let temp = array[j];
//                     arr[j] = arr[j + 1];
//                     arr[j + 1] = temp;
//                 }
//             }
//         }
//         let newArray = [];
//         for (let i = 0; i < array.length - 1; i++) {
//           newArray[i] = array[i] - array[i + 1];
//         }
//         let sum = 0;
//         for (let i = 0; i < newArray.length; i++) {
//           sum += newArray[i];
//         }
//         // newArray.pop();
//         return sum;
//         // return array;
//     }
// }

//add the diffrence between each pair in array, do it decending order

//array should be nums, + or -, flots
//return summ of diff in each num beside one another
//example :
sumOfDifferences([[2, 1, 10]]) //9 --> (10 - 2) + (2 - 1) = 8 + 1 = 9
sumOfDifferences([-3, -2, -1]) //2 --> (-1 - -2) + (-2 - -3) = 2

function sumOfDifferences(arr) {
    return arr
      .sort((a, b) => b - a) //make array in reverse order
      .reduce((acc, curr, index, array) => { //use reduce
        const next = array[index + 1]; //next index beside the num 
        if (!isNaN(curr - next)) { //if its a number subtract current to the number beside it
          acc += curr - next; 
        }
        return acc;
      }, 0);
  }

  function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}

const sumOfDifferences = arr => arr
  .sort((a, b) => b - a)
  .map((a, i) => a - arr[i + 1] || 0)
  .reduce((a, b) => a + b, 0);