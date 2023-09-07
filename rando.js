const prompt = require("prompt-sync")();


const target =Math.round(Math.random()*100);


console.log(target);

let guesses=0;


while(true){
    guesses++;
    const guess = Number(prompt("guess the number(0-100): "));
    console.log(guess);

    if(guess > target){
        console.log("your guess is too high");
    }else if(guess < target){
        console.log("your guess is too low");
    }
    else{
        console.log("your guess is correct!");
        break;
    }
    
}

console.log("you've guessed the answer in", guesses, "tries!");

