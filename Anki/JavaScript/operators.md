# Expressions and operators

## What is a JavaScript Operator?

- Explanantion:

In JavaScript, an operator is a symbol or keyword used to perform operations on values or variables. Operators can be used to perform arithmetic, logical, comparison, and other types of operations.

- Example:

```js
// Arithmetic operators:
const x = 10;
const y = 5;
const sum = x + y;
const difference = x - y;
const product = x * y;
const quotient = x / y;
const remainder = x % y;
// Comparison operators:
const x = 10;
const y = 5;
const isEqual = x == y;
const isNotEqual = x != y;
const isGreater = x > y;
const isLess = x < y;
const isGreaterOrEqual = x >= y;
const isLessOrEqual = x <= y;
// Logical operators:
const x = true;
const y = false;
const andResult = x && y;
const orResult = x || y;
const notResult = !x;
// Assignment operators:
let x = 10;
x += 5; // equivalent to x = x + 5
x -= 5; // equivalent to x = x - 5
x *= 2; // equivalent to x = x * 2
x /= 2; // equivalent to x = x / 2
x %= 3; // equivalent to x = x % 3
// Bitwise operators:
const x = 5; // binary representation: 0101
const y = 3; // binary representation: 0011
const andResult = x & y; // binary result: 0001 (1 in decimal)
const orResult = x | y; // binary result: 0111 (7 in decimal)
const xorResult = x ^ y; // binary result: 0110 (6 in decimal)
const notResult = ~x; // binary result: 1010 (in two's complement representation)
const leftShiftResult = x << 1; // binary result: 1010 (10 in decimal)
const rightShiftResult = x >> 1; // binary result: 0010 (2 in decimal)
```

## what is **concatenation** in JavaScript?

- Explanation:

Concatenation in JavaScript is the process of joining multiple strings together to form a single string. This is typically achieved using the concatenation operator +.

- Example: 

```js
const firstName = 'John';
const lastName = 'Doe';

const fullName = firstName + ' ' + lastName;

console.log(fullName); // Output: John Doe
// In this example, the + operator is used to concatenate the firstName, a space character, and the lastName variable. The resulting string is assigned to the fullName variable and then logged to the console.
```


## What does the remainder (%) operator return?

- Explanation:

The remainder left over when one operand is divided by a second operand.
The remainder operator (%) returns the remainder of a division operation between two numbers. It can be used to determine if a number is even or odd, by checking if the remainder is equal to zero or not.

- Example:

```js
console.log(7 % 3); // Output: 1
console.log(8 % 2); // Output: 0
console.log(5 % 2); // Output: 1
// In the first example, 7 divided by 3 equals 2 with a remainder of 1, so the output is 1. In the second example, 8 divided by 2 equals 4 with no remainder, so the output is 0. In the third example, 5 divided by 2 equals 2 with a remainder of 1, so the output is 1.
```

## What is the dividend and divisor in the operation n % d?

- Explanation:

n is called the dividend and d is called the divisor.
In the operation n % d, n is the dividend and d is the divisor. The % operator returns the remainder after n is divided by d.

- Example:

```js
const n = 10;
const d = 3;
const remainder = n % d;

console.log(remainder); // Output: 1
// In this example, n is 10 and d is 3. When n is divided by d, the remainder is 1, so remainder is assigned the value of 1.
```

## What happens if one operand becomes a BigInt but the other becomes a number?

- Explantion:

When using the remainder operator % with one operand being a BigInt and the other being a number, the number operand will be automatically converted to a BigInt before the operation is performed.

- Example:

```js
const bigIntNum = 123456789012345678901234567890n;
const regularNum = 7;

console.log(typeof bigIntNum); // outputs "bigint"
console.log(typeof regularNum); // outputs "number"

const result = bigIntNum % regularNum;

console.log(typeof result); // outputs "bigint"
console.log(result); // outputs "4n"
// In this example, bigIntNum is a BigInt and regularNum is a regular number. When the % operator is used to calculate the remainder of bigIntNum divided by regularNum, the number regularNum is automatically converted to a BigInt before the operation is performed. The result of the operation is also a BigInt.
```

## How can you obtain a modulo in JavaScript?

- Example:

In JavaScript, the % operator can be used to obtain the modulo of two numbers.

- Example:

```js
const x = 17;
const y = 5;
const modulo = x % y;
console.log(modulo); // Output: 2
// This will output the result of 17 % 5, which is 2.
```

If you need to obtain the modulo with BigInts, you can use the BigInt constructor function to create BigInt values and the % operator to compute the modulo. Here is an example:

```js
const x = BigInt("12345678901234567890");
const y = BigInt("9876543210987654321");
const modulo = x % y;
console.log(modulo.toString()); // Output: 2843626300460699233n
// This will output the result of 12345678901234567890 % 9876543210987654321, which is 2843626300460699233. Note the n at the end of the result, which indicates that the value is a BigInt. To convert it to a regular number, you can use the toString() method.
```
