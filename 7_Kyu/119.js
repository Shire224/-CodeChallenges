// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    return str.split(' ').map(function(word){
      return word.split('').reverse().join('');
    }).join(' ');
  }
// parameter: 
// return:
//E:
reverseWords('The quick brown fox jumps over the lazy dog.') //'ehT kciuq nworb xof spmuj revo eht yzal .god')
reverseWords('apple') // 'elppa')
reverseWords('a b c d') //'a b c d')
reverseWords('double  spaced  words') // 'elbuod  decaps  sdrow')

//make string into an array (split())
//use reverse() to reverse string
//join() it back?

// function reverseWords(str) {
//     // Go for it
//     //split words into seperate arrays
//     return str.split("").reverse().join("").split(" ").reverse().join(" ");
//   }