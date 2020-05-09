const myQuestions = [{
        question: "Quel est votre âge ?",
        answers: {
            a: "< 15 ans",
            b: "< 50 ans",
            c: "50-69 ans",
            d: ">= 70 ans"
        },
        correctAnswer: "c"
    },
    {
        question: "Pensez-vous avoir eu de la fièvre ces derniers jours (frissons, sueurs) ?",
        answers: {
            a: "OUI",
            b: "NON",
            c: "Ne Sait Pas!"
        },
        correctAnswer: "c"
    },
    {
        question: "Quelle est votre température ?",
        answers: {
            a: "35,5 - 37,7°",
            b: "37,8 – 38,9°C",
            c: ">= 39°C ou <= 35,4°"

        },
        correctAnswer: "d"
    },
    {
        question: "Avez-vous une toux ou une augmentation de votre toux habituelle ces derniers jours ?",
        answers: {
            a: "OUI",
            b: "NON"

        },
        correctAnswer: "c"
    },
    {
        question: "Avez-vous des douleurs musculaires ou des courbatures inhabituelles ces derniers jours ?",
        answers: {
            a: "OUI",
            b: "NON"

        },
        correctAnswer: "c"
    },
    {
        question: "Avez-vous un mal de gorge apparu ces derniers jours ?",
        answers: {
            a: "OUI",
            b: "NON"

        },
        correctAnswer: "c"
    },
    {
        question: "Avez-vous de la diarrhée ces dernières 24 heures (au moins 3 selles molles) ?",
        answers: {
            a: "OUI",
            b: "NON"

        },
        correctAnswer: "c"
    },
    {
        question: "Avez-vous une fatigue inhabituelle ces derniers jours ?",
        answers: {
            a: "OUI",
            b: "NON"

        },
        correctAnswer: "c"
    },
    {
        question: "cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de la journée ?",
        answers: {
            a: "OUI",
            b: "NON"
        },
        correctAnswer: "c"
    },
    {
        question: "Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?",
        answers: {
            a: "OUI",
            b: "NON"
        },
        correctAnswer: "c"
    },
    {
        question: "Avez-vous vu apparaître une gêne respiratoire ou une augmentation de votre gêne respiratoire habituelle ?",
        answers: {
            a: "OUI",
            b: "NON"

        },
        correctAnswer: "c"
    },
    {
        question: "Comment vous sentez-vous ?",
        answers: {
            a: "Bien",
            b: "Assez bien",
            c: "Mal",
            d: "Très mal"
        },
        correctAnswer: "c"
    },
    {
        question: "Avez-vous d’autre symptôme ?",
        answers: {
            a: "OUI",
            b: "NON"

        },
        correctAnswer: "c"
    },
    {
        question: "Avez-vous de l’hypertension artérielle ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?",
        answers: {
            a: "OUI",
            b: "NON",
            c: "Ne Sait Pas"
        },
        correctAnswer: "c"
    },
    {
        question: "Êtes-vous diabétique ?",
        answers: {
            a: "OUI",
            b: "NON"

        },
        correctAnswer: "c"
    },
    {
        question: "Avez-vous ou avez-vous eu un cancer ?",
        answers: {
            a: "OUI",
            b: "NON"

        },
        correctAnswer: "c"
    },
    {
        question: "Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?",
        answers: {
            a: "OUI",
            b: "NON"

        },
        correctAnswer: "c"
    },
    {
        question: "Avez-vous une insuffisance rénale chronique dialysée ?",
        answers: {
            a: "OUI",
            b: "NON"

        },
        correctAnswer: "c"
    },
    {
        question: "Avez-vous une maladie chronique du foie ?",
        answers: {
            a: "OUI",
            b: "NON"

        },
        correctAnswer: "c"
    },
    {
        question: "Êtes-vous enceinte ?",
        answers: {
            a: "OUI",
            b: "NON",
            c: "Homme"
        },
        correctAnswer: "c"
    },
    {
        question: "Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?",
        answers: {
            a: "OUI",
            b: "NON",
            c: "Ne Sait Pas"
        },
        correctAnswer: "c"
    },
    {
        question: "Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive)",
        answers: {
            a: "OUI",
            b: "NON",
            c: "Ne Sait Pas"
        },
        correctAnswer: "c"
    }
];

messageAffiche = [
    ` nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes. `,
    `téléconsultation ou médecin généraliste ou visite à domicile  préciser “appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent.” 
   `,
    `appel 141 `,
    ` téléconsultation ou médecin généraliste ou visite à domicile  `,
    `Votre situation ne relève probablement pas du Covid-19. Consultez votre médecin au moindre doute`,
    `Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la   situation.   Pour   toute information concernant   le   Covid-19 allez vers la page d’accueil. 
   `,
    ` Prenez contact avec votre médecin généraliste au moindre doute. Cette application n’est pour l’instant pas adaptée aux personnes de moins de 15 ans. En cas d’urgence, appeler le 15. `,
];