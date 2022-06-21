//select all the elements of the page

const startCard = document.getElementById('on-start');
const quizCard = document.getElementById('after-start');
const questionNumberElement = document.querySelector('.question-number');
// const timerBox = document.querySelector('.timer');
const questionElement = document.querySelector('.question');
const answersElement = document.getElementById('answers');
const answerElement = document.querySelectorAll('.answer');
const quitButton = document.querySelector('.quit');
const endCard = document.getElementById('the-end');
const scoreElement = document.querySelector('.score');
const messageElement = document.querySelector('.message');
const tryAgain = document.querySelector('.try-again');




let que_count = 0;
let userScore = 0;
// let timeValue = 10;

startCard.onclick = () => {
    //intro hides and quiz card shows
    startCard.classList.add('hide');
    quizCard.classList.remove('hide');
    //show all questions and answers
    // startTimer(10);
    showQuestion(0);
    //timer re-starts
}

// function startTimer(time) {
//     counter = setInterval(timer, 1000);
//     function timer() {
//         timerBox.textContent = time;
//         time--;
//         if (time < 9) {
//             let addZero = timerBox.textContent;
//             timerBox.textContent = '0' + addZero;
//         }
//         if (time < 0) {
//             clearInterval(counter);
//             // nextQuestion();
//         }
//     }
// }

tryAgain.onclick = () => {
    window.location.reload();
}

quitButton.onclick = () => {
    window.location.reload();
}

function showQuestion(index) {
    //question number changes
    let queNumber = 'Question ' + questions[index].numb;
    questionNumberElement.innerHTML = queNumber;

    //question changes
    let que = questions[index].question;
    questionElement.innerHTML = que;

    //answers change
    questions[index].answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('answer')
        //when answer is selected
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        // index++;
        answersElement.appendChild(button)
    })
}

function selectAnswer(answer) {
    let userAns = answer.target.innerText;
    let correctAns = questions[que_count].rightAnswer;
    if (userAns == correctAns) {
        userScore++;
    }
    resetState();
    if (que_count < questions.length - 1) {
        nextQuestion();
    }
    else {
        showResult();
    }
}

function showResult() {
    quizCard.classList.add('hide');
    startCard.classList.add('hide');
    endCard.classList.remove('hide');

    let score = ((userScore / questions.length) * 100);
    let score_message = 'You scored a ' + score + '%';
    scoreElement.innerText = score_message;

    if (score <= 40) {
        let msg = messages[5];
        messageElement.innerText = msg;
    }
    else if (score <= 50) {
        let msg = messages[4];
        messageElement.innerText = msg;
    }
    else if (score <= 60) {
        let msg = messages[3];
        messageElement.innerText = msg;
    }
    else if (score < 70) {
        let msg = messages[2];
        messageElement.innerText = msg;
    }
    else if (score < 80) {
        let msg = messages[1];
        messageElement.innerText = msg;
    }
    else {
        let msg = messages[0];
        messageElement.innerText = msg;
    }
}

function nextQuestion() {
    que_count++;
    showQuestion(que_count);
    // startTimer(timeValue);
}

function resetState() {
    // clearStatusClass(document.body)
    while (answersElement.firstChild) {
        answersElement.removeChild(answersElement.firstChild)
    }
}

const questions = [
    {
        numb: 1,
        question: 'When did Will Byers go missing',
        rightAnswer: 'November 6th, 1983',
        answers: [
            { text: 'November 6th, 1983' },
            { text: 'October 6th, 1983' },
            { text: 'November 9th, 1989' },
            { text: 'September 6th, 1983' }
        ]
    },
    {
        numb: 2,
        rightAnswer: 'Bob Newby',
        question: 'Who founded Hawkins Middle School AV Club',
        answers: [
            { text: 'Mr. Clarke' },
            { text: 'Bob Newby' },
            { text: 'Joyce Byers' },
            { text: 'Dustin Henderson' }
        ]
    },
    {
        numb: 3,
        rightAnswer: 'Cherry',
        question: 'What flavour slurpee does Alexei ask Hopper?',
        answers: [
            { text: 'Strawberry' },
            { text: 'Blueberry' },
            { text: 'Cherry' },
            { text: 'Mango' }
        ]
    },
    {
        numb: 4,
        rightAnswer: 'Mike Wheeler',
        question: '\'If anyone asks where I am, I\'ve left the country\'',
        answers: [
            { text: 'Erica Sinclair' },
            { text: 'Lucas Sinclair' },
            { text: 'Mike Wheeler' },
            { text: 'Jim Hopper' }
        ]
    }
]

const messages = [
    'Excellent job! You got way too much free time buddy',
    'Great score! You must love Steve a lot huh',
    'Good score, my man. I\'m sure we\'re both looking forward for s4',
    'You should rewatch!!',
    'You should rewatch!',
    'Okay... Get outta here'
]
    // { num: 1, message: 'Excellent' }, //90+
    // { num: 2, message: 'Great' }, //80+
    // { num: 3, message: 'Good' },
    // { num: 4, message: 'Alright' },
    // { num: 5, message: 'Poor' },
    // { num: 6, message: 'Very Poor' }
