// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    let arr = s.split(" ").sort((a, b) => a.length - b.length);
    return arr[0].length
  }

//   function findShort(s){
//     return Math.min.apply(null, s.split(' ').map(w => w.length));
//   }

//spit(' ')               returns: ["an", "undocumented", "feature"]
//map(x => x.length)      returns: [2, 12, 7]

// Pass step 2 as argument of the Math.min() function with a small twist. Math.min() returns the smallest of zero or more numbers, but won't work with arrays. Thus, add the spread operator ... to step 2 so that its array is "expanded" into numbers:

//Math.min()              returns: 2

//Submitting this kata with trailing whitespace in s will fail. As a remedy, on step 2, call the .filter() method passing it an argument of Boolean to filter out all falsy values:

//filter(Boolean)         returns: 2