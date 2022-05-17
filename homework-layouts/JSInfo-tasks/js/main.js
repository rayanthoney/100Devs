console.log("Hello 100Devs, Lets do some JavaScript");

// JS INFO - JAVASCRIPT FUNDAMENTALS TASKS (HELLO WORLD)

// SHOW AN ALERT:
// <script>alert("Hello World!")</script>
// <script>alert( "I'm JavaScript!" );</script>

// SHOW AN ALERT WITH AN EXTERNAL SCRIPT:
// alert("I'm JavaScript!");

// alert('Hello'); alert('World');

// alert('Hello')
// alert('World')

// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).

// let admin, name; // can declare two variables at once

// name = "John";

// admin = name;

// alert( admin ); // "John"

// Create a variable with the name of our planet. How would you name such a variable?

// let ourPlanetName = "Earth";

// Create a variable to store the name of a current visitor to a website. How would you name that variable?

// let currentUserName = "John";

// alert(undefined === 0);

// Tasks:
// Comparisons:
// alert(5 > 4) // true
// alert("🍎" > "🍍") // true
// alert("apple" > "pineapple") // false - Dictionary comparison, hence false. "a" is smaller than "p".
// alert("2" > "12") // true - dictionary comparison, first char "2" is greater than the first char "1".
// alert(undefined == null) // true - Values null and undefined equal each other only.
// alert(undefined === null) // false
// alert(null == "\n0\n") // false
// alert(null === + "\n0\n") // false


let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}
