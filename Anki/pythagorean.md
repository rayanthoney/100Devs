# 🧠 Pythagorean Therom 👳🏾‍♂️

## How would you solve the Pythagorean therom using JavaScript?

- Explanation:

The Pythagorean theorem is a fundamental principle in mathematics that states that in a right triangle, the square of the length of the hypotenuse (the side opposite the right angle) is equal to the sum of the squares of the lengths of the other two sides. In mathematical terms, it can be expressed as:

a^2 + b^2 = c^2

Where a and b are the lengths of the two legs of the right triangle, and c is the length of the hypotenuse.

- Example:

```js
let a = 3; // Length of one leg of the triangle
let b = 4; // Length of the other leg of the triangle

let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)); // Calculate the length of the hypotenuse using the Pythagorean theorem

console.log(c); // Output the length of the hypotenuse to the console (5)

// In this example, we declare two variables a and b, which represent the lengths of the two legs of a right triangle. We then use the Pythagorean theorem formula to calculate the length of the hypotenuse c, which is stored in another variable. Finally, we use console.log() to output the value of c to the console. The Math.pow() and Math.sqrt() functions are used to perform the necessary calculations.
```

## Can we solve the Pythagorean theorem using trigonometry?

- Explanation:

Yes, the Pythagorean theorem can be used in conjunction with trigonometric functions to solve for the unknown sides or angles of a right triangle. In particular, the sine, cosine, and tangent functions relate the ratios of the sides of a right triangle to the angles of the triangle.

For example, if we know the lengths of two sides of a right triangle and we want to find the length of the third side, we can use the Pythagorean theorem to find the length of the hypotenuse, and then we can use trigonometric functions to find the other angles and sides of the triangle.

- Example:

```js
const a = 3; // length of one side of the right triangle
const b = 4; // length of the other side of the right triangle
const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)); // length of the hypotenuse using the Pythagorean theorem
const sinC = b / c; // sine of the angle opposite to side c
const cosC = a / c; // cosine of the angle opposite to side c
const tanC = b / a; // tangent of the angle opposite to side c

console.log("Length of hypotenuse: " + c);
console.log("Sine of angle opposite to side c: " + sinC);
console.log("Cosine of angle opposite to side c: " + cosC);
console.log("Tangent of angle opposite to side c: " + tanC);
```
This code calculates the length of the hypotenuse of a right triangle with sides of length 3 and 4, and then calculates the sine, cosine, and tangent of the angle opposite to the hypotenuse using the trigonometric functions. The output in the console will be:

```yaml
Length of hypotenuse: 5
Sine of angle opposite to side c: 0.8
Cosine of angle opposite to side c: 0.6
Tangent of angle opposite to side c: 1.3333333333333333
```
