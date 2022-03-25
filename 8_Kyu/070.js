// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
        return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1] ? true : false;
        //if beast first index is the same ass dish first index and if last beast index equals last dish index
    }

    //you have 2 parameters, you put the beast and the dish has to be starting same letter as the beast
    //return true or false if dish starts same leter as the beast
    //E:
    feast(chicken,cake) // true