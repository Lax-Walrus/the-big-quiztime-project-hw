console.log("this is linked");
var answerButtons = document.querySelector(".answer-area");
var timer = document.querySelector("#timer-clock");
var startQuizTimer = document.querySelector("#start-quiz-timer");
var score = document.querySelector("#score");
var question = document.querySelector("#question");
var startButton = document.querySelector("#start-button");
var questions = [1, 2, 3, 4];
var question1A = ["answer 1", "answer 2", "answer 3", "answer 4"];
var question2A = ["answer 21", "answer 22", "answer 23", "answer 24"];
var question3A = ["answer 31", "answer 32", "answer 33", "answer 34"];
var question4A = ["answer 41", "answer 42", "answer 43", "answer 44"];
var quizTime = 99;
var startingTime = 5;

question.style.display = "none";

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

  for (let i = 0; i < questions.length; i++) {
    var ranQuestions1 = questions[i];
    var questionOneSplit =
      ranQuestions1[Math.floor(Math.random() * ranQuestions1.length)];
    console.log(questionOneSplit);

    if (questionOneSplit === 1) {
      question.textContent = "Question 1";
      for (let i = 0; i < question1A.length; i++) {
        var ranAnswer1 = question1A[i];
        ranAnswer1[Math.floor(Math.random() * ranAnswer1.length)];
        var q1btns = document.createElement("button");
        q1btns.textContent = ranAnswer1;

        answerButtons.appendChild(q1btns);
      }
    }
    if (questionOneSplit === 2) {
      question.textContent = "Question 2";
      for (let i = 0; i < question2A.length; i++) {
        var ranAnswer2 = question2A[i];
        ranAnswer2[Math.floor(Math.random() * ranAnswer2.length)];
        var q2btns = document.createElement("button");
        q2btns.textContent = ranAnswer2;

        answerButtons.appendChild(q2btns);
      }
    }
    if (questionOneSplit === 3) {
      question.textContent = "Question 3";
      for (let i = 0; i < question3A.length; i++) {
        var ranAnswer3 = question3A[i];
        ranAnswer3[Math.floor(Math.random() * ranAnswer3.length)];
        var q3btns = document.createElement("button");
        q3btns.textContent = ranAnswer3;

        answerButtons.appendChild(q3btns);
      }
    }
    if (questionOneSplit === 4) {
      question.textContent = "Question 4";
      for (let i = 0; i < question4A.length; i++) {
        var ranAnswer4 = question4A[i];
        ranAnswer4[Math.floor(Math.random() * ranAnswer4.length)];
        var q4btns = document.createElement("button");
        q4btns.textContent = ranAnswer4;

        answerButtons.appendChild(q4btns);
      }
    }
  }
}
