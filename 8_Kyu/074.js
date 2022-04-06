// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

function doubleChar(str) {
    let arr = []

    for(let i = 0; i < str.length; i++){
      arr.push(str[i] + str[i])
    }
    return arr.join('')
  }

  //enter string
  //repeat case letters twice
  //e:
  doubleChar('String') //SSttrriinngg

  const doubleChar = (str) => str.split("").map(c => c + c).join("");