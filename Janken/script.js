console.log("Hello World");

function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  return prompt("Choose rock, paper, or scissors:");
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === null) {
      humanChoice = "";
    }

    humanChoice = humanChoice.trim().toLowerCase();

    if (
      humanChoice !== "rock" &&
      humanChoice !== "paper" &&
      humanChoice !== "scissors"
    ) {
      console.log("No valid choice entered. No points this round.");
    } else if (humanChoice === computerChoice) {
      console.log(`It's a tie! You both chose ${humanChoice}.`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }

    console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
  }

  console.log("Rock Paper Scissors: five rounds. Ties award no points.");

  console.log("Round 1");
  playRound(getHumanChoice(), getComputerChoice());

  console.log("Round 2");
  playRound(getHumanChoice(), getComputerChoice());

  console.log("Round 3");
  playRound(getHumanChoice(), getComputerChoice());

  console.log("Round 4");
  playRound(getHumanChoice(), getComputerChoice());

  console.log("Round 5");
  playRound(getHumanChoice(), getComputerChoice());

  console.log(`Final score: You ${humanScore} - Computer ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (computerScore > humanScore) {
    console.log("The computer wins the game!");
  } else {
    console.log("The game ends in a tie!");
  }
}

playGame();
