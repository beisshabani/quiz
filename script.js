let json = [ {
    "question": "What was the period of world war II ?",
    "answers": [
                "July 28, 1914 - November 11, 1918",
                "September 11, 1910 - December, 12, 1920", 
                "January 1, 1945 - June 13, 1950", 
                "July 11, 1913 - November 10, 1918"
            ],
    "correctAnswer": "July 28, 1914 - November 11, 1918"
},
{
    "question": "What is psychokinesis?",
    "answers": [
                "The ability to solve complex problems", 
                "The power to move object by physical strength", 
                "The ability to control the time", 
                "The supposed ability to move objects by mental effort"
            ],
    "correctAnswer": "The supposed ability to move objects by mental effort"
}, 
{
    "question": "Which of the answers is the correct answer of ADHD disorder?",
    "answers": [
                 "Attention deficit hyperactive disorder", 
                 "Attention difficulty high disorder", 
                 "Attention deficit hyperactivity disorder", 
                 "Aletrnate deilusional hyperthymesia disdain"
            ],
    "correctAnswer": "Attention deficit hyperactivity disorder"
},
{
    "question": "If all slopes are blops and blops are lazzies then defenitely all slopes are lazzies",
    "answers": ["True", "False", "Neither is true", "Slopes are blops but lazzies aren't slopes!"],
    "correctAnswer": "True"
}

];

quizSection = [...json];

const answerContentGlobal  = document.querySelectorAll('[data-answer]');
const questionContent = document.querySelector('[data-question]');
const startButton = document.querySelector('[data-start]');
const nextButton = document.querySelector('[data-next]');
const dataScore = document.querySelector('[data-score]');
const splash = document.querySelector('[data-splash]');


const correctSound = document.querySelector('[data-correct]');
const wrongSound = document.querySelector('[data-wrong]');

let randomQuestion;
let score = document.querySelector('[data-score]');
let scoreNum = 0;

function resetQuiz(msg, answer) {
    scoreNum = 0;
    splash.style.display = "flex";
    questionContent.style.display = "none";
    score.innerText = "Your Score: " + scoreNum;
    alert(msg);
}


function nextQuiz() {
    const questionTitle = document.querySelector('[data-title]');
    const answerContent  = document.querySelectorAll('[data-answer]');
    
    randomQuestion = quizSection[Math.floor(Math.random() * quizSection.length)];

    questionTitle.innerText = randomQuestion.question;
    answerContent.forEach((answer, i) => {
        answer.style.background === "green" ? answer.style.background = `rgb(0, 89, 255, 0.3)`: "";
        answer.innerText = randomQuestion.answers[i];
    });
    


}

function startQuiz() {
    splash.style.display = "none";
    questionContent.style.display = "flex";
    nextQuiz();

}

function handleClick(answer, i) {
    answer.addEventListener("click", () => {
        if(scoreNum === quizSection.length + 1) {
            correctSound.play();
            return resetQuiz("Congratulations you set the maximum score!");
        }
        if(answer.innerText === randomQuestion.correctAnswer) {
            scoreNum++;
            score.innerText = "Your Score: " + scoreNum;
            answerContentGlobal.forEach(answer => answer.classList.add('unclickable'));
            answer.style.background = "green";
            correctSound.play();
        } else {
            wrongSound.play();
            resetQuiz("Opps! Wrong Answer. Start Again!");
        }
    });
}

nextButton.addEventListener("click", () => {
    answerContentGlobal.forEach(answer => answer.classList.remove('unclickable'));
    nextQuiz();
});

startButton.addEventListener("click", () => {
    startQuiz();
});

answerContentGlobal.forEach((answer, i) => {
    handleClick(answer, i);
});