
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


// function getHumanChoice() {
//     do {
//         humanChoice = prompt('Choose Rock, Paper, or Scissors');
//     } while (humanChoice.toLowerCase() != 'rock'
//       && humanChoice.toLowerCase() != 'paper'
//       && humanChoice.toLowerCase() != 'scissors')
//     console.log('You: ' + humanChoice);
//     humanChoice = humanChoice.toLowerCase();
//     return humanChoice;
    
// }



function playRound(computerChoice, humanChoice) {
    if (computerChoice === 0 && humanChoice === 'paper') {  //These can probably be combined into three, win, lose, tie
        console.log('You win this round!');
        return 'human';
    } else if (computerChoice === 0 && humanChoice === 'scissors') {
        console.log('You lose this round!');
        return 'computer';
    } else if (computerChoice === 1 && humanChoice === 'scissors') {
        console.log('You win this round!');
        return 'human';
    } else if (computerChoice === 1 && humanChoice === 'rock') {
        console.log('You lose this round!');
        return 'computer';
    } else if (computerChoice === 2 && humanChoice === 'rock') {
        console.log('You win this round!');
        return 'human';
    } else if (computerChoice === 2 && humanChoice === 'paper') {
        console.log('You lose this round!');
        return 'computer';
    } else {
        console.log('Tie!');
    } 
}


// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;
//     let round = 0;
//         do {
//             let humanSelection = getHumanChoice();
//             let computerSelection = getComputerChoice();
//             let roundResult = playRound(computerSelection, humanSelection);
//             round++; 
            
//             if (roundResult === 'human') {
//                 humanScore++;
//             } else if (roundResult === 'computer') {
//                 computerScore++;
//             }
//         } while (round < 5);

       

//         if (humanScore > computerScore) {
//             console.log('You won the game!');
//         } else if (humanScore < computerScore) {
//             console.log('You lost the game!'); 
//         } else {
//             console.log("It's a tie!");
//         }
    
// }

const buttonRock = document.querySelector('#rock');
const buttonPaper = document.querySelector('#paper');
const buttonScissors = document.querySelector('#scissors');

buttonRock.addEventListener('click', () => {
    let humanChoice = 'rock';
    getComputerChoice();
    playRound(computerChoice, humanChoice);
})

buttonPaper.addEventListener('click', () => {
    let humanChoice = 'paper';
    getComputerChoice();
    playRound(computerChoice, humanChoice);
})

buttonScissors.addEventListener('click', () => {
    let humanChoice = 'scissors';
    getComputerChoice();
    playRound(computerChoice, humanChoice);
})

//playGame();