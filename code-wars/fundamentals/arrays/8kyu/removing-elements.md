# Removing Elements - 8 Kyu

## Description:

Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
Example:

	["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!


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
Create an iteration that loops through every even number of the array.
function removeEveryOther(arr) {
	let Oddnumbers = [];

	arr.forEach((element, index) => {
		index % 2 == 0 ? Oddnumbers.push(element) : element;
	});
	return Oddnumbers;
}

console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));
```
```js

 function removeEveryOther(arr){
     return arr.filter(function(elem, index) {
       return index % 2 === 0;
     });
   }

 function removeEveryOther(arr){
     return arr.filter(function(x,y){
       return y%2==0;
     });
   }
```js