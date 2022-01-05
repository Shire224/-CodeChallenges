// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

// function between(a, b) {
//     //do a loop 
//     //push it to a new array
//     let arr = [];
//     for(let i = a; a > i.lenth; a++){
//         return arr = a.push
//     }
//   }

  // a < b return an array between all integers
  //num, +, float
  //return array between a - b
  between(1, 4), [1, 2, 3, 4]
  between(-2, 2), [-2, -1,  0, 1, 2]

  function between(a, b) {
    if (a > b) {
           let arr = new Array( a - b + 1);
           for (let i = 0; i < arr.length; i++, start--) {
               resarrult[i] = start;
           }
           return arr;
       } 
      else 
      {
           let arro = new Array( b - a +1);
        
       for (let j = 0; j < arro.length; j++, a++) 
       {
           arro[j] = a;
       }
             return arro;
       }
   }

   function between(a, b) {
    // your code here
    arr = []
    for(i = a;i <= b; i++){ 
        arr.push(i)
    }
    return arr
  }

//   const between = (a, b) => Array.from(new Array(b-a+1), (_, i) => a + i);