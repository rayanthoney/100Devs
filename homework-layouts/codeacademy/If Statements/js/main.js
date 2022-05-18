// Using the let keyword, declare a variable named sale. Assign the value true to it.
let sale = true;
// Below the sale variable declaration, but before the if statement, reassign sale to false
sale = false;
// Now create an if statement. Provide the if statement a condition of sale
if (sale) {
	console.log("Time to buy!");
}

// Less than: <
// Greater than: >
// Less than or equal to: <=
// Greater than or equal to: >=
// Is equal to: ===
// Is not equal to: !==

// Conditional branching: if, '?'

// let year = prompt('In which year was the ECMAScript-2015 specification published?', '');
// if (year == 2015) {
//   alert( 'You guessed it right!' ); // value equals 2015
// } else {
//   alert( 'How can you be so wrong?' ); // any value except 2015
// }

// let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

// if (year < 2015) {
//   alert( 'Too early...' ); // any value less then 2015 (falsey)
// } else if (year > 2015) {
//   alert( 'Too late' ); // any value greater then 2015 (falsey)
// } else {
//   alert( 'Exactly!' ); // value equals 2015
// }

// let accessAllowed;
// let age = prompt("How old are you", "");

// if (age > 18) {
// 	accessAllowed = true;
// } else {
// 	accessAllowed = false;
// }

// alert(accessAllowed);

// let age = prompt('age?', 18);

// let message = (age < 3) ? 'Hi, baby!' :
//   (age < 18) ? 'Hello!' :
//   (age < 100) ? 'Greetings!' :
//   'What an unusual age!';

// alert( message );

// let company = prompt('Which company created JavaScript?', '');

// if (company == 'Netscape') {
//   alert('Right!');
// } else {
//   alert('Wrong.');
// }

// let hour = 9;
// hour: prompt("What is the hour", "");

// if (hour < 10 || hour > 18) {
//   alert( 'The office is closed.' );
// }


let myVariable = 'I Existed';

if (myVariable) {
  console.log(myVariable)
} else {
  console.log('The variable does not exist')
}