//Global Variables

let harryQuestions = [{
        question: "What house does Harry belong to?",
        choices: ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"],
        correct: 0
    },
    {
        question: "What position does Harry Play in Quidditch?",
        choices: ["Beater", "Seeker", "Keeper", "Chaser"],
        correct: 1
    },
    {
        question: "What kind of wood is Harry's first wand made out of?",
        choices: ["Oak", "Willow", "Beech", "Holly"],
        correct: 3
    },
    {
        question: "What is Harry's middle name?",
        choices: ["James", "Lupin", "Sirius", "Tom"],
        correct: 0
    },
    {
        question: "What type of animal does Harry accidentally set free while at the zoo in Harry Potter and the Philosopher's Stone?",
        choices: ["Lion", "Rat", "Snake", "Spider"],
        correct: 2
    },
    {
        question: "Where was Harry Potter born?",
        choices: ["The Burrow", "Godric's Hollow", "Little Whinging", "Number 12 Grimmauld Place"],
        correct: 1
    },
    {
        question: "Who is Harry Potter's Godfather?",
        choices: ["Peter Petigrew", "Remus Lupin", "Sirius Black", "Albus Dumbledore"],
        correct: 2
    },
    {
        question: "What is the name of Harry's owl?",
        choices: ["Fluffy", "Padfort", "Crookshanks", "Hedwig"],
        correct: 3
    },
    {
        question: "What fake name does Harry use while attending Bill and Fleur's wedding in disguise in Harry Potter and the Deathly Hallows?",
        choices: ["Barny Weasly", "Bert Weasly", "Bagshot Weasly", "Billy Weasly"],
        correct: 0
    },
    {
        question: "When is Harry's birthday?",
        choices: ["June 31st", "July 31st", "August 31st", "September 31st"],
        correct: 1
    },

];

let ronQuestions = [{
        question: "What is the name of the Weasley family home?",
        choices: ["Number 12 Grimmauld Place", "Little Whinging", "The Burrow", "Godric's Hollow"],
        correct: 2
    },
    {
        question: "What is Ron famously afraid of?",
        choices: ["Rats", "Spiders", "Dragons", "Snakes"],
        correct: 1
    },
    {
        question: "What is Ron's middle name?",
        choices: ["Arthur", "Barney", "Bilius", "Arnold"],
        correct: 2
    },
    {
        question: "What position does Ron play in Quidditch?",
        choices: ["Seeker", "Beater", "Chaser", "Keeper"],
        correct: 3
    },
    {
        question: "Which Weasley dies during the final battle of Hogwarts?",
        choices: ["Bill", "Fred", "George", "Ron"],
        correct: 1
    },
    {
        question: "What is the first name of Ron's mother Mrs Weasley",
        choices: ["Molly", "Tonks", "Lilly", "Minerva"],
        correct: 0
    },
    {
        question: "What does Ginny say Ron has a tattoo of?",
        choices: ["A chess piece Knight", "A Lion", "A Dragon", "A Pygmy Puff"],
        correct: 3
    },
    {
        question: "What is Ron's favourite Quidditch team?",
        choices: ["Chudley Cannons", "Holyhead Harpies", "Puddlemere United", "Tutshill Tornados"],
        correct: 0
    },
    {
        question: "What is the name of Ron's pet owl?",
        choices: ["Fang", "Trevor", "Scabbers", "Pigwidgeon"],
        correct: 3
    },
    {
        question: "What was the name of Ron's first girlfriend?",
        choices: ["Luna Lovegood", "Lavender Brown", "Cho Chang", "Padma Patil"],
        correct: 1
    },

];


let hermioneQuestions = [{
        question: "What is Hermione's first line in the first movie?",
        choices: ["Has anyone seen a toad?", "Oh, are you doing magic?", "You've got dirt on your nose, by the way", "I'm Hermione Granger"],
        correct: 0
    },
    {
        question: "What are Hermione's parents?",
        choices: ["Doctors", "Dentists", "Teachers", "Veternarians"],
        correct: 1
    },
    {
        question: "Who takes Hermione to the Yule Ball",
        choices: ["Harry Potter", "Neville Longbottom", "Fred Weasly", "Viktor Krum"],
        correct: 3
    },
    {
        question: "What is Hermione's middle name?",
        choices: ["Jean", "Bellatrix", "Lilly", "Lavender"],
        correct: 0
    },
    {
        question: "What is Hermione's cat called?",
        choices: ["Fluffy", "Padfort", "Crookshanks", "Fang"],
        correct: 2
    },
    {
        question: "What is Hermione's patronus?",
        choices: ["Doe", "Otter", "Cat", "Swan"],
        correct: 1
    },
    {
        question: "What is Hermione's wand core?",
        choices: ["Pheonix feather", "Unicorn hair", "Ownl feather", "Dragon heartstring"],
        correct: 3
    },
    {
        question: "Why did Hermione miss the lesson on Cheering Charms?",
        choices: ["She was stunned by a Basilisk", "She had turned into a cat after taking polyjuice potion", "Draco's cruel bahaviour made her upset", "She ate too many puking pastels"],
        correct: 2
    },
    {
        question: "Where did Hermione hold the first meeting for students interest in joining Dumbledore's Army?",
        choices: ["The Hog's Head", "The Leaky Cauldron", "The Shrieking Shack", "The Hogwarts Library"],
        correct: 0
    },
    {
        question: "What are Hermione's favourite subjects?",
        choices: ["Transfiguration and Charms", "Herbology and Arithmancy", "Transfiguration and Arithmancy", "Arithmancy and Charms"],
        correct: 3
    },

];


let gameArea = document.getElementById('game-area');

let mainContent = document.getElementById('main-content');

let quizArea = document.getElementById('quiz-area');

let btnOne = document.createElement('BUTTON');

let btnTwo = document.createElement('BUTTON');

let currentQuestion = 0;


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
        input.setAttribute('onclick', 'nextQuestionOne();')
        input.value = "index";
        input.textContent = choice;
        input.setAttribute('class', 'button-choices');
        choicesElement.appendChild(input);

        //let label = document.createElement('label');
        //label.textContent = choice;
        //choicesElement.appendChild(label);
    });

    // btnOne.setAttribute('onclick', 'nextQuestionOne();');
    //btnOne.textContent = "Next";
    btnTwo.setAttribute('onclick', 'home();');
    btnTwo.textContent = "home";
    //quizArea.appendChild(btnOne);
    quizArea.appendChild(btnTwo);


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
        input.type = "radio";
        input.setAttribute('onclick', 'nextQuestionTwo();')
        input.value = "index";
        input.textContent = choice;
        input.setAttribute('class', 'button-choices');
        choicesElement.appendChild(input);
    });

    //btnOne.setAttribute('onclick', 'nextQuestionTwo();');
    //btnOne.textContent = "Next";
    btnTwo.setAttribute('onclick', 'home();');
    btnTwo.textContent = "home";
    //quizArea.appendChild(btnOne);
    quizArea.appendChild(btnTwo);
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
        input.setAttribute('onclick', 'nextQuestionThree();')
        input.value = "index";
        input.textContent = choice;
        input.setAttribute('class', 'button-choices');
        choicesElement.appendChild(input);
    });

    //btnOne.setAttribute('onclick', 'nextQuestionThree();');
    //btnOne.textContent = "Next";
    btnTwo.setAttribute('onclick', 'home();');
    btnTwo.textContent = "home";
    //quizArea.appendChild(btnOne);
    quizArea.appendChild(btnTwo);
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
};