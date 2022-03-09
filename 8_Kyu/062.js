// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2; //return even numbers that don't equal in value with other even numbers (in this case odd)
  }

  //check to see if one flower is even ad the other is odd
  //return true or false
  //e:
  lovefunc(5,4) //true
  lovefunc(3,3) //false
  lovefunc(10,7) //true

// function lovefunc(flower1, flower2){
//   return (flower1 + flower2) % 2 == 1;
// }

// function lovefunc(flower1, flower2){
//     // moment of truth
//     if(flower1 % 2 === 0 && flower2 % 2 === 0){
//       return false;
//     } else if(flower1 % 2 === 1 && flower2 % 2 === 1){
//       return false;
//     }else if(flower1 % 2 === 1 && flower2 % 2 === 0){
//       return true;
//     }else if(flower1 % 2 === 0 && flower2 % 2 === 1){
//       return true;
//     }
//   }