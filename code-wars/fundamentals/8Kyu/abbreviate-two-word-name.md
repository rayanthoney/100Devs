# Abbreviate a Two Word Name - (8kyu)

## Description:

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

```md
P R E P Method =>

|     |     |            |
| --- | --- | ---------- |
|     | P   | Parameters |
|     | R   | Results    |
|     | E   | Examples   |
|     | P   | Psuedocode |
```

## Parameters:

an array of positive integers, whole numbers greater than 0, the array has a min of 4 integers

## Result:

the sum of the two lowest inegers in the array, a number

## Examples:

```js
assert.strictEqual(abbrevName("Sam Harris"), "S.H");
assert.strictEqual(abbrevName("Patrick Feenan"), "P.F");
assert.strictEqual(abbrevName("Evan Cole"), "E.C");
assert.strictEqual(abbrevName("P Favuzzi"), "P.F");
assert.strictEqual(abbrevName("David Mendieta"), "D.M");
```

## Psuedocode:

---

## CodeWar

```js
 function abbrevName(name){

      code away

 }

function abbrevName(name) {
  let firstLetters = name
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join(".");
  return firstLetters;
}

console.log(abbrevName("Jack Russel"));
```
