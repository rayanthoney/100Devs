# Find the smallest integer in the array - 8 Kyu

## Description:

Given an array of integers your solution should find the smallest integer.

For example:

    Given [34, 15, 88, 2] your solution will return 2
    Given [34, -345, -1, 100] your solution will return -345


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

You can assume, for the purpose of this kata, that the supplied array will not be empty.
```js
Find the smallest integer in the array
	class SmallestIntegerFinder {
		findSmallestInt(args) {return Math.min(...args);
		}
	}

	class SmallestIntegerFinder {
		findSmallestInt(args) {return Math.min.apply(null, args);
		}
	}
```