//Write your pseduo code first! 
// 1 -> 32

// need the value that is in celcius

// convert from celsius to Farenheight

// C = (5/9) * (F - 32)


// Show it 

document.querySelector('#yell').addEventListener('click', convert)

function convert() {
    let cTemp = document.querySelector('#sel').value
    cTemp * 9 / 5 + 32;
    document.querySelector('#placeToYell').innerText = cTemp
}



// function cToF(celsius) 
// {
//   var cTemp = celsius;
//   var cToFahr = cTemp * 9 / 5 + 32;
//   var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
//     console.log(message);
// }

// function fToC(fahrenheit) 
// {
//   var fTemp = fahrenheit;
//   var fToCel = (fTemp - 32) * 5 / 9;
//   var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
//     console.log(message);
// } 
// cToF(60);
// fToC(45);
