let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

const displayBox = document.getElementById('display-box');

function getComputerChoice() {
    let value = Math.random();
    if (value >= 0.66) {
        return "rock";
    } else if (value >= 0.33 && value < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice) {
    if (roundsPlayed >= 5) {
        humanScore = 0;
        computerScore = 0;
        roundsPlayed = 0;
    }

    const computerChoice = getComputerChoice();
    roundsPlayed++;
    let roundResult = "";

    if (humanChoice === computerChoice) {
        roundResult = `Both chose <strong>${humanChoice}</strong>. It's a tie!`;
    } else {
        if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore++;
            roundResult = `Computer chooses <strong>${computerChoice}</strong> and wins this round!`;
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            roundResult = `Human chooses <strong>${humanChoice}</strong> and wins this round!`;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore++;
            roundResult = `Computer chooses <strong>${computerChoice}</strong> and wins this round!`;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            roundResult = `Human chooses <strong>${humanChoice}</strong> and wins this round!`;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore++;
            roundResult = `Computer chooses <strong>${computerChoice}</strong> and wins this round!`;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            roundResult = `Human chooses <strong>${humanChoice}</strong> and wins this round!`;
        }
    }

    let outputHTML = `
        <p><strong>Round ${roundsPlayed} of 5</strong></p>
        <p>You played: <strong>${humanChoice}</strong> | Computer played: <strong>${computerChoice}</strong></p>
        <p>${roundResult}</p>
        <hr>
        <p><strong>Score:</strong> Human: ${humanScore} | Computer: ${computerScore}</p>
    `;

    if (roundsPlayed === 5) {
        let finalMatchResult = "";
        if (computerScore > humanScore) {
            finalMatchResult = `<h3 style="color: #dc3545;">Match Over: Computer wins with ${computerScore} points</h3>`;
        } else if (humanScore > computerScore) {
            finalMatchResult = `<h3 style="color: #28a745;">Match Over: Human wins with ${humanScore} points</h3>`;
        } else {
            finalMatchResult = `<h3 style="color: #6c757d;">Match Over: You tied or smth!</h3>`;
        }
        outputHTML += `${finalMatchResult}<p style="font-size: 12px; color: gray;">Click any button to start a new match.</p>`;
    }

    displayBox.innerHTML = outputHTML;
}

document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));