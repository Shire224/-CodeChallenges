// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

function towerBuilder(num) {

    let resStr = "";
    let n = 0;
    for (let i = 1; i <= num; i++){

        resStr += " ".repeat(num-i);
        resStr += "*".repeat(i + n);
        resStr += " ".repeat(num-i);
        if (!(i == num)) resStr += ",";
        n++
    }
    return resStr.split(",");
}

// function towerBuilder(n) {
//     return Array.from({length: n}, function(v, k) {
//       const spaces = ' '.repeat(n - k - 1);
//       return spaces + '*'.repeat(k + k + 1) + spaces;
//     });
//   }