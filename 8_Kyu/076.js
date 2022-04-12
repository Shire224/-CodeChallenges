// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

function past(h, m, s){
    let milisiconds = (h * 3600000) + (m * 60000) + (s * 1000)
    return milisiconds
  }

  //return milliseconds
  //parameteres are hours, minutes and seconds, h <= 23, m <=59, s <= 59, 1 m is 6000, 1 s is 1000, 1 h is 3600000
  //return in milisiconds 

//   function past(h, m, s){
//     return ((h*3600)+(m*60)+s)*1000;
//   }