// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5" (in COBOL "found the needle at position 6")

function findNeedle(haystack) {
    //check index in array, can use indexOf method
    //use template literals to plug into the string
    let needle = haystack.indexOf('needle')
    return `found the needle at position ${needle}`
  }

  //array of junk
  // return "found the needle ar position [array number]"
  //e: 
  findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']) //"found the needle ar position 5
  findNeedle(['junk','needle','junk']) //"found the needle ar position 2

  // function findNeedle(haystack) {
  //   return "found the needle at position " + haystack.indexOf("needle");
  // }