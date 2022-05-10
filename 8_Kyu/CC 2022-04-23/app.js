// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.


function check(a, x) {
    return a.includes(x);
}

//P: in the parameter is a and x, numbers, strings?

//R: return wether x is inside the array of a

//E:

check([5,3,2,4],2)

check([3,2,6,4],3)

check([2,9,5,6],55)

//P: SO I have 1 array and I need to check if value of x is inside the array of a. Need to 