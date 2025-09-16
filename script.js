
function getComputerChoice(){
    let roll = Math.random();
    let choice = roll < (1/3) ? "Paper" : roll >= (2/3) ? "Scissors" : "Rock";
    return choice
}

function getHumanChoice(){
    let choice = prompt("Paper, Scissors, or Rock?");
    return choice
}


function playRound(humanChoice, computerChoice){
    // Human plays Rock
    if (humanChoice == "Rock"){
        if (computerChoice == "Paper"){
            result = -1;
        }
        else if (computerChoice == "Scissors"){
            result = 1;
        }
        else {
            result = 0;
        }
    }
    // Human plays Paper
    else if (humanChoice == "Paper"){
        if (computerChoice == "Scissors"){
            result = -1;
        }
        else if (computerChoice == "Rock"){
            result = 1;
        }
        else {
            result = 0;
        }
    }
    // Human players Scissor
    else {
        if (computerChoice == "Rock"){
            result = -1;
        }
        else if (computerChoice == "Paper"){
            result = 1;
        }
        else {
            result = 0;
        } 
    }
    
    // outputMessage = `You played ${humanChoice} and computer played ${computerChoice}. You get a score of ${result}`;

    return result
}


function playGame(){
    rounds = prompt("How many rounds?");
    
    score = 0;
    
    for (let i = 1; i <= rounds; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        score += playRound(humanSelection, computerSelection);
    }

    return `Your total score is ${score}`
}

alert(playGame())