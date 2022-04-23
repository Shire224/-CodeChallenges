// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

function smash (words) {
    return words.join(' ')
 };

 //P: strings, a lot of strings 

 //R: rturn string and join them toghter, however needs to have a space in between each word

 //E:

 smash(['hello', 'world', 'this', 'is', 'great']) => 'hello world this is great'

 smash(['one', 'day', 'at', 'a', 'time']) => 'one day at a time'

 //P: So each string needs to map thru and add a empty space at the end of each string. then add them all togther with join?. 
 //Keep it simple at first LOL