console.log("Hello 100Devs, Lets do some JavaScript");

// Create a variable named kelvin, and set it equal to 293
// Current temperature in Kelvin degrees.
const kelvin = 293;
// Converting Kelvin to Celsius
const celsius = kelvin - 273;
// Convert celsius to fahrenheit (Fahrenheit = Celsius*(9/5) + 32)
let fahrenheit = celsius * (9/5) + 32;
// Round down fahrenheit variable (Math.floor)
fahrenheit = Math.floor(fahrenheit);
// Run program to see results (String interpolation `....`)
console.log(`The temperature ${fahrenheit} degrees Fahrenheit.`);


// Newton = Celsius*(33/100)
let newton = celsius * (33/100);
newton = Math.floor(newton);
// Run program to see results (String interpolation `....`)
console.log(`The temperature in ${newton} degrees Newton.`);
