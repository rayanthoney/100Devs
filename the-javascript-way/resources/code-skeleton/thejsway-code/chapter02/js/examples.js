// JavaScript code goes here

// Variable
// Constant
// Assignment Operator
// Variable Scope
// Expressions
// Evaluation
// Backticks
// Template literal
// Type Conversions

// console.log("Let's get into some JavaScript");

// let b = 0;
// b += 1;
// b++;
// console.log(b);

// let num1 = 0;
// {
// 	num1 = 1;
// 	const num2 = 0;
// }
// console.log(num1);
// console.log(num2);

// // 3 is an expression whose value is 3
// const c = 3;
// // c is an expression whose value is the value of c (3 here)
// let d = c;
// // (d + 1) is an expression whose value is d's + 1 (4 here)
// d = d + 1; // d now contains the value 4
// console.log(d); // Show 4

// const country = "America";
// console.log(`I live in ${country}`);
// const x = 3;
// const y = 7;
// console.log(`${x} + ${y} = ${x + y}`);

// const f = 100;
// console.log("Variable f contains the value " + f);

// const g = "five" * 2;
// console.log(g);

// const h = "5";
// console.log(h + 1);
// const i = Number("5");
// console.log(i + 1);

// const fullName = prompt("Enter your first name:");
// alert(`Hello, ${fullName}`);

// const temp1 = 36.9;
// const temp2 = 37.6;
// const temp3 = 37.1;
// console.log(temp1, temp2, temp3);

// const input = prompt("Enter a number:");
// const nb = Number(input);

// const radius = 5.5;
// const pi = 3.14;
// const perimeter = 2 * pi * radius;
// console.log(perimeter);

// const firstName = "Ray";
// const lastName = "Maxey";
// console.log("Hello my name is ", firstName, lastName);

////////////////////////////////////////
// Improved Hello:                   //
///////////////////////////////////////
// const fullName = prompt("Enter your first and last name:");
// alert(`Hello, ${fullName}`);

///////////////////////////////////////
//      VAT Calculations             //
///////////////////////////////////////
// // Ask the user for the price.
// let rawPrice = prompt("How much was that?");
// // Calculate the VAT.
// let priceVat = (Number(rawPrice) / 100) * 20.6;
// // Calculate the price + VAT
// let totalCost = Number(rawPrice) + priceVat;
// // Let the user know the price + VAT
// alert(`The total cost will be ${totalCost}`);

////////////////////////////////////////
// From Celsius to Fahrenheit degrees //
////////////////////////////////////////
// Ask the user for the Celsius teperature
// let celsius = prompt("Hello what is the temp in Celsius");
// celsius = Number(celsius);
// let fahrenheit = (celsius * 9) / 5 + 32;
// fahrenheit = fahrenheit.toFixed(1);
// alert(celsius + " degrees celsius is " + fahrenheit + " degrees Fahrenheit.");

////////////////////////////////////////
//                                    //
////////////////////////////////////////
// let number1 = 5;
// let number2 = 3;
// // TODO: type your code here (and nowhere else!)
// number1 = 5 - 2;
// number2 = 3 + 2;
// console.log(number1); // Should show 3
// console.log(number2); // Should show 5

///////////////////////////////////////
//   Various Arithmetic Operations   //
///////////////////////////////////////
// function calculate_num(ch) {
//     var a = parseInt(document.getElementById("firstNo").value);
//     var b = parseInt(document.getElementById("secondNo").value);
//     switch(ch){
//         case 'sum': document.getElementById("result").value = a+b;
//         break;
//         case 'subtract': document.getElementById("result").value = a-b;
//         break;
//         case 'product': document.getElementById("result").value = a*b;
//         break;
//         case 'quotient': document.getElementById("result").value = a/b;
//         break;
//         case 'remainder': document.getElementById("result").value = a%b;
//         break;
//         }  }
// function clear_numbers() {
//     document.getElementById("firstNo").value="";
//     document.getElementById("secondNo").value="";
//     document.getElementById("result").value="";
// }