// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

function shortcut (string) {
    //I could filter out all the lowercases that needs to be removed
    //could use remove() method
    //return new string

    return string.filter(x => x.remove('a','e','i','o','u'))
  }

  function shortcut(string) {
    var noVowels = function (c) { return "aeiou".indexOf(c) < 0; };
    return string.split("").filter(noVowels).join("");
  }
//its not an array!!

// so just use remove()

  //remove the lowercases of a,e,i,o,u

  //put in a string, doesn't matter how long
  //return the string but remove all the lowercases that needs to be removed
  //E:
  shortcut('hello') //hll
  shortcut('fantastic') //fntstc
  shortcut('goodbye') //gdby

  function shortcut(string) {
    for (var result = "", i = 0; i < string.length; ++ i) {
      if ("aeiou".indexOf(string[i]) == -1) { //if vowes in the indexOf sring[i] is equal in value of -1
        result += string[i];
      }
    }
    
    return result;
  }

  function shortcut(string){
    return string.replace(/[aeiou]/g,'')
  }

  function shortcut(string) {
    for (var result = "", i = 0; i < string.length; ++ i) { //loop to check index in a string
      switch (string[i]) { //if string has any of these vowles it replases it with ""
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
          break;
          
        default:
          result += string[i]; //add the left over strings
      }
    }
    
    return result;
  }

  function shortcut(str) {
    return str.split('').filter(function(e) { //split the string individually, it beccomes an array.
      return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1 //filter index for vowels
    }).join('')//join string
  }