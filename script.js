const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const eachGoResult = document.getElementById("eachGoResult");
const yourScore = document.getElementById("yourScore");
const computerScore = document.getElementById("computerScore");

const userChoiceText = document.getElementById("userChoice");
const computerChoiceText = document.getElementById("computerChoice");
const btnReset = document.getElementById("btnReset");
let myScore = 0;
let compScore = 0;
// Function to get the computer's random choice
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Function to determine the winner
function finalResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    eachGoResult.textContent =  "It's a tie!";
    yourScore.textContent = `Your Score: ${myScore}`;
    computerScore.textContent = `Computer Score: ${compScore}`;

  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    eachGoResult.textContent =  "You win!";
    myScore++;
    yourScore.textContent = `Your Score: ${myScore}`;
    computerScore.textContent = `Computer Score: ${compScore}`;
  } else {
    eachGoResult.textContent =  "Computer wins!";
    compScore++;
    yourScore.textContent = `Your Score: ${myScore}`;
    computerScore.textContent = `Computer Score: ${compScore}`;
  }
}

// Function to handle the user's choice and the game logic
function handleChoice(userChoice) {
  // Add a delay using setTimeout before showing the computer's choice and result
  setTimeout(() => {
    userChoiceText.textContent = `Your Choice: ${userChoice}`;
    // Get the computer's choice
    const computerChoice = getComputerChoice();
    computerChoiceText.textContent = `Computer Choice: ${computerChoice}`;

    // Determine the winner
    const result = finalResult(userChoice, computerChoice);
   
  }, 1000);  // 1-second delay before showing the computer's choice and result
}

// Add event listeners for the buttons
rockButton.addEventListener("click", () => handleChoice("rock"));
paperButton.addEventListener("click", () => handleChoice("paper"));
scissorsButton.addEventListener("click", () => handleChoice("scissors"));

btnReset.addEventListener('click', () =>{
    myScore = 0;
    compScore = 0;
    computerChoiceText.textContent = '';
    userChoiceText.textContent = ''; 
    eachGoResult.textContent ='';
    yourScore.textContent = '';
    computerScore.textContent = '';
  });



// let userChoice;
// let result;
// let yourScore = 0;
// let computerScore = 0;
// const eachGoResult = document.getElementById("eachGoResult");


// //! User choice logic
// document.getElementById('options').addEventListener('change', function() {
//     userChoice = this.options[this.selectedIndex].text;  // Get the selected option's text
//     return userChoice;
// });

// setTimeout(() => {
//     // Get the computer's choice
//     const computerChoice = getComputerChoice();
// document.getElementById("displayCompChoice").textContent = computerChoice;
//     const result = determineResult(userChoice, computerChoice);
//   }, 2500);
// //! Computer generated choice logic
// function getComputerChoice() {
//     const computerOptions = ["Rock", "Paper", "Scissor"];
//     const randomIndex = Math.floor(Math.random() * computerOptions.length);
//     return computerOptions[randomIndex];
    
//     }



// function determineResult(userChoice, computerChoice ){
//     if((userChoice === computerChoice)){
//         eachGoResult.textContent = "It's a tie";
//         document.getElementById("yourScore").textContent = "Your Score:" + yourScore;
//         document.getElementById("computerScore").textContent = "Computer Score:" + computerScore;
//     }
    
//     else if(((userChoice==="Rock")&&(computerChoice==="Scissor"))||
//     ((userChoice==="Scissor")&&(computerChoice==="Paper"))||
//     ((userChoice==="Paper")&&(computerChoice==="Rock"))){
//         yourScore++;
//         eachGoResult.textContent = "In this round You Won!!";
//         document.getElementById("yourScore").textContent = "Your Score:" + yourScore;
//         document.getElementById("computerScore").textContent = "Computer Score:" + computerScore;
//     }
    
//     else {
//         computerScore++;
//         eachGoResult.textContent = "In this round Computer Won!!";
//         document.getElementById("yourScore").textContent = "Your Score:" + yourScore;
//         document.getElementById("computerScore").textContent = "Computer Score:" + computerScore;
//     }

// }



