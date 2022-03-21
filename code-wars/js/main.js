// JavaScript code goes here
console.log("Lets do some JavaScript");

// Description:
// Make a simple function called greet that returns the most-famous "hello world!".

// Style Points
// Sure, this is about as easy as it gets. But how clever can you be to create the most creative hello world you can think of? What is a "hello world" solution you would want to show your friends?

function greet() {
	return (greet = "hello world!");
}

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	                      return
// name equals owner	     'Hello boss'
// otherwise	             'Hello guest'

function greet(name, owner) {
	if (name == owner) {
		return "Hello boss";
	} else {
		return "Hello guest";
	}
}

// Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
    // Code here
    str = 'hello'
   return str.toUpperCase();
  }

  function makeUpperCase(str) {return str.toUpperCase();}


//   Very simple, given an integer or a floating-point number, find its opposite.

return -Number


// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
    if(number % 2 === 0) {
      return 'Even';
    } else {
      return 'Odd';
    }
};