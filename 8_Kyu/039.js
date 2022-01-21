// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
  //loop thru the string
  //split string, map thru it in reverse , then join it back
    return str.split('').reverse().join('')
}

//Put a string inside, any length
//return the srting but in reverse order
//example:
solution('world') //dlrow
solution('bye') //eyb
solution('word')//drow