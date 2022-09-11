# Ones and Zeros (7kyu)

## Description:

Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11

However, the arrays can have varying lengths, not just limited to 4.


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
an array containing ones and zeros, could be varying length
## Result: 
an integer equivalent of the binaryvalue represented in the array
## Examples: 
```js
    Test.assertEquals(binaryArrayToNumber([0,0,0,1]), 1);
    Test.assertEquals(binaryArrayToNumber([0,0,1,0]), 2);
    Test.assertEquals(binaryArrayToNumber([1,1,1,1]), 15);
    Test.assertEquals(binaryArrayToNumber([0,1,1,0]), 6);
```
## Psuedocode: 
take the array and join the elements together into a string and then convert to binary using that string and return the ineger equivalent

---


## CodeWar

```js
const binaryArrayToNumber = arr => {
  console.log(parseInt(arr.join(''),2))
};

binaryArrayToNumber([1,1,1,1])
```

```js
const binaryArrayToNumber = arr => {
  console.log(arr.reduce((a,b,i) => a + (b*2**i), 0))
};

binaryArrayToNumber([0,1,1,0])
```