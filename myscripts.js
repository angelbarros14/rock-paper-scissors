
// Computer Choice
// Create a function named getComputerChoice
// Generate a random number using Math.random()

function getComputerChoice() {
    let randomValue = Math.random();
    // If the value is between 0 to 1/3(0.33), assign it to "Rock"
    if (randomValue < 1/3) {
        return "Rock";
    // If the value is between 1/3(0.33) to 2/3(0.66), assign it to "Paper"
    } else if (randomValue < 2/3) {
        return "Paper";
    // If the value is between 2/3(0.66) to 1, assign it to "Scissors"
    } else if (randomValue < 1) {
        return "Scissors";
    } 
}


// User Choice
// Create a function named getHumanChoice
function getHumanChoice () {
    // Take the users choice (prompt)
    let pick = prompt("What's your pick?", "Rock");
    return pick;
}

// Players score
// Create new variables named humanScore and computerScore\


// Single Round
// Create a function named playRound
function playRound (humanChoice, computerChoice) {

    
    // If humanSelection is rock and computerSelection is rock, it is a tie
    // If humanSelection is paper and computerSelection is paper, it is a tie
    // If humanSelection is scissors and computerSelection is scissors, it is a tie
    if (humanChoice === computerChoice) {
        console.log(`It is a tie! You picked ${humanChoice}, Computer picked ${computerChoice}.`);
    // If humanSelection is rock and computerSelection is paper, lose
    // If humanSelection is paper and computerSelection is scissors, lose
    // If humanSelection is scissors and computerSelection is rock, lose
    } else if (humanChoice == "Rock" && computerChoice == "Paper" || 
            humanChoice == "Paper" && computerChoice == "Scissors" ||
            humanChoice == "Scissors" && computerChoice == "Rock") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    // If humanSelection is rock and computerSelection is scissors, win
    // If humanSelection is paper and computerSelection is rock, win
    // If humanSelection is scissors and computerSelection is paper, win
    } else {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    }
    }

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(humanSelection,computerSelection);
