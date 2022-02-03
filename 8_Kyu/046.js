// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
// As usual, your function/method should be pure, i.e. it should not mutate the original string.

// String.prototype.toAlternatingCase = function () {
//     let str = ''
//     let newStr = ''
//     for(let i = 0; i < str.lenght; i++){
//         if(str == str.toLowerCase()){
//           newStr.push(str[i.toUpperCase])
//         }else if(str == str.toUpperCase()){
//           newStr.push(str[i.toLowerCase])
//         }
//       return newStr
//     }
//   }

String.prototype.toAlternatingCase = function () {
    // Define your method here :)
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('');
}

  //Change uppercase letters to lower and vice viersa
  //Don't mutate the string
  //numbers are unaffected

  //enter num or string, + or - num, float, anything
  //return: flip capatial letter to smaller and vice viersa

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"