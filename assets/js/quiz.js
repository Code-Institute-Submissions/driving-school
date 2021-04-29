//questionData is defined in questions.js (JSHint warning)
let questions = shuffle(questionData).slice(0, 6);

// Shuffles the questions
//Credit: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array/6274381#6274381
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
const startAgain = document.getElementById("startAgain");
const resultQuestions = document.getElementById("answeredQuestions");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("previous");

// questionIndex is used to cycle through the questions
let questionIndex = 0;
let totalScore = 0;

function hideButton(btn) {
    btn.classList.add("hide");
}

function showButton(btn) {
    btn.classList.remove("hide");
}

// This function loads all of the game logic and starts the quiz
function startQuiz() {
    prepareQuestion(questionIndex);

    // If this is the first question, hide the "previous" button
    if (questionIndex === 0) {
        hideButton(prevButton);
    }
}

// Populates the question with data from the provided questions
function prepareQuestion(questionIndex) {

    // Sets the text of the dom question element to text in object
    question.innerText = questions[questionIndex].question;

    // Loops through all of the dom answer buttons and populates them with text
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

    // Deselect all questions if the user changes their choice
    questions[questionIndex].answers.forEach(ans => ans.answered = false);

    // Note that the question has been selected
    questions[questionIndex].answers[parseInt(selectedButton) - 1].answered = true;
}

function displayResult() {
    // For each question ,create a DOM element to add to represent the answers section
    questions.forEach(question => {
        const wrapper = document.createElement("div");
        const heading = document.createElement("div");
        const answersWrapper = document.createElement("div");

        wrapper.classList.add("question-card", "answers-card");
        heading.classList.add("heading", "d-flex", "justify-content-between");
        answersWrapper.classList.add("answers", "d-flex", "flex-column");

        heading.innerHTML = `<h3 id="question" class="mb-4">${question.question}</h3>`;

        question.answers.forEach(ans => {
            const showAnswer = document.createElement("button");
            showAnswer.classList.add("answer", "btn", "btn-outline-secondary", "text-start", "mb-3", "disabled");

            showAnswer.innerText = `${ans.text}`;
            answersWrapper.appendChild(showAnswer);

            // Calculate the score
            if (ans.answered && ans.correct) {
                totalScore += 1;
            }
            // If the answer a user selected is incorrect, add a red background
            if (ans.answered && !ans.correct) {
                showAnswer.classList.remove("btn-outline-secondary");
                showAnswer.classList.add("btn-danger");
            }
            // If it's correct, add a green background
            if (ans.correct) {
                showAnswer.classList.remove("btn-outline-secondary");
                showAnswer.classList.add("btn-success");
            }
        });

        questionCard.classList.add("hidden");
        result.classList.remove("hidden");
        score.innerText = `Result: ${totalScore}/5`;

        wrapper.appendChild(heading);
        wrapper.appendChild(answersWrapper);

        resultQuestions.appendChild(wrapper);
    });

    // Start again
    startAgain.addEventListener("click", () => location.reload());
}

// Handle forwarding to next question
nextButton.addEventListener("click", () => {
    // Increasing the question index
    questionIndex++;

    // Preparing the next question
    prepareQuestion(questionIndex);

    // Show the previous button
    if (questionIndex > 0) {
        showButton(prevButton);
    }

    // Hide the next button at the end of the questions list
    if (questionIndex === questions.length - 1) {
        hideButton(nextButton);
    }
    if (questionIndex === questions.length - 1) {
        // Display the results if we got to the end of the quiz
        displayResult();
    }
});

prevButton.addEventListener("click", () => {
    // Decrease the question index
    questionIndex--;
    // Prepare the previous question
    prepareQuestion(questionIndex);
    // Hide the previous button
    if (questionIndex == 0) {
        hideButton(prevButton);
    }
    // Show the next button if not at the end of the questions list
    if (questionIndex !== questionIndex.length - 1) {
        showButton(nextButton);
    }
});

// Start the quiz
startQuiz();