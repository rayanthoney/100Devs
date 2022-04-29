// // STOPWATCH OBJECT

// let stopwatch = {}

// stopwatch.currentTime = 12 // OBJECT LITERAL NOTATION:

// stopwatch.tellTime = function(time) {
//     console.log(`The current time is ${time}.`) // DOT NOTATION:
// }

// stopwatch.tellTime(stopwatch.currentTime)


// class MakeCar{
//     constructor(carMake, carModel, carColor, numOfDoors) {
//         this.make = carMake
//         this.model = carModel
//         this.color = carColor
//         this.doors = numOfDoors
//     }
//     honk() {
//         alert('BEEP BEEP FUCKER')
//     }
//     lock() {
//         alert('Locked ${this.doors} doors!')
//     }
//     let hondaCivic = new MakeCar('Honda', 'Civic', 'Silver', 4)
// }


// let hourlyRate = 250
// let hours = 160
// let taxRate = .35

// function calculateProfit(rate, numOfHours, taxes) {
//     return rate * numOfHours * (1 - taxes)
// }

// function holdForTaxes(profitMade) {
//     return hourlyRate * hours - profitMade
// }

// let profit = calculateProfit(hourlyRate, hours, taxRate)

// let taxesHeld = holdForTaxes(profit)

// console.log(profit)

// console.log(taxesHeld)

let seriousBusinessPerson = {
    hourlyRate: 250,
    hours: 160,
    taxRate: .35,
    calculateProfit: function() {
        return this.hourlyRate * this.hours * (1 - this.taxRate)
    }
}