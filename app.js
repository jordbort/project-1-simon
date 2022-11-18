console.log(`JavaScript loaded`)

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

// #626162
const disableButtons = () => {
    listening = false
    console.log(`*** Buttons disabled`)
}
const enableButtons = () => {
    listening = true
    console.log(`*** Buttons enabled`)
}

const newAnswer = () => {
    theAnswer = []
    for(i=0;i<5;i++) {
        theAnswer.push(Math.ceil(Math.random() * 9))
    }
    console.log(`The answer is: ${theAnswer}`)
}

const computerTurn = () => {
    console.log(`Round ${roundNumber}: It's the computer's turn!`)
    // disableButtons()
    sequence = []
    for(i=0;i<roundNumber;i++) {
        sequence.push(theAnswer[i])
        console.log(`*** Building round sequence: ${sequence.length} / ${roundNumber}`)
    }
    // this is where the computer should blink the sequence at the player
    playerArr = []
    enableButtons()
    console.log(`It's your turn! Round sequence is: ${sequence}`)
}

const reset = () => {
    console.log(`*** GAME RESET`)
    newAnswer()
    roundNumber = 1
}

function wrongClick() {
    disableButtons()
    setTimeout(() => enableButtons(), 1500)
    rightLights.forEach(function(light) {
        light.classList.add(`red`)
        setTimeout(() => light.classList.remove(`red`), 1500)
    })
    rightBoxes.forEach(function(box) {
        box.classList.add(`red`)
        setTimeout(() => box.classList.remove(`red`), 1500)
    })
    // reset()
}

const win = () => {
    console.log(`Task Completed! GAME OVER`)
    // instead of disableButtons() there will be an "all boxes blue" function
    disableButtons()
    theAnswer = []
}

const checkSequence = () => {
    if(roundNumber > 5) {
        win()
    }
    else {
        computerTurn()
    }
}
            
const buildPlayerArr = () => {
    console.log(`Round progress: ${playerArr.length} / ${roundNumber}. Sequence: ${sequence}`)
    if(playerArr.length === roundNumber) {
        console.log(`*** Round ${roundNumber} complete!`)
        roundNumber++
        // checkSequence()
        if(roundNumber > 5) {
            win()
        }
        else {
            computerTurn()
        }
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
                // buildPlayerArr()
                this.classList.add(`cyan`)
                setTimeout(() => this.classList.remove(`cyan`), 300)
            }
            else {
                console.log(`***`, selection, `was NOT correct!`)
                wrongClick()
            }
        }
    })
})
    
reset()
computerTurn()