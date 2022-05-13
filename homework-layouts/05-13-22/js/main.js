console.log("Hello 100Devs, Lets do some JavaScript");
// EMOTICONS (WINDOWS + PERIOD)
// L1
// console.log("🥪 Synchronos 1");

// // L2
// setTimeout(_ => console.log(`🍅 Timeout 2`), 0);

// //L3
// Promise.resolve().then(_ => console.log("🍍 Promise"));

// // L4
// console.log('🥪  Synchronous 4');



// BASIC
const getFruit = async(name) => {
    const fruit = {
        pineapple: '🍍',
        peach:      '🍑',
        strawbwerry: '🍓'
    }

    return promise.resolve (fruit[name]);
}
getFruit('peach').then(console.log)


// ASYNC + AWAIT
// const makeSmoothie = async() => {
//     const a = await getFruit('pineapple')
//     const b = await getFruit('strawberry')
// }

// makeSmoothie().then(console.log)