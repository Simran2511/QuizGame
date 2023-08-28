const quizDB = [
    {
        question: "Q1: What is the purpose of the addEventListener method in JavaScript?",
        a: "To execute a function immediately",
        b: "To add a CSS class to an element",
        c: "To remove an element from the DOM",
        d: "To attach an event handler to an element",
        ans: "ans4"
    },
    {
        question: "Q2: What is the purpose of the setTimeout function in JavaScript?",
        a: "Pauses the execution of the script",
        b: " Executes a function immediately",
        c: "Delays the execution of a function",
        d: "Sets the value of a variable after a delay",
        ans: "ans3"
    },
    {
        question: "Q3: Which method is used to remove the last element from an array in JavaScript?",
        a: "pop()",
        b: "shift()",
        c: "slice()",
        d: "remove()",
        ans: "ans1"
    },
    {
        question: "Q4: What does the let keyword do in JavaScript?",
        a: "Declares a constant variable",
        b: "Declares a block-scoped variable",
        c: "Declares a global variable",
        d: "Declares a variable with function scope",
        ans: "ans2"
    }
]
const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#Submit");
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");

let currentQuestionIndex = 0;
let score = 0;
const loadQuestion = () => {
    const questionList = quizDB[currentQuestionIndex];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();
const getCheckAnswer = () => {
    let answer;
    answers.forEach((currElement) => {
        if (currElement.checked) {
            answer = currElement.id;
        }
    });
    return answer;
};
const unselectAll = () => {
    answers.forEach((currElement) => currElement.checked = false);
}
Submit.addEventListener('click', () => {
    const checkAnswer = getCheckAnswer();
    if (checkAnswer === quizDB[currentQuestionIndex].ans) {
        score++;
    };
    currentQuestionIndex++;

    unselectAll();
    if (currentQuestionIndex < quizDB.length) {
        loadQuestion();
    } else {

        showScore.innerHTML = `
    <h3>You scored ${score}/${quizDB.length} </h3>
    <button class="btn" onclick ="location.reload()">PLAY AGAIN</button>
    `
        showScore.classList.remove('scoreArea')
    }

})

