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

//console.log(getComputerChoice());

function getHumanChoice() {
    let choice = prompt("Please enter your choice: ", "rock/paper/scissor");
    return choice;  
}

//console.log(getHumanChoice());