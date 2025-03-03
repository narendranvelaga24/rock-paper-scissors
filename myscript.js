let humanScore = 0, computerScore = 0;

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

function getHumanChoice() {
    let choice = prompt("Please enter your choice: ", "rock/paper/scissor");
    return choice.toLowerCase(); 
}

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

function playGame() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice(); 
    alert(playRound(humanSelection, computerSelection));    
}

playGame();

alert(`Human Score: ${humanScore}`);
alert(`Computer Score: ${computerScore}`); 

if (humanScore > computerScore) {
    alert("You win the game!"); 
} else if (humanScore < computerScore) {
    alert("You lose the game!"); 
} else {
    alert("It's a tie game!"); 
}