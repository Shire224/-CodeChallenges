// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, update_light('green') should return 'yellow'.

// Note: Use "" instead of '' in C++.

// function updateLight(current) {
//     //could use if/else but lets try polmorphism loop
//     for(let i in current){
//         if(current[i] == current[i] + 1){
//             return current[i]
//         }
//     }
//  }

 
function updateLight(current) {
    switch(current){
        case 'green':
        return 'yellow'
        break;
        case'yellow':
        return 'red'
        break;
        case'red':
        return'green'
        break;
    }
  }

  const updateLight = current => ({
    green: 'yellow',
    yellow: 'red',
    red: 'green',
  })[current]


  //so green -> yellow -> red -> green

  //Put in string
  //return next string
  //
  updateLight('green') //yellow
  updateLight('yellow')//red
  updateLight('red')//green

  function updateLight(current) {
  
    return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
  
  }