// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// If you can, try writing it in only one line of code.

// function findMultiples(integer, limit) {
//     let n = 2;
//     return integer.map(x => x + n === limit )

//   }
  
// function findMultiples(integer, limit) {

//     for(i = integer; i >= limit; i++){
//         if(i <= limit){
//             return integer = integer + integer
//         }
//     }
//}

  //You want [0] to double untill it is grater or equal to [1]
  //I can map it and each time add the orginal integer number but how do I not add new number when looping?
  //how to make condition to stop when reach the limit? integer >= limit ? 0 : integer + integer
  
//   function findMultiples(integer, limit) {
//     return total = integer.map(x => x + integer) 
// }

function findMultiples(integer, limit) {
    //your code here
    
    const arr = []; //Create new array so I can push(add at the end) the numbers to array
    
    for (let i = 1; i <= limit; i += 1) { //loop thru and stop when you loop as many times as limit
      
        if (integer * i <= limit) { //integer times the number of loop count, if its less tthen the limit then
          arr.push(integer * i);    //Push the result of integer times loop amount to the new array
        }
    }
    return arr;
  }