// rock paper scissors excersise in javascript

function inputPlayerAndComputer() {

    //input player

    let playerAnswor = prompt("What will be your choice, rock paper or scissors");
    let playerAnsworNoCap = playerAnswor.toLocaleLowerCase();
    finalAnsworPlayer = playerAnsworNoCap;
    console.log(finalAnsworPlayer);

    //input computer

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

    return checkWinner(finalAnsworComp, finalAnsworPlayer);
}

// check who won

function checkWinner(finalAnsworComp, finalAnsworPlayer) {
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

// game loopfunction

function gameLoop() {
    inputPlayerAndComputer();
}