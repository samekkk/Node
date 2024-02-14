const prompt = require("prompt-sync")();

console.log("Welcome to My Program.");

const totalQuestions = 3;
let correctAnswers = 0;

const answer1 = prompt("What is my gamer tag?: ");
const correctAnswer1 = "s.r.s.";

if (answer1.toLowerCase() === correctAnswer1){
	console.log("You are correct!");
	correctAnswers += 1;
}

else{
	console.log("Oops! You are wrong!")
}

const answer2 = prompt("What is my fav food?: ");
const correctAnswer2 = "pizza";

if (answer2.toLowerCase() === correctAnswer2){
	console.log("You are correct!");
	correctAnswers += 1;
}

else{
	console.log("Oops! You are wrong!")
}

const answer3 = prompt("What do I do in my free time?: ");
const correctAnswer3 = "code";

if (answer3.toLowerCase() === correctAnswer3){
	console.log("You are correct!");
	correctAnswers += 1;
}

else{
	console.log("Oops! You are wrong!")
}

console.log("You got", correctAnswers, "questions correct!");
const percent = Math.round((correctAnswers / totalQuestions) * 100);
console.log("You got", percent + "%");


