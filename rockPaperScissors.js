function getComputerChoice() {
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(element) {
    const computerChoice = getComputerChoice();
    const playerChoice = element.target.innerText;
    if (playerChoice == computerChoice) {
        console.log("Draw round.");
        return -1;
    } else {
        if (playerChoice == "rock" && computerChoice == "paper") {
            console.log("You Lose! Paper beats Rock");
            return 0;
        } else if (playerChoice == "rock" && computerChoice == "scissors") {
            console.log("You win! rock beats scissors");
            return 1;
        } else if (playerChoice == "paper" && computerChoice == "scissors") {
            console.log("You lose! Scissors beats Paper");
            return 0;
        } else if (playerChoice == "paper" && computerChoice == "rock") {
            console.log("You won! Paper beats Rock");
            return 1;
        } else if (playerChoice == "scissors" && computerChoice == "paper") {
            console.log("You won! Scissors beats Paper");
            return 1;
        } else if (playerChoice == "scissors" && computerChoice == "rock") {
            console.log("You lose! rock beats scissors");
            return 0;
        }
    }
}

const container = document.querySelector('#container');
const resultContainer = document.querySelector('#resultContainer');

const playerScoreLabel = document.createElement('p');
const computerScoreLabel = document.createElement('p');
const winnerLabel = document.createElement('p');

const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
for (let i = 0; i < choices.length; i++) {
    const currentBtn = choices[i];
    const btn = document.createElement('button');
    btn.textContent = currentBtn;
    btn.addEventListener('click', (element) => {
        winnerLabel.textContent = " ";
        const result = playRound(element);
        if (result == 1) {
            playerScore++;
        } else if (result == 0) {
            computerScore++;
        }
        playerScoreLabel.textContent = "player's score : " + playerScore;
        computerScoreLabel.textContent = "computer's score : " + computerScore;
        if (playerScore == 5) {
            winnerLabel.textContent = "You Win!";
            playerScore = 0;
            computerScore = 0;
        } else if (computerScore == 5) {
            winnerLabel.textContent = "Computer Win!";
            playerScore = 0;
            computerScore = 0;
        }
    });
    container.appendChild(btn);
}

resultContainer.appendChild(playerScoreLabel);
resultContainer.appendChild(computerScoreLabel);
resultContainer.appendChild(winnerLabel);