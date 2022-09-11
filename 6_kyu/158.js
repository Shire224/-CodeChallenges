// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

//P: String of words, each letter is a point, ex a = 1, b = 2
//R: the highest scoring word as a string
//E: 
/* 
hight(('man i need a taxi up to ubud'), 'taxi'
high('what time are we climbing up the volcano'), 'volcano')
high('take me to semynak'), 'semynak')
high('aa b'), 'aa')
/*
1. create new varaible. 
2. Split the sting so it becomes an array
3. map thru it and destructor it, so each letter is now an array
4. use reduce methode to add up each letter in the array
5. Use charCodeAt(0)-96,0 to assign each point
6/ get split array of s and find indexOF new array and find Math.max of the array
*/

function high(s){
    let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
    return s.split(' ')[as.indexOf(Math.max(...as))];
  }


//   function high(x){
//     return x.split(' ').reduce((accum, current)=>{
//         return score(current) > score(accum)? current:accum;  
//     })
// }

// function score(word){
//     return word.split('').reduce((accum,current)=>{return accum+(current.charCodeAt()-96)},0)
// }