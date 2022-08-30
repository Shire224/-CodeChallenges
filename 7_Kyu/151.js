// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
    if(ending.length == 0) return true
    return str.substr(-(ending.length)) == ending     
}

//two strings, first is longer then the second
//Return true if str passed in ends with ending 
/*
get the length of ending and use it for substr()
Use substr(-3) to get last 3 char of str
If ending is empty do a if statment 
*/

function solution(str, ending){
    return str.endsWith(ending);
  }