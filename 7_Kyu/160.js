// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.



const binaryArrayToNumber = arr => {
    return Number.parseInt(arr.join(""), 2);
  };
  
  //P: array of binary values
  //R: return the number the binary represents
  //E: 
  /*
  [0,0,0,1] -> 1
  [0,0,1,0] -> 2
  [1,1,1,1] -> 15
  */
  
  /* Psudeo code:
  - Use parseInt() to conver binary to an interger
  - Join the array so its a string
  - use Number method to convert it from a sring to an int
  - Radix is 2
  */