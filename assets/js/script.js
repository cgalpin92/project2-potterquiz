//Global Variables

let harryQuestions = [{
        question: "What house does Harry belong to?",
        choices: ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"],
        correct: "Gryffindor"
    },
    {
        question: "What position does Harry Play in Quidditch?",
        choices: ["Beater", "Seeker", "Keeper", "Chaser"],
        correct: "Seeker"
    },
    {
        question: "What kind of wood is Harry's first wand made out of?",
        choices: ["Oak", "Willow", "Beech", "Holly"],
        correct: "Holly"
    },
    {
        question: "What is Harry's middle name?",
        choices: ["James", "Lupin", "Sirius", "Tom"],
        correct: "James"
    },
    {
        question: "What type of animal does Harry accidentally set free while at the zoo in Harry Potter and the Philosopher's Stone?",
        choices: ["Lion", "Rat", "Snake", "Spider"],
        correct: "Snake"
    },
    {
        question: "Where was Harry Potter born?",
        choices: ["The Burrow", "Godric's Hollow", "Little Whinging", "Number 12 Grimmauld Place"],
        correct: "Godric's Hollow"
    },
    {
        question: "Who is Harry Potter's Godfather?",
        choices: ["Peter Petigrew", "Remus Lupin", "Sirius Black", "Albus Dumbledore"],
        correct: "Sirius Black"
    },
    {
        question: "What is the name of Harry's owl?",
        choices: ["Fluffy", "Padfort", "Crookshanks", "Hedwig"],
        correct: "Hedwig"
    },
    {
        question: "What fake name does Harry use while attending Bill and Fleur's wedding in disguise in Harry Potter and the Deathly Hallows?",
        choices: ["Barny Weasly", "Bert Weasly", "Bagshot Weasly", "Billy Weasly"],
        correct: "Barny Weasly"
    },
    {
        question: "When is Harry's birthday?",
        choices: ["June 31st", "July 31st", "August 31st", "September 31st"],
        correct: "July 31st"
    },

];

let ronQuestions = [{
        question: "What is the name of the Weasley family home?",
        choices: ["Number 12 Grimmauld Place", "Little Whinging", "The Burrow", "Godric's Hollow"],
        correct: "The Burrow"
    },
    {
        question: "What is Ron famously afraid of?",
        choices: ["Rats", "Spiders", "Dragons", "Snakes"],
        correct: "Spiders"
    },
    {
        question: "What is Ron's middle name?",
        choices: ["Arthur", "Barney", "Bilius", "Arnold"],
        correct: "Bilius"
    },
    {
        question: "What position does Ron play in Quidditch?",
        choices: ["Seeker", "Beater", "Chaser", "Keeper"],
        correct: "Keeper"
    },
    {
        question: "Which Weasley dies during the final battle of Hogwarts?",
        choices: ["Bill", "Fred", "George", "Ron"],
        correct: "Fred"
    },
    {
        question: "What is the first name of Ron's mother Mrs Weasley",
        choices: ["Molly", "Tonks", "Lilly", "Minerva"],
        correct: "Molly"
    },
    {
        question: "What does Ginny say Ron has a tattoo of?",
        choices: ["A chess piece Knight", "A Lion", "A Dragon", "A Pygmy Puff"],
        correct: "A Pygmy Puff"
    },
    {
        question: "What is Ron's favourite Quidditch team?",
        choices: ["Chudley Cannons", "Holyhead Harpies", "Puddlemere United", "Tutshill Tornados"],
        correct: "Chudley Cannons"
    },
    {
        question: "What is the name of Ron's pet owl?",
        choices: ["Fang", "Trevor", "Scabbers", "Pigwidgeon"],
        correct: "Pigwidgeon"
    },
    {
        question: "What was the name of Ron's first girlfriend?",
        choices: ["Luna Lovegood", "Lavender Brown", "Cho Chang", "Padma Patil"],
        correct: "Lavender Brown"
    },

];


