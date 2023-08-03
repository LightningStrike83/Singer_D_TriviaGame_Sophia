console.log('Welcome to the world of Pokemon!');

let question1 = document.querySelector ("#question_1");
let question2 = document.querySelector ("#question_2");
let question3 = document.querySelector ("#question_3");
let question4 = document.querySelector ("#question_4");
let question5 = document.querySelector ("#question_5");
let question6 = document.querySelector ("#question_6");
let question7 = document.querySelector ("#question_7");
let question8 = document.querySelector ("#question_8");
let question9 = document.querySelector ("#question_9");
let question10 = document.querySelector ("#question_10");

function loadQuestion() {
    resetElementsToOriginalState();
    let question = this.dataset.member;

    document.querySelector('.question').textContent = questions [question].question
    document.querySelector('#answer_1').textContent = questions [question].answer1
    document.querySelector('#answer_2').textContent = questions [question].answer2
    document.querySelector('#answer_3').textContent = questions [question].answer3
    document.querySelector('#answer_4').textContent = questions [question].answer4
}

function loadAnswer1() {
    document.querySelector('#answer_1_box').classList.add("wrong");
    document.querySelector('#answer_2_box').classList.add("right");
    document.querySelector('#answer_3_box').classList.add("wrong");
    document.querySelector('#answer_4_box').classList.add("wrong");
    
    let rightAnswer = document.querySelectorAll (".right");
    let wrongAnswer = document.querySelectorAll (".wrong")

    function rightColour() {
        var rightAnswer = document.querySelectorAll(".right");
        rightAnswer.forEach(change => change.style.backgroundColor = "#50C878");

        var wrongAnswer = document.querySelectorAll(".wrong");
        wrongAnswer.forEach(change => change.style.backgroundColor = "#DC143C");

        let questionBox = document.querySelector("#question_1");
        questionBox.style.backgroundColor = "#50C878";

        removeListener()
        scorePoint()
    }
    
    function wrongColour() {
        var rightAnswer = document.querySelectorAll(".right");
        rightAnswer.forEach(change => change.style.backgroundColor = "#50C878");
    
        var wrongAnswer = document.querySelectorAll(".wrong");
        wrongAnswer.forEach(change => change.style.backgroundColor = "#DC143C");

        let questionBox = document.querySelector("#question_1");
        questionBox.style.backgroundColor = "#DC143C";

        removeListener()
    }

    function removeListener() {
        var rightListen = document.querySelectorAll(".right");
        rightListen.forEach(listen => listen.removeEventListener('click', rightColour));

        var wrongListen = document.querySelectorAll(".wrong");
        wrongListen.forEach(listen => listen.removeEventListener ('click', wrongColour));
    }

    function scorePoint() {
        let boardScore = document.querySelector("#scoreboard_score");
        let currentValue = parseInt(boardScore.textContent);
        let newValue = currentValue + 1;
        boardScore.textContent = newValue;
    }

    rightAnswer.forEach(change => change.addEventListener('click', rightColour));
    wrongAnswer.forEach(change => change.addEventListener ('click', wrongColour));
}

function loadAnswer2() {
    document.querySelector('#answer_1_box').classList.add("right");
    document.querySelector('#answer_2_box').classList.add("wrong");
    document.querySelector('#answer_3_box').classList.add("wrong");
    document.querySelector('#answer_4_box').classList.add("wrong");
    
    let rightAnswer = document.querySelectorAll (".right");
    let wrongAnswer = document.querySelectorAll (".wrong")

    function rightColour() {
        var rightAnswer = document.querySelectorAll(".right");
        rightAnswer.forEach(change => change.style.backgroundColor = "#50C878");

        var wrongAnswer = document.querySelectorAll(".wrong");
        wrongAnswer.forEach(change => change.style.backgroundColor = "#DC143C");

        let questionBox = document.querySelector("#question_2");
        questionBox.style.backgroundColor = "#50C878";

        removeListener()
        scorePoint()
    }
    
    function wrongColour() {
        var rightAnswer = document.querySelectorAll(".right");
        rightAnswer.forEach(change => change.style.backgroundColor = "#50C878");
    
        var wrongAnswer = document.querySelectorAll(".wrong");
        wrongAnswer.forEach(change => change.style.backgroundColor = "#DC143C");

        let questionBox = document.querySelector("#question_2");
        questionBox.style.backgroundColor = "#DC143C";

        removeListener()
    }

    function removeListener() {
        var rightListen = document.querySelectorAll(".right");
        rightListen.forEach(listen => listen.removeEventListener('click', rightColour));

        var wrongListen = document.querySelectorAll(".wrong");
        wrongListen.forEach(listen => listen.removeEventListener ('click', wrongColour));
    }

    function scorePoint() {
        let boardScore = document.querySelector("#scoreboard_score");
        let currentValue = parseInt(boardScore.textContent);
        let newValue = currentValue + 1;
        boardScore.textContent = newValue;
    }

    rightAnswer.forEach(change => change.addEventListener('click', rightColour));
    wrongAnswer.forEach(change => change.addEventListener ('click', wrongColour));
}

