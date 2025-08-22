console.log("Game page loaded");

      function gameComputerChoice(max){
        return Math.floor(Math.random() * max);
      }
      

      function getHumanChoice(){
        return prompt("Enter your choice: 0 for Rock, 1 for Paper, 2 for Scissors");
        
      }

      let humanScore = 0;
      let computerScore = 0;
    
    
      function playRound(humanChoice, computerChoice) {
        let outcome = "";
        if (humanChoice === computerChoice) {
            outcome = "It's a tie!";
        } else if (
            (humanChoice === 0 && computerChoice === 2) ||
            (humanChoice === 1 && computerChoice === 0) ||
            (humanChoice === 2 && computerChoice === 1)
        ) {
            humanScore++;
            outcome = "You win this round!";
        } else {
            computerScore++;
            outcome = "Computer wins this round!";
        }
        document.getElementById("result").textContent =
        `Round: You chose ${humanChoice}, Computer chose ${computerChoice}. ${outcome}`;

        document.getElementById("score").textContent =
        `Scores - Human: ${humanScore}, Computer: ${computerScore}`;
        
      }
      
       document.getElementById("rock").addEventListener("click", () => playRound(0, gameComputerChoice(3)));
       document.getElementById("paper").addEventListener("click", () => playRound(1, gameComputerChoice(3)));
       document.getElementById("scissors").addEventListener("click", () => playRound(2, gameComputerChoice(3)));
