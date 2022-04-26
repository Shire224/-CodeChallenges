// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

// function sumArray(array) {
//     //first need to check which num is the biggest and smallest and push it to a new array
//     //sort the array from biggest to smallest, then pop and shift the highst and lowest
//     let arr = array.sort((a,b) => a + b)
//     //add all the remaining numbers in the array
//     return arr.pop().shift().reduce((asc,c) => asc + c, 0)
// }

//Numbers, floats, all +
//return return all values besides the highest and lowerst number
//E:
sumArray([6,2,1,8,10]) //16
sumArray([1,1,11,2,3]) //6
sumArray([4,7,2,3,10]) //13

function sumArray(array) {
    let arr = array.sort((a,b) => b - a)

    let finalArr = []
    for(let i = 0; i < arr.length; i++){
      if( arr[i] !== arr[0]){
         finalArr.push(arr[i])
         }
    }
  	let end = finalArr.sort((a,b) => a - b)
    let total = end.reduce((asc,c) => asc + c , 0)
    return total - finalArr[0]
}
//correct code
function sumArray(array)  {
    if(array && array.length > 1) {
        const sortedArray = array.sort((a,b) => a - b).slice(1, -1)
        return sortedArray.reduce((acc, cur) => acc + cur, 0)
    }

    return 0
}

sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0
//first you check if you have a array ? if true do next step, if not return 0
// you sort thru the array and arrange it form biggest to smallest
//then you slick it by removeing the first element (1) and last element (-1)
// last you add up a;; the remaining numbers in the array

function sumArray(array) {
    if (array == null) { //check to see if array has no numbers inside
      return 0;
    } else if (array.length < 2) { //check to see if array has atleast more then 3 numbers inside
      return 0;
    } else {
      array = array.sort(function(a,b) {return a - b;}); //sort array from biggest to smallest
      var total = 0; //creat to emoty array 
      for (var i = 1; i < array.length - 1; i++) { //start on the second index(skip furst element and loop, stop at second last number (length - 1))
        total += array[i]; //add new numbers to the new total array
      }
      return total;
    }
  }