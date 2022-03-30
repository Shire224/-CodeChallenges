// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
    //need to take only the first letters of each name
    return name.split(' ').map(word => word[0]).join('.').toUpperCase()

}

//write a sting, two names
//return inly the first letters if names and make it capitial
//E: 
abbrevName('Hassen Shire') //H.S
abbrevName('Joe smith') //J.S
abbrevName('alex baldwan') //A.B

// function abbrevName(name){
//     var nameArray = name.split(" ");
//     return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
//   }