function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];  
    var randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerChoice, computerChoice){
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice == computerChoice) {
        console.log("Draw round.");
        return -1;
    } else {
        if(playerChoice == "rock" && computerChoice == "paper"){
            console.log("You Lose! Paper beats Rock");
            return 0;
        } else if(playerChoice == "rock" && computerChoice == "scissors"){
            console.log("You win! rock beats scissors");
            return 1;
        } else if(playerChoice == "paper" && computerChoice == "scissors"){
            console.log("You lose! Scissors beats Paper");
            return 0;
        } else if(playerChoice == "paper" && computerChoice == "rock"){
            console.log("You won! Paper beats Rock");
            return 1;    
        } else if(playerChoice == "scissors" && computerChoice == "paper"){
            console.log("You won! Scissors beats Paper");
            return 1;
        } else if(playerChoice == "scissors" && computerChoice == "rock"){
            console.log("You lose! rock beats scissors");
            return 0;
        }
    }
}

function game(){
    
    
    let playerWinCount = 0; 
    let computerWinCount = 0;
    for(let i = 0; i < 5; i++){
        const computerChoice = getComputerChoice();
        const playerChoice = 'rock';
        const result = playRound(playerChoice, computerChoice);
        if(result == 1){
            playerWinCount++;
        } else if(result == 0){
            computerWinCount++;
        }
    }
    if(playerWinCount === computerWinCount){
        console.log("Draw! play again");
    } else if(playerWinCount > computerWinCount){
        console.log("You won! Congratulations");
    } else{
        console.log("You lose! Sorry");
    }
}

game();
