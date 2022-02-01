//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    //Do a conditional, ternary
    return number % 2 === 0 ? number * 8 : number * 9
}

//put in int, +, float
//return number * 8 if its odd, or 9 if even
//ex.
simpleMultiplication(5) //45
simpleMultiplication(2) //16
simpleMultiplication(3) //24

// function simpleMultiplication(n) {
//     return n * (n % 2 ? 9 : 8);
// }