console.log("this is linked");
// vars and element links
var answers = document.getElementsByClassName("btn");
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
var userValues = JSON.parse(localStorage.getItem("userValues")) || [];
var names = [];
var questions = [
  {
    question: "Who is at the bottom of crystal lake?",
    answers: ["Freddy Krueger", "Jason Voorhees", "Amy Voorhees", "Me"],
    correctAnswer: "Jason Voorhees",
  },
  {
    question: "who invades dreams?",
    answers: ["My Crush", "Michael Myers", "Leather Face", "Freddy Krueger"],
    correctAnswer: "Freddy Krueger",
  },
  {
    question: "who's a big fan of liver and lima beans?",
    answers: ["Chucky", "Jigsaw", "Hannibal Lecter", "gross"],
    correctAnswer: "Hannibal Lecter",
  },

  {
    question: "Who is horror show host voice by John Kassir? ",
    answers: ["Tiny Tim", "Crypt-Keeper", "Buffalo Bill", "Nosferatu"],
    correctAnswer: "Crypt-Keeper",
  },
];
timer;
var questionIndex = 0;
var quizTime = 99;
var startingTime = 1;
var finalScore = 99;
// display and hiding content
console.log(userValues);
answerAreax.style.display = "none";
question.style.display = "none";
scoreContainer.style.display = "none";
// question and answer connect function used on line 91
var showAnswers = function (currentQuestion) {
  if (questionIndex === 4) {
    return;
  }
  question.textContent = currentQuestion.question;
  answerOne.textContent = currentQuestion.answers[0];
  answerTwo.textContent = currentQuestion.answers[1];
  answerThree.textContent = currentQuestion.answers[2];
  answerFour.textContent = currentQuestion.answers[3];
  answerOne.value = currentQuestion.answers[0];
  answerTwo.value = currentQuestion.answers[1];
  answerThree.value = currentQuestion.answers[2];
  answerFour.value = currentQuestion.answers[3];
  console.log(questionIndex);
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
      clearInterval(timeInterval);
      hiscores();
    }
  }, 1000);

  //  question and answer match up function see line 51
  showAnswers(questions[0]);

  // for loop to put answer on buttons
  for (let i = 0; i < answers.length; i++)
    answers[i].addEventListener("click", function () {
      if (questionIndex < 4) {
        if (this.textContent === questions[questionIndex].correctAnswer) {
          grade.textContent = "you are correct";
          questionIndex++;
          showAnswers(questions[questionIndex]);
        } else {
          grade.textContent = "are you sure about that?";
          quizTime = quizTime - 10;
        }
      } else {
        hiscores();
        clearInterval(timeInterval);
      }
    });

  // hiscores feature
  var scoreList = document.querySelector(".score-list");

  function hiscores() {
    var pastScores = document.querySelector(".past-scores");
    var submitscore = document.querySelector("#submit-scores");
    question.style.display = "none";
    answerAreax.style.display = "none";
    grade.style.display = "none";
    scoreContainer.style.display = "block";
    submitscore.addEventListener("click", function () {
      var scores = { nameInput: nameInput.value, score: quizTime };
      userValues.push(scores);
      console.log(userValues);

      localStorage.setItem("userValues", JSON.stringify(userValues));

      for (let i = 0; i < 10; i++) {
        if (userValues[i]) {
          var li = document.createElement("li");
          li.textContent =
            "Player " +
            userValues[i].nameInput +
            " Score " +
            userValues[i].score;
          pastScores.appendChild(li);
        }
      }
    });
  }
}
