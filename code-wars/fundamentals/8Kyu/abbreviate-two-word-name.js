// Abbreviate a Two Word Name - 8kyu

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// assert.strictEqual(abbrevName("Sam Harris"), "S.H");
// assert.strictEqual(abbrevName("Patrick Feenan"), "P.F");
// assert.strictEqual(abbrevName("Evan Cole"), "E.C");
// assert.strictEqual(abbrevName("P Favuzzi"), "P.F");
// assert.strictEqual(abbrevName("David Mendieta"), "D.M");

// P.R.E.P
// P - Parameters:
//     //
// R - Results:
// E - Examples:
// P - Psuedocode:

// function abbrevName(name){

//     // code away

// }

function abbrevName(name) {
  let firstLetters = name
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join(".");
  return firstLetters;
}

console.log(abbrevName("Jack Russel"));
