function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];  
    var randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerChoice, computerChoice){
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice == computerChoice) {
        return "Draw. Play again!";
    } else {
        if(playerChoice == "rock" && computerChoice == "paper"){
            return "You Lose! Paper beats Rock";
        } else if(playerChoice == "rock" && computerChoice == "scissors"){
            return "You win! rock beats scissors";
        } else if(playerChoice == "paper" && computerChoice == "scissors"){
            return "You lose! Scissors beats Paper";
        } else if(playerChoice == "paper" && computerChoice == "rock"){
            return "You won! Paper beats Rock";    
        } else if(playerChoice == "scissors" && computerChoice == "paper"){
            return "You won! Scissors beats Paper";
        } else if(playerChoice == "scissors" && computerChoice == "rock"){
            return "You lose! rock beats scissors";
        }
    }
}

const computerChoice = getComputerChoice();
const playerChoice = 'rock';
const result = playRound(playerChoice, computerChoice);
console.log(result);