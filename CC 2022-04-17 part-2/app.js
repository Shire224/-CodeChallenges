let raceNumber = Math.floor(Math.random() * 1000);

let registerEarly = false
let runnerAge = 28

// if( (runnerAge > 18) && (registerEarly == true)) {
//   let raceNumber =+ 1000
// }

if( (runnerAge > 18) && (registerEarly == true)){
  console.log(`You will race at 9:30 am and your race number is ${raceNumber}`)
}else if( (runnerAge > 18) && (registerEarly == false)){
  console.log(`You will run the race at 11:00 am and yout number is ${raceNumber}`)
}else if(runnerAge < 18){
  console.log(`Race will start at 12:30 pm and your race number is ${raceNumber}`)
}