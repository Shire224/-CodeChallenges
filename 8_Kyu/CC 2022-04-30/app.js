// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.

// function squareOrSquareRoot(array) {
//   if(array % array**2 === 0 || array**2)
//     return array;  
//   }

// function squareOrSquareRoot(array) {
//     for( let i = 0; i > array.lengthl; i++){
//      if(Number.isInteger(Math.sqrt(array[i]))){
//      return [i];
//    }else{
//           return Math.pow(array[i])   
//    }
//    return array;
//  }
// }

// squareOrSquareRoot([4,3,9,7,2,1])  [2,9,3,49,4,1]

function squareOrSquareRoot(array) {
    return array.map(x => {
      const r = Math.sqrt(x);
      return (r % 1 == 0) ? r : (x*x);
    });  
  }