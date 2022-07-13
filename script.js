// Variables

var startBtn = document.getElementById("startBtn");
startBtn.addEventListener('click', startQuiz);
var homePageHighScore = document.getElementById("homePageHighScore");
var homepage = document.getElementById("homepage");
var quiz = document.getElementById("quiz");
var timer = document.getElementById("timer");
var questions = document.getElementById("questions");
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById("d");
var result = document.getElementById("result");
var gameOver = document.getElementById("gameOver");
var finalScore = document.getElementById("finalScore");
var highScoreContainer = document.getElementById("highScoreContainer");
var highScorePage = document.getElementById("starhighScorePage");
var highScoreHeader = document.getElementById("highScoreHeader");
var highScoreInitials = document.getElementById("highScoreInitials");
var highScoreNumber = document.getElementById("highScoreNumber");
var endGameBtn = document.getElementById("endGameBtn");
var playAgain = document.getElementById("playAgaim");
var clearHighScore = document.getElementById("clearHighScore");
var initials = document.getElementById("initials");
var highScores = JSON.parse(localStorage.getItem("High Scores")) || []

// Array with questions, options, and answers

// Quiz question object
var quizQuestions = [{
    question: "Favorite animal?",
    choiceA: "Owl",
    choiceB: "Cow",
    choiceC: "Dog",
    choiceD: "Cat",
    correctAnswer: "c"},
  {
    question: "Favorite color?",
    choiceA: "Green",
    choiceB: "Blue",
    choiceC: "Yellow",
    choiceD: "Red",
    correctAnswer: "a"},
   {
    question: "Age",
    choiceA: "44",
    choiceB: "23",
    choiceC: "60",
    choiceD: "27",
    correctAnswer: "b"},
    {
    question: "Hometown?",
    choiceA: "Chicago",
    choiceB: "New York",
    choiceC: "Seattle",
    choiceD: "Oakland",
    correctAnswer: "d"},
    {
    question: "Favorite Food?",
    choiceA: "Sushi",
    choiceB: "Pizza",
    choiceC: "Pasta",
    choiceD: "Popcorn",
    correctAnswer: "a"},  
    {
    question: "Favorite Movie?",
    choiceA: "Spiderman",
    choiceB: "Devil Wears Prada",
    choiceC: "Booksmart",
    choiceD: "The Notebook",
    correctAnswer: "c"},
    {
    question: "Which is NOT a favortie hobby?",
    choiceA: "Scuba Diving",
    choiceB: "Mountain Biking",
    choiceC: "Running",
    choiceD: "Surfing",
    correctAnswer: "b"},
        
    
    ];

    // Other global variables
var finalQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
var timeLeft = 76;
var timerInterval;
var score = 0;
var correct;

    // This function cycles through the object array containing the quiz questions to generate the questions and answers.
function generateQuizQuestion(){
    gameOver.style.display = "none";
    if (currentQuestionIndex === finalQuestionIndex){
    End ()
    return
    }
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questions.innerHTML = "<p>" + currentQuestion.question + "</p>";
    a.innerHTML = currentQuestion.choiceA;
    b.innerHTML = currentQuestion.choiceB;
    c.innerHTML = currentQuestion.choiceC;
    d.innerHTML = currentQuestion.choiceD;
};

var scoreList = document.getElementById("scoreList");
function renderScores() {
    quiz.style.display = "none";
    homepage.style.display = "none";
    highScoreContainer.style.display = "block";
    gameOver.style.display = "none";  
    highScoreContainer.style.display = "block"  ;

    for(var i = 0; i < highScores.length; i++) {
        var li = document.createElement("li");
        li.innerText = `initials: ${highScores[i].initials} score: ${highScores[i].score}`;
        scoreList.appendChild(li);
    }
}

// Start Quiz function starts the TimeRanges, hides the start button, and displays the first quiz question.
function startQuiz(){
    gameOver.style.display = "none";
    quiz.style.display = "block";
    homepage.style.display = "none";
    generateQuizQuestion();

    //Timer
    timerInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = "Time left: " + timeLeft;
    
        if(timeLeft === 0) {
          clearInterval(timerInterval);
          End();
        }
      }, 1000);
    questions.style.display = "block";
}

function checkAnswer(choice) {
    console.log(choice) 
    if (choice == quizQuestions[currentQuestionIndex].correctAnswer) {
    console.log("Correct");
    score += 1
}
    else {
        timeLeft -= 10;
    }
    currentQuestionIndex++
    generateQuizQuestion();
}

function End(){
    clearInterval(timerInterval);
    quiz.style.display = "none";
    homepage.style.display = "none";
    highScoreContainer.style.display = "block";
    gameOver.style.display = "block";
}

function submitScore(){
var data = {
initials: initials.value,
score: score,
}
highScores.push(data),
localStorage.setItem("High Scores", JSON.stringify(highScores));
renderScores();
}




