'use strict'
const btnDiceRoll = document.getElementById('roll');
const btnHold = document.getElementById('hold');
const btnNewGame = document.getElementById('new-game');

const diceImage = document.getElementById('dice-img');
const player1 = document.querySelector('.p0');
const player2 = document.querySelector('.p1');

//Each player score in array like =  score[ player1 , player2 ]
let score = [0, 0];
//for store temporary score
let currentScore = 0;
//A switch like player1 = isActive = 0 , player2 = isActive = 1 
//this is for cheking which one is active now and store the score into score[0,1] Array
let isActive = 0;

/*---------------Declaration End-------------------- */


//print Dice Image
const printDice = function (n) {
    diceImage.src = `images/dice-${n}.png`;
}

// Dice genarator
//An Animated one
/*btnDiceRoll.addEventListener('click', () => {
    let i = 0;
    rollDice();
    async function rollDice() {
        const loopRandom = Math.floor((Math.random() * 6) + 1);
        setTimeout(function () {
            i++;
            if (i < 5)
                rollDice();
        }, 200)
        printDice(loopRandom);
        if (i === 4) {
            if (loopRandom !== 1) {
                currentScore += loopRandom;
                printScore(currentScore);
            }
            else {
                playerSwitch();
            }
        }
    }
});*/
//Normal One
btnDiceRoll.addEventListener('click', () => {
    const loopRandom = Math.floor((Math.random() * 6) + 1);
    printDice(loopRandom);
    if (loopRandom !== 1) {
        currentScore += loopRandom;
        printScore(currentScore);
    }
    else {
        playerSwitch();
    }
});
/*-------------dice genarate END here------------ */

//Here printing current score
const printScore = (n) => {
    document.getElementById(`p${isActive}-current`).textContent = n;
}
//Switching current player and reset current scores
const playerSwitch = () => {
    printScore(0);
    currentScore = 0;
    isActive = isActive === 0 ? 1 : 0;
    player1.classList.toggle('active');
    player2.classList.toggle('active');
}
//Holding points
btnHold.addEventListener('click', () => {
    score[isActive] += currentScore;
    document.getElementById(`p${isActive}-total`).textContent = score[isActive];
    if (score[isActive] < 20)
        playerSwitch();
    else
        endGame();
});
//Winning senario
const endGame = () => {
    document.querySelector(`.p${isActive}`).firstElementChild.querySelector('.win').classList.remove('hidden');
    document.querySelector(`.p${isActive}`).style.backgroundColor = 'green';
    btnDiceRoll.disabled = 'true'
    btnHold.disabled = 'true'
    document.getElementById('winning').innerHTML = `Player - ${isActive + 1}` + '<br><span style="color: green;">' + `Win the game</span>`;
}
//Reset or start again 
btnNewGame.addEventListener('click', () => {
    window.top.location = window.top.location;
})