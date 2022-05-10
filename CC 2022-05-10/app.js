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

  function eachCons(array, n) {
    let newArr = [];
    let childArr;
      for(let i = 0; i < array.length; i++) {
      childArr = array.slice(i, n + i)
      if(childArr.length === n) {
        newArr.push(childArr)
      }
    }
    return newArr
  }

//   function eachCons(array, n) {
//     const newArr = [];
//     for (let a=n, i=0; a <= array.length; i++, a++){
//       newArr.push(array.slice(i,a))
//     }
//     return newArr
//   }

// function eachCons(array, n) {
//     let res = [];
    
//     for(let i = 0; i < array.length; i++){
//       res.push(array.slice(i,i + n));
//     }
    
//     return res.filter(e => e.length === n);
//   }

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