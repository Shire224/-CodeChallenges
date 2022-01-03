// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0
// Waiting for translations and Feedback! Thanks!

function paperwork(n, m) {
    let copy = n * m
    if( n < 0 || m < 0){
      return 0
    }else{
      return copy
    }
  }
  

//n classmates need to times hot many papers to copy
//can be any number, - , +, float
//return 0 if < 0

function paperwork(n, m) {
    return n > 0 && m > 0 ? n * m : 0
  }