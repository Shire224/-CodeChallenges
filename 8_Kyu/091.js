// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x){
    //make string into an array, map thru and check eack one 
    return x.split('').map((e) => e >= 5 ? 1 : 0).join('')
}

//string of digits
//return any number below 5 is now 0, any that is 5 or above will be 1
//E:
fakeBin('45385593107843568') //'01011110001100111'
fakeBin('509321967506747') //'101000111101101'