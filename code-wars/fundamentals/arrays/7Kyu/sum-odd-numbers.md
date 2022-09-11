# Sum-odd-numbers (7kyu)

## Description:

Given the triangle of consecutive odd numbers:

             1                    =1 -> 1^3
          3     5                 =8 -> 2^3
       7     9    11              =27 -> 3^3
   13    15    17    19           =64 -> 4^3
21    23    25    27    29        =125 - 5^3
...

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8

Arrays
Lists
---

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
a triangle of consecutive odd numbers with n rows, where n starts at 1, input is the row number
## Result: 
the sum of the row numbers in row n 
## Examples: 
```js
    assert.strictEqual(rowSumOddNumbers(1), 1);
    assert.strictEqual(rowSumOddNumbers(42), 74088);
```
## Psuedocode: 
??
---


## CodeWar

```js
function rowSumOddNumbers(n) {
	console.log(Math.pow(n,3))
}
rowSumOddNumberes(42)
```