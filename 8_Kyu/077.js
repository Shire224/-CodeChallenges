// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
    //do a loop, go down by one each time
    //push it to the new array
    let arr = [] //initialize an array
    for(let i = n; n > 0; n--){ //replaced i with n, loop down from n to 1
        arr.push(n) //instead of pushing i we are now pushing n, push each n to the answer array
    }
    return arr //push answer
  };

  //a number, +, float
  //return an array starting from that number and going down by one
  //E:
  reverseSeq(5) // [5,4,3,2,1]
  reverseSeq(3) // [3,2,1]
  reverseSeq(11) //[11,10,9,8,7,6,5,4,3,2,1] 