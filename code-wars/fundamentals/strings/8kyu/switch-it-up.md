# Switch it Up! - 8 Kyu

When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

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

If your language supports it, try using a switch statement.

```js
function switchItUp(number) {
  switch (Number(number)) {
    case 1:
      return "One";
      break;
    case 2:
      return "Two";
      break;
    case 3:
      return "Three";
      break;
    case 4:
      return "Four";
      break;
    case 5:
      return "Five";
      break;
    case 6:
      return "Six";
      break;
    case 7:
      return "Seven";
      break;
    case 8:
      return "Eight";
      break;
    case 9:
      return "Nine";
      break;
    case 0:
      return "Zero";
      break;
  }
}

console.log(switchItUp(7));

//Created a switch statement that checked for every case and returned the values in a string form.
```
