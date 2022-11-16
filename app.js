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
// #626162
// const disableButtons = () => {
//     listening = false
//     rightBoxes.
// }
let roundNumber = 5
// let roundIterator = 1
let theAnswer = [1, 2, 3, 4, 5]
let listening = true
let selection;
let playerArr = []
function check() {
    console.log(`time to check your answer! ${theAnswer} vs ${playerArr}`)
    if(`${playerArr}` === `${theAnswer}`) {
        console.log(`Task Completed!`)
    }
    else {
        console.log(`Task Failed!`)
    }
}

function buildAnswer() {
    console.log(`Answer:`, theAnswer)
    console.log(`playerArr:`, playerArr)
    if(playerArr.length === roundNumber) {
        check()
    }
}

const leftLights = leftIndicator.querySelectorAll(`div`)
console.log(leftLights)
const leftBoxes = leftGrid.querySelectorAll(`div`)
console.log(leftBoxes)
const rightLights = rightIndicator.querySelectorAll(`div`)
console.log(rightLights)
const rightBoxes = rightGrid.querySelectorAll(`div`)
console.log(rightBoxes)
rightBoxes.forEach(button => {
    button.addEventListener(`click`, function() {
        selection = Number(button.id[10])
        console.log(`You pressed`, selection)
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
// const blink = (color, returnColor) => {
// }
// rightBox1.addEventListener("click", function() {
//     console.log(`${rightBox1} was clicked!`)
//     console.log(this)
//     this.style.backgroundColor = `#327DBD`
//     setTimeout(() => this.style.backgroundColor = `#B2B0B3`, 500)
// })

// let theAnswer = []
// let playerArr = []
// const newAnswer = () => {
//     theAnswer = []
//     for(i=0;i<5;i++) {
//         theAnswer.push(Math.ceil(Math.random() * 9))
//     }
//     console.log(theAnswer)
// }

// rightBox1.addEventListener("click", () => {
//     if(listening) {
//         playerArr.push(1)
//         console.log(playerArr)
//         checkInput()
//     }
// })
// rightBox2.addEventListener("click", () => {
//     if(listening) {
//         playerArr.push(2)
//         console.log(playerArr)
//         checkInput()
//     }
// })
// rightBox3.addEventListener("click", () => {
//     if(listening) {
//         playerArr.push(3)
//         console.log(playerArr)
//         checkInput()
//     }
// })
// rightBox4.addEventListener("click", () => {
//     if(listening) {
//         playerArr.push(4)
//         console.log(playerArr)
//         checkInput()
//     }
// })
// rightBox5.addEventListener("click", () => {
//     if(listening) {
//         playerArr.push(5)
//         console.log(playerArr)
//         checkInput()
//     }
// })
// rightBox6.addEventListener("click", () => {
//     if(listening) {
//         playerArr.push(6)
//         console.log(playerArr)
//         checkInput()
//     }
// })
// rightBox7.addEventListener("click", () => {
//     if(listening) {
//         playerArr.push(7)
//         console.log(playerArr)
//         checkInput()
//     }
// })
// rightBox8.addEventListener("click", () => {
//     if(listening) {
//         playerArr.push(8)
//         console.log(playerArr)
//         checkInput()
//     }
// })
// rightBox9.addEventListener("click", () => {
//     if(listening) {
//         playerArr.push(9)
//         console.log(playerArr)
//         checkInput()
//     }
// })

// while(playerArr.length < 5) {
//     listening = true
//     setInterval( () => {
//         console.log(`waiting...`)
//     }, 1000)
// }
// if(playerArr === theAnswer) {
//     console.log(`Task Completed!`)
// }
// else {
//     console.log(`Task Failed!`)
// }
// listening = true
// newAnswer()
// const checkInput = () => {
//     if(playerArr.length === theAnswer.length) {
//         console.log(`Check! (Lengths are the same!)`)
//         compareArr()
//     }
//     else {
//         console.log(`Check! (Lengths are NOT yet the same!)`)
//     }
// }
// const compareArr = () => {
//     listening = false
//     console.log(`Comparing:`)
//     console.log(`Answer:`, theAnswer)
//     console.log(`User input:`, playerArr)
//     if(`${playerArr}` === `${theAnswer}`) {
//         console.log(`Task Completed!`)
//     }
//     else {
//         console.log(`Task Failed!`)
//     }
// }
// for(i=0;i<5;i++) {
//     console.log(`Round ${i+1}`)
//     for(j=0;j<i+1;j++) {
//         console.log(theAnswer[j])
//     }
// }