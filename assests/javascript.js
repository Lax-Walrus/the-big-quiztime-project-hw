console.log("this is linked");
var answerButtons = document.querySelector(".answer-area");
var timer = document.querySelector("#timer-clock");
var startQuizTimer = document.querySelector("#start-quiz-timer");
var score = document.querySelector("#score");
var question = document.querySelector("#question");
var startButton = document.querySelector("#start-button");
var scoreContainer = document.querySelector(".score-container");
var nameInput = document.querySelector("#name-input");
var names = [];
var questions = [1, 2, 3, 4];
var question1A = ["answer 1", "answer 2", "answer 3", "answer 4"];
var question2A = ["answer 21", "answer 22", "answer 23", "answer 24"];
var question3A = ["answer 31", "answer 32", "answer 33", "answer 34"];
var question4A = ["answer 41", "answer 42", "answer 43", "answer 44"];
var quizTime = 1;
var startingTime = 5;
var finalScore = 99;

question.style.display = "none";
scoreContainer.style.display = "none";

startButton.addEventListener("click", function () {
  var startTimerInterval = setInterval(function () {
    startingTime--;
    startQuizTimer.textContent = startingTime + " seconds left till pop quiz";
    if (startingTime === 0) {
      clearInterval(startTimerInterval);
      startQuizTimer.textContent = "";
      startButton.parentNode.removeChild(startButton);
      startQuiz();
    }
  }, 1000);
});

function startQuiz() {
  question.style.display = "block";

  var timeInterval = setInterval(function () {
    quizTime--;
    timer.textContent = quizTime + " left in quiz";
    if (quizTime === 0) {
      clearInterval(quizTime);
      hiscores();
    }
  }, 1000);

  function quizQuestions() {
    questionOne.createElement("h1");
    questionOne.textContent = "Question one goes here";
  }
}

function hiscores() {
  scoreContainer.style.display = "block";
  nameInput.addEventListener("submit", function (event) {
    event.preventDefault();
    var nameText = nameInput.nodeValue.trim();
    scores.push(nameText);
  });
}
