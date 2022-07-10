// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary(a,b) {
    let sum = a + b
    if(sum >= 0) {
        return sum.toString(2);
    }
    else {
        /* Here you could represent the number in 2s compliment but this is not what 
           JS uses as its not sure how many bits are in your number range. There are 
           some suggestions https://stackoverflow.com/questions/10936600/javascript-decimal-to-binary-64-bit 
        */
        return (sum).toString(2);
    }
}

//P: 2 nums, +, floats
//return the sum of both but in binary
//E
addBinary(1,1) // "10" (1 + 1 = 2 in decimal or 10 in binary)
addBinary(5,9) // "1110" (5 + 9 = 14 in decimal or 1110 in binary)

//need to convert nums to binary
//return (dec >>> 0).toString(2)

function addBinary(a,b){
    return (a+b).toString(2)
  }