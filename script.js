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
    question: "In the UK, the abbreviation NHS stands for National what Service?",
    answers: ["Humanity", "Health", "Honour", "Household"],
    correctAnswer: "Health",
  },
  {
    question: "The hammer and sickle is one of the most recognisable symbols of which political ideology?",
    answers: ["Republicanism", "Communism", "Conservatism", "Liberalism"],
    correctAnswer: "Communism",
  },
  {
    question: "Which toys have been marketed with the phrase “robots in disguise”?",
    answers: ["Bratz Dolls", "Sylvanian Families", "Hatchimals", "Transformers"],
    correctAnswer: "Transformers",
  },
  {
    question: "Which Disney character famously leaves a glass slipper behind at a royal ball?",
    answers: ["Pocahontas", "Sleeping Beauty", "Cinderella", "Elsa"],
    correctAnswer: "Cinderella",
  },
  {
    question: "What name is given to the revolving belt machinery in an airport that delivers checked luggage from the plane to baggage reclaim?",
    answers: ["Hangar", "Terminal", "Concourse", "Carousel"],
    correctAnswer: "Carousel",
  },
  {
    question: "Which of these brands was chiefly associated with the manufacture of household locks?",
    answers: ["Phillips", "Flymo", "Chubb", "Ronseal"],
    correctAnswer: "Chubb",
  },
  {
    question: "What does the word loquacious mean?",
    answers: ["Angry", "Chatty", "Beautiful", "Shy"],
    correctAnswer: "Chatty",
  },
  {
    question: "Which of these religious observances lasts for the shortest period of time during the calendar year?",
    answers: ["Ramadan", "Diwali", "Lent", "Hanukkah"],
    correctAnswer: "Diwali",
  },
  {
    question: "Obstetrics is a branch of medicine particularly concerned with what?",
    answers: ["Childbirth", "Broken bones", "Heart conditions", "Old age"],
    correctAnswer: "Childbirth",
  },
  {
    question: "At the closest point, which island group is only 50 miles south-east of the coast of Florida?",
    answers: ["Bahamas", "US Virgin Islands", "Turks and Caicos Islands", "Bermuda"],
    correctAnswer: "Bahamas",
  },
  {
    question: "Which of these cetaceans is classified as a “toothed whale”?",
    answers: ["Gray whale", "Minke whale", "Sperm whale", "Humpback whale"],
    correctAnswer: "Sperm whale",
  },
  {
    question: "Who is the only British politician to have held all four “Great Offices of State” at some point during their career?",
    answers: ["David Lloyd George", "Harold Wilson", "James Callaghan", "John Major"],
    correctAnswer: "James Callaghan",
  },
  {
    question: "In 1718, which pirate died in battle off the coast of what is now North Carolina?",
    answers: ["Calico Jack", "Blackbeard", "Bartholomew Roberts", "Captain Kidd"],
    correctAnswer: "Blackbeard",
  },
  {
    question: "In what children's game are participants chased by someone designated \"It\"?",
    answers: ["Tag", "Simon Says", "Charades", "Hopscotch"],
    correctAnswer: "Tag",
  },
  {
    question: "On a radio, stations are changed by using what control?",
    answers: ["Tuning", "Volume", "Bass", "Treble"],
    correctAnswer: "Tuning",
  },
  {
    question: "Which material is most dense?",
    answers: ["Silver", "Styrofoam", "Butter", "Gold"],
    correctAnswer: "Gold",
  },
  {
    question: "Which state in the United States is largest by area?",
    answers: ["Alaska", "California", "Texas", "Hawaii"],
    correctAnswer: "Alaska",
  },
  {
    question: "What is Aurora Borealis commonly known as?",
    answers: ["Fairy Dust", "Northern Lights", "Book of ages", "a Game of Thrones main character"],
    correctAnswer: "Northern Lights",
  },
  {
    question: "Galileo was an Italian astronomer who",
    answers: ["developed the telescope", "discovered four satellites of Jupiter", "discovered that the movement of pendulum produces a regular time measurement", "All of the above"],
    correctAnswer: "All of the above",
  },
  {
    question: "Exposure to sunlight helps a person improve his health because",
    answers: ["the infrared light kills bacteria in the body", "resistance power increases", "the pigment cells in the skin get stimulated and produce a healthy tan", "the ultraviolet rays convert skin oil into Vitamin D"],
    correctAnswer: "the ultraviolet rays convert skin oil into Vitamin D",
  },
  {
    question: "Sir Thomas Fearnley Cup is awarded to",
    answers: ["a club or a local sport association for remarkable achievements", "amateur athlete, not necessarily an Olympian", "National Olympic Committee for outstanding work", "None of the above"],
    correctAnswer: "a club or a local sport association for remarkable achievements",
  },
  {
    question: "Oscar Awards were instituted in",
    answers: ["1968", "1929", "1901", "1965"],
    correctAnswer: "1929",
  },
  {
    question: "When did Margaret Thatcher became the first female Prime Minister of Britain?",
    answers: ["1998", "1989", "1979", "1800"],
    correctAnswer: "1979",
  },
  {
    question: "When is the International Workers' Day?",
    answers: ["15th April", "12th December", "1st May", "1st August"],
    correctAnswer: "1st May",
  },
  {
    question: "When did China test their first atomic device?",
    answers: ["1962", "1963", "1964", "1965"],
    correctAnswer: "1964",
  },
  {
    question: "When did Commander Robert Peary discover the North Pole?",
    answers: ["1904", "1905", "1908", "1909"],
    correctAnswer: "1909",
  },
  {
    question: "What is the population density of Kerala?",
    answers: ["819/sq. km", "602/sq. km", "415/sq. km", "500/sq. km"],
    correctAnswer: "819/sq. km",
  },
  {
    question: "What is the range of missile 'Akash'?",
    answers: ["4 km", "25 km", "500 m to 9 km", "150 km"],
    correctAnswer: "25 km",
  },
  {
    question: "In the U.S., if it's not Daylight Saving Time, it's what?",
    answers: ["Borrowed time", "Overtime", "Standard time", "Party time"],
    correctAnswer: "",
  },
  {
    question: "Which part of the body are you most likely to \"stub\"?",
    answers: ["Toe", "Knee", "Elbow", "Brain"],
    correctAnswer: "Toe",
  },
  {
    question: "Which country is largest by area?",
    answers: ["UK", "USA", "Russia", "China"],
    correctAnswer: "Russia",
  },
  {
    question: "What does the \"F\" stand for in FBI?",
    answers: ["Foreign", "Federal", "Flappy", "Face"],
    correctAnswer: "",
  },
  {
    question: "The US declared war on which country after the bombing of Pearl Harbor?",
    answers: ["Japan", "Russia", "Germany", "China"],
    correctAnswer: "Japan",
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
    if (player.currentIndex === randomGame.length - 1) {
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
console.log(game.length)