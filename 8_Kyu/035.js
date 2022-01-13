// Ahoy Matey!

// Welcome to the seven seas.

// You are the captain of a pirate ship.

// You are in battle against the royal navy.

// You have cannons at the ready.... or are they?

// Your task is to check if the gunners are loaded and ready, if they are: Fire!

// If they aren't ready: Shiver me timbers!

// Your gunners for each test case are 2, 3 or 4.

// When you check if they are ready their answers are in a dictionary and will either be: aye or nay

// Firing with less than all gunners ready is non-optimum (this is not fire at will, this is fire by the captain's orders or walk the plank, dirty sea-dog!)

// If all answers are 'aye' then Fire! if one or more are 'nay' then Shiver me timbers!

// Also, check out the new Pirates!! Kata: https://www.codewars.com/kata/57e2d5f473aa6a476b0000fe

const cannonsReady = (gunners) => {
    for (var i in gunners) {
        if (gunners[i] == "nay") {
          return "Shiver me timbers!"
        }
    }
  return "Fire!"
}

//Should have used polymohisim to loop thru all the gunners
//Then check for each index if it says 'nay', if one does then it returns shiver me timbers
//if not then we fire


// const cannonsReady = (gunners) => {
//     //filter for only aye
//     for(let i = 1; i < gunners.length; i++){
//         if( gunners[i] == 'aye'){
//             return 'Fire'
//         }else{
//             return 'Shiver me timbers!'
//         }
//     }
    
//   }

  //checking to see if gunners are loaded and ready, all has to say 'aye'

  //2,3,4 nums, +, floats
  //return ayy or nay

//   const cannonsReady = (gunners) => {
//     let arr = {}
//     let ready = {'Mike': 'aye', 'Joe':'aye'}
//     let notReady = {'Mike': 'aye', 'Joe':'nah'}

//     for(let i = 0; i < gunners.length; i++){
//         if(gunners[i] == ready){
//            return 'fire'
//         }else{
//             return 'Shiver me timbers!'
//         }
//     }
//   }
