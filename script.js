const game = [
  {
    question: "What is the capital of France?",
    answers: ["Mersaill", "Paris", "Madrid", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "When did WW2 start?",
    answers: ["1939", "1945", "1918", "2022"],
    correctAnswer: "1939",
  },
  {
    question: "What is the capital of Italy?",
    answers: ["Mersaill", "Paris", "Madrid", "Rome"],
    correctAnswer: "Rome",
  },
  {
    question: "Who is Michel Jackson?",
    answers: ["Singer", "Dancer", "Artist", "Actor"],
    correctAnswer: "Singer",
  },
  {
    question:
      "Construction of which of these famous landmarks was completed first?",
    answers: [
      "Empire State Building",
      "Royal Albert Hall",
      "Eiffel Tower",
      "Big Ben Clock Tower",
    ],
    correctAnswer: "Big Ben Clock Tower",
  },
  {
    question: "The Earth is approximately how many miles away from the Sun?",
    answers: ["9.3 million", "39 million", "93 million", "193 million"],
    correctAnswer: "93 million",
  },
  {
    question:
      "Which of the following men does not have a chemical element named for him?",
    answers: ["Albert Einstein", "Niels Bohr", "Isaac Newton", " Enrico Fermi"],
    correctAnswer: "Isaac Newton",
  },
  {
    question:
      "A person with well-developed abdominal muscles is said to have a what?",
    answers: ["One-pack", "Six-Pack", "12-pack", "Family-pack"],
    correctAnswer: "Six-Pack",
  },
  {
    question: "What is the Celsius equivalent of 77 degrees Fahrenheit",
    answers: ["15", "20", "25", "30"],
    correctAnswer: "25",
  },
  {
    question: "Which is the largest city in the USA's largest state?",
    answers: ["Dallas", "Los Angeles", "New York", "Anchorage"],
    correctAnswer: "Anchorage",
  },
  {
    question: "Where would a 'peruke' be worn?",
    answers: [
      "Around the neck",
      "On the head",
      "Around the waist",
      "On the wrist",
    ],
    correctAnswer: "On the head",
  },
  {
    question: "From which author's work did scientists take the word 'quark'?",
    answers: ["Lewis Carroll", "Edward Lear", "James Joyce", "Aldous Huxley"],
    correctAnswer: "James Joyce",
  },
  {
    question:
      "Which of these islands was ruled by Britain from 1815 until 1864?",
    answers: ["Crete", "Cyprus", "Corsica", "Corfu"],
    correctAnswer: "Corfu",
  },
  {
    question: "What sort of animal is Walt Disney's Dumbo?",
    answers: ["Deer", "Rabbit", "Elephant", "Donkey"],
    correctAnswer: "Elephant",
  },
  {
    question: "What sort of animal is Walt Disney's Dumbo?",
    answers: ["Deer", "Rabbit", "Elephant", "Donkey"],
    correctAnswer: "Elephant",
  },
];

const player = {
  points: 0,
  currentIndex: 0,
  timeOverall: 0,
  timeQuestion: 0,
  highScore: localStorage.getItem("highScore") || 0,
};

let randomGame = game.sort(() => Math.random() - 0.5);

const button1 = document.querySelector("#box1");
const button2 = document.querySelector("#box2");
const button3 = document.querySelector("#box3");
const button4 = document.querySelector("#box4");
const text1 = document.querySelector("#text1");
const question = document.querySelector("#question");
const highScoreText = document.querySelector("#highscore")
const score = document.querySelector("#score");
const popup = document.querySelector(".popup");
const popup2 = document.querySelector(".popup2");
const dark = document.querySelector("#darknessholder");
const restartButton = document.querySelector("#startover");
const winover = document.querySelector("#winover");
const timeText = document.querySelector("#time");
const timeLose = document.querySelector("#timelose");
const timeWin = document.querySelector("#timewin");

button1.addEventListener("click", buttonClick);
button2.addEventListener("click", buttonClick);
button3.addEventListener("click", buttonClick);
button4.addEventListener("click", buttonClick);
restartButton.addEventListener("click", restartingQuestions);
winover.addEventListener("click", restartingQuestions);
highScoreText.innerHTML = player.highScore

function restartingQuestions() {
  randomGame = game.sort(() => Math.random() - 0.5);
  timeText.style.display = "block"
  popup.classList.remove("startover");
  popup2.classList.remove("startover");
  dark.classList.remove("darkness");
  player.currentIndex = 0;
  player.timeOverall = 0;
  player.timeQuestion = 0;
  startQuestions();
  button1.style.color = "white";
  button1.style.borderColor = "#1787c8";
  button2.style.color = "white";
  button2.style.borderColor = "#1787c8";
  button3.style.color = "white";
  button3.style.borderColor = "#1787c8";
  button4.style.color = "white";
  button4.style.borderColor = "#1787c8";
}

function startQuestions() {
  player.timeQuestion = 0;
  randomGame[player.currentIndex].answers = game[
    player.currentIndex
  ].answers.sort(() => Math.random() - 0.5);
  button1.innerText = randomGame[player.currentIndex].answers[0];
  button2.innerText = randomGame[player.currentIndex].answers[1];
  button3.innerText = randomGame[player.currentIndex].answers[2];
  button4.innerText = randomGame[player.currentIndex].answers[3];
  question.innerText = randomGame[player.currentIndex].question;
}
startQuestions();

function popUp() {
  timeText.style.display = "none"
  dark.classList.remove("move");
  popup.classList.add("startover");
  dark.classList.add("darkness");
  timeLose.innerHTML = player.timeOverall;
}
function popUp2() {
  timeText.style.display = "none"
  popup2.classList.add("startover");
  dark.classList.add("darkness");
  timeWin.innerHTML = player.timeOverall;
}

function buttonClick(event) {
  if (
    event.target.innerText === randomGame[player.currentIndex].correctAnswer
  ) {
    player.points++;
    score.innerHTML = player.points;
    if (player.currentIndex === randomGame.length - 2) {
      highScoreSetter()
    player.highScore = localStorage.getItem("highScore") || 0
    highScoreText.innerHTML = player.highScore
      popUp2();
      player.points = 0;
      score.innerHTML = player.points;
    }
    event.target.style.color = "lightgreen";
    event.target.style.borderColor = "green";
    player.currentIndex++;
    setTimeout(() => {
      startQuestions();
      event.target.style.color = "white";
      event.target.style.borderColor = "#1787c8";
    }, 1000);
  } else {
    highScoreSetter()
    player.highScore = localStorage.getItem("highScore") || 0
    highScoreText.innerHTML = player.highScore
    event.target.style.color = "red";
    event.target.style.borderColor = "red";
    player.timeQuestion = 30
    player.points = 0;
    score.innerHTML = player.points;
    setTimeout(() => {
      popUp();
    }, 500);
  }
}

setInterval(function () {
  player.timeOverall++;
}, 1000);

setInterval(function () {
  player.timeQuestion++;
  timeText.innerText = player.timeQuestion
  if (player.timeQuestion === 30) {
    dark.classList.add("move");
  } else if (player.timeQuestion < 30) {
    dark.classList.remove("move");
  } else if (player.timeQuestion === 40) {
    popUp();
    dark.classList.remove("move");
  }
}, 1000);

function highScoreSetter(){
    if(player.points > player.highScore){
        localStorage.setItem("highScore", player.points)
    }
}