let hermioneQuestions = [{
        question: "What is Hermione's first line in the first movie?",
        choices: ["Has anyone seen a toad?", "Oh, are you doing magic?", "You've got dirt on your nose, by the way", "I'm Hermione Granger"],
        correct: "Has anyone seen a toad?"
    },
    {
        question: "What are Hermione's parents?",
        choices: ["Doctors", "Dentists", "Teachers", "Veternarians"],
        correct: "Dentists"
    },
    {
        question: "Who takes Hermione to the Yule Ball",
        choices: ["Harry Potter", "Neville Longbottom", "Fred Weasly", "Viktor Krum"],
        correct: "Viktor Krum"
    },
    {
        question: "What is Hermione's middle name?",
        choices: ["Jean", "Bellatrix", "Lilly", "Lavender"],
        correct: "Jean"
    },
    {
        question: "What is Hermione's cat called?",
        choices: ["Fluffy", "Padfort", "Crookshanks", "Fang"],
        correct: "Crookshanks"
    },
    {
        question: "What is Hermione's patronus?",
        choices: ["Doe", "Otter", "Cat", "Swan"],
        correct: "Otter"
    },
    {
        question: "What is Hermione's wand core?",
        choices: ["Pheonix feather", "Unicorn hair", "Ownl feather", "Dragon heartstring"],
        correct: "Dragon heartstring"
    },
    {
        question: "Why did Hermione miss the lesson on Cheering Charms?",
        choices: ["She was stunned by a Basilisk", "She had turned into a cat after taking polyjuice potion", "Draco's cruel bahaviour made her upset", "She ate too many puking pastels"],
        correct: "Draco's cruel bahaviour made her upset"
    },
    {
        question: "Where did Hermione hold the first meeting for students interest in joining Dumbledore's Army?",
        choices: ["The Hog's Head", "The Leaky Cauldron", "The Shrieking Shack", "The Hogwarts Library"],
        correct: "The Hog's Head"
    },
    {
        question: "What are Hermione's favourite subjects?",
        choices: ["Transfiguration and Charms", "Herbology and Arithmancy", "Transfiguration and Arithmancy", "Arithmancy and Charms"],
        correct: "Arithmancy and Charms"
    },

];


let gameArea = document.getElementById('game-area');

let mainContent = document.getElementById('main-content');

let quizArea = document.getElementById('quiz-area');

let btnOne = document.createElement('BUTTON');

let btnTwo = document.createElement('BUTTON');

let currentQuestion = 0;

let correctScore = 0;

let incorrectScore = 0;

let scoreBoard = document.createElement('div');

let scoreTitle = document.createElement('h3');

let scoreTitleTwo = document.createElement('h3');

let correctAnswers = document.createElement('p');

let incorrectAnswers = document.createElement('p');

//functions

function createUsername(selected) {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        let userName = document.getElementById('username').value;
        document.getElementById('username-field').textContent = `Hello, ${userName}`;
    })
    let userNameInput = document.getElementById('username-input');
    userNameInput.style.display = "none";
};


function hideMainContent() {
    let harry = document.getElementById('harry');
    let ron = document.getElementById('ron');
    let hermione = document.getElementById('hermione');
    harry.style.display = "none";
    ron.style.display = "none";
    hermione.style.display = "none";
};



function displayMainContent() {
    let harry = document.getElementById('harry');
    let ron = document.getElementById('ron');
    let hermione = document.getElementById('hermione');
    harry.style.display = "block";
    ron.style.display = "block";
    hermione.style.display = "block";
};


function scoreCard() {
    scoreBoard.setAttribute('id', 'scoreBoard');
    quizArea.appendChild(scoreBoard);
    scoreTitle.setAttribute('class', 'scoreTitle');
    scoreTitle.textContent = 'Correct:';
    scoreBoard.appendChild(scoreTitle);
    scoreTitleTwo.setAttribute('class', 'scoreTitle');
    scoreTitleTwo.textContent = 'Incorrect:';
    scoreBoard.appendChild(scoreTitleTwo);
    correctAnswers.setAttribute('id', 'correct');
    scoreTitle.appendChild(correctAnswers);
    incorrectAnswers.setAttribute('id', 'incorrect');
    scoreTitleTwo.appendChild(incorrectAnswers);
};

function removeScoreCard() {
    scoreBoard.remove();
    scoreTitle.remove();
    scoreTitleTwo.remove();
    correctAnswers.remove();
    incorrectAnswers.remove();
};

function addScore() {
    correctScore++;
    let correctAnswers = document.getElementById('correct');
    correctAnswers.innerText = correctScore;
};

function addIncorrectScore() {
    incorrectScore++;
    let incorrectAnswers = document.getElementById('incorrect');
    incorrectAnswers.innerText = incorrectScore;
};

function hideQuizArea() {
    quizArea.style.display = 'none';
};

function displayQuizArea() {
    quizArea.style.display = 'block';
};



function displayHarryQuestion() {

    //places the question and choices in the correct locations within quiz area and assigns them a variable
    let questionElement = document.getElementById("question");
    let choicesElement = document.getElementById("answer-choices");

    //fetches the current question from harryQuestion variable and places it in a variable
    let displayQuestion = harryQuestions[currentQuestion];

    questionElement.textContent = displayQuestion.question;

    //create choices    
    choicesElement.innerHTML = "";
    displayQuestion.choices.forEach((choice, index) => {
        let input = document.createElement('BUTTON');
        input.type = "radio";
        input.value = "index";
        input.textContent = choice;
        input.setAttribute('class', 'button-choices');
        input.addEventListener('click', () => checkHarryAnswer(choice));
        choicesElement.appendChild(input);
    });

    // btnOne.setAttribute('onclick', 'nextQuestionOne();');
    //btnOne.textContent = "Next";
    btnTwo.setAttribute('onclick', 'home();');
    btnTwo.textContent = "home";
    //quizArea.appendChild(btnOne);
    quizArea.appendChild(btnTwo);
    scoreCard();
};

