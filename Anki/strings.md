# Strings 📏

## What is the **String.length**  property?

> The length read-only property of a string contains the length of the string in UTF-16 code units.

```js
const str = 'Life, the universe and everything. Answer:';

console.log(`${str} ${str.length}`);
// expected output: "Life, the universe and everything. Answer: 42"
```

## What is the **String.prototype.trim()** property?

_Removing white space_
 > The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).

```js
 const greeting = '   Hello world!   ';

console.log(greeting);
// expected output: "   Hello world!   ";

console.log(greeting.trim());
// expected output: "Hello world!";

```

## What is the String.prototype.includes() property?

> The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.

```js
const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// expected output: "The word "fox" is in the sentence"

```

## What is String.prototype.toUpperCase() property?

> The toUpperCase() method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).

```js
const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toUpperCase());
// expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."

```

```js
 const str = 'We are some small letters that want to be big';
 console.log(str.toUpperCase()); // 'WE ARE SOME SMALL LETTERS THAT WANT TO BE BIG'
```

## What is String.prototype.toLowerCase() property?

 > The toLowerCase() method returns the calling string value converted to lower case.

```js 
const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toLowerCase());
// expected output: "the quick brown fox jumps over the lazy dog."

```

```js
 const str = 'This has BIG LETTERS. They want to all be small.';
 console.log(str.toUpperCase()); // "this has big letters, they want to all be small."
```

## What is String.prototype.replace() property?

> The replace() method returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.

```js 
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"
```

```js
const str = 'Hello world! My name is also world. How funny.';
const stringPattern = 'world';
const regexPattern = /world/gi;
const replacement = 'gitconnected';

console.log(str.replace(stringPattern, replacement));
// returned output: "Hello gitconnected! My name is also world. How funny."
console.log(str.replace(regexPattern, replacement));
// returned output:  "Hello gitconnected! My name is also gitconnected. How funny."
```

## What is **String.prototype.slice()** property?

> The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.

```js
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// expected output: "the lazy dog."

console.log(str.slice(4, 19));
// expected output: "quick brown fox"

console.log(str.slice(-4));
// expected output: "dog."

console.log(str.slice(-9, -5));
// expected output: "lazy"

```

> _slice()_ takes the beginning index as the first parameter and an optional ending index as the second parameter — str.slice(beginIndex[, endIndex]). If no ending index is supplied, it slices to the end of the string starting with your beginIndex. If a negative beginIndex is used, it will slice backwards from the end of the string. The following is an example from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice) which depicts these cases.

```js
var str = 'The quick red fox jumped over the lazy dogs\'s back.';

console.log(str.slice(30));
// expected output: "the lazy dog's back."

console.log(str.slice(4, 17));
// expected output: "quick red fox."

console.log(str.slice(str.slice));
// expected output: "back"

console.log(str.slice(-11, -6));
// expected output: "dogs"
```

## What is **String.prototype.split()** property?

> The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

```js
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]
```

## What is **String.prototype.repeat()** property?

> The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

```js
const chorus = 'Because I\'m happy. ';

console.log(`Chorus lyrics for "Happy": ${chorus.repeat(27)}`);

// expected output: "Chorus lyrics for "Happy": Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. "
```

```js
const str = "Hello World 😎. ";
console.log(str.repeat(3)); // "Hello World 😎 .  "Hello World 😎 .  "Hello World 😎 . "
```

## What is **String.prototype.match()** property?

> The match() method retrieves the result of matching a string against a regular expression.

```js
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
// expected output: Array ["T", "I"]
```

## What is **String.prototype.charAt()** property?

> The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.

```js
const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// expected output: "The character at index 4 is q"

```

## What is **String.prototype.charCodeAt()** property?

> The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

```js
const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
// expected output: "The character code 113 is equal to q"
```
<!-- 
charAt
charCodeAt
concat
includes
indexOf
match
repeat
replace
search
slice
split
substr
toLowerCase
toUpperCase
trim
 -->

## What is the **String.prototype.charAt()** poperty?

> The String object's _charAt()_ method returns a new string consisting of the single UTF-16 code unit ("index") located at the specified offset into the string. 

```js
const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// expected output: "The character at index 4 is q"
```

## What is the **String.prototype.charCodeAt()** property

> The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index. 

```js
const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
// expected output: "The character code 113 is equal to q"
```