function loadAnswer3() {
    document.querySelector('#answer_1_box').classList.add("wrong");
    document.querySelector('#answer_2_box').classList.add("wrong");
    document.querySelector('#answer_3_box').classList.add("right");
    document.querySelector('#answer_4_box').classList.add("wrong");
    
    let rightAnswer = document.querySelectorAll (".right");
    let wrongAnswer = document.querySelectorAll (".wrong")

    function rightColour() {
        var rightAnswer = document.querySelectorAll(".right");
        rightAnswer.forEach(change => change.style.backgroundColor = "#50C878");

        var wrongAnswer = document.querySelectorAll(".wrong");
        wrongAnswer.forEach(change => change.style.backgroundColor = "#DC143C");

        var questionBox = document.querySelector("#question_3");
        questionBox.style.backgroundColor = "#50C878";

        removeListener()
        scorePoint()
    }
    
    function wrongColour() {
        var rightAnswer = document.querySelectorAll(".right");
        rightAnswer.forEach(change => change.style.backgroundColor = "#50C878");
    
        var wrongAnswer = document.querySelectorAll(".wrong");
        wrongAnswer.forEach(change => change.style.backgroundColor = "#DC143C");

        var questionBox = document.querySelector("#question_3");
        questionBox.style.backgroundColor = "#DC143C";

        removeListener()
    }

    function removeListener() {
        var rightListen = document.querySelectorAll(".right");
        rightListen.forEach(listen => listen.removeEventListener('click', rightColour));

        var wrongListen = document.querySelectorAll(".wrong");
        wrongListen.forEach(listen => listen.removeEventListener ('click', wrongColour));
    }

    function scorePoint() {
        let boardScore = document.querySelector("#scoreboard_score");
        let currentValue = parseInt(boardScore.textContent);
        let newValue = currentValue + 1;
        boardScore.textContent = newValue;
    }

    rightAnswer.forEach(change => change.addEventListener('click', rightColour));
    wrongAnswer.forEach(change => change.addEventListener ('click', wrongColour));
}

function loadAnswer4() {
    document.querySelector('#answer_1_box').classList.add("wrong");
    document.querySelector('#answer_2_box').classList.add("wrong");
    document.querySelector('#answer_3_box').classList.add("wrong");
    document.querySelector('#answer_4_box').classList.add("right");
    
    let rightAnswer = document.querySelectorAll (".right");
    let wrongAnswer = document.querySelectorAll (".wrong")

    function rightColour() {
        var rightAnswer = document.querySelectorAll(".right");
        rightAnswer.forEach(change => change.style.backgroundColor = "#50C878");

        var wrongAnswer = document.querySelectorAll(".wrong");
        wrongAnswer.forEach(change => change.style.backgroundColor = "#DC143C");

        var questionBox = document.querySelector("#question_4");
        questionBox.style.backgroundColor = "#50C878";

        removeListener()
        scorePoint()
    }
    
    function wrongColour() {
        var rightAnswer = document.querySelectorAll(".right");
        rightAnswer.forEach(change => change.style.backgroundColor = "#50C878");
    
        var wrongAnswer = document.querySelectorAll(".wrong");
        wrongAnswer.forEach(change => change.style.backgroundColor = "#DC143C");

        var questionBox = document.querySelector("#question_4");
        questionBox.style.backgroundColor = "#DC143C";

        removeListener()
    }

    function removeListener() {
        var rightListen = document.querySelectorAll(".right");
        rightListen.forEach(listen => listen.removeEventListener('click', rightColour));

        var wrongListen = document.querySelectorAll(".wrong");
        wrongListen.forEach(listen => listen.removeEventListener ('click', wrongColour));
    }

    function scorePoint() {
        let boardScore = document.querySelector("#scoreboard_score");
        let currentValue = parseInt(boardScore.textContent);
        let newValue = currentValue + 1;
        boardScore.textContent = newValue;
    }

    rightAnswer.forEach(change => change.addEventListener('click', rightColour));
    wrongAnswer.forEach(change => change.addEventListener ('click', wrongColour));
}

