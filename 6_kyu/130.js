// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function(n) {
    let binary = n.toString(2).split('')
    const result = binary.reduce((asc,c) => asc + Number(c), 0)
    return result
  };

//n is float, ositive
//retrun how many 1 in the binary
//convert number to binary
//turn into a string
//count how many 1's there are

countBits = n => n.toString(2).split('0').join('').length;