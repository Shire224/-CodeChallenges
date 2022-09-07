// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder=function(iterable){
    let arr = []
    for(let i = 0; i < iterable.length; i++){
        if(iterable[i] != iterable[i + 1]){
            arr.push(iterable[i])
        }
    }
    return arr
  }

//parameters: strings numbers, arrays
//Retrun an array without repeating any numbers or strings
/*
First got to declare a new empty array
loop thru iterable array and check to see if it doesnt repeat
If it doesn't repeat then push to the new empty array
retrun it
*/

var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}