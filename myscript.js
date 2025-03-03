let humanScore = 0, computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch(choice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissor";
    }
}

function playRound(humanChoice, computerChoice) {
    console.log("Human: ", humanChoice);
    console.log("Computer: ", computerChoice);
    if(humanChoice === computerChoice) {
        return "It's a tie!";
    }
    if(humanChoice === "Rock"){
        if(computerChoice === "Paper") {
            computerScore++;
            return "You lose! Paper beats Rock";
        } else {
            humanScore++;
            return "You win! Rock beats Scissor";
        }
    }else if(humanChoice === "Paper") {
        if(computerChoice === "Scissor") {
            computerScore++;
            return "You lose! Scissor beats Paper";
        } else {
            humanScore++;
            return "You win! Paper beats Rock";
        }
    } else {
        if(computerChoice === "Rock") {
            computerScore++;
            return "You lose! Rock beats Scissor";
        } else {
            humanScore++;
            return "You win! Scissor beats Paper";
        }
    }
}

function showFinalResult() {
    if (humanScore > computerScore) {
        return "You win the game!";
    } else if (humanScore < computerScore) {
        return "You lose the game!";
    } else {
        return "It's a tie game!";
    }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor")
const reset = document.querySelector("#reset")

rock.addEventListener("click", playGame);
paper.addEventListener("click", playGame);
scissor.addEventListener("click", playGame);
reset.addEventListener("click", resetGame);
reset.style.display = "none";

const computer = document.querySelector(".computer");
const result = document.querySelector(".result");
const score = document.querySelector(".score");
const finalResult = document.querySelector(".final");

function playGame(event) {
    const humanSelection = event.target.id;
    const computerSelection = getComputerChoice(); 
    computer.textContent = `Computer: ${computerSelection}`;
    result.textContent = playRound(humanSelection, computerSelection);
    score.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
    if (humanScore === 5 || computerScore === 5) {
        finalResult.textContent = showFinalResult();
        rock.disabled = true;
        paper.disabled = true;
        scissor.disabled = true;
        reset.style.display = "block";
    }  
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    computer.textContent = "";
    result.textContent = "";
    score.textContent = `Human: 0 Computer: 0`;
    finalResult.textContent = "";
    
    rock.disabled = false;
    paper.disabled = false;
    scissor.disabled = false;
    reset.style.display = "none"; 
}

