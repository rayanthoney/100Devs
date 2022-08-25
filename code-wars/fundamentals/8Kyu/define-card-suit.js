// Define a card suit - 8 Kyu

// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

// it('Testing №2 for "Q♠"', () => assert.strictEqual(defineSuit('Q♠'), 'spades'));
//   it('Testing №3 for "9♦"', () => assert.strictEqual(defineSuit('9♦'), 'diamonds'));
//   it('Testing №4 for "J♥"', () => assert.strictEqual(defineSuit('J♥'), 'hearts'));

// P - Parameters:
// A string with two characters , the second of which is the symbolic representation  od a card suit
// R - Return:
//  A string of the name of the suit ONLY, in all lowercase letters and plural.
// E - Example:
// ('Q♠'), 'spades'
// ('9♦'), 'diamonds')
// ('J♥'), 'hearts')
// ('3♠'), 'clubs')
// P - Pseudocode:
// 




function defineSuit(card) {
    if(card.includes('♠')) console.log('spades')
    if(card.includes('♦')) console.log('diamonds')
    if(card.includes('♥')) console.log('hearts')
    if(card.includes('♣')) console.log('clubs')
  }

  defineSuit('3♣')
  