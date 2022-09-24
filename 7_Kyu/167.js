// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

// 1 I am given a string, and expecting a string back, that has no duplicates inside it.

// 2 I will need to convert the String into an array.

// 3 Then I will need to call the Set (object) on that array — this removes the duplicates.

//4 I will need the Set back to an array and then convert this array back to a string.

function removeDuplicateWords (s) {
    const set = new Set(s.split(' '))
    return Array.from(set).join(' ')
  }