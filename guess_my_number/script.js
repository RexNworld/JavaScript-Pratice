'use strict'
const ranNo = parseInt(Math.random() * 21);
let score = 19;
document.querySelector('.check').addEventListener('click', () => {
    let num = parseInt(document.querySelector('.guess').value);
    response(ranNo, num);
});
document.querySelector('.restart').addEventListener('click', () => {
    location.reload();
});
const response = (ranNo, num) => {
    if (num === ranNo) {
        guess('Correct Answer');
        restart('win');
    }
    else if (num > ranNo) {
        guess('Too high');
        scoreRate();
    }
    else if (num < ranNo) {
        guess('Too low');
        scoreRate();
    }
}
const guess = msg => document.querySelector('.message').textContent = msg;
const scoreRate = () => {
    document.querySelector('.score').textContent = score
    if (score < 1) {
        guess('You Lose');
        restart('lose');
    }
    --score;
};
const restart = result => {
    if (result == 'win') {
        document.querySelector('.bod').style.backgroundColor = 'rgb(9, 255, 0)';
    }
    document.querySelector('.restart').style.display = 'initial';
    document.querySelector('.check').style.display = 'none';
    let t = parseInt(document.querySelector('.score').textContent);
    document.querySelector('.highScore').textContent = t;
}