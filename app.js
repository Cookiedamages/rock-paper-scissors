function getComputerChoice() {
    let rpsItems = ['ROCK', 'PAPER', 'SCISSORS'];
    let randomNumber = Math.floor(Math.random() * 3);
    return rpsItems[randomNumber];
}

function getPlayerSelection() {
    let playerInput = prompt('Please choose your power');
    return playerInput.toUpperCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        alert("It's a tie!");
    } else if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')
    ) {
        alert('You Win! ' + playerSelection + ' beats ' + computerSelection);
    } else {
        alert('You Lose! ' + computerSelection + ' beats ' + playerSelection);
    }
}

  function game() {
    for (let i = 0; i < 5; i++) {
        let playerChoice = getPlayerSelection();
        let computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
    }
}

  game();