function loadAnswer5() {
    document.querySelector('#answer_1_box').classList.add("wrong");
    document.querySelector('#answer_2_box').classList.add("right");
    document.querySelector('#answer_3_box').classList.add("wrong");
    document.querySelector('#answer_4_box').classList.add("wrong");
    
    let rightAnswer = document.querySelectorAll (".right");
    let wrongAnswer = document.querySelectorAll (".wrong")

    function rightColour() {
        var rightAnswer = document.querySelectorAll(".right");
        rightAnswer.forEach(change => change.style.backgroundColor = "#50C878");

        var wrongAnswer = document.querySelectorAll(".wrong");
        wrongAnswer.forEach(change => change.style.backgroundColor = "#DC143C");

        var questionBox = document.querySelector("#question_5");
        questionBox.style.backgroundColor = "#50C878";

        removeListener()
        scorePoint()
    }
    
    function wrongColour() {
        var rightAnswer = document.querySelectorAll(".right");
        rightAnswer.forEach(change => change.style.backgroundColor = "#50C878");
    
        var wrongAnswer = document.querySelectorAll(".wrong");
        wrongAnswer.forEach(change => change.style.backgroundColor = "#DC143C");

        var questionBox = document.querySelector("#question_5");
        questionBox.style.backgroundColor = "#DC143C";

        removeListener()
    }

    function removeListener() {
        var rightListen = document.querySelectorAll(".right");
        rightListen.forEach(listen => listen.removeEventListener('click', rightColour));

        var wrongListen = document.querySelectorAll(".wrong");
        wrongListen.forEach(listen => listen.removeEventListener ('click', wrongColour));
    }

    function scorePoint() {
        let boardScore = document.querySelector("#scoreboard_score");
        let currentValue = parseInt(boardScore.textContent);
        let newValue = currentValue + 1;
        boardScore.textContent = newValue;
    }

    rightAnswer.forEach(change => change.addEventListener('click', rightColour));
    wrongAnswer.forEach(change => change.addEventListener ('click', wrongColour));
}

function loadAnswer6() {
    document.querySelector('#answer_1_box').classList.add("right");
    document.querySelector('#answer_2_box').classList.add("wrong");
    document.querySelector('#answer_3_box').classList.add("wrong");
    document.querySelector('#answer_4_box').classList.add("wrong");
    
    let rightAnswer = document.querySelectorAll (".right");
    let wrongAnswer = document.querySelectorAll (".wrong")

    function rightColour() {
        var rightAnswer = document.querySelectorAll(".right");
        rightAnswer.forEach(change => change.style.backgroundColor = "#50C878");

        var wrongAnswer = document.querySelectorAll(".wrong");
        wrongAnswer.forEach(change => change.style.backgroundColor = "#DC143C");

        var questionBox = document.querySelector("#question_6");
        questionBox.style.backgroundColor = "#50C878";

        removeListener()
        scorePoint()
    }
    
    function wrongColour() {
        var rightAnswer = document.querySelectorAll(".right");
        rightAnswer.forEach(change => change.style.backgroundColor = "#50C878");
    
        var wrongAnswer = document.querySelectorAll(".wrong");
        wrongAnswer.forEach(change => change.style.backgroundColor = "#DC143C");

        var questionBox = document.querySelector("#question_6");
        questionBox.style.backgroundColor = "#DC143C";

        removeListener()
    }

    function removeListener() {
        var rightListen = document.querySelectorAll(".right");
        rightListen.forEach(listen => listen.removeEventListener('click', rightColour));

        var wrongListen = document.querySelectorAll(".wrong");
        wrongListen.forEach(listen => listen.removeEventListener ('click', wrongColour));
    }

    function scorePoint() {
        let boardScore = document.querySelector("#scoreboard_score");
        let currentValue = parseInt(boardScore.textContent);
        let newValue = currentValue + 1;
        boardScore.textContent = newValue;
    }

    rightAnswer.forEach(change => change.addEventListener('click', rightColour));
    wrongAnswer.forEach(change => change.addEventListener ('click', wrongColour));
}

