let round = 0;
let playerScore = 0;
let computerScore = 0;

const startButton = document.querySelector('#start-button');

const playerScoreDiv = document.querySelector('#player-score');
const computerScoreDiv = document.querySelector('#computer-score');

const messageBlock = document.querySelector('#message-block');

startButton.addEventListener('click', () => {
    toggleButtons();
});


//create variables for rock, paper, scissor buttons to appear
const selectionButtonDiv = document.querySelector('#selection-buttons');


//toggle start button
function toggleButtons(){
    const startButton = document.getElementById('start-button');
    if (startButton.style.display ==="none"){
        startButton.style.display = "flex";
        selectionButtonDiv.style.display = "none";
    } else {
        startButton.style.display = "none";
        selectionButtonDiv.style.display = "flex";
    }
}


function computerPlay(){
    const computerOptions = ["rock", "paper", "scissors"];
    //randomly select a choice between, rock, paper or scissors and assign to computerSelecton
    let computerSelectionNum = Math.floor(Math.random() * computerOptions.length);
    return computerOptions[computerSelectionNum];
}

function playRound() {
    let computerSelection = computerPlay();
    let playerSelection = this.id;
    let winner;

    if(playerSelection == computerSelection){
        winner = 'It\'s a draw';
    } else if(playerSelection === 'rock') {
        computerSelection === 'paper' ? winner = 'Computer wins' : winner = 'You win';
    } else if(playerSelection === 'scissors'){
        computerSelection === 'paper' ? winner = 'You win' : winner = 'Computer wins';
    } else{
        computerSelection === 'rock' ? winner = 'You win' : winner = 'Computer wins';
    }

    switch(winner){
        case 'It\'s a draw':
            messageBlock.innerText = winner + ', nobody wins this one!';
            break;
        case 'You win':
            messageBlock.innerText = winner + ' round ' + (round+1);
            round++;
            playerScore += 1;
            playerScoreDiv.innerText = playerScore;
            break;
        case 'Computer wins':
            messageBlock.innerText = winner + ' round ' + (round+1);
            round++;
            computerScore += 1;
            computerScoreDiv.innerText = computerScore;
    }
    
    if(round==5){
        if (playerScore > computerScore){
            messageBlock.innerText = 'Congratulations! You win the game!';
        } else{
            messageBlock.innerText = 'Too bad... the computer has won this game.';
        }
        toggleButtons();
        round = 0;
        playerScore = 0;
        computerScore = 0;
        playerScoreDiv.innerText = playerScore;
        computerScoreDiv.innerText = computerScore;
        startButton.children[0].innerText = 'Play Again';
    } else{
        return;
    }


}

const selectionButtons = document.querySelectorAll('.selection-button');

selectionButtons.forEach(selectionButton => selectionButton.addEventListener('click', playRound));







