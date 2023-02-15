function getComputerChoice(){
    var choices = ['rock', 'paper', 'scissors'];  
    var randomIndex = Math.floor(Math.random() * 3);
    console.log(choices[randomIndex]);
}

getComputerChoice();