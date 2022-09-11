# Testing 1,2,3 (7kyu)

## Description:

Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

Arrays
Fundamentals

```md
P R E P Method   =>

|     |     |                  |
| --- | --- | ---------------- |
|     | P   | Parameters       |
|     | R   | Results          |
|     | E   | Examples         |
|     | P   | Psuedocode       |
```
## Parameters: 
an array of varying length containing string values
## Result: 
an array of strings containing the initial values with the line number and the a colon + space in front 
## Examples: 
```js
 it("test", () => {
    assert.deepEqual(number([]), [], 'Empty array should return empty array');
    assert.deepEqual(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"], 'Return the correct line numbers');                
  });
```
## Psuedocode: 
iterate over each array value and prepend the line numbere (starting with one), and add a colon and a space between the line number abnd the value.

---


## CodeWar

```js
var number=function(array){
  console.log(array.map((alpha, index) => `${index + 1}: ${alpha} `))
}

number(["a", "b", "c"])
```