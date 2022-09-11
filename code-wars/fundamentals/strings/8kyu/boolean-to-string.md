# Convert a Boolean to a String - 8 Kyu

## Description:

Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.


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
function booleanToString(b) {
	return b ? "true" : "false";
}

console.log(booleanToString(false));

function booleanToString(b){
    return b ? 'true' : 'false';
  }

  function booleanToString(b){
    return String(b);
  }
```