
// Computer Choice
// Generate a random number using Math.random()
function getComputerChoice() {
    let randomValue = Math.random();
    // If the value is between 0 to 1/3, assign it to "Rock"
    if (randomValue < 1/3) {
        return "Rock";
    // If the value is between 1/3 to 2/3, assign it to "Paper"
    } else if (randomValue < 2/3) {
        return "Paper";
    // If the value is between 2/3 to 1, assign it to "Scissors"
    } else if (randomValue < 1) {
        return "Scissors";
    }
}

/*
// User Choice
function getHumanChoice () {
    // Take the users choice (prompt)
    let pick = prompt("What's your pick?", "Rock");
    return pick;
}

*/

   // Players score
   let humanScore = 0;
   let computerScore = 0;
   
   // Play Round
   function playRound (humanChoice, computerChoice) {
       // If humanSelection is rock and computerSelection is rock, it is a tie
       // If humanSelection is paper and computerSelection is paper, it is a tie
       // If humanSelection is scissors and computerSelection is scissors, it is a tie


       if (humanChoice === computerChoice) {
           console.log(`It is a tie! You picked ${humanChoice}, Computer picked ${computerChoice}.`);
           humanScore+=1;
           computerScore+=1;

   
       // If humanSelection is rock and computerSelection is paper, lose
       // If humanSelection is paper and computerSelection is scissors, lose
       // If humanSelection is scissors and computerSelection is rock, lose
       } else if (humanChoice == "Rock" && computerChoice == "Paper" || 
               humanChoice == "Paper" && computerChoice == "Scissors" ||
               humanChoice == "Scissors" && computerChoice == "Rock") {
               computerScore+=1;
               console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
   
   
       // If humanSelection is rock and computerSelection is scissors, win
       // If humanSelection is paper and computerSelection is rock, win
       // If humanSelection is scissors and computerSelection is paper, win
       } else if (humanChoice == "Paper" && computerChoice == "Rock" || 
           humanChoice == "Scissors" && computerChoice == "Paper" ||
           humanChoice == "Rock" && computerChoice == "Scissors") {
           humanScore+=1;
           console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
           }
       }


       let rock = document.querySelector("#rock");
       rock.addEventListener("click", () => {
        const computerChoice = getComputerChoice()
        return playRound("Rock", computerChoice);
        }
        )      

        let paper = document.querySelector("#paper");
        paper.addEventListener("click", () => {
         const computerChoice = getComputerChoice()
         return playRound("Paper", computerChoice);
         }
         )      

         let scissors = document.querySelector("#scissors");
         scissors.addEventListener("click", () => {
          const computerChoice = getComputerChoice()
          return playRound("Scissors", computerChoice);
          }
          )      
       
       
        /* Play Game
function playGame() {
   for (let i = 0; i < 5; i++) { playRound(i);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    playRound(humanSelection, computerSelection);
    console.log(`Your Score is: ${humanScore}`);
    console.log(`Computer Score is: ${computerScore}`);

    alert(`You picked ${humanSelection}, Computer picked ${computerSelection}.
Your Score is: ${humanScore} | Computer Score is: ${computerScore}`);

   }
   return playRound;

}

playGame();
*/
