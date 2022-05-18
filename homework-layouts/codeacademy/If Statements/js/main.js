// Using the let keyword, declare a variable named sale. Assign the value true to it.
let sale = true;
// Below the sale variable declaration, but before the if statement, reassign sale to false
  sale = false;
// Now create an if statement. Provide the if statement a condition of sale
if (sale) {
  console.log('Time to buy!')
}

// Less than: <
// Greater than: >
// Less than or equal to: <=
// Greater than or equal to: >=
// Is equal to: ===
// Is not equal to: !==

// Conditional branching: if, '?'

let year = prompt('In which year was the ECMAScript-2015 specification published?', '');
if (year == 2015) {
  alert( 'You guessed it right!' ); // value equals 2015
} else {
  alert( 'How can you be so wrong?' ); // any value except 2015
}