/* JavaScript code goes here*/

/* 
1. Carousel

Write a program that launches a carousel for 10 turns, showing the turn number each time.
*/

// using the i as a variable that equals 1.
// (let i = 1;)
// (i <= 10;) i id then less than or equal to 10.
// (i++) if i is less than add 1 untill it reaches 10.

// for (let i = 1; i <= 10; i++) {
// 	console.log(i);
// }

/* When it's done, improve it so that the number of turns is given by the user.*/

// using the word turns as a variable that equals a prompt by the browser.
// (let turns = promp) Variable turns is now equal to Value prompt.
// Browser will prompt the user wirh a message ("how many turns should we do?starting with a default value of 0");
//
let turns = prompt("how many turns should we do?", 0);

// using the i as a variable that equals 1.
// (let i = 1;)
// (i <= turns;) i Variable is now less than or equal to Variable of turns.
// (i++) if i is less than add 1 untill.

for (let i = 1; i <= turns; i++) {
	console.log(i);
}

/* */
