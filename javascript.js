
let humanScore = 0;
let computerScore = 0;

let humanChoice;
let computerChoice;



function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)
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
    return(computerChoice);
}


//if (computerChoice === 0 && humanChoice)


/*function getHumanChoice() {
    humanChoice = prompt('Choose Rock, Paper, or Scissors');
    console.log('You: ' + humanChoice);
    return humanChoice;
    
}


//function playRound();


//function playGame();



//console.log(getHumanChoice());
//console.log(humanChoice.toLowerCase);





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