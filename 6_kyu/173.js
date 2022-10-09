// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"


function spinWords(str){
    var splitWords = str.split(' ');
    var length = splitWords.length;
    for(var i = 0; i < length; i++)
    {
       if (splitWords[i].length >= 5 ) 
       {
         splitWords[i] = reverseWords(splitWords[i]);
       }     
     }
     return splitWords.join(' ');
   }
   
   function reverseWords(str) {
   var i=str.length;
   i=i-1;
   
   var reversedwords=""; 
   for (var x = i; x >=0; x--)
   {
       reversedwords +=(str.charAt(x));
   }
   return reversedwords;
   }

//    function spinWords(words){
//     return words.split(' ').map(function (word) {
//       return (word.length > 4) ? word.split('').reverse().join('') : word;
//     }).join(' ');
//   }