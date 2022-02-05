// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
    let str="";
    for(let i=0; i < n; i++)
      str+=s;
      return str;
    }
  //put in num and a string, num has to be +, float
  //return string exatly n times
  //Examples
  repeatStr(5, "Hello") //HelloHelloHello/Hello/Hello

  function repeatStr (n, s) {
    return s.repeat(n);
  }