// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

// function gooseFilter (birds) {
//     var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//     let arr = []
//     // return an array containing all of the strings in the input array except those that match strings in geese
//     //first need to check each one if it is in the geese array
//     //can use loop or map
//     for(let i = 0; i < birds.length; i++){
//         //loop  thru geese array to check if in bird
//         for(let j = 0; j < geese.length; i++){
//         //if its in bird filter it
//             if(birds[i] !== geese[j]){
//                 arr.push(birds[i])
//             }
//         }
//     }
//     return arr
//   } 
//put an array of birds 
//return that array but filter out any birds that are geese


function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter((e) => !geese.includes(e)) //use filter to check element and if its NOT includes geese array
  }

//   function gooseFilter (birds) {
//     var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//     return birds.filter(b => !geese.includes(b));
//   };