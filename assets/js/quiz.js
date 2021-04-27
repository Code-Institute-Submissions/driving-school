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
    // If this is the first question hide the prev button
    if (questionIndex === 0) {
        hideButton(prevButton);
    }
}

// Populates the question with data from the provided questions
function prepareQuestion(questionIndex) {
    // sets the text of the dom question element to the text in object
    question.innerText = questions[questionIndex].question;

    questionNumber.innerText = `${questionIndex + 1}/${questions.length}`

    // loops through all of the dom answer buttons and populates them with the text
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].classList.remove("btn-outline-info");

        answerButtons[i].innerText = questions[questionIndex].answers[i].text;

        // If a question has been answered, select it
        if (questions[questionIndex].answers[i].answered) {
            answerButtons[i].classList.add("btn-outline-info");
        }

        // Add event listeners on all answer buttons
        answerButtons[i].addEventListener("click", selectButton);
    }
}

function selectButton(event) {
    // Remove the class to allow the user to change choices
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].classList.remove("btn-outline-info");
    }

    // Keep track of which answer the user selected
    const selectedButton = event.target.id;
    // Add a class that will display the button as clicked
    event.target.classList.add("btn-outline-info");

    // Deselect all questions if the user once to switch their choice
    questions[questionIndex].answers.forEach(ans => ans.answered = false);

    // note that the question has been selected
    questions[questionIndex].answers[parseInt(selectedButton) - 1].answered = true;
}

// Start the quiz
startQuiz();