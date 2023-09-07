const prompt = require("prompt-sync")();

console.log("welcome to the quiz");

let ca = 0;
let tot_questions=5;

const a1 = prompt("The pectoralis major muscle is primarily responsible for?");
const ca1 = "adducting the arm";

if(a1.toLowerCase() === ca1){
    console.log("you got it right!");
    ca++;
}
else{
    console.log("oopsie you got it wrong :(")
}

const a2 = prompt("In which part of the digestive system does the majority of nutrient absorption take place?");
const ca2 = "Small intestine";

if(a2.toLowerCase() === ca2){
    console.log("you got it right!");
    ca++;
}
else{
    console.log("oopsie you got it wrong :(")
}


const a3 = prompt("The process by which white blood cells engulf and digest bacteria is called:");
const ca3 = "Phagocytosis";

if(a3.toLowerCase() === ca3){
    console.log("you got it right!");
    ca++;
}
else{
    console.log("oopsie you got it wrong :(")
}


const a4 = prompt("Which of the following is NOT a function of the liver?");
const ca4 = "synthesis of red blood cells";


if(a4.toLowerCase() === ca4){
    console.log("you got it right!");
    ca++;
}
else{
    console.log("oopsie you got it wrong :(");
}


const a5 = prompt("Which of the following bones is part of the human axial skeleton?");
const ca5 = "Skull";

if(a5.toLowerCase() === ca5){
    console.log("you got it right!");
    ca++;
}
else{
    console.log("oopsie you got it wrong :(");
}

const percent = Math.round((ca / tot_questions)*100);

console.log("you got", ca, "questions right!" );
console.log("you scored", percent.toString() + "%");