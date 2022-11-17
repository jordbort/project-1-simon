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

rightBoxes.forEach(button => {
    button.addEventListener(`click`, function() {
        selection = Number(button.id[10])
        console.log(`*** You pressed`, selection)
        if(listening) {
            if(selection === theAnswer) { // this will need to change before colors make sense
                // correctBlink()
                this.style.backgroundColor = `#327DBD`
                setTimeout(() => this.style.backgroundColor = `#B2B0B3`, 100)
            }
            else { // this will need to change before colors make sense
                // wrongClick()
                this.style.backgroundColor = `#D12F00`
                setTimeout(() => this.style.backgroundColor = `#B2B0B3`, 100)
            }
            playerArr.push(selection)
            buildAnswer()
        }
    })
})

let roundNumber = 5 // this will become iterator or get deleted
let theAnswer = []
let playerArr = []
let listening = true
let selection;

const newAnswer = () => {
    theAnswer = []
    for(i=0;i<5;i++) {
        theAnswer.push(Math.ceil(Math.random() * 9))
    }
    console.log(theAnswer)
}

// #626162
const disableButtons = () => {
    listening = false
}

// function wrongAnswer() {}

function check() {
    console.log(`*** Checking answer! ${theAnswer} vs. ${playerArr}`)
    if(`${playerArr}` === `${theAnswer}`) {
        console.log(`Task Completed! RIGHT ANSWER`)
    }
    else {
        console.log(`Task Failed! WRONG ANSWER`)
    }
    disableButtons()
    console.log(`*** No longer building answer ***`)
}

function buildAnswer() {
    console.log(`*** Player array vs. Round: ${playerArr.length} / ${roundNumber}`)
    console.log(`Answer:`, theAnswer)
    console.log(`playerArr:`, playerArr)
    if(playerArr.length === roundNumber) {
        check()
    }
}

function reset() {
    newAnswer()
    playerArr = []
    roundNumber = 0
}

// reset()
// for(i=0;i<5;i++) {
//     roundNumber += i
// }

// const blink = (color, returnColor) => {
// }
// rightBox1.addEventListener("click", function() {
//     console.log(`${rightBox1} was clicked!`)
//     console.log(this)
//     this.style.backgroundColor = `#327DBD`
//     setTimeout(() => this.style.backgroundColor = `#B2B0B3`, 500)
// })