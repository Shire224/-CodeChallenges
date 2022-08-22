/*An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string.

Example
text before = "abc"
character   = "z"
text after  = "zzz"*/

//Paramount: Two elements, both are strings. Can have anything in string such as symbols and numbers
//Return: char amount of times as text.length
//Eample: 

//PsudoCode - Repeat char the apount of times as the length of text

function contamination(text, char){
    return char.repeat(text.length)
}