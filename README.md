# Project 1: Simon
This is my first project for General Assembly's Software Engineering immersive program. It is a Simon-like game in the style of the long task in reactor from the game Among Us (sus).

## User story
* The user should see a landing page with a clickable object to start the game.
* The user should see two panels appear: a 3x3 game grid on the right, and a screen to follow on the left, both with 5 lights to indicate their progress.
* For round 1, the user should see one of the nine squares light up on the left-hand screen, which they should click on the corresponding game board on the right-hand side.
* If the user clicks on the wrong square, they will see the lights flash red to indicate the mistake, and the game will reset.
* If the user clicks the correct square, the first light in the row above lights up green, and the game progresses to round 2.
* For round 2, the user should see two squares light up in sequence, which they must click in the correct order to advance to the next round. Two lights should turn green.
* Rounds 3-5 should continue in this manner.
* If the user completes round 5 with all squares clicked in the correct sequence, all five lights will have turned green, and the player will have won the game.
* The user should see a victory screen that says "Task Completed", with a clickable button to play the game again.

### Reactor from Among Us
![among us 01 - reactor](https://user-images.githubusercontent.com/115664302/201965660-753e89ee-bd2c-46cc-83e9-5baa74b53b70.jpg)
This is the reactor room in Among Us where the Simon-style subgame task is done. It can be used as the background image for the browser game. When the task begins, the game board transitions down from above the top of the screen to the center of the screen.

### Simon basic game board
![among us 02 - simon task basic game board 1](https://user-images.githubusercontent.com/115664302/201965908-5915b5a1-5127-4ea2-909e-d9e563a1cb36.jpg)
The full game board flows together, and is made up of two displays: a left one to show the pattern to be memorized, and a right one for the user to click on. The left side grid blinks the pattern, and the lights above it indicate which round (out of 5) the player is on. On the right side, the buttons cannot be clicked on while the left is showing the pattern, and are visibly grayed out darker. Each correct click lights up one of the right side lights, until the number of lights matches the round number. The right side lights then all turn off for the next round.

### Left-hand display pattern
![among us 09 - left-hand display](https://user-images.githubusercontent.com/115664302/201966757-cc79ae58-9148-4410-96b1-f6eb82c7aba8.jpg)
The left side grid flashes a darker, cyan-ish color to show which square to click. The right side is grayed out.

### Clicking a square
![among us 05 - click lightup](https://user-images.githubusercontent.com/115664302/201966958-e39d0580-cd3b-4567-8b7c-ba1871a56b6b.jpg)
The right side squares flash when clicked. If the correct square in the sequence is clicked, it lights up a similar cyan color, and a light turns green above it.

### Making a mistake
![among us 04 - mistake](https://user-images.githubusercontent.com/115664302/201967002-4374da4d-4b5a-419d-8eee-01c5a4a4b30d.jpg)
If the player clicks the wrong square in the sequence, all the squares and lights on the right side flash red twice, and the player has to start over with a new pattern shown on the left side.

### Progression of lights
![among us 07 - lights progression 7](https://user-images.githubusercontent.com/115664302/201967137-3068ea5e-61ea-4095-b092-55bc39c2d259.jpg)
The left side lights stay on to indicate which round the player is on. The game initializes with all lights off, but once the game starts, there is always at least one light on. The number of green lights on the left side updates at the same time that the first square of the pattern of the given round lights up. The number of green lights on the right side updates/increments at the same time that a correct square is clicked. When the last square in the sequence is clicked, it flashes as it usually does, and the last light turns green, but as quickly as the square's blink animation ends, all the green lights on the right side turn off for the start of the next round.

### Completing the task
![among us 08 - task completed](https://user-images.githubusercontent.com/115664302/201967201-3e6d7bab-4171-4336-9a12-6fa0e2b99a42.jpg)
When the last correct square in sequence is clicked in round 5, all the squares flash the dark cyan/light purplish color once, and "Task Completed!" text flies up from the bottom of the screen to the center.
