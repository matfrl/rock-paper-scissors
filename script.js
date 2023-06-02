// rock paper scissors excersise in javascript

// Global Variables

let finalAnsworComp = 'scissor';
let finalAnsworPlayer = 'paper';

// input field for the user give his choice: rock, paper or scissors

function inputPlayer() {
    let playerAnswor = prompt("What will be your choice, rock paper or scissors");
    let playerAnsworNoCap = playerAnswor.toLocaleLowerCase();
    finalAnsworPlayer = playerAnsworNoCap;
    console.log(finalAnsworPlayer);
}

// function to random generate the choice of the computer

function inputComputer () {
    const max = 4;
    const min = 1;
    randomNum = Math.floor(Math.random() * (max - min)) + min;
    if (randomNum == 1) {
        finalAnsworComp = 'rock';
    } else if (randomNum == 2) {
        finalAnsworComp = 'paper';
    } else {
        finalAnsworComp = 'scissor';
    }
    console.log(randomNum);
    console.log(finalAnsworComp);
}

// check who won

function checkWinner() {
    if (finalAnsworPlayer == 'rock' && finalAnsworComp == 'paper') {
        winOrLose = 'you lose';
    } else if (finalAnsworPlayer == 'rock' && finalAnsworComp == 'scissor') {
        winOrLose = 'you win';
    } else if (finalAnsworPlayer == 'rock' && finalAnsworComp == 'rock') {
        winOrLose = 'Draw';
    } else if (finalAnsworPlayer == 'paper' && finalAnsworComp == 'scissor') {
        winOrLose = 'you lose';
    } else if (finalAnsworPlayer == 'paper' && finalAnsworComp == 'rock') {
        winOrLose = 'you win';
    } else if (finalAnsworPlayer == 'paper' && finalAnsworComp == 'paper') {
        winOrLose = 'draw';
    } else if (finalAnsworPlayer == 'sissor' && finalAnsworComp == 'rock') {
        winOrLose = 'you lose';
    } else if (finalAnsworPlayer == 'sissor' && finalAnsworComp == 'paper') {
        winOrLose = 'you win';
    } else if (finalAnsworPlayer == 'sissor' && finalAnsworComp == 'scissor') {
        winOrLose = 'draw';
    } else {
        winOrLose = 'Wrong answor,try again';
    }
    console.log(winOrLose);
}

// generate a output on screen