function loadAnswer7() {
    document.querySelector('#answer_1_box').classList.add("wrong");
    document.querySelector('#answer_2_box').classList.add("wrong");
    document.querySelector('#answer_3_box').classList.add("wrong");
    document.querySelector('#answer_4_box').classList.add("right");
    
    let rightAnswer = document.querySelectorAll (".right");
    let wrongAnswer = document.querySelectorAll (".wrong")

    function rightColour() {
        var rightAnswer = document.querySelectorAll(".right");
        rightAnswer.forEach(change => change.style.backgroundColor = "#50C878");

        var wrongAnswer = document.querySelectorAll(".wrong");
        wrongAnswer.forEach(change => change.style.backgroundColor = "#DC143C");

        var questionBox = document.querySelector("#question_7");
        questionBox.style.backgroundColor = "#50C878";

        removeListener()
        scorePoint()
    }
    
    function wrongColour() {
        var rightAnswer = document.querySelectorAll(".right");
        rightAnswer.forEach(change => change.style.backgroundColor = "#50C878");
    
        var wrongAnswer = document.querySelectorAll(".wrong");
        wrongAnswer.forEach(change => change.style.backgroundColor = "#DC143C");

        var questionBox = document.querySelector("#question_7");
        questionBox.style.backgroundColor = "#DC143C";

        removeListener()
    }

    function removeListener() {
        var rightListen = document.querySelectorAll(".right");
        rightListen.forEach(listen => listen.removeEventListener('click', rightColour));

        var wrongListen = document.querySelectorAll(".wrong");
        wrongListen.forEach(listen => listen.removeEventListener ('click', wrongColour));
    }

    function scorePoint() {
        let boardScore = document.querySelector("#scoreboard_score");
        let currentValue = parseInt(boardScore.textContent);
        let newValue = currentValue + 1;
        boardScore.textContent = newValue;
    }

    rightAnswer.forEach(change => change.addEventListener('click', rightColour));
    wrongAnswer.forEach(change => change.addEventListener ('click', wrongColour));
}

function loadAnswer8() {
    document.querySelector('#answer_1_box').classList.add("wrong");
    document.querySelector('#answer_2_box').classList.add("wrong");
    document.querySelector('#answer_3_box').classList.add("right");
    document.querySelector('#answer_4_box').classList.add("wrong");
    
    let rightAnswer = document.querySelectorAll (".right");
    let wrongAnswer = document.querySelectorAll (".wrong")

    function rightColour() {
        var rightAnswer = document.querySelectorAll(".right");
        rightAnswer.forEach(change => change.style.backgroundColor = "#50C878");

        var wrongAnswer = document.querySelectorAll(".wrong");
        wrongAnswer.forEach(change => change.style.backgroundColor = "#DC143C");

        var questionBox = document.querySelector("#question_8");
        questionBox.style.backgroundColor = "#50C878";

        removeListener()
        scorePoint()
    }
    
    function wrongColour() {
        var rightAnswer = document.querySelectorAll(".right");
        rightAnswer.forEach(change => change.style.backgroundColor = "#50C878");
    
        var wrongAnswer = document.querySelectorAll(".wrong");
        wrongAnswer.forEach(change => change.style.backgroundColor = "#DC143C");

        var questionBox = document.querySelector("#question_8");
        questionBox.style.backgroundColor = "#DC143C";

        removeListener()
    }

    function removeListener() {
        var rightListen = document.querySelectorAll(".right");
        rightListen.forEach(listen => listen.removeEventListener('click', rightColour));

        var wrongListen = document.querySelectorAll(".wrong");
        wrongListen.forEach(listen => listen.removeEventListener ('click', wrongColour));
    }

    function scorePoint() {
        let boardScore = document.querySelector("#scoreboard_score");
        let currentValue = parseInt(boardScore.textContent);
        let newValue = currentValue + 1;
        boardScore.textContent = newValue;
    }

    rightAnswer.forEach(change => change.addEventListener('click', rightColour));
    wrongAnswer.forEach(change => change.addEventListener ('click', wrongColour));
}

