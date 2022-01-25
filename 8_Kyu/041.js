// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       //loop thru array
//       //only keep the smallest value
//       //return result
//       let smallest = INT_MAX;
//       for(let i = 0; i < args.length; i++){
//           if(args[0] < smallest) {
//               smallest = args[i]
//           }
//       }
//       return smallest
//     }
//   }

  //array of intergers, never be empty
  //return the smallest integers
  findSmallestInt(5,23,34,56,3) //3
  findSmallestInt(23,-23,-3,25) //-23
  findSmallestInt(-1,23,4,54,66) //-1

  //sort
  class SmallestIntegerFinder {
    findSmallestInt(args) {
      args.sort((a, b) => a - b)
      return args[0]
    }
  }

  //reduce
  function findSmallestInt(args) {
    return args.reduce((acc, cur) => acc < cur ? acc : cur)
}

//loops
function findSmallestInt(args) {
    let smallest = args[0]

    args.forEach(i => (i < smallest) && (smallest = i))

    return smallest
}

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }