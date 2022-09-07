// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

function findUniq(arr) {
    arr.sort((a,b)=>a-b);
    return arr[0]==arr[1]?arr.pop():arr[0]
  }

//P: array of numbers, one if diff, floats, no negative
//R: the diff number
/*Psudo code
First sort the array from greatest to smallest 
then check to see it the first index is equal to the second index
if true use pop() to return last index, if not return first index
*/

// function findUniq(arr) {
//     return +arr.filter( (value) => { return arr.indexOf(value) == arr.lastIndexOf(value) } );
//}