const displayCompScore = document.querySelector('.computer-score');
const displayPlayerScore = document.querySelector('.player-score');
const roundMessage = document.querySelector('.round-message');
const winnerMessage = document.querySelector('.winner-message');
const playerButtons = document.querySelectorAll('button.card');
const restartButton = document.querySelector('.restart');

const computerChoices = ['Rock', 'Paper', 'Scissors'];
let computerScore = 0;
let playerScore = 0;

function computerPlay() {
  return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

function updateScore() {
  if (computerScore <= 5 && playerScore <= 5) {
    displayPlayerScore.innerText = `PLAYER SCORE: ${playerScore}`;
    displayCompScore.innerText = `COMPUTER SCORE: ${computerScore}`;
  }
}

function getWinner() {
  if (computerScore === 5 && computerScore > playerScore) {
    winnerMessage.style.color = 'var(--computer)';
    winnerMessage.innerHTML = `Computer won the game!`;
  } else if (playerScore === 5 && playerScore > computerScore) {
    winnerMessage.style.color = 'var(--player)';
    winnerMessage.innerHTML = `You won the game!`;
  }
  return winnerMessage;
}

restartButton.addEventListener('click', () => {
  location.reload();
});

function playRound(playerSelection, computerSelection) {
  if (computerSelection === playerSelection) {
    roundMessage.innerHTML = `It's a tie: ${playerSelection} and ${computerSelection}`;
  } else if (
    (computerSelection === 'Rock' && playerSelection === 'Paper') ||
    (computerSelection === 'Paper' && playerSelection === 'Scissors') ||
    (computerSelection === 'Scissors' && playerSelection === 'Rock')
  ) {
    playerScore++;
    updateScore();
    roundMessage.innerHTML = `You win the round: ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    updateScore();
    roundMessage.innerHTML = `Computer wins the round: ${computerSelection} beats ${playerSelection}`;
  }
  return updateScore();
}

function playGame() {
  playerButtons.forEach((card) => {
    card.addEventListener('click', () => {
      let playerSelection = card.querySelector('img').alt;
      let computerSelection = computerPlay();
      playRound(playerSelection, computerSelection);
      getWinner();
    });
  });
}

playGame();
