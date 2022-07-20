function getComputerChoice() {
    // randomly return "rock", "paper", or scissors
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "error";
    }
}

function rpsRound(playerSelection, computerSelection) {
    // plays one round of rock paper scissors
    if (playerSelection.toLowerCase() === computerSelection) {
        return "You Tie. Both choices are " + computerSelection.slice(0,1) + computerSelection.slice(1) + ".";
    }

    switch(playerSelection.toLowerCase()) {
        case "rock":
            switch(computerSelection) {
                case "paper":
                    return "You Lose! Paper beats Rock.";
                case "scissors":
                    return "You Win! Rock beats Scissors.";
            }
        case "paper":
            switch(computerSelection) {
                case "rock":
                    return "You Win! Paper beats Rock.";
                case "scissors":
                    return "You Lose! Scissors beats Paper.";
            }
        case "scissors":
            switch(computerSelection) {
                case "rock":
                    return "You Lose! Rock beats Scissors.";
                case "paper":
                    return "You Win! Scissors beats Paper.";
            }
    }
}

function game() {
    let playerChoice = "";
    let wins = 0;
    let losses = 0;
    let ties = 0
    let result = "";

    for (let i = 0; i < 5; i++) {
        playerChoice = prompt("Rock, paper, or scissors?");
        while (playerChoice.toLowerCase() != "rock" &&
            playerChoice.toLowerCase() != "paper" &&
            playerChoice.toLowerCase() != "scissors") {
            playerChoice = prompt("Invalid move. Must be rock, paper, or scissors")
        }

        result = rpsRound(playerChoice, getComputerChoice());
        console.log(result);
        
        switch(result.slice(4, 5)) {
            case "W":
                wins++;
                break;
            case "L":
                losses++;
                break;
            case "T":
                ties++;
                break;
        }
    }

    console.log("Wins: " + wins + "\nLosses: " + losses + "\nTies: " + ties);
}