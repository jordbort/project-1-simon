console.log(`*** Buttons aren't listening yet`)
// Left & right lights and boxes - containers
const leftIndicator = document.querySelector(".left-indicator")
const rightIndicator = document.querySelector(".right-indicator")
const leftGrid = document.querySelector(".left-grid")
const rightGrid = document.querySelector(".right-grid")

// Left & right lights and boxes - node lists
const leftLights = leftIndicator.querySelectorAll(`div`)
const leftBoxes = leftGrid.querySelectorAll(`div`) // <= Will be used for showing the answer?
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
const enableButtons = () => {
    console.log(`*** Buttons: "light gray" and enabled`)
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
    console.log(`*** The answer is: ${theAnswer}`)
}

// Generate new answer and set round number back to 1
const reset = () => {
    console.log(`---------- * GAME RESET * ----------`)
    newAnswer()
    roundNumber = 1 // Set to 5 while testing last round
}

// Computer's turn: the right panel resets, the left panel's lights increment, and the round sequence is shown
const computerTurn = () => {
    console.log(`Round ${roundNumber}: It's the computer's turn!`)
    
        // Reset left lights to "gray"
        console.log(`*** Left lights grayed out`)
        leftLights.forEach(function(light) {
            light.style.backgroundColor = `#696969`
        })
    
    // Compile left lights and round sequence
    sequence = []
    for(i=0;i<roundNumber;i++) {
        // console.log(`> Building left green lights:`, i+1)
        sequence.push(theAnswer[i])
        leftLights[i].style.backgroundColor = `#00C000`
    }
    console.log(`> All left green lights are lit!`)

    // Turn right lights "gray"
    console.log(`*** Right lights grayed out`)
    rightLights.forEach(function(light) {
        light.style.backgroundColor = `#696969`
    })
    
    // Computer blinks the sequence at the player 
    let blinkClock = 0
    let cpuBlink = setInterval(function() {
        leftBoxes.forEach(function(square) {
            if(Number(square.dataset.num) === sequence[blinkClock]) {
                console.log(`> Blinking number`, blinkClock+1, `***`, sequence[blinkClock], `***`)
                square.classList.add(`cyan`)
                setTimeout( () => square.classList.remove(`cyan`), 300)
            }
        })
        blinkClock++
        if(blinkClock === sequence.length) {
            // Clear timer
            console.log(`*** Timer cleared`)
            clearInterval(cpuBlink)

            // Empty player array, and enable buttons for next round after a pause
            console.log(`It's your turn! Round sequence is: ${sequence}`)
            playerArr = []
            setTimeout( () => enableButtons(), 300)
        }
        else {
            console.log(`sequence length:`, sequence.length)
        }
    }, 500)
}

function wrongClick() {
    console.log(`*** Buttons no longer listening`)
    listening = false

    // Flash all right side red three times
    console.log(`*** ALL right lights/boxes: "red"`)
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
    console.log(`You won! GAME OVER`)
    // listening = false // Is this redundant?

    //Turn on timer to make right squares "dark gray"
    setTimeout( () => rightBoxes.forEach(function(square) {
        console.log(`*** Boxes: "dark gray"`)
        square.style.backgroundColor = `#696969`
    }), 300)

    // Make all boxes blink "blue"
    console.log(`*** ALL boxes: "blue"`)
    rightBoxes.forEach(function(square) {
        square.classList.add(`blue`)
        setTimeout( () => square.classList.remove(`blue`), 300)
    })
    theAnswer = []
}

// Setting up button listeners, control flow, and logic gates
rightBoxes.forEach(button => {
    button.addEventListener(`click`, function() {

        // "selection" variable takes the respective data (a string) from the HTML, and converts it to a number
        selection = Number(button.dataset.num)

        // Only if buttons are listening:
        if(listening) {

            // Decide whether the box clicked was correct
            console.log(`*** You pressed`, selection, `, Expecting`, theAnswer[playerArr.length])
            if(selection === theAnswer[playerArr.length]) {
                playerArr.push(selection)

                // Add one green light per correct click if correct
                console.log(`***`, selection, `was correct! Your array: ${playerArr}`)
                console.log(`Round progress: ${playerArr.length} / ${roundNumber}. Sequence: ${sequence}`)
                rightLights[playerArr.length-1].style.backgroundColor = `#00C000`

                // If that was the last click of the round:
                if(playerArr.length === roundNumber) {
                    console.log(`*** Round ${roundNumber} complete!`)

                    // Stop accepting input, increment round number
                    console.log(`*** Buttons no longer listening`)
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
                        setTimeout( () => console.log(`*** Boxes: "dark gray"`), 300)
                        setTimeout( () => rightBoxes.forEach(function(square) {
                            square.style.backgroundColor = `#696969`
                        }), 300)
                        setTimeout( () => computerTurn(), 600)
                    }
                }

                // Box blinks "cyan", if we didn't click the wrong box, or reach the end of the game
                console.log(`*** Button: "cyan"`)
                this.classList.add(`cyan`)
                setTimeout( () => this.classList.remove(`cyan`), 300)
            }

            // If the wrong box was clicked:
            else {
                console.log(`***`, selection, `was NOT correct!`)
                wrongClick()
            }
        }
    })
})

// Start game
reset()
setTimeout( () => computerTurn(), 300)