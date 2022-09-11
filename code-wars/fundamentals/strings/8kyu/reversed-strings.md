# String cleaning - 8 Kyu

## Description:

Complete the solution so that it reverses the string passed into it.

    'world'  =>  'dlrow'
    'word'   =>  'drow'

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



## Result:



## Examples:

```js

```

## Psuedocode:



---

## CodeWar

```js
function solution(str) {}



 * PASSED *
function solution(str) {
	let result = "";
	for (i = str.length - 1; i >= 0; i--) {
		result += str[i];
	}
	return result;
}




 function solution(str){
     return str.split('').reverse().join('');
 }




 const solution = str => str.split('').reverse().join('');




 const solution = str => [...str].reverse().join``;
```
