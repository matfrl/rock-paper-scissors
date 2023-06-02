// rock paper scissors excersise in javascript

// Global Variables

let finalAnsworComp = null;
let finalAnsworPlayer = null;

// input field for the user give his choice: rock, paper or scissors

function inputPlayer() {
    let playerAnswor = prompt("What will be your choice, rock paper or scissors");
    let playerAnsworNoCap = playerAnswor.toLocaleLowerCase();
    finalAnsworPlayer = playerAnsworNoCap;
    console.log(finalAnsworPlayer);
}

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





// function to random generate the choice of the computer

// check who won

// generate a output on screen