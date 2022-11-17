console.log(`JavaScript loaded`)

// Gray light hex code: #696969
// Green light hex code: #00C000
// Red light hex code: #C02C00

// Gray panel hex code: #AAAAAA

// Blue left square hex code: #44A8FF

// Dark gray right square hex code: #626162
// Light gray right square hex code: #D1D0D1
// Blue right square hex code: #327DBD
// Red right square hex code: #D12F00

// const gameBoard = document.querySelector(".game-board")
const leftIndicator = document.querySelector(".left-indicator")
const rightIndicator = document.querySelector(".right-indicator")
const leftGrid = document.querySelector(".left-grid")
const rightGrid = document.querySelector(".right-grid")

const leftLights = leftIndicator.querySelectorAll(`div`)
const leftBoxes = leftGrid.querySelectorAll(`div`)
const rightLights = rightIndicator.querySelectorAll(`div`)
const rightBoxes = rightGrid.querySelectorAll(`div`)

let roundNumber = 1
let theAnswer = []
let playerArr = []
let listening = false
let selection
let sequence = []

const newAnswer = () => {
    theAnswer = []
    for(i=0;i<5;i++) {
        theAnswer.push(Math.ceil(Math.random() * 9))
    }
    console.log(`The answer is: ${theAnswer}`)
}

function computerTurn() {
    console.log(`Round ${roundNumber}: It's the computer's turn!`)
    playerArr = []
    sequence = []
    for(i=0;i<roundNumber;i++) {
        sequence.push(theAnswer[i])
        console.log(`*** Building round sequence: ${sequence.length} / ${roundNumber}`)
    }
    enableButtons()
    console.log(`It's your turn! Round sequence is: ${sequence}`)
}

function reset() {
    console.log(`*** GAME RESET`)
    newAnswer()
    roundNumber = 1
    computerTurn()
}

// #626162
const disableButtons = () => {
    listening = false
    console.log(`*** Buttons disabled`)
}
const enableButtons = () => {
    listening = true
    console.log(`*** Buttons enabled`)
}

// function wrongAnswer() {}

function win() {
    console.log(`Task Completed! GAME OVER`)
    theAnswer = []
}

function checkSequence() {
    console.log(`*** Round ${roundNumber} complete!`)
    roundNumber++
    disableButtons()
    if(roundNumber > 5) {
        win()
    }
    else {
        computerTurn()
    }
}

function submitAnswer() {
    console.log(`Round progress: ${playerArr.length} / ${roundNumber}. Sequence: ${sequence}`)
    if(playerArr.length === roundNumber) {
        checkSequence()
    }
}

rightBoxes.forEach(button => {
    button.addEventListener(`click`, function() {
        selection = Number(button.id[10])
        if(listening) {
            console.log(`*** You pressed`, selection, `Expecting:`, theAnswer[playerArr.length])
            if(selection === theAnswer[playerArr.length]) {
                playerArr.push(selection)
                console.log(`***`, selection, `was correct! Your array: ${playerArr}`)
                this.style.backgroundColor = `#327DBD`
                setTimeout(() => this.style.backgroundColor = `#B2B0B3`, 100)
                submitAnswer()
            }
            else {
                console.log(`***`, selection, `was NOT correct!`)
                // wrongClick() will replace the color changes below
                this.style.backgroundColor = `#D12F00`
                setTimeout(() => this.style.backgroundColor = `#B2B0B3`, 100)
                reset()
            }
        }
    })
})

reset()