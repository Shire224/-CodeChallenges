// Your Job
// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples
// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"

function sumMul(n,m){
    if (n >= m) return "INVALID"; // if n is equal or greater then m thn its invalif, we don't multiply more than m
  
  var sum = 0; //store total in a varible
    for (var i = n; i < m; i+=n) { //assin i to n, loop till i is greater then m, i+=n means add n to each loop 
      sum += i; //add i to the total um
    }
    return sum; //return it
  }

//   const sumMul = (n, m) => ~~(m/n) * (m+n - m%n) / 2 || 'INVALID';