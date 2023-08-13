const buttons = document.querySelectorAll('.selection-btn');
const resultsDiv = document.getElementById('results');
const scoreDiv = document.getElementById('score');

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerSelection = button.id;
        const computerSelection = computerPlay();
        const roundResult = playRound(playerSelection, computerSelection);
        updateScore(roundResult);
        displayResults(playerSelection, computerSelection, roundResult);
        checkForWinner();
    });
});

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        return 'You win!';
    } else {
        computerScore++;
        return 'Computer wins!';
    }
}

function updateScore(result) {
    scoreDiv.textContent = `Score: Player: ${playerScore} | Computer: ${computerScore}`;
}

function displayResults(playerSelection, computerSelection, result) {
    resultsDiv.textContent = `You chose ${playerSelection}, Computer chose ${computerSelection}. ${result}`;
}

function checkForWinner() {
    if (playerScore === 5) {
        announceWinner('Player');
    } else if (computerScore === 5) {
        announceWinner('Computer');
    }
}

function announceWinner(winner) {
    resultsDiv.textContent = `${winner} wins the game!`;
    buttons.forEach(button => button.disabled = true);
}
