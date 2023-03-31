# Strings 🧠

## What is String.prototype.charAt() property?

- Explanation:
 
The String.prototype.charAt() method is a built-in JavaScript method that allows you to access the character at a specified index in a string. The method takes a single argument, which is the index of the character to access. The index should be an integer between 0 and the length of the string minus 1.

- Example:

```js
    const str = "hello";
    const char1 = str.charAt(0);
    const char2 = str.charAt(1);
    const char5 = str.charAt(4);

    console.log(char1); // "h"
    console.log(char2); // "e"
    console.log(char5); // "o"

    // In this example, the charAt() method is called on the str variable with the arguments 0, 1, and 4. The method returns the character at each specified index, which is assigned to the variables char1, char2, and char5. The results are logged to the console.
```

Note that if the index is out of range (i.e., less than 0 or greater than or equal to the length of the string), the method returns an empty string:

```js
    const str = "hello";
    const char = str.charAt(10);

    console.log(char); // ""
    // In this example, the charAt() method is called on the str variable with the argument 10. The index is out of range, so the method returns an empty string, which is logged to the console.
```

## What is String.prototype.charCodeAt() property?

- Explanation:

The String.prototype.charCodeAt() method is a built-in JavaScript method that returns an integer representing the Unicode value of the character at a specified index in a string. The method takes a single argument, which is the index of the character to access.

- Example:

```js
    const str = "hello";
    const code1 = str.charCodeAt(0);
    const code2 = str.charCodeAt(1);
    const code5 = str.charCodeAt(4);

    console.log(code1); // 104
    console.log(code2); // 101
    console.log(code5); // 111
    // In this example, the charCodeAt() method is called on the str variable with the arguments 0, 1, and 4. The method returns the Unicode value of the character at each specified index, which is assigned to the variables code1, code2, and code5. The results are logged to the console.
```

Note that if the index is out of range (i.e., less than 0 or greater than or equal to the length of the string), the method returns NaN:

```js
    const str = "hello";
    const code = str.charCodeAt(10);

    console.log(code); // NaN
    // In this example, the charCodeAt() method is called on the str variable with the argument 10. The index is out of range, so the method returns NaN, which is logged to the console.
```

## What is String.prototype.match() property?

- Explanation:
 
The String.prototype.match() method is a built-in JavaScript method that allows you to search a string for a pattern and return an array containing the matched results. The method takes a single argument, which is the pattern to search for. The pattern can be either a regular expression or a string.

- Example:

```js
    const str = "The quick brown fox jumps over the lazy dog.";
    const pattern = /[aeiou]/g;
    const result = str.match(pattern);
    console.log(result); // ["e", "u", "i", "o", "o", "u", "o", "e", "a", "o"]
    // In this example, the match() method is called on the str variable with the regular expression [aeiou]/g as the argument. The method searches the string str for all occurrences of the vowels a, e, i, o, and u, and returns an array containing the matched results in the order they were found. The result is logged to the console.
```

Here's an example of how to use the match() method with a string:

```js
    const str = "The quick brown fox jumps over the lazy dog.";
    const pattern = "brown";
    const result = str.match(pattern);
    console.log(result); // ["brown"]
    // In this example, the match() method is called on the str variable with the string "brown" as the argument. The method searches the string str for the exact substring "brown", and returns an array containing the matched result. The result is logged to the console.
```

## What is String.prototype.repeat() property?

- Explanation:
  
The String.prototype.repeat() method is a built-in JavaScript method that allows you to create a new string by repeating the original string a specified number of times. The method takes a single argument, which is an integer specifying the number of times the original string should be repeated.

- Example:

```js
    const str = "hello ";
    const newStr = str.repeat(3);
    console.log(newStr); // "hello hello hello "
    // In this example, the repeat() method is called on the str variable with the argument 3. The method creates a new string by repeating the original string str three times, and returns the resulting string newStr. The result is logged to the console.
```

Note that the repeat() method returns an empty string if the argument is zero or negative:

```js
    const str = "hello ";
    const newStr = str.repeat(-1);
    console.log(newStr); // ""
    // In this example, the repeat() method is called on the str variable with the argument -1. The method returns an empty string because the argument is negative.
```

## What is String.prototype.replace() property?

- Explanation:
  
The String.prototype.replace() method is a built-in JavaScript method that returns a new string with some or all matches of a pattern replaced by a replacement string.

- Example:

```js
    const str = "Hello, World!";
    const newStr = str.replace("Hello", "Hi");
    console.log(newStr); // "Hi, World!"
    // In this example, the replace() method is called on the str variable with the arguments "Hello" and "Hi". The method replaces the first occurrence of "Hello" with "Hi" and returns a new string newStr. The result is logged to the console. Note that the original string str is not modified by this method, and a new string is returned with the replacement applied.
```

You can also use regular expressions with the replace() method to replace all occurrences of a pattern. Here's an example:

```js
    const str = "The quick brown fox jumps over the lazy dog.";
    const newStr = str.replace(/the/gi, "a");
    console.log(newStr); // "a quick brown fox jumps over a lazy dog."
    // In this example, the replace() method is called on the str variable with the regular expression /the/gi and the replacement string "a". The regular expression the matches all occurrences of "the" (case-insensitive) in the original string str, and the method replaces them with "a". The result is logged to the console.
```

