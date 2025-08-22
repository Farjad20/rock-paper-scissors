console.log("Game page loaded");

      function gameComputerChoice(max){
        return Math.floor(Math.random() * max);
      }
      

      function getHumanChoice(){
        return prompt("Enter your choice: 0 for Rock, 1 for Paper, 2 for Scissors");
        
      }

      let humanScore = 0;
      let computerScore = 0;
    function playGame() {
    
      function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (humanChoice === 0 && computerChoice === 2) ||
            (humanChoice === 1 && computerChoice === 0) ||
            (humanChoice === 2 && computerChoice === 1)
        ) {
            humanScore++;
            console.log("You win this round!");
        } else {
            computerScore++;
            console.log("Computer wins this round!");
        }
        console.log(`Scores - Human: ${humanScore}, Computer: ${computerScore}`);
      }
      

      for(let i=0;i<5;i++){
       let humanChoice = parseInt(getHumanChoice());
       let computerChoice = gameComputerChoice(3);
      playRound(humanChoice, computerChoice);
    }
      if (humanScore > computerScore) {
          console.log("You win the game!");
      } else if (computerScore > humanScore) {
          console.log("Computer wins the game!");
      } else {
          console.log("The game is a tie!");
      }

    }
    
    playGame();