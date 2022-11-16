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
let sequence = 1
let listening = true
let selection;
function check() {
    console.log(`time to check ${selection}`)
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
        console.log(selection)
        if(listening) {
            if(selection === sequence) {
                // correctBlink()
                this.style.backgroundColor = `#327DBD`
                setTimeout(() => this.style.backgroundColor = `#B2B0B3`, 100)
            }
            else {
                // wrongClick()
                this.style.backgroundColor = `#D12F00`
                setTimeout(() => this.style.backgroundColor = `#B2B0B3`, 100)
            }
        }
        check()
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

// let sequence = []
// let playerArr = []
// const newSequence = () => {
//     sequence = []
//     for(i=0;i<5;i++) {
//         sequence.push(Math.ceil(Math.random() * 9))
//     }
//     console.log(sequence)
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
// if(playerArr === sequence) {
//     console.log(`Task Completed!`)
// }
// else {
//     console.log(`Task Failed!`)
// }
// listening = true
// newSequence()
// const checkInput = () => {
//     if(playerArr.length === sequence.length) {
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
//     console.log(`Sequence:`, sequence)
//     console.log(`User input:`, playerArr)
//     if(`${playerArr}` === `${sequence}`) {
//         console.log(`Task Completed!`)
//     }
//     else {
//         console.log(`Task Failed!`)
//     }
// }
// for(i=0;i<5;i++) {
//     console.log(`Round ${i+1}`)
//     for(j=0;j<i+1;j++) {
//         console.log(sequence[j])
//     }
// }