function loadAnswer9() {
    document.querySelector('#answer_1_box').classList.add("wrong");
    document.querySelector('#answer_2_box').classList.add("wrong");
    document.querySelector('#answer_3_box').classList.add("right");
    document.querySelector('#answer_4_box').classList.add("wrong");
    
    let rightAnswer = document.querySelectorAll (".right");
    let wrongAnswer = document.querySelectorAll (".wrong")

    function rightColour() {
        var rightAnswer = document.querySelectorAll(".right");
        rightAnswer.forEach(change => change.style.backgroundColor = "#50C878");

        var wrongAnswer = document.querySelectorAll(".wrong");
        wrongAnswer.forEach(change => change.style.backgroundColor = "#DC143C");

        var questionBox = document.querySelector("#question_9");
        questionBox.style.backgroundColor = "#50C878";

        removeListener()
        scorePoint()
    }
    
    function wrongColour() {
        var rightAnswer = document.querySelectorAll(".right");
        rightAnswer.forEach(change => change.style.backgroundColor = "#50C878");
    
        var wrongAnswer = document.querySelectorAll(".wrong");
        wrongAnswer.forEach(change => change.style.backgroundColor = "#DC143C");

        var questionBox = document.querySelector("#question_9");
        questionBox.style.backgroundColor = "#DC143C";

        removeListener()
    }

    function removeListener() {
        var rightListen = document.querySelectorAll(".right");
        rightListen.forEach(listen => listen.removeEventListener('click', rightColour));

        var wrongListen = document.querySelectorAll(".wrong");
        wrongListen.forEach(listen => listen.removeEventListener ('click', wrongColour));
    }

    function scorePoint() {
        let boardScore = document.querySelector("#scoreboard_score");
        let currentValue = parseInt(boardScore.textContent);
        let newValue = currentValue + 1;
        boardScore.textContent = newValue;
    }

    rightAnswer.forEach(change => change.addEventListener('click', rightColour));
    wrongAnswer.forEach(change => change.addEventListener ('click', wrongColour));
}

function loadAnswer10() {
    document.querySelector('#answer_1_box').classList.add("wrong");
    document.querySelector('#answer_2_box').classList.add("right");
    document.querySelector('#answer_3_box').classList.add("wrong");
    document.querySelector('#answer_4_box').classList.add("wrong");
    
    let rightAnswer = document.querySelectorAll (".right");
    let wrongAnswer = document.querySelectorAll (".wrong")

    function rightColour() {
        var rightAnswer = document.querySelectorAll(".right");
        rightAnswer.forEach(change => change.style.backgroundColor = "#50C878");

        var wrongAnswer = document.querySelectorAll(".wrong");
        wrongAnswer.forEach(change => change.style.backgroundColor = "#DC143C");

        var questionBox = document.querySelector("#question_10");
        questionBox.style.backgroundColor = "#50C878";

        removeListener();
        scorePoint();
    }
    
    function wrongColour() {
        var rightAnswer = document.querySelectorAll(".right");
        rightAnswer.forEach(change => change.style.backgroundColor = "#50C878");
    
        var wrongAnswer = document.querySelectorAll(".wrong");
        wrongAnswer.forEach(change => change.style.backgroundColor = "#DC143C");

        var questionBox = document.querySelector("#question_10");
        questionBox.style.backgroundColor = "#DC143C";

        removeListener()
    }

    function removeListener() {
        var rightListen = document.querySelectorAll(".right");
        rightListen.forEach(listen => listen.removeEventListener('click', rightColour));

        var wrongListen = document.querySelectorAll(".wrong");
        wrongListen.forEach(listen => listen.removeEventListener ('click', wrongColour));
    }

    function scorePoint() {
        let boardScore = document.querySelector("#scoreboard_score");
        let currentValue = parseInt(boardScore.textContent);
        let newValue = currentValue + 1;
        boardScore.textContent = newValue;
    }

    rightAnswer.forEach(change => change.addEventListener('click', rightColour));
    wrongAnswer.forEach(change => change.addEventListener ('click', wrongColour));
}

function resetElementsToOriginalState() {
    var wrongAnswers = document.querySelectorAll(".wrong");
    wrongAnswers.forEach(answer => {
        answer.classList.remove("wrong");
        answer.style.backgroundColor = "#0000FF";
    });

    var rightAnswers = document.querySelectorAll(".right");
    rightAnswers.forEach(answer => {
        answer.classList.remove("right");
        answer.style.backgroundColor = "#0000FF";
    });

}

question1.addEventListener('click', loadQuestion);
question2.addEventListener('click', loadQuestion);
question3.addEventListener('click', loadQuestion);
question4.addEventListener('click', loadQuestion);
question5.addEventListener('click', loadQuestion);
question6.addEventListener('click', loadQuestion);
question7.addEventListener('click', loadQuestion);
question8.addEventListener('click', loadQuestion);
question9.addEventListener('click', loadQuestion);
question10.addEventListener('click', loadQuestion);

question1.addEventListener('click', loadAnswer1);
question2.addEventListener('click', loadAnswer2);
question3.addEventListener('click', loadAnswer3);
question4.addEventListener('click', loadAnswer4);
question5.addEventListener('click', loadAnswer5);
question6.addEventListener('click', loadAnswer6);
question7.addEventListener('click', loadAnswer7);
question8.addEventListener('click', loadAnswer8);
question9.addEventListener('click', loadAnswer9);
question10.addEventListener('click', loadAnswer10);