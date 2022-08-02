// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words){
    function order(words){
        var array = words.split(' '); //turn it to an array
        var sortedArray = []; //empty array
        for(i = 0; i <= array.length; i++) { //loop try it 
          for(j = 0; j < array.length; j++) { //loop again 
            if(array[j].indexOf(i) >= 0) { //if array of index is greater then zero
              sortedArray.push(array[j]); //push array to sortedArray
            }
          }
        }
        return sortedArray.join(' '); //join the array to make it to a string
      }
  }
