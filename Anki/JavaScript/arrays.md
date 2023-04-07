# Arrays 🧠

## What is the Array.prototype.every() method?

- Explanation:

The Array.prototype.every() method tests whether all elements in an array pass a given condition (function) and returns a boolean value. It returns true if all elements pass the condition, and false if at least one element fails the condition.

- Example:

```js
    const arr = [2, 4, 6, 8];
const areAllPositive = arr.every((num) => num > 0);
console.log(areAllPositive); // true

const arr2 = [2, 4, -6, 8];
const areAllPositive2 = arr2.every((num) => num > 0);
console.log(areAllPositive2); // false

// In the first example, all elements in the arr array are positive numbers, so every() returns true. In the second example, there is a negative number in the arr2 array, so every() returns false.
```

## What is the Array.prototype.filter() method?

- Explanation:

The Array.prototype.filter() method creates a new array with all the elements that pass the test implemented by the provided function.

- Example:

```js
    const numbers = [1, 2, 3, 4, 5];

    // Create a new array with only even numbers
    const evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
    });

    console.log(evenNumbers); // Output: [2, 4]

    // In this example, the filter() method creates a new array called evenNumbers that includes only the even numbers from the original numbers array. The callback function inside the filter() method takes an argument number and returns a boolean value indicating whether that number should be included in the new array or not.
```

## What is the Array.prototype.find() method?

- Explanation:

The Array.prototype.find() method is used to return the value of the first element in an array that satisfies a given condition. It takes a callback function as an argument, which is called for each element of the array until the first element is found that satisfies the condition. The callback function should return true for the desired element.

If the desired element is found, the find() method returns the value of that element. Otherwise, it returns undefined.

- Example:

```js
    const numbers = [1, 2, 3, 4, 5];
    const foundNumber = numbers.find(num => num > 3);
    console.log(foundNumber); // Output: 4

    // In this example, the find() method is called on the numbers array and a callback function is passed as an argument. The callback function checks if the current element is greater than 3, and if so, it returns true. The find() method then returns the value of the first element in the array that satisfies this condition, which is 4.
```

## What is the Array.prototype.forEach() method?

- Explanation:

The Array.prototype.forEach() method executes a provided function once for each element in the array.

- Example:

```js
    const numbers = [1, 2, 3, 4, 5];

    numbers.forEach(function(number) {
    console.log(number * 2);
    });

    // Output:
    // 2
    // 4
    // 6
    // 8
    // 10

    // In this example, we have an array of numbers. We use the forEach() method to iterate over each element in the array and execute the function passed as an argument to it. The function takes each number as its parameter and logs its doubled value to the console. So, for each number in the numbers array, the output would be its doubled value.
```

## What is the Array.prototype.includes() method?

- Explanation:

The Array.prototype.includes() method is a built-in function in JavaScript that checks whether an array includes a certain element, and returns true or false based on the result of the check. The method compares the element with each item in the array using strict equality (===) to determine whether the element is present in the array or not.

- Example:

```js
    const array = [1, 2, 3, 4, 5];
console.log(array.includes(3)); // true
console.log(array.includes(6)); // false

// In the above example, the includes() method is used to check if the array array includes the number 3 and 6. The first console.log statement will return true, because 3 is present in the array. The second console.log statement will return false, because 6 is not present in the array.
```

## What is the Array.prototype.map() method?

- Explanation:

The Array.prototype.map() method is used to create a new array by applying a callback function to each element of the original array. It takes a callback function as an argument and executes that function on each element of the array. The callback function can also optionally take in the index of the current element and the array itself.

The return value of the callback function is then used as the new value for that element in the new array that is being created. The map() method does not modify the original array.

- Example:

```js
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(function(number) {
  return number * number;
});

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// In the example above, the map() method is called on the numbers array and a callback function is passed in that multiplies each element by itself to get the square. The resulting array squaredNumbers contains the squares of each element in the original array.
```

## What is the Array.prototype.reduce() method?

- Explanation:

The Array.prototype.reduce() method is used to reduce an array into a single value. It executes a provided function on each element of the array and returns a single output value. The function takes two arguments: the accumulator and the current value. The accumulator stores the value returned by the previous execution of the function, while the current value is the current element being processed.

- Example:

```js
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(sum); // Output: 15
// expected output: 10
// In the above example, the reduce() method takes a callback function as its argument. The callback function takes two parameters: accumulator and currentValue. The accumulator starts as the initial value or the first element of the array if no initial value is provided, and it holds the running total of the reduction. The currentValue is the current element of the array that is being processed.

// The callback function returns the updated value of the accumulator after each iteration, which is the sum of the accumulator and currentValue. At the end of the reduce() method, the final value of the accumulator is returned, which is the sum of all the elements of the array.
```

## What is the Array.prototype.some() method?

- Explanation:

The Array.prototype.some() method tests whether at least one element in the array satisfies the provided testing function. It returns true if the callback function returns true for at least one element, otherwise, it returns false.

- Example:

```js
const numbers = [1, 2, 3, 4, 5];

const hasEvenNumber = numbers.some(function(number) {
  return number % 2 === 0;
});

console.log(hasEvenNumber); // true

// In this example, the some() method checks if at least one number in the numbers array is even. The callback function passed to the some() method checks if the number is divisible by 2 and returns true if it is. Since the array contains the even number 2, the some() method returns true.
```



