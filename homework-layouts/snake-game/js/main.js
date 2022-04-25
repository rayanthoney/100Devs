// DECLARE GLOBAL VARIABLES TO TRACK GAME BOARD SIZE
const LINE_PIXEL_COUNT = 40
const TOTAL_PIXEL_COUNT = LINE_PIXEL_COUNT**2

// TRACK SCORES TO DISPLAY TO USER
let totalFoodEaten = 0
let totalDistanceTraveled = 0

// SHORTEN REFERENCE TO GAME BOARD
const gameContainer = document.getElementById('game-container')

// GENERATE THE GAME BOARD
const createGameBoardPixels = () => {
    for (let i = 1; i<=TOTAL_PIXEL_COUNT; i++) {
        gameContainer.innerHTML = `${gameContainer.innerHTML} <div class="game-board__pixel" id = "pixel${i}"></div>`
    }
}

// SHORTEN OUR REFERENCE TO GAME PIXELS
const gameBoardPixels = document.getElementsByClassName('game-board__pixel')

let currentFoodPosition = 0

//create the randomly generated food items in the game board
const createFood = () => {
    gameBoardPixels[currentFoodPosition].classList.remove("food")
currentFoodPosition = Math.floor(Math.random()*TOTAL_PIXEL_COUNT)
gameBoardPixels[currentFoodPosition].classList.add('food')
}

