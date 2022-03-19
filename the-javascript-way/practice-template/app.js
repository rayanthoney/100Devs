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
