// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

function hero(bullets, dragons){
    //if hero bullets is times 2 equal or greater then  dragon then he lives!
    return bullets * 2 >= dragons //wrong
}

//bullters and dragons, both nums, +, floats
// return true or false if he lives, has to have more then double bullers then dragons
//e:
hero(5,2) //true
hero(1,7) //false
hero(100, 40) // true

function hero(bullets, dragons){
    return bullets >= dragons * 2
  }