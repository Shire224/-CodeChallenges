// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

function points(games) {
    let total = 0;
    games.map(game => { //use map to go thru the array of objects one by one
      if (game[0] === game[2]) { //if x the same as y (index 0 same as index 3, ex 3:3)
        total += 1; //add one to the total variable
      } else if (game[0] > game[2]) { //if x > y
        total += 3; //add 3 to the count
      }
    });
    return total;
  }

  const points=games=>games.reduce((output,current)=>{
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
  },0)

// function points(games) {
//   return games.reduce((output,current)=>{
//     let x = parseInt(current[0]);
//     let y = parseInt(current[2]);
//     let value= x>y ? 3 : x===y ? 1 : 0;
//     return output+value;
//   },0)
// }

//games if/else statments
//return score x:y