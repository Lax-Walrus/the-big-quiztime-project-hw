console.log("this is linked");
var answerButtons = document.querySelector(".answer-area");
var timer = document.querySelector("#timer-clock");
var startQuizTimer = document.querySelector("#start-quiz-timer");
var score = document.querySelector("#score");
var question = document.querySelector("#question");
var startButton = document.querySelector("#start-button");
var scoreContainer = document.querySelector(".score-container");
var nameInput = document.querySelector("#name-input");
var grade = document.querySelector("#grade");
var names = [];
var questions = ["Question 1", "Question 2", "Question 3", "Question 4"];
var question1A = ["answer 1", "answer 2", "answer 3", "answer 4"];
var question2A = ["answer 21", "answer 22", "answer 23", "answer 24"];
var question3A = ["answer 31", "answer 32", "answer 33", "answer 34"];
var question4A = ["answer 41", "answer 42", "answer 43", "answer 44"];
var quizTime = 99;
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
      startButton.style.display = "none";
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
  for (let i = 0; i < question.length; i++) {
    var questionOne = questions[i];
  }
  var questionOne = questions.slice(0, 1, 2);

  var questionArea1 = document.createElement("h1");
  questionArea1.textContent = questionOne;
  question.appendChild(questionArea1);

  for (let i = 0; i < question1A.length; i++) {
    var answerOne = question1A[i];

    var answersQuestionOne = document.createElement("button");
    answersQuestionOne.textContent = answerOne;
    answerButtons.appendChild(answersQuestionOne);
  }
  answerButtons.addEventListener("click", function () {
    if (answerButtons === true) {
      var correctanswerloc = document.createElement("h1");
      correctanswerloc.textContent = "correct";
      answerButtons.appendChild(correctanswerloc);
    } else {
      quizTime--;
      var wronganswerloc = document.createElement("h1");
      wronganswerloc.textContent = "wrong";
      answerButtons.appendChild(wronganswerloc);
    }
  });
}

function hiscores() {
  scoreContainer.style.display = "block";
  nameInput.addEventListener("submit", function (event) {
    event.preventDefault();
    var nameText = nameInput.nodeValue.trim();
    scores.push(nameText);
  });
}
