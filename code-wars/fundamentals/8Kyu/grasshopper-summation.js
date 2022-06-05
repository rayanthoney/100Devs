//Remove First and Last Character - 8 Kyu

// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

var summation = function (num) {
	// Code here
};

// Grasshopper - Summation
function summation(end) {
	let result = 0;
	for (let i = 1; i <= end; i++) {
		result += i;
	}
	return result;
}

// const summation = num => (
//     Array(num).fill(true)
//       .reduce((sum, item, index) => sum + index + 1, 0)
//   );
