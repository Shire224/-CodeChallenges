// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
    //first neeed to add all sum, then divided by array length 
    if(array < 1){
        array = 0
      }else {
         return array.reduce((asc, c) => asc + c , 0) / array.length 
      }
  }

  //array of numbers, floats, +
  //return the average
  //e:
  find_average([2,2,2,2,2,2]) //2