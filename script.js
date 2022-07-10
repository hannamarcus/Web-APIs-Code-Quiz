// Variables

var startBtn = document.getElementById("#startBtn");
var homePageHighScore = document.getElementById("#homePageHighScore");
var quiz = document.getElementById("#quiz");
var timer = document.getElementById("#timer");
var questionsEl = document.getElementById("#questions");
var a = document.getElementById("#a");
var b = document.getElementById("#b");
var c = document.getElementById("#c");
var d = document.getElementById("#d");
var result = document.getElementById("#result");
var gameOver = document.getElementById("#gameOver");
var finalScore = document.getElementById("#finalScore");
var highScoreContainer = document.getElementById("#highScoreContainer");
var highScorePage = document.getElementById("#starhighScorePage");
var highScoreHeader = document.getElementById("#highScoreHeader");
var highScoreInitials = document.getElementById("#highScoreInitials");
var highScoreNumber = document.getElementById("#highScoreNumber");
var endGameBtn = document.getElementById("#endGameBtn");
var playAgain = document.getElementById("#playAgaim");
var clearHighScore = document.getElementById("#clearHighScore");


// Array with questions, options, and answers

let questions = [
{
question: "Your Question is Here",
answer: "Correct answer of the question is here",
options: [
  "Option 1",
  "option 2",
  "option 3",
  "option 4"
    ]
},

{
    numb: 2,
    question: "Your Question is Here",
    answer: "Correct answer of the question is here",
    options: [
      "Option 1",
      "option 2",
      "option 3",
      "option 4"
        ]
    },

    {
        numb: 3,
        question: "Your Question is Here",
        answer: "Correct answer of the question is here",
        options: [
          "Option 1",
          "option 2",
          "option 3",
          "option 4"
            ]
        },
];

// will need to create an eventListener to start the program, and will need to hide the intro page and display the first question

startBtn.addEventListener("click", startGame) 

function startGame() {
    startBtn.classList.add('hide');
    quiz.classList.remove('hide');
}



// eventListener of click not only moves to next page but also starts timer
    // review setTimer functions  or setInterval
// hiding of pages is done in .js, w/ class name
// calculation and viewing of store -- click each option button, check if correct not --> correct equals X amount, incorrect equals Y amount subtracted from the clock
// create through (?) to say GAME OVER when timer hits 0 --> then shows the results page
// results page pulls from local storage of past winners -- has to be ordered based on score (may be more complicated)
// check values of local Storage and how to set values in local Storage -- check section under .setItem and .getItem

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
/*function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        winGame();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}
*/