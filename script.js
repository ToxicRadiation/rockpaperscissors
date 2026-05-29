let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let value = Math.random()
    console.log(value);
    if (value >= 0.66) {
        return "rock"
    } else if (value >= 0.33 && value <= 0.66) {
        return "paper"
    } else {
        return "scissors"
    }
}

// console.log(getComputerChoice());


// ^^^^^ computer chooses move

function getHumanChoice() {
    let result = prompt("what move do you want to make")
    return result
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    console.log(humanChoice);
    console.log(computerChoice);

    if (humanChoice == computerChoice) {
        console.log(`both chose ${humanChoice} and tied`);
        return "tie"
    } else {
        // oh boy I LOVE efficiency!

        if (humanChoice == "rock" && computerChoice == "paper") {
            computerScore++;
            console.log(`computer chooses ${computerChoice} and wins`);
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore++;
            console.log(`human chooses ${humanChoice} and wins`);
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            computerScore++;
            console.log(`computer chooses ${computerChoice} and wins`);
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore++;
            console.log(`human chooses ${computerChoice} and wins`);
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            computerScore++;
            console.log(`computer chooses ${computerChoice} and wins`);
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore++;
             console.log(`human chooses ${computerChoice} and wins`);
        }
    }
    console.log(`Human score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);

}

// gameplay loop

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);


function gameplayLoop() {
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);

    if (computerScore > humanScore) {
        console.log(`computer wins with ${computerScore} points`);
    } else if (humanScore > computerScore) {
        console.log(`human wins with ${humanScore} points`);
    } else {
        console.log('yall tied or smth');
    }
}

gameplayLoop();