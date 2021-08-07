
game();

function computerPlay(){
    const computerOptions = ["ROCK", "PAPER", "SCISSORS"];
    //randomly select a choice between, rock, paper or scissors and assign to computerSelecton
    let computerSelectionNum = Math.floor(Math.random() * computerOptions.length);
    return computerOptions[computerSelectionNum].toUpperCase();
}

function game(){
    let playerScore;
    let computerScore;
    //create a string variable playerSelection for player choice
    let playerSelection;
    //creare a string variable computerSelecion for computer choice
    let computerSelection;
for (i = 0; i < 5;){
    playerSelection = ValidatePlayerSelection();
    computerSelection = computerPlay();
    roundWinner = playRound(playerSelection, computerSelection);
    switch(roundWinner){
        case 'It\'s a draw':
            alert(roundWinner + ', nobody wins this one!');
            break;
        case 'You win':
            alert(roundWinner + ' round ' + (i+1));
            i++;
            playerScore += 1;
            break;
        case 'Computer wins':
            alert(roundWinner + ' round ' + (i+1));
            i++;
            computerScore += 1;
    }
}

if (playerScore > computerScore){
    alert('Congratulations! You win the game!');
} else{
    alert('Too bad... the computer has won this game.');
}


}

//evaluate both playerSelection and computerSelection and determine outcome based on following criteria:
function playRound(playerSelection, computerSelection){
    //create a string variable called 'winner'
   let winner;
   //if both select the same choice, it's a draw
    if(playerSelection == computerSelection){
        winner = 'It\'s a draw';
    //if playerSelection is rock: if computerSelection is paper - computer wins, if computerSelection is scissors, player wins
   } else if(playerSelection === 'ROCK') {
        computerSelection === 'PAPER' ? winner = 'Computer wins' : winner = 'You win';
    //if playerSelection is scissors: if computerSelection is paper - player wins, if computerSelection is rock, computer wins
   } else if(playerSelection === 'SCISSORS'){
       computerSelection === 'PAPER' ? winner = 'You win' : winner = 'Computer wins';
   } else{
    //if playerSelection is paper: if computerSelection is rock - player wins, if computerSelection is scissors, computer wins
       computerSelection === 'ROCK' ? winner = 'You win' : winner = 'Computer wins';
   }
   return winner;
}

function ValidatePlayerSelection(){
    const playerOptions = ["ROCK", "PAPER", "SCISSORS"];
    //prompt user to choose between rock, paper or scissors
    let playerSelection = prompt('Rock, Paper, or Scissors?','').toUpperCase();
    while (playerOptions.includes(playerSelection) == false){
        alert('You did not enter a valid choice! Please try again')
        //prompt user to choose between rock, paper or scissors
        playerSelection = prompt('Rock, Paper, or Scissors?','').toUpperCase();
    }
    return playerSelection;      
}


//if player wins: assign 'winner' the string 'You win!', if computer wins: assign 'winner' the string 'You lose!', if it's a draw assign 'winner' the string 'It's a draw!'
// display "The computer chose 'computerSelection', "'winner' string in browser

