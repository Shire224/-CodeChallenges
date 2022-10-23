// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => {
    return month <= 3 ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : 4
  }

  //a month from 1 to 12
  // return witch quater of the year. 1 - 3 is 1, 4 - 6 is 2,  7 - 8 is 3, 9 - 12 is four
  
  //const quarterOf = m => Math.ceil(m/3);