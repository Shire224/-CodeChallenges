// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

// Good luck!

// If you like this Kata, please try:

function dup(s) {
    return s.map((str) => Array.from(str).filter((v, i, arr) => arr[i - 1] !== v).join(''))
  };

//   function dup(s) {
// 	return s.map(w => {
// 		return w.split('').filter((c, i, arr) => {
// 			return c !== arr[i - 1];
// 		}).join('');
// 	});
// }