
let humanScore = 0;
let computerScore = 0;

let humanChoice;
let computerChoice;



function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3)
    switch (computerChoice) {
        case 0:
            console.log('Computer: Rock');
            break;
        case 1:
            console.log('Computer: Paper');
            break;
        case 2:
            console.log('Computer: Scissors');
            break;
    }
    return computerChoice;
}


function getHumanChoice() {
    humanChoice = prompt('Choose Rock, Paper, or Scissors');
    console.log('You: ' + humanChoice);
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}



function playRound(computerChoice, humanChoice) {
    if (computerChoice === 0 && humanChoice === 'paper') {
        console.log('You win this round!');
    } else if (computerChoice === 0 && humanChoice === 'scissors') {
        console.log('You lose this round!');
    } else if (computerChoice === 1 && humanChoice === 'scissors') {
        console.log('You win this round!');
    } else if (computerChoice === 1 && humanChoice === 'rock') {
        console.log('You lose this round!');
    } else if (computerChoice === 2 && humanChoice === 'rock') {
        console.log('You win this round!');
    } else if (computerChoice === 2 && humanChoice === 'paper') {
        console.log('You lose this round!');
    } else {
        console.log('Tie!');
    } 
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

/* playRound(computerSelection, humanSelection); */



//function playGame();


//alert(getHumanChoice());
//console.log(getHumanChoice());
//console.log(playRound());





/*
rock paper scissors played in the console
ask human player for input of rock OR paper OR scissors
print human input to console
generate random choice for computer of rock OR paper OR scissors
only accept valid input, ask again if input is invalid (remove case sensitivity)
print pc "choice" to console
compare human choice to pc choice
determine which one wins, or tie
print you win or lose or tie message to console
if winner increment score

run game again until
best of 5 rounds "you win the game"


*/