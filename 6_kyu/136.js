// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
    let counter = 0; //to keep track how many times we are multipling each number
    let digits = num.toString().split('') //we are spliting the digits and turning to a string  ex. 39 -> "39" -> ["3","9"]

    while (digits.length > 1){   //while the digit length is greater than one then do this:
        let results = 1 //so we can multply the numbers easier

        for(let i = 0; i < digits.length; i++){ //go thru digit array
            results = results * digits[i] // add to results: 1 times the first element, then times new result to the second element 
        }
        digits = results.toString().split('') //reset digits
        counter = counter + 1 //increment persistence count 
    }
    return counter
 }

 //takes in a num, float, +
 //Returns its multiplicative persostence. Number of times you must multiply the dum until you reach a single digit
 /*
Result has to be single digit
times the number with the first and last element
return the new num, if its greater then 9 then repeate
 */

const persistence = num => {
    return `${num}`.length > 1 
      ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
      : 0;
  }