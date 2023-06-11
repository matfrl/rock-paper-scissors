// rock paper scissors excersise in javascript

// global variables

let scorePlayer = 0;
let scoreComputer = 0;

const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissor =document.querySelector('#scissor');
btnRock.addEventListener ('click', () => inputPlayerAndComputer('rock'));
btnPaper.addEventListener ('click', () => inputPlayerAndComputer('paper'));
btnScissor.addEventListener ('click', () => inputPlayerAndComputer('scissor'));
 
function inputPlayerAndComputer(playerAnswor) {

    //input player

    let playerAnsworNoCap = playerAnswor.toLocaleLowerCase(); // make all answors lowercase
    finalAnsworPlayer = playerAnsworNoCap;
    console.log('your answor: ' + finalAnsworPlayer);
    
    //input computer
    
    const max = 4; // max number random function
    const min = 1; // min number random function
    randomNum = Math.floor(Math.random() * (max - min)) + min; // taking in min and max values and ranomizing answor
    if (randomNum == 1) {
        finalAnsworComp = 'rock';
    } else if (randomNum == 2) {
        finalAnsworComp = 'paper';
    } else {
        finalAnsworComp = 'scissor';
    } // translating number to answor computer
    console.log('Computers answor: ' + finalAnsworComp);
    
    return checkWinner(finalAnsworComp, finalAnsworPlayer); //passing answors to checkWinner funciton
}

// check who won

function checkWinner(finalAnsworComp, finalAnsworPlayer) {
    if (finalAnsworPlayer == 'rock' && finalAnsworComp == 'paper') {
        scoreComputer ++;
        alert('you lose ' + scorePlayer + ' - ' + scoreComputer);
    } else if (finalAnsworPlayer == 'rock' && finalAnsworComp == 'scissor') {
        scorePlayer ++;
        alert('you win ' + scorePlayer + ' - ' + scoreComputer);
    } else if (finalAnsworPlayer == 'rock' && finalAnsworComp == 'rock') {
        alert('draw ' + scorePlayer + ' - ' + scoreComputer);
    } else if (finalAnsworPlayer == 'paper' && finalAnsworComp == 'scissor') {
        scoreComputer ++;
        alert('you lose ' + scorePlayer + ' - ' + scoreComputer);
    } else if (finalAnsworPlayer == 'paper' && finalAnsworComp == 'rock') {
        scorePlayer ++;
        alert('you win ' + scorePlayer + ' - ' + scoreComputer);
    } else if (finalAnsworPlayer == 'paper' && finalAnsworComp == 'paper') {
        alert('draw ' + scorePlayer + ' - ' + scoreComputer);
    } else if (finalAnsworPlayer == 'scissor' && finalAnsworComp == 'rock') {
        scoreComputer ++;
        alert('you lose ' + scorePlayer + ' - ' + scoreComputer);
    } else if (finalAnsworPlayer == 'scissor' && finalAnsworComp == 'paper') {
        scorePlayer ++;
        alert('you win ' + scorePlayer + ' - ' + scoreComputer);
    } else if (finalAnsworPlayer == 'scissor' && finalAnsworComp == 'scissor') {
        alert('draw ' + scorePlayer + ' - ' + scoreComputer);
    } else {
        console.log('Wrong answor,try again');
        inputPlayerAndComputer();
    }
}
/* for (let i = 1 ; i < 5 ; i ++) {
    inputPlayerAndComputer();
    console.log(scorePlayer, scoreComputer);    
}

alert('End of game, final score player: ' + scorePlayer + ' score Computer: ' + scoreComputer)
 */
