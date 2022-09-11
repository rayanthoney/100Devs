# String repeat - 8kyu

## Description:

Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
Examples (input -> output)

6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"



 
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

## Result: 

## Examples: 
```js
 
```
## Psuedocode: 


---


## CodeWar

```js
 function repeatStr (n, s) {
     let str = '';
     for (let i = 0; i < n; i++) {
         str += 5;        
     }
     return str;
   }

 function repeatStr (n, s) {
     return s.repeat(n);
   }

  const repeatStr = (n, s) => s.repeat(n);
```