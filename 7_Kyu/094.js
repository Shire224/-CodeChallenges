// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let vowelsCount = [];

   for(let i = 0; i < str.length; i++){
       if(str[i] == 'a' || str[i] == "e" || str[i] == 'i' || str[i] == 'o' || str[i] == "u"){
           vowelsCount.push(str[i])
       }else{
         
       }
   }
   return vowelsCount.length
}


//strings, any length
// return number of vowels: a,e,t,o,u but not y
//e:
getCount("abracadabra") //5

//Need to filter out the vowels and push it to new array
//find out how many by checking the length

