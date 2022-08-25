# Interview (Strings)

## What is the  **.length** property?

   > *Finding the length of the string*
 >>This one may seem obvious, but it is likely the most important string method and undoubtedly the most commonly used one. Calling *.length* on a string will return the number of character that the string contains.
 ```js
 const str = 'this string has 29 characters';
 console.log(str.length) // 29
 ```

 ## What is the _.trim()_ property?

>*Removing white space*
>> The *.trim()* function removes white space from the beginning and end of a string. You will find yourself using this one most often when processing the string of a user input field. It is easy to accidentally add spaces, and this ensures you handle the relevant characters.

 ```js
 const str = '      the secret to life is 42        ';
 console.log(str.trim()) // "the secret to life is 42"
 ```

 ## What is the _.includes()_ property?

>Determine if string contains substring
>> The *.includes()* function determines if a substring is contained in a larger string and returns true or false. This has many applications, but one common use-case is for string matching for searching/parsing.

 ```js
const author = 'George Orwel';
const userSearchTerm1 = 'George';
const userSearchTerm2 = 'Douglas';

console.log(author.includes(userSearchTerm1)); // true
console.log(author.includes(userSearchTerm2)); // false
 ```

 ## What is _.indexOf()_ property?
 
 >Finding the index of a substring
 >>Before includes() was introduced to the JavaScript spec, indexOf() was the primary way you would check if a substring existed in a string. It is likely you will still see code that uses indexOf, so understanding how it works is important. The function returns the index of the substring within the string. If the substring is not contained in the original string, it will return -1.

 ```js
 const author = 'George Orwell';
 const userSearchTerm1 = 'Orwell';
 const userSearchTerm2 = 'Douglas';

 console.log(author.indexOf(userSearchTerm1)); // 7
 console.log(author.indexOf(userSearchTerm2)); // -1

 const author = 'George Orwell';
 const userSearchTerm = 'Orwell';
 const stringIncludeSubstring = author.indexOf(userSearchTerm) > -1; // true

 if (stringIncludesSubstring) {
    console.log('We found a matching author');
 }
 ```

 ## What is _.toUpperCase()_ property?

 >Capitalizes entire string
 >>The *toUpperCase()* function returns a string with all upper case letters.

 ```js
 const str = 'We are some small letters that want to be big';
 console.log(str.toUpperCase()); // 'WE ARE SOME SMALL LETTERS THAT WANT TO BE BIG'
 ```

 ## What is _.toLowerCase()_ property?

 >Capitalizes entire string
 >>The *toUpperCase()* function returns a string with all upper case letters.

 ```js
 const str = 'This has BIG LETTERS. They want to all be small.';
 console.log(str.toUpperCase()); // "this has big letters, they want to all be small."
 ```

## What is _.replace()_ property?

>Replaces strings with new values
>>The *replace()* function is called on a string and will return a string with a pattern replaced by a replacement string. It takes either a regex or a string as the pattern. With a regex you can globally replace all matches (using the g option), but with a string it will only replace the first occurrence. In the example below, you will notice that world is replaced only once in the first call since it uses a string pattern.

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

## What is _.slice()_ property?

>Return a section of a string
>>The *slice()* method will extract a section of a string based on the index supplied and return it as a new string. This is useful when you know the structure of a string and want to retrieve a certain portion, or it can be used with the indexOf method which we learned earlier where you can find the index of the first occurrence of a substring and use that as a reference point for slicing.

```js
const str1 = 'User input: Hello there friends!';
console.log(str1.slice(12)); // "Hello there friends!"

const str2 = 'Random characters fjfjdkfsdf posted by-gitconnected';
const usernamePrefixIndex = str2.indexOf('-') + 1; // Account for character itself with +1
const username = str2.slice(usernamePrefixIndex);
console.log(username); // "gitconnected"
```

>_slice()_ takes the beginning index as the first parameter and an optional ending index as the second parameter — str.slice(beginIndex[, endIndex]). If no ending index is supplied, it slices to the end of the string starting with your beginIndex. If a negative beginIndex is used, it will slice backwards from the end of the string. The following is an example from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice) which depicts these cases.

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

## What is _.split()_ property?

>Converts string into an array of strings
>>The *.split()* method takes a separator which you want to split apart the string on, and it returns an array of strings. This is useful when you know your string uses a certain character to separate data, or if you want to operate on specific substrings individually.

```js
const str = 'The quick brown fox jumped over the lazy dog.';
const words = str.split (' ');
const wordCount = words.length;

console.log(words); // [ "The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog",]
console.log(wordCount); // 9

const strColumns = 'username:firstName:lastName:email';
const columnIds = strColumns.split(':');

consol.log(columnIds); // [ "username", "firstName", "lastName", "email"]
```

## What is _.repeat()_ property?

>Repeats a string a specified number of times
>>The *.repeat()* function returns a string consisting of the elements of the object repeated the given number of times.

```js
const str = "Hello World 😎. ";
console.log(str.repeat(3)); // "Hello World 😎 .  "Hello World 😎 .  "Hello World 😎 . "
```

## What is _.match()_ 

>Returns array of matching strings
The *.match()*  method retrieves the matches when matching a *string* against a *regular expression*. The example below searches our string for all capital letters. It returns an array of strings for the values that match the regex.

```js
var paragraph = 'The quick brown fox jumped over the lazy dog. It barked.';
var regex = /[A-Z]/g;
var found = paragraph.match(regex);

console.log(found); // Array [ "T", "I"]
```

## What is _.charAt()_

>Returns the character at an index
>>The _charAt()_ function returns the string character at a given index.

```js
const str = "Hello World";
console.log(str.chartAt(0)); // "H"
console.log(str.chartAt(8)); // "r"
```
## What is _.charCodeAt()_ property?
>Return the unicode at an index
>>The *.charCodeAt()* method returns the unicode of the character at a specified index in a string. This an UTF-16 cone integer between 0 and 65535.

```js
const str = "Hello World 😎";
console.log(str.charCodeAt(0)); // 72
console.log(str.charCodeAt(8)); // 114
console.log(str.charCodeAt(12)); // 55357
```
