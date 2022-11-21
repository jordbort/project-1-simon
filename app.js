// Left & right lights and boxes - containers
const startButton = document.querySelector("#start-button")
const taskCompleted = document.querySelector("#task-completed")
const replayButton = document.querySelector("#replay-button")
const gameBoard = document.querySelector(".game-board")
const leftIndicator = document.querySelector(".left-indicator")
const rightIndicator = document.querySelector(".right-indicator")
const leftGrid = document.querySelector(".left-grid")
const rightGrid = document.querySelector(".right-grid")

// Left & right lights and boxes - node lists
const leftLights = leftIndicator.querySelectorAll(`div`)
const leftBoxes = leftGrid.querySelectorAll(`div`)
const rightLights = rightIndicator.querySelectorAll(`div`)
const rightBoxes = rightGrid.querySelectorAll(`div`)

// Initialization settings
let roundNumber = 1
let theAnswer = []
let playerArr = []
let listening = false
let selection
let sequence = []

// Let boxes listen, and make them "light gray"
function enableReplayButton() {
    replayButton.addEventListener(`click`, function activate() {
        gameBoard.classList.remove(`below-screen`)
        gameBoard.classList.add(`slide-up-in`)
        replayButton.classList.add(`slide-up-out`)
        reset()
        setTimeout( () => gameBoard.classList.remove(`slide-up-in`), 300)
        setTimeout( () => replayButton.classList.add(`above-screen`), 300)
        setTimeout( () => replayButton.classList.remove(`slide-up-out`), 300)
        setTimeout( () => computerTurn(), 800)
        replayButton.removeEventListener(`click`, activate)
    })
    rightLights.forEach(function(light) {
        light.style.backgroundColor = `#696969`
    })
}

const enableButtons = () => {
    listening = true

    rightBoxes.forEach(function(square) {
        square.style.backgroundColor = `#B2B0B3`
    })
}

// Generate new final answer sequence for the game
const newAnswer = () => {
    theAnswer = []
    for(i=0;i<5;i++) {
        theAnswer.push(Math.ceil(Math.random() * 9))
    }
}

// Generate new answer and set round number back to 1
const reset = () => {
    newAnswer()
    roundNumber = 1
}

// Computer's turn: the right panel resets, the left panel's lights increment, and the round sequence is shown
const computerTurn = () => {
    
        // Reset left lights to "gray"
        leftLights.forEach(function(light) {
            light.style.backgroundColor = `#696969`
        })
    
    // Compile left green lights and round sequence
    sequence = []
    for(i=0;i<roundNumber;i++) {
        sequence.push(theAnswer[i])
        leftLights[i].style.backgroundColor = `#00C000`
    }

    // Turn right lights "gray"
    rightLights.forEach(function(light) {
        light.style.backgroundColor = `#696969`
    })
    
    // Computer blinks the sequence at the player 
    let blinkClock = 0
    let cpuBlink = setInterval(function() {
        leftBoxes.forEach(function(square) {
            if(Number(square.dataset.num) === sequence[blinkClock]) {
                square.classList.add(`blue`)
                setTimeout( () => square.classList.remove(`blue`), 300)
            }
        })
        blinkClock++
        if(blinkClock === sequence.length) {
            // Clear timer
            clearInterval(cpuBlink)

            // Empty player array, and enable buttons for next round after a pause
            playerArr = []
            setTimeout( () => enableButtons(), 300)
        }
        else {
        }
    }, 500)
}

function wrongClick() {
    // Stop boxes from listening
    listening = false

    // Flash all right side red three times
    rightLights.forEach(function(light) {
        light.classList.add(`red`)
        setTimeout( () => light.classList.remove(`red`), 1800)
    })
    rightBoxes.forEach(function(square) {
        square.classList.add(`red`)
        setTimeout( () => square.classList.remove(`red`), 1800)
    })

    // Reset game and start computer's turn
    reset()
    setTimeout( () => computerTurn(), 1800)
}

const win = () => {
    // Turn on timer to make right squares "dark gray"
    setTimeout( () => rightBoxes.forEach(function(square) {
        square.style.backgroundColor = `#696969`
    }), 300)

    // Make all boxes "cyan-win"
    rightBoxes.forEach(function(square) {
        square.classList.add(`cyan-win`)
        setTimeout( () => square.classList.remove(`cyan-win`), 300)
    })

    // Series of end-game text animations
    taskCompleted.classList.remove(`above-screen`)
    taskCompleted.classList.add(`slide-up-in`)
    taskCompleted.classList.remove(`below-screen`)
    setTimeout( () => taskCompleted.classList.remove(`slide-up-in`), 300)
    setTimeout( () => gameBoard.classList.add(`slide-down-out`), 600)
    setTimeout( () => gameBoard.classList.remove(`slide-down-out`), 900)
    setTimeout( () => gameBoard.classList.add(`below-screen`), 900)
    setTimeout( () => taskCompleted.classList.add(`slide-up-out`), 1200)
    setTimeout( () => taskCompleted.classList.add(`above-screen`), 1600)
    setTimeout( () => taskCompleted.classList.remove(`slide-up-out`), 1600)
    setTimeout( () => replayButton.classList.add(`slide-down-in`), 2000)
    setTimeout( () => replayButton.classList.remove(`above-screen`), 2000)
    setTimeout( () => replayButton.classList.remove(`slide-down-in`), 2300)
    setTimeout( () => enableReplayButton(), 2300)
    theAnswer = []
}

// Setting up button listeners, control flow, and logic gates
startButton.addEventListener(`click`, function activate() {
    gameBoard.classList.remove(`below-screen`)
    gameBoard.classList.add(`slide-up-in`)
    startButton.classList.add(`slide-up-out`)
    reset()
    setTimeout( () => gameBoard.classList.remove(`slide-up-in`), 300)
    setTimeout( () => startButton.classList.add(`above-screen`), 300)
    setTimeout( () => startButton.classList.remove(`slide-up-out`), 300)
    setTimeout( () => computerTurn(), 800)
    startButton.removeEventListener(`click`, activate)
})

rightBoxes.forEach(button => {
    button.addEventListener(`click`, function() {

        // "selection" variable takes the respective data (a string) from the HTML, and converts it to a number
        selection = Number(button.dataset.num)

        // Only if buttons are listening:
        if(listening) {

            // Decide whether the box clicked was correct
            if(selection === theAnswer[playerArr.length]) {
                playerArr.push(selection)

                // Add one green light per correct click
                rightLights[playerArr.length-1].style.backgroundColor = `#00C000`

                // If that was the last click of the round:
                if(playerArr.length === roundNumber) {

                    // Stop accepting input, increment round number
                    listening = false
                    roundNumber++

                    // Is there another round to play?
                    if(roundNumber > 5) {
                        // We're past round 5, we won the game!
                        return win()
                    }

                    // If not, start the computer's turn, on a delay
                    else {
                        // Turn right squares "dark gray"
                        setTimeout( () => rightBoxes.forEach(function(square) {
                            square.style.backgroundColor = `#696969`
                        }), 300)
                        setTimeout( () => computerTurn(), 600)
                    }
                }

                // Box blinks "cyan", if we didn't click the wrong box, or reach the end of the game
                this.classList.add(`cyan`)
                setTimeout( () => this.classList.remove(`cyan`), 300)
            }

            // If the wrong box was clicked:
            else {
                this.classList.remove(`cyan`)
                wrongClick()
            }
        }
    })
})