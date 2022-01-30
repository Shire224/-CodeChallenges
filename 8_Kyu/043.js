// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

// Examples (input -> output)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
// Happy coding!

function mergeArrays(arr1, arr2) {
    let arr = arr1.concat(arr2).sort((a, b) => a - b); //concat(add) both arrays together, then sort from asc
    let result = []; //empty array
    for (let i = 0; i < arr.length; i++) { //loop thru new array that has both arr1 and arr2
      if (arr[i] !== arr[i + 1]) { //if first index is the same as the next index beside it
        result.push(arr[i]); // push index into the empty array called results
      }
    }
    return result;
  }
  
//   function mergeArrays(arr1, arr2) {
//     return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
//   }

//arrays, intergers,float, if both array empty run empty
//return one array thats combining the two previous arrays. Sort them in asc order
//E:
mergeArrays([5,2,3],[6,7,8]) //[8,7,6,5,3,2]
mergeArrays([45,8,9],[88,1,34]) //[88,45,34,9,8,1]
mergeArrays([10,20,30],[60,70,80])//[80,70,60,30,20,10]

