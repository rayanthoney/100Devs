// JavaScript Code goes here...

// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console

let favHoliday = 'halloween'
favHoliday = favHoliday.toUpperCase()
    console.log(favHoliday);

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

let favPowerRangerSeries = 'Alien Rangers'
alert( favPowerRangerSeries.slice(-3)  )

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
// function minusFiveAndAbs(n1,n2,n3,n4,n5){
//     let difference = 100 - n1 - n2 - n3 - n4 - n5
//     alert(math.abs(difference) )
// }
// minusFiveAndAbs(27,83,42,1,5)
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.


// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

function headsOrTails(){
    let result = Math.random()
    if(result < .5){
        return 'heads'
    } else {
        return 'tails'
    }
}
console.log( headsOrTails())

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
