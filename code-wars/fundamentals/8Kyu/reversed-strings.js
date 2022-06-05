// String cleaning - 8 Kyu

// Reversed Strings

// Complete the solution so that it reverses the string passed into it.

function solution(str) {}

//
//
// * PASSED *
function solution(str) {
	let result = "";
	for (i = str.length - 1; i >= 0; i--) {
		result += str[i];
	}
	return result;
}

//
//

// function solution(str){
//     return str.split('').reverse().join('');
// }

//
//

// const solution = str => str.split('').reverse().join('');

//
//

// const solution = str => [...str].reverse().join``;
