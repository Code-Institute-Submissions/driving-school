let questions = shuffle(questionData).slice(0, 10);

// Shuffles the questions
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

// Load all of the dom elements we'll need
const questionCard = document.getElementById("question-card");
const result = document.getElementById("result");
const question = document.getElementById("question");
const answerButtons = document.getElementsByClassName("answer");
const score = document.getElementById("score");
const questionNumber = document.getElementById("question-number");
const startAgain = document.getElementById("startAgain");
const resultQuestions = document.getElementById("answeredQuestions");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("previous");

// questionIndex is used to cycle through the questions
let questionIndex = 0;
let answeredQuestions = [];
let totalScore = 0;

function hideButton(btn) {
    btn.classList.add("hide");
}

function showButton(btn) {
    btn.classList.remove("hide");
}

// This function loads all of the game logic and
// starts the quiz
function startQuiz() {
    prepareQuestion(questionIndex);

// Start the quiz
startQuiz();