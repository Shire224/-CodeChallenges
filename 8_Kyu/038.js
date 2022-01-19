// Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)
// * 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// * 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])

function oddCount(n){
    // can do a loop
    //check to see if number is not % 2 === 0
    //push it to new array
    //count the length to know how many odd numbers in array
    let arr = [];
    for(let i = 0; i < n; i++){
        if(i % 2 !== 0){
            arr.push(i)
        }
    }
    return arr.length
}

const oddCount = n => Math.floor(n/2);

  //put in a interger, +, float
  //return number of positive numbers
  //E:

  oddCount(7) //3    because [1,3,5]
  oddCount(11)//5 because [1,3,5,7,9]
  oddCount(15) //7 because [1,3,5,7,9,11,13]