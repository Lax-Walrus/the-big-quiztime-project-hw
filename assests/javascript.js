console.log("this is linked");
// vars and element links
var answersbtn = document.getElementsByClassName("btn");
var answerAreax = document.querySelector(".answer-area");
var answerOne = document.querySelector("#Answer1");
var answerTwo = document.querySelector("#Answer2");
var answerThree = document.querySelector("#Answer3");
var answerFour = document.querySelector("#Answer4");
var timer = document.querySelector("#timer-clock");
var startQuizTimer = document.querySelector("#start-quiz-timer");
var score = document.querySelector("#score");
var question = document.querySelector("#question");
var startButton = document.querySelector("#start-button");
var scoreContainer = document.querySelector(".score-container");
var nameInput = document.querySelector("#name-input");
var grade = document.querySelector("#grade");
var welcomeToMyGame = document.querySelector(".opening-header");
var names = [];
var questions = [
  {
    question: "What is your favorite color?",
    answers: ["Red", "Blue", "Green", "bloody murder"],
    correctAnswer: "bloody murder",
  },
  {
    question: "scary movie?",
    answers: ["dying", "night", "of", "bloody murder"],
    correctAnswer: "bloody murder",
  },
  {
    question: "potatoes",
    answers: ["dying", "night", "of", "bloody murder"],
    correctAnswer: "bloody murder",
  },

  {
    question: "What is your favorite band?",
    answers: ["dogs", "Blue", "Green", "bloody murder"],
    correctAnswer: "bloody murder",
  },
];
var questionIndex = 0;
var quizTime = 99;
var startingTime = 1;
var finalScore = 99;
// display and hiding content
answerAreax.style.display = "none";
question.style.display = "none";
scoreContainer.style.display = "none";

var showAnswers = function (currentQuestion) {
  question.textContent = currentQuestion.question;
  answerOne.textContent = currentQuestion.answers[0];
  answerTwo.textContent = currentQuestion.answers[1];
  answerThree.textContent = currentQuestion.answers[2];
  answerFour.textContent = currentQuestion.answers[3];
  answerOne.value = currentQuestion.answers[0];
  answerTwo.value = currentQuestion.answers[1];
  answerThree.value = currentQuestion.answers[2];
  answerFour.value = currentQuestion.answers[3];
};

// start quiz timer pre-timer
startButton.addEventListener("click", function () {
  var startTimerInterval = setInterval(function () {
    startingTime--;
    startQuizTimer.textContent = startingTime + " seconds left till pop quiz";
    if (startingTime === 0) {
      clearInterval(startTimerInterval);
      startQuizTimer.textContent = "";
      startButton.style.display = "none";
      startQuiz();
    }
  }, 1000);
});
// quiz start timer
function startQuiz() {
  welcomeToMyGame.style.display = "none";
  question.style.display = "block";
  answerAreax.style.display = "block";

  var timeInterval = setInterval(function () {
    quizTime--;
    timer.textContent = quizTime + " left in quiz";
    timer.style.textAlign = "center";
    if (quizTime === 0) {
      clearInterval(quizTime);
      hiscores();
    }
  }, 1000);

  //   question 1
  showAnswers(questions[0]);

  //   answer 1

  for (let i = 0; i < answers.length; i++)
    answers[i].addEventListener("click", function () {
      if (this.textContent === questions[questionIndex].correctAnswer) {
        questionIndex++;
        alert("i'm correct");

        showAnswers(questions[questionIndex]);
      } else this.textContent !== questions[questionIndex].correctAnswer;
      alert("i'm wrong");
    });
  console.log();

  // hiscores feature

  function hiscores() {
    scoreContainer.style.display = "block";
    nameInput.addEventListener("submit", function (event) {
      event.preventDefault();
      var nameText = nameInput.nodeValue.trim();
      scores.push(nameText);
    });
  }
}
