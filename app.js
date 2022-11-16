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

const gameBoard = document.querySelector(".game-board")
const leftPanel = document.querySelector(".left-panel")
const rightPanel = document.querySelector(".right-panel")
const leftLight1 = document.querySelector("#left-light-1")
const leftLight2 = document.querySelector("#left-light-2")
const leftLight3 = document.querySelector("#left-light-3")
const leftLight4 = document.querySelector("#left-light-4")
const leftLight5 = document.querySelector("#left-light-5")
const leftLight6 = document.querySelector("#left-light-6")
const leftLight7 = document.querySelector("#left-light-7")
const leftLight8 = document.querySelector("#left-light-8")
const leftLight9 = document.querySelector("#left-light-9")
const rightLight1 = document.querySelector("#right-light-1")
const rightLight2 = document.querySelector("#right-light-2")
const rightLight3 = document.querySelector("#right-light-3")
const rightLight4 = document.querySelector("#right-light-4")
const rightLight5 = document.querySelector("#right-light-5")
const rightLight6 = document.querySelector("#right-light-6")
const rightLight7 = document.querySelector("#right-light-7")
const rightLight8 = document.querySelector("#right-light-8")
const rightLight9 = document.querySelector("#right-light-9")
const leftBox1 = document.querySelector("#left-box-1")
const leftBox2 = document.querySelector("#left-box-2")
const leftBox3 = document.querySelector("#left-box-3")
const leftBox4 = document.querySelector("#left-box-4")
const leftBox5 = document.querySelector("#left-box-5")
const leftBox6 = document.querySelector("#left-box-6")
const leftBox7 = document.querySelector("#left-box-7")
const leftBox8 = document.querySelector("#left-box-8")
const leftBox9 = document.querySelector("#left-box-9")
const rightBox1 = document.querySelector("#right-box-1")
const rightBox2 = document.querySelector("#right-box-2")
const rightBox3 = document.querySelector("#right-box-3")
const rightBox4 = document.querySelector("#right-box-4")
const rightBox5 = document.querySelector("#right-box-5")
const rightBox6 = document.querySelector("#right-box-6")
const rightBox7 = document.querySelector("#right-box-7")
const rightBox8 = document.querySelector("#right-box-8")
const rightBox9 = document.querySelector("#right-box-9")

// const blink = (color, returnColor) => {
// }
// rightBox1.addEventListener("click", () => {
//     console.log(`${rightBox1} was clicked!`)
//     this.style.backgroundColor = `#327DBD`
//     setTimeout(this.style.backgroundColor = `#B2B0B3`, 500)
// })






// class Button {
//     constructor(originalColor = `#B2B0B3`) {
//         this.originalColor = originalColor
//     }
//     blink(blinkColor) {
//         this.style.backgroundColor = blinkColor
//         setTimeout(this.style.backgroundColor = this.originalColor, 500)
//     }
// }

// const rightBox1 = new Button
// const rightBox2 = new Button
// const rightBox3 = new Button
// const rightBox4 = new Button
// const rightBox5 = new Button
// const rightBox6 = new Button
// const rightBox7 = new Button
// const rightBox8 = new Button
// const rightBox9 = new Button


let listening = false
let sequence = []
let playerArr = []
const newSequence = () => {
    sequence = []
    for(i=0;i<5;i++) {
        sequence.push(Math.ceil(Math.random() * 9))
    }
    console.log(sequence)
}

rightBox1.addEventListener("click", () => {
    if(listening) {
        playerArr.push(1)
        console.log(playerArr)
        checkInput()
    }
})
rightBox2.addEventListener("click", () => {
    if(listening) {
        playerArr.push(2)
        console.log(playerArr)
        checkInput()
    }
})
rightBox3.addEventListener("click", () => {
    if(listening) {
        playerArr.push(3)
        console.log(playerArr)
        checkInput()
    }
})
rightBox4.addEventListener("click", () => {
    if(listening) {
        playerArr.push(4)
        console.log(playerArr)
        checkInput()
    }
})
rightBox5.addEventListener("click", () => {
    if(listening) {
        playerArr.push(5)
        console.log(playerArr)
        checkInput()
    }
})
rightBox6.addEventListener("click", () => {
    if(listening) {
        playerArr.push(6)
        console.log(playerArr)
        checkInput()
    }
})
rightBox7.addEventListener("click", () => {
    if(listening) {
        playerArr.push(7)
        console.log(playerArr)
        checkInput()
    }
})
rightBox8.addEventListener("click", () => {
    if(listening) {
        playerArr.push(8)
        console.log(playerArr)
        checkInput()
    }
})
rightBox9.addEventListener("click", () => {
    if(listening) {
        playerArr.push(9)
        console.log(playerArr)
        checkInput()
    }
})

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
listening = true
newSequence()
const checkInput = () => {
    if(playerArr.length === sequence.length) {
        console.log(`Check! (Lengths are the same!)`)
        compareArr()
    }
    else {
        console.log(`Check! (Lengths are NOT yet the same!)`)
    }
}
const compareArr = () => {
    listening = false
    console.log(`Comparing:`)
    console.log(`Sequence:`, sequence)
    console.log(`User input:`, playerArr)
    if(`${playerArr}` === `${sequence}`) {
        console.log(`Task Completed!`)
    }
    else {
        console.log(`Task Failed!`)
    }
}
for(i=0;i<5;i++) {
    console.log(`Round ${i+1}`)
    for(j=0;j<i+1;j++) {
        console.log(sequence[j])
    }
}