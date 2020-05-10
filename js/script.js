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
var resultat = [];
tabSymptome = [];
tabfacteurPronostique = [];
tabfacteurMineur = [];
tabfacteurMajeur = [];

resultSyptome = 0;
resultFacteurPronostique = 0;
resultfacteurMineur = 0;
resultfacteurMajeur = 0;

trireponces = () => {
    for (let i = 0; i < resultat.length; i++) {
        if (i == 1) {
            tabfacteurMineur.push(resultat[i]);
            tabfacteurMajeur.push(resultat[i]);
        } else if (i >= 11 && i <= 21) {
            tabfacteurPronostique.push(resultat[i]);
        } else if (i == 7 || i == 8) {
            tabfacteurMajeur.push(resultat[i]);
        } else if (i == 6 || i == 9) {
            tabfacteurMineur.push(resultat[i]);
        }
        if (i >= 0 && i <= 9) {
            tabSymptome.push(resultat[i]);
        }
    }
};

nombreDeFacteur = () => {
    for (let i = 0; i < tabSymptome.length; i++) {
        if (tabSymptome[i] == "Oui") {
            resultSyptome++;
        }
    }
    for (let i = 0; i < tabfacteurPronostique.length; i++) {
        if (tabfacteurPronostique[i] >= 70 || tabfacteurPronostique[i] == "Oui") {
            resultFacteurPronostique++;
        }
    }
    for (let i = 0; i < tabfacteurMineur.length; i++) {
        if (
            tabfacteurMineur[i] >= 39 ||
            tabfacteurMineur[i] == "Oui" ||
            tabfacteurMineur[i] == "Très fatigué" ||
            tabfacteurMineur[i] == " fatigué"
        ) {
            resultfacteurMineur++;
        }
    }
    for (let i = 0; i < tabfacteurMajeur.length; i++) {
        if (tabfacteurMajeur[i] <= 35.4 || tabfacteurMajeur[i] == "Oui") {
            resultfacteurMajeur++;
        }
    }
};
let messageFinal = document.getElementById("affichageResult");
Algorithme = () => {
    if (
        resultat[0] == "Oui" ||
        (resultat[2] == "Oui" && resultat[4] == "Oui") ||
        (resultat[2] == "Oui" && resultat[3] == "Oui") ||
        (resultat[0] == "Oui" && resultat[5] == "Oui")
        //Patient avec fièvre, ou toux + mal de gorge, ou toux + courbatures ou fièvre + diarrhée :
    ) {
        if (resultFacteurPronostique == 0) {
            if (
                resultfacteurMajeur == 0 &&
                resultfacteurMineur == 0 &&
                resultat[10] < 50
            ) {
                messageFinal.innerText = messageAffiche[0];
            } else if (
                resultfacteurMajeur == 0 &&
                resultfacteurMineur >= 1 &&
                (resultat[10] >= 50 || resultat[10] <= 69)
            ) {
                messageFinal.innerText = messageAffiche[1];
            }
        } else {
            if (resultfacteurMajeur == 0 && resultfacteurMineur <= 1) {
                messageFinal.innerText = messageAffiche[1];
            } else if (resultfacteurMajeur == 0 && resultfacteurMineur >= 2) {
                messageFinal.innerText = messageAffiche[2];
            }
        }
        if (resultfacteurMajeur >= 1) {
            messageFinal.innerText = messageAffiche[2];
        }
    } else if (resultat[0] == "Oui" && resultat[2] == "Oui") {
        if (resultFacteurPronostique == 0) {
            if (resultfacteurMajeur == 0 && resultfacteurMineur >= 1) {
                messageFinal.innerText = messageAffiche[3];
            }
        } else {
            if (resultfacteurMajeur == 0 && resultfacteurMineur <= 1) {
                messageFinal.innerText = messageAffiche[3];
            } else if (resultfacteurMajeur == 0 && resultfacteurMineur > 1) {
                messageFinal.innerText = messageAffiche[2];
            }
        }
        if (resultfacteurMajeur > 0) {
            messageFinal.innerText = messageAffiche[2];
        }
    } else if (
        resultat[0] == "Oui" ||
        resultat[2] == "Oui" ||
        resultat[3] == "Oui" ||
        resultat[4] == "Oui"
    ) {
        if (resultfacteurMajeur == 0 && resultfacteurMineur == 0) {
            messageFinal.innerText = messageAffiche[4];
        } else {
            if (resultFacteurPronostique > 0) {
                messageFinal.innerText = messageAffiche[4] + " " + messageAffiche[2];
            }
        }
    } else if (resultSyptome == 0) {
        messageFinal.innerText = messageAffiche[5];
    } else if (resultat[10] < 15) {
        messageFinal.innerText = messageAffiche[6];
    }
};
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::



function showNextSlide() {
    let inputRadio = document.querySelector('input[type=radio]:checked');
    if (!inputRadio) {
        alert('choisi un reponse!')
        return;

    }
    let mineur = inputRadio.value;
    if (myQuestions[currentSlide].correctAnswer == mineur) {
        alert('Prenez contact avec votre médecin généraliste au moindre doute. Cette application n’est pour l’instant pas adaptée aux personnes de moins de 15 ans. En cas d’urgence, appeler le 15. ');
        modal.style.display = "block";
        inputRadio.checked = false;
        return false;
    }

    inputRadio.checked = false;
    showSlide(currentSlide + 1);

    var v1 = document.getElementById('p1').value;
    document.getElementById("p1").value = v1 + 1;

    increment();





}

function showPreviousSlide() {

    showSlide(currentSlide - 1);
    if (currentSlide >= 0) {
        var v1 = document.getElementById('p1').value;
        document.getElementById("p1").value = v1 - 1;
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
        trireponces();
        nombreDeFacteur();
        Algorithme();
    }
}

// on submit, show results
submitButton.addEventListener('click', showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);