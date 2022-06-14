// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output
 
// The middle character(s) of the word represented as a string.

// function getMiddle(s)
// {
//   //do a loop
//   //do a if/else case 
//   for(let i = 0; i < s.length; i++){
//     if(s.length % 2 !== 0) { //if length is odd return middle char
//       return s.split(0,s.length)
//     }else{
//       return s.split(0,s.length) + i
//     }
//   }
}

// function getMiddle(s)
// {
//   return s.lenth % 2 ? s.split('').map((i) i == s.length/2) : s.split('').map((i,e) i == s.length/2 + (e))
// }

function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}


function getMiddle(s) {
  var middle = s.length / 2;
  return (s.length % 2) 
    ? s.charAt(Math.floor(middle))
    : s.slice(middle - 1, middle + 1);
}


function getMiddle(s)
{
  return s.slice((s.length-1)/2, s.length/2+1);
}

//string, one word
//if string length is odd return middle char, if even return middle 2 characters
//E:
Kata.getMiddle("test")// "es"

Kata.getMiddle("testing") //"t"

Kata.getMiddle("middle") //"dd"

Kata.getMiddle("A")// "A"

function getMiddle(s)
{
  return s.substring(Math.ceil(s.length/2)-1, Math.floor(s.length/2)+1)
}