function checkHarryAnswer(choice) {
    console.log('choice: ', choice);
    let correct = harryQuestions[currentQuestion].correct;
    console.log('correct: ', correct);
    if (choice === correct) {
        alert('correct'), addScore();
    } else {
        alert('wrong'), addIncorrectScore();
    }
    nextQuestionOne();
};



function nextQuestionOne() {
    currentQuestion++
    if (currentQuestion < harryQuestions.length) {
        displayHarryQuestion();
    } else {
        alert('Quiz complete');
        currentQuestion = 0;
    }
};



function runHarryGame() {
    hideMainContent();
    displayQuizArea();
    displayHarryQuestion();
};

function displayRonQuestion() {

    //places the question and choices in the correct locations within quiz area and assigns them a variable
    let questionElement = document.getElementById("question");
    let choicesElement = document.getElementById("answer-choices");

    //fetches the current question from harryQuestion variable and places it in a variable
    console.log('ronQuestions: ', ronQuestions);
    console.log('currentQuestion: ', currentQuestion);
    let displayQuestion = ronQuestions[currentQuestion];
    console.log('displayQuestion', displayQuestion);
    questionElement.textContent = displayQuestion.question;

    //create choices    
    choicesElement.innerHTML = "";
    displayQuestion.choices.forEach((choice, index) => {
        let input = document.createElement('BUTTON');
        input.value = "index";
        input.textContent = choice;
        console.log('choice: ', choice)
        input.setAttribute('class', 'button-choices');
        input.addEventListener('click', () => checkRonAnswer(choice));
        choicesElement.appendChild(input);
    });

    //btnOne.setAttribute('onclick', 'nextQuestionTwo();');
    //btnOne.textContent = "Next";
    btnTwo.setAttribute('onclick', 'home();');
    btnTwo.textContent = "home";
    //quizArea.appendChild(btnOne);
    scoreCard();
};

function checkRonAnswer(choice) {
    //let choices = ronQuestions[currentQuestion].choices;
    //console.log('choices: ', choices);
    //let displayQuestion = ronQuestions[currentQuestion];
    //console.log('displayQuestion: ', displayQuestion);
    //let value = ronQuestions[currentQuestion].choices.index;
    //console.log('value: ', value);
    console.log('choice: ', choice);
    let correct = ronQuestions[currentQuestion].correct;
    console.log('correct: ', correct);
    if (choice === correct) {
        alert('correct'), addScore();;
    } else {
        alert('wrong'), addIncorrectScore();
    }
    nextQuestionTwo();
};

function nextQuestionTwo() {
    currentQuestion++
    if (currentQuestion < ronQuestions.length) {
        displayRonQuestion();
    } else {
        alert('Quiz complete');
        currentQuestion = 0;
    }
};



function runRonGame() {
    hideMainContent();
    displayQuizArea();
    displayRonQuestion();
};


function displayHermioneQuestion() {

    //places the question and choices in the correct locations within quiz area and assigns them a variable
    let questionElement = document.getElementById("question");
    let choicesElement = document.getElementById("answer-choices");

    //fetches the current question from harryQuestion variable and places it in a variable
    let displayQuestion = hermioneQuestions[currentQuestion];

    questionElement.textContent = displayQuestion.question;

    //create choices    
    choicesElement.innerHTML = "";
    displayQuestion.choices.forEach((choice, index) => {
        let input = document.createElement('BUTTON');
        input.type = "radio";
        input.value = "index";
        input.textContent = choice;
        input.setAttribute('class', 'button-choices');
        input.addEventListener('click', () => checkHermioneAnswer(choice));
        choicesElement.appendChild(input);
    });

    //btnOne.setAttribute('onclick', 'nextQuestionThree();');
    //btnOne.textContent = "Next";
    btnTwo.setAttribute('onclick', 'home();');
    btnTwo.textContent = "home";
    //quizArea.appendChild(btnOne);
    quizArea.appendChild(btnTwo);
    scoreCard();
};

function checkHermioneAnswer(choice) {
    console.log('choice: ', choice);
    let correct = hermioneQuestions[currentQuestion].correct;
    console.log('correct: ', correct);
    if (choice === correct) {
        alert('correct'), addScore();;
    } else {
        alert('wrong'), addIncorrectScore();
    }
    nextQuestionThree();
};

function nextQuestionThree() {
    currentQuestion++
    if (currentQuestion < hermioneQuestions.length) {
        displayHermioneQuestion();
    } else {
        alert('Quiz complete');
        currentQuestion = 0;
    }
};

function runHermioneGame() {
    hideMainContent();
    displayQuizArea();
    displayHermioneQuestion();
};

function home() {
    displayMainContent();
    hideQuizArea();
    removeScoreCard();
};