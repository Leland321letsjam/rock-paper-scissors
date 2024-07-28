
let humanScore = 0;
let computerScore = 0;
let round = 0;

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
    do {
        humanChoice = prompt('Choose Rock, Paper, or Scissors');
    } while (humanChoice.toLowerCase() != 'rock'
      && humanChoice.toLowerCase() != 'paper'
      && humanChoice.toLowerCase() != 'scissors')
    console.log('You: ' + humanChoice);
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
    
}



function playRound(computerChoice, humanChoice) {
    if (computerChoice === 0 && humanChoice === 'paper') {
        console.log('You win this round!');
        humanScore++;
    } else if (computerChoice === 0 && humanChoice === 'scissors') {
        console.log('You lose this round!');
        computerScore++;
    } else if (computerChoice === 1 && humanChoice === 'scissors') {
        console.log('You win this round!');
        humanScore++;
    } else if (computerChoice === 1 && humanChoice === 'rock') {
        console.log('You lose this round!');
        computerScore++;
    } else if (computerChoice === 2 && humanChoice === 'rock') {
        console.log('You win this round!');
        humanScore++;
    } else if (computerChoice === 2 && humanChoice === 'paper') {
        console.log('You lose this round!');
        computerScore++;
    } else {
        console.log('Tie!');
    } 
    round++;
}


function playGame() {
        do {
            let humanSelection = getHumanChoice();
            let computerSelection = getComputerChoice();
            playRound(computerSelection, humanSelection);
        } while (round < 5);

        if (humanScore > computerScore) {
            console.log('You won the game!');
        } else if (humanScore < computerScore) {
            console.log('You lost the game!'); 
        } else {
            console.log("It's a tie!");
        }
}

playGame();