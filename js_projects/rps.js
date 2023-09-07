const prompt = require("prompt-sync")();

let wins = 0;
let losses = 0;
let ties = 0;

while(true){

const playerChoice = prompt("enter rock, paper of scissors(or q to quit): ");
if(playerChoice.toLowerCase() === "q"){
    break;
}

if(playerChoice !== "rock"  && playerChoice !== "paper"  && playerChoice !== "scissors"){
    console.log("please enter a valid choice.");
    continue;
}

const choices = ["rock", "paper", "scissors"];
const randomIndex = Math.round(Math.random() * 2);
const computerChoice = choices[randomIndex];

console.log(" the computer chose: ", computerChoice);

if(computerChoice === playerChoice){
    console.log("draw!");
    ties++;
}else if(
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "rock") 
){
    console.log("won!");
    wins++;
} else{
    console.log("booo loserr!");
    losses++;
}
}



console.log("Wins:", wins, "Losses:", losses, "Ties", ties);
