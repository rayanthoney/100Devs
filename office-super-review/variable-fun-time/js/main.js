//--- Easy
//create a variable and assign it a number
let once = 100

//minus 10 from that number
once = once - 10

//print that number to the console
console.log(once)
//--- Medium
//create a variable that holds a value from the input
// let numFromInput = Number(document.querySelector('#danceDanceRevolution').value)
// //add 25 to that number
// numFromInput += 25

// //alert that number
// alert(numFromInput)

//--- Hard
//create a variable that holds the h1
const h1 = document.querySelector('h1')

//add an event listener to that element that console logs the sum of the two previous variables
h1.addEventListener('click', addTwo)
    let numFromInput = Number(document.querySelector('#danceDanceRevolution').value)
    numFromInput += 25

function addTwo() {
    console.log(once + numFromInput)
}
