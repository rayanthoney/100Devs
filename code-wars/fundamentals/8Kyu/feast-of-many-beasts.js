
// The Feast of Many Beasts

// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.


// P - Parameters:
    // Two Strings - each containing 2 letters, no numbers, lowercase, no special characters at start or end,


// R - Results: 
    // boolean - true or false


// E - Examples:
    // Test.assertEquals(feast("great blue heron", "garlic naan"), true)
    // Test.assertEquals(feast("chickadee", "chocolate cake"), true)
    // Test.assertEquals(feast("brown bear", "bear claw"), false)


// P - Pseudocode:
    // Get the start and end letters of the animal's name, and compare them in turn to the start and end letters of the dish they are bringing. Return true or false based on the result.



function feast(beast, dish) {
return beast[0] === dish[0] && beast.slice(-1) === dish[dish.length - 1];
}
