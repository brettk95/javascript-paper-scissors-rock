// DOM Editor
let runScoreComp = 0;
let runScoreHuman = 0;

const scoreboard = document.querySelector(".scoreboard");

const scoreComputer = document.createElement("div")
scoreComputer.classList.add("score-computer")
scoreComputer.textContent = `Computer Score ${runScoreComp}`
scoreboard.appendChild(scoreComputer)

const scoreHuman = document.createElement("div")
scoreHuman.classList.add("score-human")
scoreHuman.textContent = `Human Score ${runScoreHuman}`
scoreboard.appendChild(scoreHuman)

function getComputerChoice(){
    let roll = Math.random();
    let choice = roll < (1/3) ? "Paper" : roll >= (2/3) ? "Scissors" : "Rock";
    return choice
}

function playRound(humanChoice, computerChoice){
    // Human plays Rock
    if (humanChoice == "Rock"){
        if (computerChoice == "Paper"){
            computerResult = 1;
            humanResult = 0;
        }
        else if (computerChoice == "Scissors"){
            computerResult = 0;
            humanResult = 1;
        }
        else {
            computerResult = 0;
            humanResult = 0;
        }
    }
    // Human plays Paper
    else if (humanChoice == "Paper"){
        if (computerChoice == "Scissors"){
            computerResult = 1;
            humanResult = 0;
        }
        else if (computerChoice == "Rock"){
            computerResult = 0;
            humanResult = 1;
        }
        else {
            computerResult = 0;
            humanResult = 0;
        }
    }
    // Human players Scissor
    else {
        if (computerChoice == "Rock"){
            computerResult = 1;
            humanResult = 0;
        }
        else if (computerChoice == "Paper"){
            computerResult = 0;
            humanResult = 1;
        }
        else {
            computerResult = 0;
            humanResult = 0;
        } 
    }
    
    outputMessage = `You played ${humanChoice} and computer played ${computerChoice}. You get a score of ${humanResult} and computer gets a score of ${computerResult}.`;
    console.log(outputMessage)
    return [computerResult, humanResult]
}

// Scoreboard
function updateScoreboard() {
  scoreComputer.textContent = `Computer Score ${runScoreComp}`;
  scoreHuman.textContent = `Human Score ${runScoreHuman}`;

  if (runScoreComp == 5) {
    alert("Computer reached 5 points before you. Computer wins!")
  }
  else if (runScoreHuman == 5) {
    alert("Nice, you reached 5 points before the computer. You win!")
  }

}

// Each button press plays a round and increments the score
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", function() {
    const computerChoice = getComputerChoice();
    const [compResult, humanResult] = playRound(button.id, computerChoice);
    runScoreComp += compResult;
    runScoreHuman += humanResult;
    updateScoreboard();
  });
});