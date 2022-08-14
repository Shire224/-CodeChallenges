// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):


//it('Testing №2 for "Q♠"', () => assert.strictEqual(defineSuit('Q♠'), 'spades'));
//it('Testing №3 for "9♦"', () => assert.strictEqual(defineSuit('9♦'), 'diamonds'));
//it('Testing №4 for "J♥"', () => assert.strictEqual(defineSuit('J♥'), 'hearts'));

//Parameters: a string with two characters, the second of the which is the symbolic representation of a card suit
//Return: a string of the name of the suit ONLY, in all lowercase letters and plural
//Examples:
/* ('3♣') -> 'clubs'
('3♦') -> 'diamonds'
('3♥') -> 'hearts'
('3♠') -> 'spades'*/

//Psuedocode: 

function defineSuit(card) {
    if(card.includes('♠')) return ('spades')
    if(card.includes('♦')) return ('diamonds')
    if(card.includes('♣')) return ('clubs')
    if(card.includes('♥')) return ('hearts')
  }

