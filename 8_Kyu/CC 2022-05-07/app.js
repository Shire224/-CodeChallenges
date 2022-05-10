// The BOPE is the squad of special forces of police that usually handles the operations in the Favelas in Rio de Janeiro.

// In this Kata you have to write a function that determine the number of magazines that every soldier has to have in his bag.

// You will receive the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:

// PT92 - 17 bullets
// M4A1 - 30 bullets
// M16A2 - 30 bullets
// PSG1 - 5 bullets

// Example:

// ["PT92", 6] => 2 (6 streets 3 bullets each)
// ["M4A1", 6] => 1

// The return Will always be an integer so as the params.


// function magNumber(info){
    //number of streets = 3 bulllets
    //assign each team to number of bullets
//     let team = ['PT92' = 17 ,'M4A1' = 30,'M16A2'= 30,'PSG1' = 5]
//     let street = team / 3
    
//     let kk = info.map(team => team/ 2)
    
//     info = [team,street]
//   }
  
function magNumber(info){
    //Our weapons, and how much bullets each magazine holds
    const wepMagazineCount = {
        PT92: 17,
        M4A1: 30,
        M16A2: 30,
        PSG1: 5
    }
    //count how much bullet we need, taking first element in info and times it by three because thats how many times they shoot in each street
    let bulletCouunt = info[1] * 3
    //take first index which is the weapon and 
    let gun = info[0]
    //what ever the bullet count is times by 3 and 
    return Math.ceil(bulletCouunt / wepMagazineCount[gun])
}
magNumber(["PT92", 6]) 