// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']


//P: a sring of letters
//R: return to an array of strings, each element is paired in twos. if last one is odd then pair next letter with an underscore ('_')
/*
1. create an empty array called result and zero iteration
2. Check if string is only one, then add an underscore
3. While iteration is less then string length then push the first str and next string to the empty result
*/


function solution(str){
    let i = 0
    let result = []
    if(str.length % 2 !== 0) {
        str += "_"
    } 
    while (i < str.length) {
        result.push(str[i] + str[i + 1])
        i += 2
    }
    return result
}
