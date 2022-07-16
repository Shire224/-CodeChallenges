// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

function likes(names) {
    let others = names.length - 2
      if(names.length === 0 ){
          return "no one likes this"
      }else if(names.length === 1){
          return `${names} likes this`
      }else if(names.length === 2 ){
          return `${names[0]} and ${names[1]} like this`
      }else if(names.length === 3){
          return `${names[0]}, ${names[1]} and ${names[2]} like this`
      }else{
          return `${names[0]}, ${names[1]} and ${others} others like this`
      }
    }

//strings, can be unlimited
//return who likes it
//E: 
likes([])                                   // -->  "no one likes this"
likes(["Peter"])                            // -->  "Peter likes this"
likes(["Jacob", "Alex"])                    //-->  "Jacob and Alex like this"
likes(["Max", "John", "Mark"])              //-->  "Max, John and Mark like this"
likes(["Alex", "Jacob", "Mark", "Max"])     //-->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

//if/else statment ?
// just use template literals

function likes(names) {
    names = names || [];
    switch(names.length){
      case 0: return 'no one likes this'; break;
      case 1: return names[0] + ' likes this'; break;
      case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
      case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
      default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
  }

  function likes(names) {
    return {
      0: 'no one likes this',
      1: `${names[0]} likes this`, 
      2: `${names[0]} and ${names[1]} like this`, 
      3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
      4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
    }[Math.min(4, names.length)]
  }