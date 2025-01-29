
function getComputerChoice() {
    let randomValue = Math.random();
    if (randomValue < 1/3) {
        return "Rock";
    } else if (randomValue < 2/3) {
        return "Paper";
    } else if (randomValue < 1) {
        return "Scissors";
    }
}


function getHumanChoice () {

    let humanChoice = "";
    let rock = document.querySelector("#rock");
    rock.addEventListener("click", () => {
     humanChoice = "Rock";
     const computerChoice = getComputerChoice()
     playRound("Rock", computerChoice);
     }
     )      

     let paper = document.querySelector("#paper");
     paper.addEventListener("click", () => {
      humanChoice = "Paper";
      const computerChoice = getComputerChoice()
      playRound("Paper", computerChoice);
      }
      )      

      let scissors = document.querySelector("#scissors");
      scissors.addEventListener("click", () => {
       humanChoice = "Scissors";
       const computerChoice = getComputerChoice()
       playRound("Scissors", computerChoice);
       }
       )
}

   let humanScore = 0;
   let computerScore = 0;
   
   function playRound (humanChoice, computerChoice) {

    const para = document.querySelector("p");
       if (humanChoice === computerChoice) {
           para.textContent=`It is a tie! You picked ${humanChoice}, Computer picked ${computerChoice}.`;

       } else if (humanChoice == "Rock" && computerChoice == "Paper" || 
               humanChoice == "Paper" && computerChoice == "Scissors" ||
               humanChoice == "Scissors" && computerChoice == "Rock") {
               computerScore+=1;
               para.textContent=`You lose! ${computerChoice} beats ${humanChoice}.`

       } else {
           humanScore+=1;
           para.textContent=`You win! ${humanChoice} beats ${computerChoice}.`;
           }

           const container = document.querySelector("#container");

           
           content.textContent = `The result is
           \n Computer Score: ${computerScore} 
           \n Player Score: ${humanScore}`;
       
           container.append(content);
       }
    


       
function playGame() {
    getHumanChoice();
   
}
playGame();

