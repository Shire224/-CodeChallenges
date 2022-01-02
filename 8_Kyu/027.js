// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

//Do Dirfference of Volumes of Cuboids problem
// take 2 arrays and find the difference of cuboids volumes regards of which is bigger
//times the nums in of each array then substractthe diffrenece 


//PREP
//2 arrays (a , b)
//P: num, whole, +, num > 0
//R: return value
//E: 

function findDifference(a, b) {
  //use reduce to add up the arrays 
  //times the totals with each arrays, regardless of which is bigger so has to be Math.abs()
  //return the result
  let totalA = a.reduce((asc, c) => asc * c, );
  let totalB = b.reduce((asc, c) => asc * c, 0);
   
  return Math.abs(totalA - totalB)
}

findDifference([3,2,5],[1,4,4]) //14
findDifference([1,2,3],[2,3,2])//6
findDifference([11,2,5],[1,10,8])//30

let findDifference = (a, b) => Math.abs(a.reduce((asc, c) => asc * c, ) -  b.reduce((asc, c) => asc * c, ))