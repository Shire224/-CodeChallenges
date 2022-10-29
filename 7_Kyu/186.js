// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// Answer 1 
function repeats(arr) {
    let i;
    let sum = 0;
    arr.sort((a, b) => {
      return a - b;
    });
    for (i = 0; i < arr.length; i += 2) {
      if (arr[i] !== arr[i + 1]) {
        sum += arr[i];
        i--;
      }
    }
    return sum;
  };
  // Answer 2
  function repeats(arr) {
    let set = new Set()
    arr.forEach(x => set.has(x) ? set.delete(x) : set.add(x))
    return [...set].reduce((s,v) => s+v, 0)
  }
  
  
  // Answer 3 
  
  // this is the most straightforward one
  function repeats(arr){
    // first filter the array to only get the items occuring once, aka filter for items where indexOf values = lastIndexOf value
     return arr
     .filter(x => arr.indexOf(x) === arr.lastIndexOf(x))
    //  then reduce to get the sum of the two numbers
     .reduce((a, b) => a + b);
  };