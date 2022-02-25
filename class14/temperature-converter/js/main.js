//Write your pseduo code first! 
document.querySelector('#yell').addEventListener('click', run)

// convert from celsius to Farenheight
function run() {
    console.log('Hello Twitch')
    // Stored Variables
    const fName = document.querySelector('#firstName').value
    // convert the value
    let pumpkin = document.querySelector('#firstName').value

    pumpkin = pumpkin * 9/5 + 32
    // show the value to user
    document.querySelector('#placeToYell').innerText = pumpkin    
}

// C = (5/9) * (F - 32)




// function cToF(celius)
// {
//     const cTemp = celsius;
//     const cToFahr = CTemp * 9 / 5 = 32;
//     const message = cTemp+'\xBOC is ' + cToFahr + ' \xBOF.';
//     console.log('message');
// }

// function fToC(Farenheight)
// {
//     const fTemp = fahrenheit;
//     const
//     const
// }