// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

function defineSuit(card) {
    if( (card[1] === '♣') || (card[2] === '♣') ){
        return 'clubs'
    }else if( (card[1] === '♦') || (card[2] === '♦') ){
        return 'diamonds'
    }else if( (card[1] === '♥') || (card[2] === '♥') ){
        return 'hearts'
    }else{
        return 'spades'
    }
  }

  //you put in a string witha number and suit
  //should return a sting saying what suits it is (four options)

  // ♣ ♦ ♥ ♠
  // I could figure out what the suitis if I do a conditional and assign each with a === , maybe try doing a switch and case statment?
  //check to see second elemnt of string, so card[1] === suit
  //what if the number is double digit like 10? Then the index will be card[2], you could use ||

  function defineSuit(card) {
    const s = {
      "♣": "clubs",
      "♠": "spades",
      "♦": "diamonds",
      "♥": "hearts"
    }
    return s[card.charAt(card.length - 1)]
  }