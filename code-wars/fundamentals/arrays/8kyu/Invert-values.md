# Invert values - 8 Kyu

## DESCRIPTION:
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

	invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
	invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
	invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.


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
// function invert(array) {
// 	return;
// }

function invert(array) {
	return array.map(function (n) {
		if (n < 0) {
			return Math.abs(n);
		} else {
			return n * -1;
		}
	});
}

console.log(invert([1, 2, -3, 4, 5, 0]));

// function invert(array) {
// 	return array.map(n => n && -n)
//  }
```