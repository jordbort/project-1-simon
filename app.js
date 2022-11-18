console.log(`JavaScript loaded`)
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

// Callback(?) functions
const enableButtons = () => {
    console.log(`*** Buttons enabled`)
    // Right boxes turn light gray when listening
    listening = true
    rightBoxes.forEach(function(square) {
        square.style.backgroundColor = `#B2B0B3`
    })
}
const newAnswer = () => {
    theAnswer = []
    for(i=0;i<5;i++) {
        theAnswer.push(Math.ceil(Math.random() * 9))
    }
    console.log(`*** The answer is: ${theAnswer}`)
}
const reset = () => {
    console.log(`---------- * GAME RESET * ----------`)
    newAnswer()
    roundNumber = 1
}

// Main functions
const computerTurn = () => {
    console.log(`Round ${roundNumber}: It's the computer's turn!`)
    // Turn right squares dark gray
    rightBoxes.forEach(function(square) {
        square.style.backgroundColor = `#626162`
    })
    sequence = []
    for(i=0;i<roundNumber;i++) {
        // Left side lights - one for each round
        sequence.push(theAnswer[i])
        leftLights[i].style.backgroundColor = `#00C000`
        setTimeout( () => console.log(`> Building round sequence: ${sequence.length} / ${roundNumber}`), 1000)
    }
    
    // this is where the computer should blink the sequence at the player
    
    playerArr = []
    enableButtons()
    console.log(`It's your turn! Round sequence is: ${sequence}`)
}

function wrongClick() {
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
    reset()
    setTimeout( () => computerTurn(), 1800)
}

const win = () => {
    listening = false
    //Turn right squares dark dray
    setTimeout( () => rightBoxes.forEach(function(square) {
        square.style.backgroundColor = `#696969`, 500
    }), 500)
    // setTimeout( make right boxes dark gray, 500)
    console.log(`You won! Buttons disabled: GAME OVER`)
    rightBoxes.forEach(function(square) {
        square.classList.add(`blue`)
        setTimeout( () => square.classList.remove(`blue`), 500)
    })
    theAnswer = []
}

// Setting up button listeners and logic gates
rightBoxes.forEach(button => {
    button.addEventListener(`click`, function() {
        selection = Number(button.id[10])
        if(listening) {
            console.log(`*** You pressed`, selection, `, Expecting`, theAnswer[playerArr.length])
            if(selection === theAnswer[playerArr.length]) {
                playerArr.push(selection)
                // Add one green light per correct click
                rightLights[playerArr.length-1].style.backgroundColor = `#00C000`
                console.log(`***`, selection, `was correct! Your array: ${playerArr}`)
                console.log(`Round progress: ${playerArr.length} / ${roundNumber}. Sequence: ${sequence}`)
                if(playerArr.length === roundNumber) {
                    console.log(`*** Round ${roundNumber} complete!`)
                    // Stop accepting input, increment round number
                    listening = false
                    roundNumber++
                    if(roundNumber > 5) {
                        // We're past round 5, we won the game!
                        return win()
                    }
                    else {
                        // Start computer turn, on a delay
                        setTimeout( () => computerTurn(), 500)
                    }
                }
                this.classList.add(`cyan`)
                setTimeout( () => this.classList.remove(`cyan`), 300)
            }
            else {
                console.log(`*** Buttons disabled,`, selection, `was NOT correct!`)
                wrongClick()
            }
        }
    })
})

// Start game
reset()
setTimeout( () => computerTurn(), 500)
// win()