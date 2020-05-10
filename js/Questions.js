const myQuestions = [{
        question: "Quel est votre âge ?",
        answers: {
            a: "< 15 ans",
            b: "< 50 ans",
            c: "50-69 ans",
            d: ">= 70 ans"
        },
        correctAnswer: "a",
        correctAnswer1: "b",
        correctAnswer2: "c",
        correctAnswer3: "d"

    },
    {
        question: "Pensez-vous avoir eu de la fièvre ces derniers jours (frissons, sueurs) ?",
        answers: {
            e: "OUI",
            f: "NON",
            j: "Ne Sait Pas!"
        },
        correctAnswer4: "e",
        correctAnswer5: "f",
        correctAnswer6: "j"
    },
    {
        question: "Quelle est votre température ?",
        answers: {
            i: "35,5 - 37,7°",
            g: "37,8 – 38,9°C",
            k: ">= 39°C ou <= 35,4°"

        },
        correctAnswer7: "i",
        correctAnswer8: "g",
        correctAnswer9: "k"
    },
    {
        question: "Avez-vous une toux ou une augmentation de votre toux habituelle ces derniers jours ?",
        answers: {
            l: "OUI",
            m: "NON"

        },
        correctAnswer10: "l",
        correctAnswer11: "m"
    },
    {
        question: "Avez-vous des douleurs musculaires ou des courbatures inhabituelles ces derniers jours ?",
        answers: {
            n: "OUI",
            o: "NON"

        },
        correctAnswer12: "n",
        correctAnswer13: "o"
    },
    {
        question: "Avez-vous un mal de gorge apparu ces derniers jours ?",
        answers: {
            p: "OUI",
            q: "NON"

        },
        correctAnswer14: "p",
        correctAnswer15: "q"
    },
    {
        question: "Avez-vous de la diarrhée ces dernières 24 heures (au moins 3 selles molles) ?",
        answers: {
            r: "OUI",
            s: "NON"

        },
        correctAnswer16: "r",
        correctAnswer17: "s"
    },
    {
        question: "Avez-vous une fatigue inhabituelle ces derniers jours ?",
        answers: {
            t: "OUI",
            u: "NON"

        },
        correctAnswer18: "t",
        correctAnswer19: "u"
    },
    {
        question: "cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de la journée ?",
        answers: {
            v: "OUI",
            w: "NON"
        },
        correctAnswer20: "v",
        correctAnswer21: "w"
    },
    {
        question: "Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?",
        answers: {
            x: "OUI",
            y: "NON"
        },
        correctAnswer22: "x",
        correctAnswer23: "y"
    },
    {
        question: "Avez-vous vu apparaître une gêne respiratoire ou une augmentation de votre gêne respiratoire habituelle ?",
        answers: {
            z: "OUI",
            aa: "NON"

        },
        correctAnswer24: "z",
        correctAnswer25: "aa"
    },
    {
        question: "Comment vous sentez-vous ?",
        answers: {
            bb: "Bien",
            cc: "Assez bien",
            dd: "Mal",
            ee: "Très mal"
        },
        correctAnswer26: "bb",
        correctAnswer27: "cc",
        correctAnswer28: "dd",
        correctAnswer29: "ee"
    },
    {
        question: "Avez-vous d’autre symptôme ?",
        answers: {
            ff: "OUI",
            jj: "NON"

        },
        correctAnswer30: "ff",
        correctAnswer31: "jj"
    },
    {
        question: "Avez-vous de l’hypertension artérielle ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?",
        answers: {
            kk: "OUI",
            ll: "NON",
            mm: "Ne Sait Pas"
        },
        correctAnswer32: "kk",
        correctAnswer33: "ll",
        correctAnswer34: "mm"
    },
    {
        question: "Êtes-vous diabétique ?",
        answers: {
            nn: "OUI",
            oo: "NON"

        },
        correctAnswer35: "nn",
        correctAnswer36: "oo"
    },
    {
        question: "Avez-vous ou avez-vous eu un cancer ?",
        answers: {
            pp: "OUI",
            qq: "NON"

        },
        correctAnswer37: "pp",
        correctAnswer38: "qq"
    },
    {
        question: "Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?",
        answers: {
            rr: "OUI",
            ss: "NON"

        },
        correctAnswer39: "rr",
        correctAnswer40: "ss"
    },
    {
        question: "Avez-vous une insuffisance rénale chronique dialysée ?",
        answers: {
            tt: "OUI",
            uu: "NON"

        },
        correctAnswer41: "tt",
        correctAnswer42: "uu"
    },
    {
        question: "Avez-vous une maladie chronique du foie ?",
        answers: {
            vv: "OUI",
            ww: "NON"

        },
        correctAnswer43: "vv",
        correctAnswer44: "ww"
    },
    {
        question: "Êtes-vous enceinte ?",
        answers: {
            xx: "OUI",
            yy: "NON",
            zz: "Homme"
        },
        correctAnswer45: "zz",
        correctAnswer46: "yy",
        correctAnswer47: "zz"
    },
    {
        question: "Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?",
        answers: {
            aaa: "OUI",
            bbb: "NON",
            ccc: "Ne Sait Pas"
        },
        correctAnswer48: "aaa",
        correctAnswer49: "bbb",
        correctAnswer50: "ccc"
    },
    {
        question: "Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive)",
        answers: {
            ddd: "OUI",
            eee: "NON",
            fff: "Ne Sait Pas"
        },
        correctAnswer51: "ddd",
        correctAnswer52: "eee",
        correctAnswer53: "fff"
    }
];

traitement = [
    ` nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes. `,
    `téléconsultation ou médecin généraliste ou visite à domicile.`,
    `appel 141 `,
    ` téléconsultation ou médecin généraliste ou visite à domicile  `,
    `Votre situation ne relève probablement pas du Covid-19. Consultez votre médecin au moindre doute`,
    `Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la   situation.   Pour   toute information concernant   le   Covid-19 allez vers la page d’accueil. 
   `,
    ` Prenez contact avec votre médecin généraliste au moindre doute. Cette application n’est pour l’instant pas adaptée aux personnes de moins de 15 ans. En cas d’urgence, appeler le 15. `,
];