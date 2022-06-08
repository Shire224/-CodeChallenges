// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

const highAndLow = nums => {
    nums = nums.split(" ");
    return `${Math.max(...nums)} ${Math.min(...nums)}`;
  }
  


//String of numbers, not in order. Has positive and negative int. Also has spaces in the string
//return a string that shows the greatest num space lowest num
//E:
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

//first I need to turn this string into an array, split?
//Then I need to remove the spaces between each num. Maybe loop and check if its a number?
//but need to convert string to a number if I want to sort it from biggest to smallest
//I can return it by [0] but how can I show the other number?

function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
  }
