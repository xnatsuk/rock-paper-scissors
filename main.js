const computerChoices = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let playerScore = 0;

function computerPlay() {
  return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection === playerSelection) {
    return `It's a tie! ${playerSelection} and ${computerSelection}`;
  } else if (
    (computerSelection === 'rock' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'rock')
  ) {
    playerScore++;
    return `You win the round! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    return `Computer wins the round! ${computerSelection} beats ${playerSelection}`;
  }
}

function getWinner() {
  if (computerScore > playerScore) {
    return `Computer won the game with a score of ${computerScore} to ${playerScore}`;
  } else if (playerScore > computerScore) {
    return `You won the game with a score of ${playerScore} to ${computerScore}`;
  } else if (playerScore === computerScore) {
    return `It's a tie! ${playerScore} to ${computerScore}`;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let computerSelection = computerPlay();
    let playerSelection = prompt().toLowerCase();
    console.log(playRound(playerSelection, computerSelection));
  }
  return getWinner();
}
console.log(game());
