// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

//P: an array of integers, positive or negative
//R: a sring saying odd or even (sum of all the elements)
/*
1. Use reduce() 
2. if sum % 2 then return "even" if not return "odd"
*/

function oddOrEven(array) {
    return array.reduce((asc, c) => asc + c, 0) % 2 === 0 ? "even" : "odd"
 }