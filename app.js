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
// let roundIterator = 0
let theAnswer = []
let playerArr = []
let listening = true
let selection;

const newAnswer = () => {
    theAnswer = []
    for(i=0;i<5;i++) {
        theAnswer.push(Math.ceil(Math.random() * 9))
    }
    console.log(`The answer is: ${theAnswer}`)
}

// #626162
const disableButtons = () => {
    listening = false
    console.log(`*** Buttons disabled`)
}

// function wrongAnswer() {}
function win() {
    console.log(`Task Completed! GAME OVER`)
    disableButtons()
}

function checkSequence() {
    console.log(`*** Round ${roundNumber} complete!`)
    roundNumber++
    if(roundNumber > 5) {
        win()
    }
    else {
        computerTurn()
    }
}

function submitAnswer() {
    console.log(`Array length vs. Round number: ${playerArr.length} / ${roundNumber}`)
    if(playerArr.length === roundNumber) {
        // roundIterator = 0
        checkSequence()
    }
}

function reset() {
    console.log(`*** GAME RESET`)
    newAnswer()
    roundNumber = 1
    computerTurn()
}

function computerTurn() {
    console.log(`Round ${roundNumber}: It's the computer's turn!`)
    playerArr = []
    sequence = []
    for(i=0;i<roundNumber;i++) {
        sequence.push(theAnswer[i])
        console.log(`*** Building round sequence: ${sequence.length} / ${roundNumber}`)
    }
    console.log(`It's your turn! Round sequence is: ${sequence}`)
}

rightBoxes.forEach(button => {
    button.addEventListener(`click`, function() {
        selection = Number(button.id[10])
        console.log(`*** You pressed`, selection)
        if(listening) {
            if(selection === theAnswer[playerArr.length]) { // this will need to change before colors make sense
                playerArr.push(selection)
                console.log(`***`, selection, `was correct! Your array: ${playerArr}`)
                // console.log(`Answer:`, theAnswer)
                // console.log(`playerArr:`, playerArr)
                // correctBlink()
                this.style.backgroundColor = `#327DBD`
                setTimeout(() => this.style.backgroundColor = `#B2B0B3`, 100)
                submitAnswer()
            }
            else { // this will need to change before colors make sense
                console.log(`***`, selection, `was NOT correct!`)
                // wrongClick() will replace the color changes below
                this.style.backgroundColor = `#D12F00`
                setTimeout(() => this.style.backgroundColor = `#B2B0B3`, 100)
                reset()
                // return
            }
        }
    })
})

reset()

// console.log(`*** Outside of for loop. Round: ${roundNumber} ***`)

// const blink = (color, returnColor) => {
// }
// rightBox1.addEventListener("click", function() {
//     console.log(`${rightBox1} was clicked!`)
//     console.log(this)
//     this.style.backgroundColor = `#327DBD`
//     setTimeout(() => this.style.backgroundColor = `#B2B0B3`, 500)
// })