// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
    let positive = []
    let negative = []
    for( let i = 0; l < input.length;i<l i++){
      if(input[i] > 0){
        positive.push(input[i])
      }else if(input[i] < 0){
        negative.push(input[i])
      }
    }
    let positiveCount = []
    if(positive != null && positive.length < 1){
     positiveCount = 0
    }else{
      positiveCount += positive.length
    }
  
    let totalNegative = negative.reduce((asc,c) => asc + c, 0)
    
    if(positive.length < 1 && totalNegative === 0){
      return []
    }else{
    return [Number(positiveCount),totalNegative]
    }
  }

//array of int, some are negative and some are positive
//return an arr that total sum of all positive and negative ex. [positive total, negative total]
//e:
countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]) //[10, -65]
countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]) //[8, -50]

//correct
function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}

function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}