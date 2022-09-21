// The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.

// The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)
// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// Good luck and enjoy!

// Kata Series
// If you enjoyed this, then please try one of my other Katas. Any feedback, translations and grading of beta Katas are greatly appreciated.

//P: A string, one word
//R: return an array of that string, but each element the next word is capital
/*
1.  Create an array to store the results
2.  return empty array if the string is empty
3.  Loop through the letters in the string
4.  Make a copy of the string to an array
5.  if there is a space in the string skip that space,
6.  Covert each letter of the copied string array to uppercase then join them together as one string
7.  then push them to our result array and finally return the result array.

*/

function wave(str){
    let result = []
    if([...str].length === 0) return []
    for(let i = 0; i < str.length; i++){
        let copy = str.split('')
        if(copy[i] === ' ') continue // if(copy[i] !== ' ')
        copy[i] = copy[i].toUpperCase('')
        result.push(copy.join(''))
    }
    return result
  }