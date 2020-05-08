let contentTest = document.getElementById('contentTest');
let textbox = document.getElementById('textbox');
let demarer = document.getElementById('btn_test');
let cer1 = document.getElementById('cer1');
let cer2 = document.getElementById('cer2');
let cer3 = document.getElementById('cer3');
demarer.addEventListener('click', show)

function show() {
    contentTest.style.display = 'block';
    textbox.style.display = 'none';
    demarer.style.display = 'none';
    cer1.style.background = 'none';
    cer2.style.background = '#1078AD'
}

function buildQuiz() {
    // variable to store the HTML output
    const output = [];
    // for each question...
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

            // variable to store the list of possible answers
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {

                // ...add an HTML radio button
                answers.push(
                    `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    
                    <span>${currentQuestion.answers[letter]}</span>
                </label>`
                );
            }

            output.push(
                `<div class="slide">
                  <div class="question"> ${currentQuestion.question} </div>
                  <div class="answers">${answers.join("")}</div>
                </div>`
            );
        }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
}


// function showResults() { // gather answer containers from our quiz
// const answerContainers = quizContainer.querySelectorAll('.answers');

// keep track of user's answers
// let numCorrect = 0;

// for each question...
// myQuestions.forEach((currentQuestion, questionNumber) => {

// find selected answer
// const answerContainer = answerContainers[questionNumber];
// const selector = `input[name=question${questionNumber}]:checked`;
// const userAnswer = (answerContainer.querySelector(selector) || {}).value;

// if answer is correct
// if (userAnswer === currentQuestion.correctAnswer) {
// add to the number of correct answers
// numCorrect++;

// color the answers green
// answerContainers[questionNumber].style.color = 'lightgreen';
// }
// if answer is wrong or blank

// color the answers red
// answerContainers[questionNumber].style.color = 'red';


// });

// show number of correct answers out of total
//     resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
// }



//:::::::variables::::::::::::::::::::::::::

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');


// display quiz right away
buildQuiz();

// Pagination
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if (currentSlide === 0) {
        previousButton.style.display = 'none';
    } else {
        previousButton.style.display = 'inline-block';
    }
    if (currentSlide === slides.length - 1) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    } else {
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }
}
showSlide(0);

var bar = document.getElementById('bar');
var txt = document.getElementById('text');
let submit = document.getElementById('submit');
var count = 4.6;
var myvar = 1;
// Listen for an event on the button
// Increase the width of the bar by 10 percent(10%)
function step() {
    bar.style.width = count + '%';
    txt.innerHTML = myvar + '/22'
    if (count === 100) {
        count = 0;
        myvar = 1;
    } else {
        count += 4.6;
        myvar += 1;
    }


}
step();

function showNextSlide() {
    let inputRadio = document.querySelector('input[type=radio]:checked');
    if (!inputRadio) {
        alert('choisi un reponse!')
        return;

    }
    step();

    inputRadio.checked = false;
    showSlide(currentSlide + 1);


}

function showPreviousSlide() {
    showSlide(currentSlide - 1);










}

// on submit, show results
// submitButton.addEventListener('click', showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);