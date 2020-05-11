let contentTest = document.getElementById('contentTest');
let textbox = document.getElementById('textbox');
let demarer = document.getElementById('btn_test');
let cer1 = document.getElementById('cer1');
let cer2 = document.getElementById('cer2');
let cer3 = document.getElementById('cer3');
let final = document.getElementById('resultatFinal')

demarer.addEventListener('click', show)

function show() {
    contentTest.style.display = 'block';
    textbox.style.display = 'none';
    demarer.style.display = 'none';
    cer1.style.background = 'none';
    cer2.style.background = '#1078AD';
    final.style.display = 'none'
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
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::
let myvar = 1;
let qNumber = document.getElementById('qNumber');

function increment() {

    myvar++;
    qNumber.innerHTML = myvar + '/22';
}

function decrement() {
    myvar--;
    qNumber.innerHTML = myvar + '/22';
}


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
let totQuestion = myQuestions.length;
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
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
let affichage = document.getElementById('affichageResult');
resultat = [];
result1 = [];
result2 = [];
FdeG_mineur1 = [];
FdeG_mineur2 = [];
FdeG_mineur3 = [];

FdeG_majeur1 = [];
FdeG_majeur2 = [];
FdeG_majeur3 = [];

function aficheResult() {
    //:::::::::::::::::::::::::::::::::::** Resultat facteur pronostique **::::::::::::::::::::::::::::::::::::::::::::
    if (result1 == "b" &&
        FdeG_mineur1 == "" ||
        FdeG_mineur2 == "" ||
        FdeG_mineur3 == "" ||
        FdeG_majeur1 == "" ||
        FdeG_majeur2 == "" ||
        FdeG_majeur3 == "") {
        affichageResult.innerHTML = traitement[0]
        return;
    } else
    if (result2 == "c" && (FdeG_mineur1.length == 2 || FdeG_mineur2 == "v" || FdeG_mineur3.length == 1)) {
        affichageResult.innerHTML = traitement[1]
    } else
        //:::::::::::::::::::::::::::::::::::** Resultat facteur pronostique ou plus **:::::::::::::::::::::::::::::::::::::
        if (FdeG_mineur1 == "" ||
            FdeG_mineur2 == "" ||
            FdeG_mineur3 == "" ||
            FdeG_majeur1 == "" ||
            FdeG_majeur2 == "" ||
            FdeG_majeur3 == "") {
            affichageResult.innerHTML = traitement[1]
        }
    if (FdeG_mineur1.length == 2 || FdeG_mineur2 == "v" || FdeG_mineur3.length == 1) {
        affichageResult.innerHTML = traitement[1]
    }
    if ((FdeG_mineur1.length == 2 && FdeG_mineur2 == "v") ||
        (FdeG_mineur1.length == 2 && FdeG_mineur3.length == 1) ||
        (FdeG_mineur2 == "v" && FdeG_mineur3.length == 1)) {
        affichageResult.innerHTML = traitement[2]
    }
    //:::::::::::::::::::::::::::::::::::**  au moins un facteur de gravité majeur  **:::::::::::::::::::::::::::::::::::::
    if (FdeG_majeur1 == "z" || FdeG_majeur2 == "x" || FdeG_majeur3.length == 2) {
        affichageResult.innerHTML = traitement[2]
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
}






//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::



function showNextSlide() {
    let inputRadio = document.querySelector('input[type=radio]:checked');
    if (!inputRadio) {
        alert('choisi un reponse!')
        return;

    }
    //:::::::::::::::::::::::::::::::** A G E - C O N D I T I O N **::::::::::::::::::::::::::::
    let mineur = inputRadio.value;
    if (myQuestions[currentSlide].correctAnswer == mineur) {
        alert('Prenez contact avec votre médecin généraliste au moindre doute. Cette application n’est pour l’instant pas adaptée aux personnes de moins de 15 ans. En cas d’urgence, appeler le 15. ');
        inputRadio.checked = false;
        return false;
    }
    //:::::::::::::::::::::::::::::::::::::** result 1 **::::::::::::::::::::::::::::::::

    if (myQuestions[currentSlide].correctAnswer1 == mineur) {
        result1.push(mineur)
    }
    //:::::::::::::::::::::::::::::::::::::** result 2 **::::::::::::::::::::::::::::::::
    if (myQuestions[currentSlide].correctAnswer2 == mineur) {
        result2.push(mineur)
        console.log(result2)
    }
    //:::::::::::::::::::::::::::::::::::::** Facteur de gravité Mineur 1 **::::::::::::::::::::::::::::::::
    if (myQuestions[currentSlide].correctAnswer4 == mineur ||
        myQuestions[currentSlide].correctAnswer9 == mineur) {
        FdeG_mineur1.push(mineur);
        console.log(FdeG_mineur1);
    }
    //:::::::::::::::::::::::::::::::::::::** Facteur de gravité Mineur 2 **::::::::::::::::::::::::::::::::
    if (myQuestions[currentSlide].correctAnswer20 == mineur) {
        FdeG_mineur2.push(mineur);
        console.log(FdeG_mineur2);
    }
    //:::::::::::::::::::::::::::::::::::::** Facteur de gravité Mineur 3 **::::::::::::::::::::::::::::::::
    if (myQuestions[currentSlide].correctAnswer28 == mineur ||
        myQuestions[currentSlide].correctAnswer29 == mineur) {
        FdeG_mineur3.push(mineur);
        console.log(FdeG_mineur3);
    }
    //:::::::::::::::::::::::::::::::::::::** Facteur de gravité Majour 1 **::::::::::::::::::::::::::::::::
    if (myQuestions[currentSlide].correctAnswer24 == mineur) {
        FdeG_majeur1.push(mineur);
        console.log(FdeG_majeur1);
    }
    //:::::::::::::::::::::::::::::::::::::** Facteur de gravité Majour 2 **::::::::::::::::::::::::::::::::
    if (myQuestions[currentSlide].correctAnswer22 == mineur) {
        FdeG_majeur2.push(mineur);
        console.log(FdeG_majeur2);
    }
    //:::::::::::::::::::::::::::::::::::::** Facteur de gravité Majour 3 **::::::::::::::::::::::::::::::::
    if (myQuestions[currentSlide].correctAnswer4 == mineur ||
        myQuestions[currentSlide].correctAnswer9 == mineur) {
        FdeG_majeur3.push(mineur);
        console.log(FdeG_majeur3);
    }
    //:::::::::::::::::::::::::::::::::::::::::**Facteur de Gravité**:::::::::::::::::::::::::::::::::::::::::::::

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    inputRadio.checked = false;
    showSlide(currentSlide + 1);

    var v1 = document.getElementById('p1').value;
    document.getElementById("p1").value = v1 + 1;

    increment();
    aficheResult();








}

function showPreviousSlide() {

    showSlide(currentSlide - 1);
    if (currentSlide >= 0) {
        var v1 = document.getElementById('p1').value;
        document.getElementById("p1").value = v1 - 1;
        inputRadio.checked = false;
    }

    decrement();

}

function showResults() {
    let testo = document.getElementById('testo');

    if (currentSlide == totQuestion - 1) {
        testo.style.display = 'none';
        cer2.style.background = 'none';
        cer3.style.background = '#96C5DC';
        final.style.display = 'block';
    }
}

// on submit, show results
submitButton.addEventListener('click', showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);