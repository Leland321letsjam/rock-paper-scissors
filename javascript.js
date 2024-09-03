
let humanChoice;
let computerChoice;



function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3)
    displayComputerChoice(computerChoice);
    return computerChoice;
}

function displayComputerChoice () {
    const computerSelection = document.querySelector('.computer-selection');
    const computerSelectionResult = document.createElement('span');
    computerSelectionResult.className = 'display-computer-selection'
    switch (computerChoice) {
        case 0:
            computerSelectionResult.textContent = 'Rock';
            break;
        case 1:
            computerSelectionResult.textContent = 'Paper';
            break;
        case 2:
            computerSelectionResult.textContent = 'Scissors';
            break;
    }
    computerSelection.appendChild(computerSelectionResult);
}



function playRound(computerChoice, humanChoice) {
    if (computerChoice === 0 && humanChoice === 'paper' 
        || computerChoice === 1 && humanChoice === 'scissors'
        || computerChoice === 2 && humanChoice === 'rock'
        ) {
        console.log('You win this round!');
        return 'human';
    } else if (computerChoice === 0 && humanChoice === 'scissors'
        || computerChoice === 1 && humanChoice === 'rock'
        || computerChoice === 2 && humanChoice === 'paper'
        ) {
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
    let x = document.querySelector('.display-computer-selection');
    if (x) {
        x.remove();
    }
    getComputerChoice();
    playRound(computerChoice, humanChoice);
});

buttonPaper.addEventListener('click', () => {
    let humanChoice = 'paper';
    let x = document.querySelector('.display-computer-selection');
    if (x) {
        x.remove();
    }
    getComputerChoice();
    playRound(computerChoice, humanChoice);
});

buttonScissors.addEventListener('click', () => {
    let humanChoice = 'scissors';
    let x = document.querySelector('.display-computer-selection');
    if (x) {
        x.remove();
    }
    getComputerChoice();
    playRound(computerChoice, humanChoice);
});





//playGame();