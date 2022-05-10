//Do FizzBuzz problem
//numbers divisble by 3, print "Fizz"
//numbers divisble by 5(and not 3), print "Buzz"
//numbers divisble by 3 and 5, print "FizzBuzz"

//Psudo Code
//Write a big ass conditional using if/else statments

function fizzBuzz(){
    //Need to store the answer into a varible to plug in and show on console
    let answer;
    //Loop 100 times and each time will checl if statments is true, if not it will check if next statment is true
    for( i = 1; i <= 100; i++){
        //check for number is divisble by 3 and 5, re-assign answer varible to FizzBuzz
        if((i % 3 === 0) && (i % 5 === 0)){
            answer = "FizzBuzz"
        //check for number is divisble by 3, re-assign answer varible to Fizz
        }else if(i % 3 === 0){
            answer = "FIzz"
        //check for number is divisble by 5, re-assign answer varible to Buzz
        }else if(i % 5 === 0){
            answer = "Buzz"
        }else{
            //display all the numbers that arent divisable by 3 or 5.
            answer = i
        }
        //display result in the console
        console.log(answer)
    }
}
//call the function to activate the runtime
fizzBuzz()


// fizzBuzz = () => {
//     let answer;
//     for (let i=1; i<=100; i++) {
//       if(i % 3 === 0 && i % 5 === 0) {
//         answer = 'FizzBuzz';
//       }
//       else if(i % 3 === 0) {
//         answer = 'Fizz';
//       }
//       else if (i % 5 === 0){
//         answer = 'Buzz';
//       }
//       else {
//         answer = i;
//       }
//        console.log(answer);
//     } 
//   }
//   fizzBuzz();