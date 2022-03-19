console.log("Hello, This is my World!");
// Splice
// 1.
// let arr = ['i', 'go', 'home'];

// delete arr[1];

// alert(arr [1] );

// alert(arr.length );

// 2.
// let arr = ["I", "study", "JavaScript"];

// arr.splice(1, 1); // from index 1 remove 1 element

// alert( arr ); // ["I", "JavaScript"]

// 3.
// let arr = ["I", "study", "JavaScript", "right", "now"];

// // remove 3 first elements and replace them with another
// arr.splice(0, 3, "Let's", "dance");

// alert( arr ) // now ["Let's", "dance", "right", "now"]

// 4.
// let arr = ["I", "study", "JavaScript", "right", "now"];

// // remove 2 first elements
// let removed = arr.splice(0, 2);

// alert( removed ); // "I", "study" <-- array of removed elements

// 5.
// let arr = ["I", "study", "JavaScript"];

// // from index 2
// // delete 0
// // then insert "complex" and "language"
// arr.splice(2, 0, "complex", "language");

// alert( arr ); // "I", "study", "complex", "language", "JavaScript"

// 6.
// let arr = [1, 2, 5];

// // from index -1 (one step from the end)
// // delete 0 elements,
// // then insert 3 and 4
// arr.splice(-1, 0, 3, 4);

// alert( arr ); // 1,2,3,4,5

// Slice
// 1.
// // arr.slice([start], [end])

// let arr = ["t", "e", "s", "t"];

// alert( arr.slice(1, 3) ); // e,s (copy from 1 to 3)

// alert( arr.slice(-2) ); // s,t (copy from -2 till the end)

// concat
// 1.
// let arr = [1, 2];

// // create an array from: arr and [3,4]
// alert( arr.concat([3, 4]) ); // 1,2,3,4

// // create an array from: arr and [3,4] and [5,6]
// alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// // create an array from: arr and [3,4], then add values 5 and 6
// alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

// Eloquent Javascript

// Chapter 1.

// Looping a triangle
// Write a loop that makes seven calls to console.log to output the
// following triangle:
// Passing this string to the console.log should show something like this:
// #
// ##
// ###
// ####
// #####
// ######
// #######

// let tag = "#"; // declare the tag
// while (tag.length <= 7) {
// 	console.log(tag);
// 	tag += "#";
// }

// Chapter 2

// Chessboard
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

// let size = 8;
// let board = "";
// for (let row = 1; row < size; row++) {
// 	for (let column = 1; column < size; column++) {
//         if((row+column)%2 == 0) {
//             board += ' '
//         }else {
//             board += '#'
//         }
//     }
//     board += '\n'
// }
// console.log(board)

// Chapter 3

// Minimum
// The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.

// function min(num1, num2) {
//     return (num1 < num2) ? num1 : num2 // <- ternary operator
// }
// console.log(min(0, 10));
// // → 0
// console.log(min(0, -10));
// // → -10


// Recursion

// We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:


// Zero is even.

// One is odd.

// For any other number N, its evenness is the same as N - 2.

// Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

// function isEven(num) {
//     if(num >=0){
//     if (num===0) {
//         return true
//     } else if (num===1){
//         return false
//     } else {
//         return (isEven(num-2))
//     }
//     }else {
//         return 'negative'
//     }
// }

// // console.log(isEven(50));
// // → true
// // console.log(isEven(75));
// // → false
// console.log(isEven(-1));
// // → ??




// Bean counting

// You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

function countBs(str) {
    let count = 0;
    for (let i=0; i <= str.length -1; i++) {
        if (str[i]=== "B") {
            count += 1
        }
    }
    return count;
}



console.log(countBs("BBC"));
// → 2

function countChar(str,checkChar) {
    let count = 0;
    for (let i=0; i <= str.length-1; i++) {
        (str[i] === checkChar) && (count += 1)
    }
    return count;
}
console.log(countChar("kakkerlak", "k"));
// → 4




