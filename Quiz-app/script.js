// *****************QUESTIONS********************

const questions = [
  {
    question: "which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "which is the smallest country in the world?",
    answers: [
      { text: "Vatican City", correct: true },
      { text: "Bhutan", correct: false },
      { text: "Nepal", correct: false },
      { text: "Shri Lanka", correct: false },
    ],
  },
  {
    question: "which is the largest desert in the world?",
    answers: [
      { text: "Kalahari", correct: false },
      { text: "Gobi", correct: false },
      { text: "Sahara", correct: true },
      { text: "Antarctica", correct: false },
    ],
  },
  {
    question: "which is the smallest continent in the world?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false },
    ],
  },
];

// *****************ACCESS ELEMENT********************

const questionElement = document.querySelector(".question");
const answersBtn = document.querySelector(".answers");
const nextBtn = document.querySelector(".next-btn");

// *****************INITIALIZE VARIABLES********************

let currQueIdx = 0;
let score = 0;

// *****************START QUIZ ********************

function startQuiz() {
  currQueIdx = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}

// *****************SHOW QUESTIONS********************

function showQuestion() {
  resetState();
  let currQue = questions[currQueIdx];
  let queNo = currQueIdx + 1;
  questionElement.innerHTML = queNo + "." + currQue.question;

  currQue.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answersBtn.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectanswer);
  });
}

// *****************RESET STATE********************

function resetState() {
  nextBtn.style.display = "none";
  while (answersBtn.firstChild) {
    answersBtn.removeChild(answersBtn.firstChild);
  }
}

// *****************SELECT ANSWERS********************

function selectanswer(e) {
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === "true";
  if (isCorrect) {
    selectBtn.classList.add("correct");
    score++;
  } else {
    selectBtn.classList.add("incorrect");
  }

  // *****************SHOW ANSWER TRUE or FALSE********************

  Array.from(answersBtn.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
}

// *****************SHOW SCORES********************

function shoreScore() {
  resetState();
  questionElement.innerHTML = `Your scored ${score} out of ${questions.length}!`;
  nextBtn.innerHTML = "Play Again";
  nextBtn.style.display = "block";
}

// *****************HANDLE NEXT BUTTON********************

function handleNextBtn() {
  currQueIdx++;
  if (currQueIdx < questions.length) {
    showQuestion();
  } else {
    shoreScore();
  }
}
// *****************NEXT BUTTON EVENT********************

nextBtn.addEventListener("click", () => {
  if (currQueIdx < questions.length) {
    handleNextBtn();
  } else {
    startQuiz();
  }
});

// *****************CALL START QUIZ FUNCTION********************

startQuiz();
