var RS = require("readline-sync")
console.log("Lets Play, 'How much do you know Akshay ?'")
line();
var userName = RS.question("What's your name? ")
console.log("Welcome", userName, "!");


var score = 0;
function playQuiz(question, answer) {
  var userAnswer = RS.question(question);

  if (userAnswer === answer) {
    console.log("Correct answer")
    score++;
  }
  else {
    console.log("Wrong answer")
  }

}
function line() {
  console.log("-------------------------------------------------")
}

var questions = [{
  question: "What is Akshay's last name ?",
  answer: "Ramnani"
}, {
  question: "What is Akshay's Age ?",
  answer: "23"
}, {
  question: "Where Akshay was born ?",
  answer: "Petlad"
}, {
  question: "What is the highest qualifcation of Akshay ?",
  answer: "MCA"
}, {
  question: "What is the favourite color of Akshay ?",
  answer: "Blue"
}]

for (let i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  line();
  playQuiz(currentQuestion.question, currentQuestion.answer)
}
line();
console.log("Final score out of " + questions.length + " is " + score)