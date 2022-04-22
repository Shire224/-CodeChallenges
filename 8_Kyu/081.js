// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
    return arr1 + arr2; //something went wrong
  }

  //this concats them
  
  function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((asc, c) => asc + c, 0) + arr2.reduce((asc, c) => asc + c, 0); //something went wrong
  }

  //need to use reduce methode to add up all numbers into the array!

  function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, cur) => acc + cur); //join bouth array toghter so you can do the reduce method only once
  }