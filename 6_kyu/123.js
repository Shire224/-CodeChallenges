// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)

function solution(number){
    let total = 0
    for(let i = 0; i < number; i++){
      if(i % 3 === 0 && i % 5 === 0){
        total += i
      }else if(i % 3 === 0){
        total += i
      }else if(i % 5 === 0){
        total += i
      }
    }
    return total
  }

//   function solution(number){
//     var sum = 0;
    
//     for(var i = 1;i< number; i++){
//       if(i % 3 == 0 || i % 5 == 0){
//         sum += i
//       }
//     }
//     return sum;
//   }
  
  //one number, could be negative or positive, float
  //return if number is negative 0, return the sum of all the multiples of 3 and 5
  //if multiple by both 3 and 5 count it only once
  
  //E:
  //solution(10) --> 23 (3+5+6+9)
  
  //first make condition finding out if number is multiple by 3 and 5
  //can do a loop and push number to an array and then add each element 