// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

// function howMuchILoveYou(nbPetals) {
//     // your code
// }

function howMuchILoveYou(nbPetals){
    switch(nbPetals) {
        case 1:
        case 7:
            return "I love you"
        break;
        case 2:
            return "a little"
        break;
        case 3:
            return "a lot"
        break;
        case 4:
            return "passionately"
        break;
        case 5:
            return "madly"
        break;
        case 6:
            return "not at all"
        break;
    }
}

//remmber to always look at the examples and see what they want to return
//switch case doesn't work, need to loop thru all arrays


function howMuchILoveYou(nbPetals) {
  let phrase = {    
    0: "not at all",
    1: "I love you",
    2: "a little",
    3: "a lot",
    4: "passionately",
    5: "madly"
  }
  return phrase[nbPetals%6]
}


// function howMuchILoveYou(nbPetals) {
//     let newArr = []
//     for(let i = 1; i < nbPetals.length; i++){
//         newArr = nbPetals[i].push
//     }
//     return newArr.indexOf(nbPetals)
// }


function howMuchILoveYou(nbPetals){
    if(nbPetals%6 == 1){
      return ("I love you");
    }else if(nbPetals%6 == 2){
      return ("a little");
    }else if(nbPetals%6 ==3){
      return ("a lot");
    }else if(nbPetals%6 ==4){
      return ("passionately");
    }else if(nbPetals%6 == 5){
      return ("madly");
    }else{
      return ("not at all");
    }
  }
  
  howMuchILoveYou(0);

  

  function lovePetal(nb_petals){
  
    for(var i = 1; i <= nb_petals; i++){
      
    if(i%5 ===0){
      console.log('not at all');
    }else if(i%4 ===0){
      console.log('madly');
    }else if(i%3 ===0){
      console.log('passionately');
    }else if(i%2 ===0){
      console.log('a lot');
      
    }else{
      console.log('I love you a little');
    }
    
  }
  }
  
  lovePetal(100);


  //You can use % operator to hard code to see which results would come out no matter how many pedals they are

  const howMuchILoveYou=n=>['not at all','I love you','a little','a lot','passionately','madly'][n%6]

//   const phrases = [
//     'I love you',
//     'a little',
//     'a lot',
//     'passionately',
//     'madly',
//     'not at all',
// ]

// function howMuchILoveYou(n) {
//      return phrases[(n - 1) % phrases.length] 
// }