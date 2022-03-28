//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

// let nums = [42,19,77,33,57]

// let sum = nums.reduce( (acc,c) => acc + c, 0)
// alert(sum)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let nums = [42, 19, 77, 33, 57];

let numsSquared = nums.map((n) => n * n);
console.log(numsSquared);

//Create a function that takes string
//Print the reverse of that string to the console

// function reverseStr(str) {
// 	let reverseStr = str.split('').reverse()
// 	console.log(reverseStr);
// }
// reverseStr('car')

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function isPalindrome(str){
    let reverseStr = str.split('').reverse().join('')
    if( str.toLowerCase() === reverseStr.toLowerCase() ){
        alert('Yes')
    } else {
        alert('No')
    }
}