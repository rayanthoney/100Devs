# String cleaning - (8Kyu)

# Description:

Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.
Examples (input -> output)

	'! !'                 -> '! !'
	'123456789'           -> ''
	'This looks5 grea8t!' -> 'This looks great!'

Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.


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
function stringClean(s) {
	let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
	return s
		.split("")
		.filter((e) => !numbers.includes(e))
		.join("");
}
console.log(stringClean("4fourty 8eight"));

function stringClean(s){
    return s.replace(/[0-9]/g, '');
  }

function stringClean(s){
    var array = s.split("").map( (char) => {
      if (!parseInt(char) && char !== "0"){
        return char
      }
    })
    return array.join("")
  }

  ```
