let humanScore = 0;
let computerScore = 0;
let round = 0;




function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3);
    displayComputerChoice(computerChoice);
};

function displayComputerChoice () {
    const computerSelection = document.querySelector('.computer-selection');
    computerSelection.textContent = '';
    switch (computerChoice) {
        case 0:
            computerSelection.textContent = 'Computer selection: Rock';
            break;
        case 1:
            computerSelection.textContent = 'Computer selection: Paper';
            break;
        case 2:
            computerSelection.textContent = 'Computer selection: Scissors';
            break;
    }
};

function displayPlayerChoice(humanChoice) {
    const yourSelection = document.querySelector('.your-selection');
    yourSelection.textContent = `Your selection: ${humanChoice}`;
};


function playRound(humanChoice) {
    const divContainerOne = document.querySelector('h3');
    divContainerOne.textContent = '';
    round++;
    getComputerChoice();
    let roundResult;
    if (computerChoice === 0 && humanChoice === 'Paper' 
        || computerChoice === 1 && humanChoice === 'Scissors'
        || computerChoice === 2 && humanChoice === 'Rock'
        ) {  
            divContainerOne.textContent = 'You win this round!';
            roundResult = 'human';
    } else if (computerChoice === 0 && humanChoice === 'Scissors'
        || computerChoice === 1 && humanChoice === 'Rock'
        || computerChoice === 2 && humanChoice === 'Paper'
        ) {           
            divContainerOne.textContent = 'You lose this round!';
            roundResult = 'computer';
    } else {              
        divContainerOne.textContent = 'Tie!';
        roundResult = 'tie';
    }

    if (roundResult === 'human') {
        humanScore++;
    } else if (roundResult === 'computer') {
        computerScore++;
    }
    roundAndScoreDisplay();

    if (humanScore === 5) {
        divContainerOne.textContent = 'Congratulations! You win the game!';
        resetGame();
    } else if (computerScore === 5) {
        divContainerOne.textContent = 'Sorry, the computer wins the game.';
        resetGame();
    }
};



function roundAndScoreDisplay() {
    const scoreDisplay = document.querySelector('.score');
    scoreDisplay.textContent = `Your Score: ${humanScore} | Computer Score: ${computerScore}`;
    const roundDisplay = document.querySelector('.round');
    roundDisplay.textContent = `Round: ${round}`;
};

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    round = 0;
};


const buttonRock = document.querySelector('#rock');
const buttonPaper = document.querySelector('#paper');
const buttonScissors = document.querySelector('#scissors');

buttonRock.addEventListener('click', () => {
    let humanChoice = 'Rock';
    displayPlayerChoice(humanChoice);
    playRound(humanChoice);
});

buttonPaper.addEventListener('click', () => {
    let humanChoice = 'Paper';
    displayPlayerChoice(humanChoice);
    playRound(humanChoice);
});

buttonScissors.addEventListener('click', () => {
    let humanChoice = 'Scissors';
    displayPlayerChoice(humanChoice);
    playRound(humanChoice);
});