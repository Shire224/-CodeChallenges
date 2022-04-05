// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

//P: Is it always going to be integers? Are we going to be given any special characters? An empty arr ever?
//R: Return a new arr with each value doubled
//E: If we are given [2,3,4], we should return [4,6,8]
//   If we are given [4,5,6] , we should return [8,10,12]
//   If we are given [2,22], should return [4,44]
//P:
//Make a function that takes in array
function doubled(arr){
    return arr.map ( e=> e*2)
}
//map through the array and multiply each element by 2. Also return lol
doubled([1,2,3])
console.log(doubled([2,3,4]),[4,6,8])