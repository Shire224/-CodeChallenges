// Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

// Your task is to create a function that, given a proper first and last name, will return the correct alias.

// Notes:
// Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given. See the examples below for further details.

// If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

// Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

let firstFakeName = {
    A: "Alpha",
    B: "Beta",
    C: "Cache",
    D: "Data",
    E: "Energy",
    F: "Function",
    G: "Glitch",
    H: "Half-life",
    I: "Ice",
    J: "Java",
    K: "Keystroke",
    L: "Logic",
    M: "Malware",
    N: "Nagware",
    O: "OS",
    P: "Phishing",
    Q: "Quantum",
    R: "RAD",
    S: "Strike",
    T: "Trojan",
    U: "Ultraviolet",
    V: "Vanilla",
    W: "WiFi",
    X: "Xerox",
    Y: "Y",
    Z: "Zero"
  };
  let surFakeName = {
    A: "Analogue",
    B: "Bomb",
    C: "Catalyst",
    D: "Discharge",
    E: "Electron",
    F: "Faraday",
    G: "Gig",
    H: "Hacker",
    I: "IP",
    J: "Jabber",
    K: "Killer",
    L: "Lazer",
    M: "Mike",
    N: "n00b",
    O: "Overclock",
    P: "Payload",
    Q: "Quark",
    R: "Roy",
    S: "Spy",
    T: "T-Rex",
    U: "Unit",
    V: "Virus",
    W: "Worm",
    X: "X",
    Y: "Yob",
    Z: "Zombie"
  };
  
  function aliasGen(firstname, surname) {
    // Get first char of each string and convert it to Upper case in case its lower case
    let firstLetterOfFirstName = firstname.charAt(0).toUpperCase();
    let firstLetterOfSurName = surname.charAt(0).toUpperCase();
    // initialize name and sur variables to return them later
    let name, sur;
    // get values of  both our fake name and sur fake name obj
    let firstValues = Object.values(firstFakeName);
    let surValues = Object.values(surFakeName);
  
    if (
      // check if the first char is not a number
      isNaN(Number(firstLetterOfFirstName)) &&
      isNaN(Number(firstLetterOfSurName))
    ) {
      // loop through firstValues array
      for (let i = 0; i < firstValues.length; i++) {
        // check if the first letter of the current value is equal to the first letter
        // of the name received as an argument
        if (firstValues[i].charAt(0).toUpperCase() === firstLetterOfFirstName)
          // if the letters are equal assign the fake name to the name variable we want to return
          name = firstValues[i];
      }
      // check if the first letter of the current value is equal to the first letter
      // of the surname received as an argument
      for (let i = 0; i < surValues.length; i++) {
        // if the letters are equal assign the fake surname to the sur variable we want to return
        if (surValues[i].charAt(0).toUpperCase() === firstLetterOfSurName)
          sur = surValues[i];
      }
      // return the alias
      return `${name} ${sur}`;
      // in case one of the first chars of the argument strings is a number return this:
    } else return "Your name must start with a letter from A - Z.";
  }
  
  //console.log(aliasGen("Larry", "Brentwood")); // === 'Logic Bomb'
  //console.log(aliasGen("123abc", "Petrovic")); // === 'Your name must start with a letter from A - Z.'
  console.log(aliasGen("Iris", "N"));


//   Function aliasGen(first,last){
//     let auxFirst = first[0].toUpperCase( )
//     let auxLast = last[0].toUpperCase( )
  
//     if(firstName[auxFirst] && surname[auxLast]) {
//       return firstName[auxFirst] + ' ' + surname[auxLast]
//     } else {
//       return 'Your name must start with a letter from A - Z.'
//     }
//   }