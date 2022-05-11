// Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]
  
// As you can see, the lists are cascading; ie, they overlap, but never out of order.

// function eachCons(array, n) {
//     let newArray = [];
//     for (let i = 0; i < array.length; i++){
//       newArray = newArray + array[i] + n
//     }
//       return [];
//   }

//   function eachCons(array, n) {
//     let newArr = []; //New array to push the small arrays in
//     let childArr; //small arrays where the length will be determined by n
//       for(let i = 0; i < array.length; i++) { //loop thru the array for each elemnt
//       childArr = array.slice(i, n + i) //small area will be the modify version of the origan array, starting with the orignal element and stopping at n + element 
//       if(childArr.length === n) { //if the length of the small array is the same as n then add it to new Array
//         newArr.push(childArr)
//       }
//     }
//     return newArr
//   }

  function eachCons(array, n) {
    const newArr = []; //create a new array to push the correct small arrays
    for (let a=n, i=0; a <= array.length; i++, a++){ //reassign n to a, now loop till the second last element and add one to a and i
      newArr.push(array.slice(i,a)) //first time loop i = 0 and n = 1, so you slice(start,end) which is (0,2), next loop will be (1,3), next (2,4) --thats if n=2
    }                               //if n = 3 then i = 0 and, so splice(0,3) for the first loop, next loop slice(1,4), then you push these arrays to the newArray
    return newArr //son't forget to return the newArray so it doesn't vanish after you call the function
  }

function eachCons(array, n) {
    let res = [];//create array to hold the arrays
    
    for(let i = 0; i < array.length; i++){  //simple for loop set up
      res.push(array.slice(i,i + n));       //end array by stating i + n, which would be 0 + 2 = 2, slice(0,2), next loop will be i + n (1 + 2) which is (1, 3)
    }                                       //if n = 3, i + n would be slice(0 ,0 + 3), next would be slice(1, 1 + 3)
                                            //then push the results to the new array called res
    return res.filter(e => e.length === n); //filer res array so the length would only be as long as n
  }

// const eachCons = (arr, n) => {
//     let result = []
//     for (let i = 0; i <= arr.length - n; i++) {
//       let temp = []
//       for (let j = 0; j < n; j++) {
//         temp.push(arr[i + j])
//       }
//       result.push(temp)
//     }
//     return result
//   }