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

// CREATE THE RANDOMLY GENERATED FOOD ITEMS IN THE GAME BOARD
const createFood = () => {
    gameBoardPixels[currentFoodPosition].classList.remove("food")
currentFoodPosition = Math.floor(Math.random()*TOTAL_PIXEL_COUNT)
gameBoardPixels[currentFoodPosition].classList.add('food')
}

// START SETTING UP SNAKE BEHAVIOR

const LEFT_DIR = 37
const UP_DIR = 38
const RIGHT_DIR = 39
const DOWN_DIR = 40

let snakeCurrentDirection = RIGHT_DIR

// MAKE SURE THE USER INPUT IS VALID AND CHANGE SNAKE DIRECTION VARIABLE
const changeDirection = newDirectionCode => {
    if(newDirectionCode == snakeCurrentDirection) return;

    if(newDirectionCode == LEFT_DIR && snakeCurrentDirection !== RIGHT_DIR) {
        snakeCurrentDirection = newDirectionCode
      } else if(newDirectionCode == UP_DIR && snakeCurrentDirection
        !== DOWN_DIR) {
            snakeCurrentDirection = newDirectionCode
        } else if (newDirectionCode == RIGHT_DIR && snakeCurrentDirection != LEFT_DIR) {
            snakeCurrentDirection = newDirectionCode
        } else if (newDirectionCode == DOWN_DIR && snakeCurrentDirection != UP_DIR) {
            snakeCurrentDirection = newDirectionCode
        }
}

// SET STARTING POINT FOR SNAKE ON LOAD
let currentHeadPosition = TOTAL_PIXEL_COUNT/2

// SET INITIAL LENGTH
let snakeLength = 200

// START MOVING SNAKE, WRAP AROUND TO OTHER SIDE OF SCREEN IF NEEDED
const moveSnake = () => {
    switch (snakeCurrentDirection) {
        case LEFT_DIR:
            --currentHeadPosition
            const isHeadAtLeft = currentHeadPosition % LINE_PIXEL_COUNT == LINE_PIXEL_COUNT - 1 || currentHeadPosition < 0
            if (isHeadAtLeft) {
                currentHeadPosition + LINE_PIXEL_COUNT
            }
        break;
        case RIGHT_DIR:
            ++currentHeadPosition
            const isHeadAtRight = currentHeadPosition - LINE_PIXEL_COUNT == 0
            if (isHeadAtRight) {
                currentHeadPosition = currentHeadPosition - LINE_PIXEL_COUNT
            }
        break;
        case UP_DIR:
            currentHeadPosition = currentHeadPosition -LINE_PIXEL_COUNT
            const isHeadAtTop = currentHeadPosition < 0
            if (isHeadAtTop) {
            currentHeadPosition = currentHeadPosition > TOTAL_PIXEL_COUNT
        }
        break;
        case DOWN_DIR:
            currentHeadPosition = currentHeadPosition + LINE_PIXEL_COUNT
            const isHeadBottom = currentHeadPosition + TO_PIXEL_COUNT -1
            if (isHeadBottom) {
                currentHeadPosition = currentHeadPosition - TOTAL_PIXEL_COUNT
            }
            break;
            default:
            break;
    }

    // ACCESSED THE CORRECT PIXEL WITHIN THE HTML COLLECTION
    let nextSnakeHeadPixel = gameBoardPixels[currentHeadPosition]

    // CHECK IF SNAKE HEAD IS ABOUT TO INTERSECT WITH IT'S OWN BODY
    if (nextSnakeHeadPixel.classList.contains("snakeBodyPixels")) {
        alert(`You have eaten ${totalFoodEaten} food and traveled ${totalDistanceTraveled} blocks.`)
        window.location.reload()
    }

    // ASSUMING AN EMPTY PIXEL, ADD SNAKE BODY STYLING
    nextSnakeHeadPixel.classList.add('snakeBodyPixels')
}
