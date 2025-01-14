let humanScore = 0, computerScore = 0;

/**
 * Generates a random choice for the computer in a rock-paper-scissors game.
 * 
 * @returns {string} - Returns one of the strings: "rock", "paper", or "scissor".
 */
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch(choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissor";
    }
}


/**
 * Prompts the user to enter their choice of "rock", "paper", or "scissor".
 * Converts the user's input to lowercase to ensure consistency.
 * 
 * @returns {string} The user's choice in lowercase.
 */
function getHumanChoice() {
    let choice = prompt("Please enter your choice: ", "rock/paper/scissor");
    return choice.toLowerCase(); 
}


/**
 * Plays a single round of Rock-Paper-Scissors and determines the winner.
 *
 * @param {string} humanChoice - The choice made by the human player. Expected values are "rock", "paper", or "scissor".
 * @param {string} computerChoice - The choice made by the computer player. Expected values are "rock", "paper", or "scissor".
 * @returns {string} - A message indicating the result of the round: whether it's a tie, or if the human player wins or loses.
 */
function playRound(humanChoice, computerChoice) {
    console.log("Human: ", humanChoice);
    console.log("Computer: ", computerChoice);
    if(humanChoice === computerChoice) {
        return "It's a tie!";
    }
    if(humanChoice === "rock"){
        if(computerChoice === "paper") {
            computerScore++;
            return "You lose! Paper beats Rock";
        } else {
            humanScore++;
            return "You win! Rock beats Scissor";
        }
    }else if(humanChoice === "paper") {
        if(computerChoice === "scissor") {
            computerScore++;
            return "You lose! Scissor beats Paper";
        } else {
            humanScore++;
            return "You win! Paper beats Rock";
        }
    } else {
        if(computerChoice === "rock") {
            computerScore++;
            return "You lose! Rock beats Scissor";
        } else {
            humanScore++;
            return "You win! Scissor beats Paper";
        }
    }
}


/**
 * Simulates a game where a human plays against a computer for 5 rounds.
 * In each round, both the human and the computer make a choice, and the result is logged.
 * After all rounds, the scores are compared and the overall winner is announced.
 */
function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice(); 
        console.log(playRound(humanSelection, computerSelection)); 
    }

    console.log("Human Score: ", humanScore); 
    console.log("Computer Score: ", computerScore); 

    if (humanScore > computerScore) {
        console.log("You win the game!"); 
    } else if (humanScore < computerScore) {
        console.log("You lose the game!"); 
    } else {
        console.log("It's a tie game!"); 
    }
}

playGame();