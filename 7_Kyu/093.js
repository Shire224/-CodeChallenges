// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
    //first need to make an array to swaure wach one, then join them toghter
    let numN = String(num).split('').map((e) => e**2).join('') 
    return Number(numN)
}

//numbers, +, floats
//return the numbers each squared and togther
//E:
squareDigits(3212) //9414
squareDigits(2122) //4114
squareDigits(0) //0