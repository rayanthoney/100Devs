//  Sum of positive - 8 Kyu
//  https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    let total = 0;
    for (i=0; i < arr.length; i++) {    // set up loop to go thru array of given length
        if (arr[i] > 0) {              // if arr[i] is greater than zero
            total += arr[i];          // add arr[i] to total
        }
    }
    return total                     // return total
}

// function positiveSum(arr) {
//     return arr.filter(num => num >= 0).reduce((prev, curr) => prev + curr, 0);
//   }