## What is String.prototype.slice() property?

- Explanation:
- 
The String.prototype.slice() method is a built-in JavaScript method that returns a new string that is a portion of the original string. The portion of the string to be returned is specified by passing two arguments to the slice() method: the starting index (inclusive) and the ending index (exclusive).

- Example:

```js
    const str = "Hello, World!";
        const newStr = str.slice(0, 5);
        console.log(newStr); // "Hello"
        // In this example, the slice() method is called on the str variable with the arguments 0 and 5. The method returns a new string newStr that consists of the characters in the original string str starting from index 0 (inclusive) up to index 5 (exclusive). The result is logged to the console. Note that the original string str is not modified by this method, and a new string is returned with the slice applied.
```

If you omit the second argument to slice(), the method will return a slice of the string starting from the specified index to the end of the string. Here's an example:

```Js
    const str = "Hello, World!";
        const newStr = str.slice(7);
        console.log(newStr); // "World!"
        // In this example, the slice() method is called on the str variable with the argument 7. The method returns a new string newStr that consists of the characters in the original string str starting from index 7 (inclusive) up to the end of the string. The result is logged to the console.
```

## What is String.prototype.split() property?

- Explanation:
- 
The String.prototype.split() method is a built-in JavaScript method that allows you to split a string into an array of substrings. The method takes one or two arguments: a separator and an optional limit.

- Example:

```js
    const str = "apple,banana,orange";
        const arr = str.split(",");
        console.log(arr); // ["apple", "banana", "orange"]
        // In this example, the split() method is called on the str variable with the argument ",". The method splits the original string str into an array of substrings at each occurrence of the separator ",", and returns the resulting array arr. The result is logged to the console.
```

If you don't provide a separator argument, the method will split the string into an array of individual characters:

```js
    const str = "hello";
        const arr = str.split();
        console.log(arr); // ["h", "e", "l", "l", "o"]
```

If you provide a second argument to split(), it limits the number of splits that can be made:

```js
    const str = "apple,banana,orange";
        const arr = str.split(",", 2);
        console.log(arr); // ["apple", "banana"]
        // In this example, the split() method is called on the str variable with the arguments "," and 2. The method splits the original string str into an array of substrings at each occurrence of the separator "," up to a limit of 2, and returns the resulting array arr. The result is logged to the console.
```

## What is String.prototype.toLowerCase() property?

- Explanation:

The String.prototype.toLowerCase() method is a built-in JavaScript method that returns a new string with all the alphabetic characters in the original string converted to lowercase.

- Example:

```js
    const str = "Hello, World!";
        const lowerCaseStr = str.toLowerCase();
        console.log(lowerCaseStr); // "hello, world!"
        // In this example, the toLowerCase() method is called on the str variable. The method returns a new string lowerCaseStr with all the alphabetic characters converted to lowercase. The result is logged to the console. Note that the original string str is not modified by this method, and a new string is returned with the lowercase characters.
```

## What is String.prototype.toUpperCase() property?

- Explanation:

The String.prototype.toUpperCase() method is a built-in JavaScript method that returns a new string with all the alphabetic characters in the original string converted to uppercase.

- Example:

```js
    const str = "Hello, World!";
        const upperCaseStr = str.toUpperCase();
        console.log(upperCaseStr); // "HELLO, WORLD!"
        // In this example, the toUpperCase() method is called on the str variable. The method returns a new string upperCaseStr with all the alphabetic characters converted to uppercase. The result is logged to the console. Note that the original string str is not modified by this method, and a new string is returned with the uppercase characters.
```

## What is the .length property?

- Explanation:
- 
The .length property is a built-in property of many JavaScript objects, including strings, arrays, and other collections, that returns the number of elements in the object.

- Example:

```js
    const greeting = "Hello, world!";
        console.log(greeting.length); // 13
        // In this example, the .length property is used with the greeting string, which has 13 characters. The property returns the number of characters as an integer, which is then logged to the console.
```

When used with an array, it returns the number of elements in the array:

```js
    const numbers = [1, 2, 3, 4, 5];
        console.log(numbers.length); // 5
        // In this example, the .length property is used with the numbers array, which has 5 elements. The property returns the number of elements as an integer, which is then logged to the console.
```

## What is the String.prototype.includes() property?

- Explanation:
  
The String.prototype.includes() method is a built-in JavaScript method that determines whether one string can be found within another string. It returns true if the string contains the specified substring, and false otherwise.

- Example:

```js
    const str = "Hello, World!";
        const isFound = str.includes("World");
        console.log(isFound); // true
        // In this example, the includes() method is called on the str variable with the argument "World". The method returns true because the str variable contains the substring "World". The result is assigned to the isFound variable and logged to the console.
```

## What is the String.prototype.trim() property?

- Explanation:

The String.prototype.trim() method is a built-in JavaScript method that removes white space from both ends of a string. It returns a new string with any white space characters (e.g. space, tab, newline) removed from the beginning and end of the original string.

- Example:

```js
    const str = "   Hello, World!   ";
        const trimmedStr = str.trim();
        console.log(trimmedStr); // "Hello, World!"
        // In this example, the original string str has white space characters at both ends. The trim() method is called on the str variable, which returns a new string trimmedStr with the white space removed from both ends. The result is logged to the console.
```
