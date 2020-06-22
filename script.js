let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//function that generates the new secret target intger each new round

function generateTarget(){
  return Math.floor(Math.random () * 10)
}

function compareGuesses(humanGuess, computerGuess, target) {
  if (humanGuess === computerGuess || humanGuess === target) {
    return true;
  }
  else if (humanGuess > computerGuess && humanGuess !== target) {
  return false;
  }
  else if (humanGuess < computerGuess && humanGuess !== target) {
    return true;
  }

}

// fuction that correctly increases the winner's score after each round

function updateScore (winner) {
 if (winner === 'human') {
   humanScore += 1;
 }
 else {
   computerScore += 1;
 }
}

function advanceRound () {
  return currentRoundNumber += 1;
}












