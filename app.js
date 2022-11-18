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
    console.log(`*** Buttons disabled`)
    listening = false
    rightBoxes.forEach(function(box) {
        box.style.backgroundColor = `#626162`
    })
}
const enableButtons = () => {
    console.log(`*** Buttons enabled`)
    listening = true
    rightBoxes.forEach(function(box) {
        box.style.backgroundColor = `#B2B0B3`
    })
}

const newAnswer = () => {
    theAnswer = []
    for(i=0;i<5;i++) {
        theAnswer.push(Math.ceil(Math.random() * 9))
    }
    console.log(`*** The answer is: ${theAnswer}`)
}

const computerTurn = () => {
    disableButtons()
    console.log(`Round ${roundNumber}: It's the computer's turn!`)
    sequence = []
    for(i=0;i<roundNumber;i++) {
        sequence.push(theAnswer[i])
        leftLights.forEach(function(light) {
            // light.style.backgroundColor = `#B2B0B3`
        })
        console.log(`> Building round sequence: ${sequence.length} / ${roundNumber}`)
    }
    // this is where the computer should blink the sequence at the player
    playerArr = []
    enableButtons()
    console.log(`It's your turn! Round sequence is: ${sequence}`)
}

const reset = () => {
    console.log(`---------- * GAME RESET * ----------`)
    newAnswer()
    roundNumber = 1
}

function wrongClick() {
    listening = false
    rightLights.forEach(function(light) {
        light.classList.add(`red`)
        setTimeout( () => light.classList.remove(`red`), 1800)
    })
    rightBoxes.forEach(function(box) {
        box.classList.add(`red`)
        setTimeout( () => box.classList.remove(`red`), 1800)
    })
    reset()
    setTimeout( () => computerTurn(), 1800)
}

const win = () => {
    listening = false
    setTimeout( () => disableButtons(), 500)
    console.log(`You won! Buttons disabled: GAME OVER`)
    rightBoxes.forEach(function(box) {
        box.classList.add(`blue`)
        setTimeout( () => box.classList.remove(`blue`), 500)
    })
    theAnswer = []
}

// const checkSequence = () => {
//     if(roundNumber > 5) {
//         win()
//     }
//     else {
//         computerTurn()
//     }
// }
            
// const buildPlayerArr = () => {
//     console.log(`Round progress: ${playerArr.length} / ${roundNumber}. Sequence: ${sequence}`)
//     if(playerArr.length === roundNumber) {
//         console.log(`*** Round ${roundNumber} complete!`)
//         roundNumber++
//         // checkSequence()
//         if(roundNumber > 5) {
//             win()
//         }
//         else {
//             computerTurn()
//         }
//     }
// }

rightBoxes.forEach(button => {
    button.addEventListener(`click`, function() {
        selection = Number(button.id[10])
        if(listening) {
            console.log(`*** You pressed`, selection, `, Expecting`, theAnswer[playerArr.length])
            if(selection === theAnswer[playerArr.length]) {
                playerArr.push(selection)
                console.log(`***`, selection, `was correct! Your array: ${playerArr}`)
                
                // buildPlayerArr()
                console.log(`Round progress: ${playerArr.length} / ${roundNumber}. Sequence: ${sequence}`)
                if(playerArr.length === roundNumber) {
                    console.log(`*** Round ${roundNumber} complete!`)
                    roundNumber++
                    // checkSequence()
                    if(roundNumber > 5) {
                        return win()
                    }
                    else {
                        computerTurn()
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
    
reset()
computerTurn()
// win()