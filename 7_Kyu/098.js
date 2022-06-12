// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
    const result = [] //empty result arr
    const lowerStr = s.toLowerCase() //make everything lowercase
  
    for(let i = 0; i < lowerStr.length; i++) { 
      let str = lowerStr[i].toUpperCase() //first letter now uppercase
      for(let j = 0; j < i; j++) { //loop again, add lowercase to back of string
        str += lowerStr[i]
      }
      result.push(str) //push result in empty arr
    }
  
    return result.join("-") //join the dash in between the spaces
  }

//enter a string, any length. Mix of capital letters and lover case. Letters from A-Z and a-z
//return the string but first letter is capitial then dash, second letter capital and lower then dash, third capital the 2 lower then dash
// add another lower letter everytimr
//E:
accum("abcd") //"A-Bb-Ccc-Dddd"
accum("RqaEzty") //"R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") //"C-Ww-Aaa-Tttt"

function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
  }
  //split string
  //map thru arr, make first letter capital next is lower(repeat it i number of times) 
  //so i represents the amount of loops
  //then join the arr by adding '-'