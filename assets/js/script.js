//Global Variables

/**
 * Questions sources from BuzzFeed
 */
const harryQuestions = [{
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

/**
 * Questions sources from BuzzFeed
 */
const ronQuestions = [{
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
        choices: ["A Knight chess piece", "A Lion", "A Dragon", "A Pygmy Puff"],
        correct: "A Pygmy Puff"
    },
    {
        question: "Who is Ron's favourite Quidditch team?",
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

/**
 * Questions sources from BuzzFeed
 */
const hermioneQuestions = [{
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
        choices: ["Pheonix feather", "Unicorn hair", "Owl feather", "Dragon heartstring"],
        correct: "Dragon heartstring"
    },
    {
        question: "Why did Hermione miss the lesson on Cheering Charms?",
        choices: ["She was stunned by a Basilisk", "She had turned into a cat after taking polyjuice potion", "Draco's cruel bahaviour made her upset", "She ate too many puking pastels"],
        correct: "Draco's cruel bahaviour made her upset"
    },
    {
        question: "Where did Hermione hold the first meeting for students interested in joining Dumbledore's Army?",
        choices: ["The Hog's Head", "The Leaky Cauldron", "The Shrieking Shack", "The Hogwarts Library"],
        correct: "The Hog's Head"
    },
    {
        question: "What are Hermione's favourite subjects?",
        choices: ["Transfiguration and Charms", "Herbology and Arithmancy", "Transfiguration and Arithmancy", "Arithmancy and Charms"],
        correct: "Arithmancy and Charms"
    },

];

const gameArea = document.getElementById('game-area');

const mainContent = document.getElementById('main-content');

const btnOne = document.createElement('BUTTON');

const totalScoreNumber = document.createElement('h3');

const totalScoreNumberTwo = document.createElement('h3');

const totalScoreNumberThree = document.createElement('h3');

let quizArea = document.getElementById('quiz-area');

let currentQuestion = 0;

let correctScore = 0;

let incorrectScore = 0;

let scoreBoard = document.createElement('div');

let scoreTitle = document.createElement('h3');

let scoreTitleTwo = document.createElement('h3');

let correctAnswers = document.createElement('p');

let incorrectAnswers = document.createElement('p');



/**
 * This function creates the username
 * @param {EventListener} selected - When the create button is selected
 * checks that the input is valid in that it must have at least one index value, so the user cannot just enter a space
 * once the create button is selected the value from the input is set as a h2 element
 * the text input field and create button are then hidden and replaced with the h2 element
 * 
 * Some of the code has been taken from SheCodes - https://www.shecodes.io/athena/5824-how-to-change-h1-to-the-user-name-submitted-in-search-engine and 
 * w3schools - https://www.w3schools.com/js/js_validation.asp
 */
function createUsername(selected) {
    let valueCheck = document.getElementById('username').value;
    if (valueCheck >= 0) {
        alert('You must create a valid username before proceeding');
    } else {
        document.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault();
            let userName = document.getElementById('username').value;
            let usernameField = document.createElement('h2');
            usernameField.setAttribute('id', 'username-field');
            usernameField.textContent = `Hello, ${userName}`;
            let usernameOutput = document.getElementById('username-output');
            usernameOutput.appendChild(usernameField);
        });
        let userNameInput = document.getElementById('username-input');
        userNameInput.style.display = "none";
    }
};


/**
 * function which takes the id's from the main content section and set their display property to hide
 * 
 * guidance for code taken from w3schools - https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
 */
function hideMainContent() {
    const welcome = document.getElementById('welcome');
    const harry = document.getElementById('harry');
    const ron = document.getElementById('ron');
    const hermione = document.getElementById('hermione');
    welcome.style.display = "none";
    harry.style.display = "none";
    ron.style.display = "none";
    hermione.style.display = "none";
};


/**
 * function which takes the id's from the main content section and set their display property to block
 * 
 * guidance for code taken from w3schools - https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
 */
function displayMainContent() {
    const welcome = document.getElementById('welcome');
    const harry = document.getElementById('harry');
    const ron = document.getElementById('ron');
    const hermione = document.getElementById('hermione');
    welcome.style.display = "block";
    harry.style.display = "block";
    ron.style.display = "block";
    hermione.style.display = "block";
};


/**
 * This function creates the html structure for the score card within the game
 * it sets attributes to each element which can be called upon in other functions
 */
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


/**
 * This function removes the elements within the scorecard
 * have set to remove because they are re-created at other points within the game, and if the elements were set to hide they would duplicate
 */
function removeScoreCard() {
    scoreBoard.remove();
    scoreTitle.remove();
    scoreTitleTwo.remove();
    correctAnswers.remove();
    incorrectAnswers.remove();
};

/**
 * This function calls upon the correct element from the scorecard
 * it increments the score by 1 when called
 * it sets this value to the correctAnswers innerText
 */
function addScore() {
    correctScore++;
    let correctAnswers = document.getElementById('correct');
    correctAnswers.innerText = correctScore;
};

/**
 * This function calls upon the incorrect element from the scorecard
 * it increments the score by 1 when called
 * it sets this value to the incorrectAnswers innerText
 */
function addIncorrectScore() {
    incorrectScore++;
    let incorrectAnswers = document.getElementById('incorrect');
    incorrectAnswers.innerText = incorrectScore;
};

/**
 * This function sets the display of the quiz area to none to hide it when called
 * 
 * guidance for code taken from w3schools - https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
 */
function hideQuizArea() {
    quizArea.style.display = 'none';
};

/**
 * This function sets the display of the quiz area to block to display it when called
 * 
 * guidance for code taken from w3schools - https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
 */
function displayQuizArea() {
    quizArea.style.display = 'block';
};

/**
 * This function resets the value of the correct and incorrect elements within the scorecard to 0 when called
 */
function resetScore() {
    correctScore = 0;
    correctAnswers.innerHTML = correctScore;
    incorrectScore = 0;
    incorrectAnswers.innerHTML = correctScore;
};

/**
 * This function has multiple properties
 * it creates the h3 element within the div of the quiz area that the question will be applied to
 * it sets an id to that h3 element which will be called upon in the displayHarryQuestion function
 * it resets the totalScoreNumber for Harry in the footer back to 0
 * it then runs the displayHarryQuestion function
 */
function runGameOne() {
    let questionDiv = document.getElementById('question-div');
    let questionHeading = document.createElement('h3');
    questionHeading.setAttribute('id', 'question');
    questionDiv.appendChild(questionHeading);
    totalScoreNumber.textContent = "0";
    displayHarryQuestion();
};

/**
 * This function removes the question heading from the run game functions when called
 * It removes the element rather than hides the element to avoid duplication of headings
 */
function removeQuestionHeading() {
    let questionHeading = document.getElementById('question');
    questionHeading.remove();
};

/**
 * This function displays the question and relevant choices for harryQuestions
 * 
 * some code and guidance taken from Microsoft Bing search AI generator, Stack Overflow, envato tuts+ and sitepoint
 */
function displayHarryQuestion() {
    //places the question and choices in the correct locations within quiz area and assigns them a variable
    let questionElement = document.getElementById("question");
    let choicesElement = document.getElementById("answer-choices");

    //fetches the current question from harryQuestion variable and places it in a variable
    let displayQuestion = harryQuestions[currentQuestion];
    questionElement.textContent = displayQuestion.question;

    //creates the button choices for the question displayed above
    choicesElement.innerHTML = "";
    displayQuestion.choices.forEach((choice, index) => {
        let input = document.createElement('BUTTON');
        input.value = "index";
        input.textContent = choice;
        input.setAttribute('class', 'button-choices');
        input.addEventListener('click', () => checkHarryAnswer(choice));
        choicesElement.appendChild(input);
    });

    //calls the scoreCard function and adds the home button to the bottom of the section
    scoreCard();
    btnOne.setAttribute('onclick', 'home();');
    btnOne.setAttribute('aria-label', 'select to navigate back to the home screen');
    btnOne.textContent = "home";
    quizArea.appendChild(btnOne);
};

/**
 * This function will run when a choice is selected within the game
 * it passes the selected choice and checks that it is equal to or the same as the string property within the correct key of the current question
 * @param {string} choice 
 * if the choice is the same as or equal to it will display an alert which informs the player they are correct and calls the addScore function
 * if the choice is not the same as or equal to the correct property it will display an alert informing the player they are wrong and calls the addIncorrectScore function
 * It will then call the nextQuestion function
 */
function checkHarryAnswer(choice) {
    let correct = harryQuestions[currentQuestion].correct;
    if (choice === correct) {
        alert('correct'), addScore();
    } else {
        alert('wrong'), addIncorrectScore();
    }
    nextQuestionOne();
};

/**
 * This function has multiple properties
 * It will take the value from the username input and apply that to the alert message
 * It will take the value from the correct element of the scoreboard and apply that to the alert message
 * It will proceed to display the next question and associated choices if the current question is less than the total length of the harryQuestions options array
 * If the current question is the last question it will display an alert
 * the displayed alert will be conditional to if the player got 0 out of 10, 10 out of 10 or a correct value in between
 * the value of the correct element will be applied to the total score element within the footer and then reset back to 0 if the game is run again
 */
function nextQuestionOne() {
    let username = document.getElementById('username').value;
    let finalScore = document.getElementById('correct').textContent;
    let totalScore = document.getElementById('total-score-one');
    currentQuestion++;
    if (currentQuestion < harryQuestions.length) {
        displayHarryQuestion();
    } else if (finalScore === "0") {
        alert(`Quiz complete!! Sorry ${username} you got 0 correct answers. Return to the Home Page and either replay this quiz to try and beat your score, or why not try testing your knowledge on Ron and Hermione`);
        totalScore.appendChild(totalScoreNumber);
        totalScoreNumber.textContent = finalScore;
        currentQuestion = 0;
    } else if (finalScore === "10") {
        alert(`Quiz complete!! Well done ${username}, you got ${finalScore} out of 10 correct. You know your Potter facts! Return to Home Page and try testing your knowledge on Ron and Hermione`);
        totalScore.appendChild(totalScoreNumber);
        totalScoreNumber.textContent = finalScore;
        currentQuestion = 0;
    } else {
        alert(`Quiz complete!! Well done ${username}, you got ${finalScore} out of 10 correct. Return to Home Page and either replay this quiz to try and beat your score, or why not try testing your knowledge on Ron and Hermione`);
        totalScore.appendChild(totalScoreNumber);
        totalScoreNumber.textContent = finalScore;
        currentQuestion = 0;
    }
};

/**
 * This function will run the Harry Game
 * It will first check that a username has been created
 * If it has it will call the hideMainContent function, displayQuizArea function and runGameOne function.
 * If no username has been created it will diplay an alert informing the user they are required to do this before proceeding
 */
function runHarryGame() {
    let valueCheck = document.getElementById('username').value;
    if (valueCheck === "") {
        alert('You must create a username before proceeding');
    } else {
        hideMainContent();
        displayQuizArea();
        runGameOne();
    }
};

/**
 * This function performs the same as the runGameOne function
 * However once the h3 element is created and the total score for Ron is reset back to 0
 * It will run the displayRonQuestions
 */

function runGameTwo() {
    let questionDiv = document.getElementById('question-div');
    let questionHeading = document.createElement('h3');
    questionHeading.setAttribute('id', 'question');
    questionDiv.appendChild(questionHeading);
    totalScoreNumberTwo.textContent = "0";
    displayRonQuestion();
};

/**
 * This function displays the question and relevant choices for ronQuestions
 * 
 * some code and guidance taken from Microsoft Bing search AI generator, Stack Overflow, envato tuts+ and sitepoint
 */

function displayRonQuestion() {
    //places the question and choices in the correct locations within quiz area and assigns them a variable
    let questionElement = document.getElementById("question");
    let choicesElement = document.getElementById("answer-choices");

    //fetches the current question from ronQuestion variable and places it in a variable
    let displayQuestion = ronQuestions[currentQuestion];
    questionElement.textContent = displayQuestion.question;

    //creates the button choices for the question displayed above
    choicesElement.innerHTML = "";
    displayQuestion.choices.forEach((choice, index) => {
        let input = document.createElement('BUTTON');
        input.value = "index";
        input.textContent = choice;
        input.setAttribute('class', 'button-choices');
        input.addEventListener('click', () => checkRonAnswer(choice));
        choicesElement.appendChild(input);
    });

    //calls the scoreCard function and adds the home button to the bottom of the section
    scoreCard();
    btnOne.setAttribute('onclick', 'home();');
    btnOne.setAttribute('aria-label', 'select to navigate back to the home screen');
    btnOne.textContent = "home";
    quizArea.appendChild(btnOne);
};

/**
 * This function will run when a choice is selected within the game
 * it passes the selected choice and checks that it is equal to or the same as the string property within the correct key of the current question
 * @param {string} choice 
 * if the choice is the same as or equal to it will display an alert which informs the player they are correct and callss the addScore function
 * if the choice is not the same as or equal to the correct property it will display an alert informing the player they are wrong and calls the addIncorrectScore function
 * It will then call the nextQuestion function
 */
function checkRonAnswer(choice) {
    let correct = ronQuestions[currentQuestion].correct;
    if (choice === correct) {
        alert('correct'), addScore();;
    } else {
        alert('wrong'), addIncorrectScore();
    }
    nextQuestionTwo();
};

/**
 * This function has multiple properties
 * It will take the value from the username input and apply that to the alert message
 * It will take the value from the correct element of the scoreboard and apply that to the alert message
 * It will proceed to display the next question and associated choices if the current question is less than the total length of the ronQuestions options array
 * If the current question is the last question it will display an alert
 * the displayed alert will be conditional to if the player got 0 out of 10, 10 out of 10 or a correct value in between
 * the value of the correct element will be applied to the total score element within the footer and then reset back to 0 if the game is run again
 */
function nextQuestionTwo() {
    let username = document.getElementById('username').value;
    let finalScore = document.getElementById('correct').textContent;
    let totalScore = document.getElementById('total-score-two');
    currentQuestion++;
    if (currentQuestion < ronQuestions.length) {
        displayRonQuestion();
    } else if (finalScore === "0") {
        alert(`Quiz complete!! Sorry ${username} you got 0 correct answers. Return to the Home Page and either replay this quiz to try and beat your score, or why not try testing your knowledge on Harry and Hermione?`);
        totalScore.appendChild(totalScoreNumberTwo);
        totalScoreNumberTwo.textContent = finalScore;
        currentQuestion = 0;
    } else if (finalScore === "10") {
        alert(`Quiz complete!! Well done ${username}, you got ${finalScore} out of 10 correct. You know your Potter facts! Return to Home Page and try testing your knowledge on Harry and Hermione?`);
        totalScore.appendChild(totalScoreNumberTwo);
        totalScoreNumberTwo.textContent = finalScore;
        currentQuestion = 0;
    } else {
        alert(`Quiz complete!! Well done ${username}, you got ${finalScore} out of 10 correct. Return to Home Page and either replay this quiz to try and beat your score, or why not try testing your knowledge on Harry and Hermione?`);
        totalScore.appendChild(totalScoreNumberTwo);
        totalScoreNumberTwo.textContent = finalScore;
        currentQuestion = 0;
    }
};
/**
 * This function will run the Ron Game
 * It will first check that a username has been created
 * If it has it will call the hideMainContent function, displayQuizArea function and runGameTwo function.
 * If no username has been created it will diplay an alert informing the user they are required to do this before proceeding
 */
function runRonGame() {
    let valueCheck = document.getElementById('username').value;
    if (valueCheck === "") {
        alert('You must create a username before proceeding');
    } else {
        hideMainContent();
        displayQuizArea();
        runGameTwo();
    }
};

/**
 * This function performs the same as the runGameOne and runGameTwo function
 * However once the h3 element is created and the total score for Hermione is reset back to 0
 * It will run the displayHermioneQuestions
 */
function runGameThree() {
    let questionDiv = document.getElementById('question-div');
    let questionHeading = document.createElement('h3');
    questionHeading.setAttribute('id', 'question');
    questionDiv.appendChild(questionHeading);
    totalScoreNumberThree.textContent = "0";
    displayHermioneQuestion();
};

/**
 * This function displays the question and relevant choices for hermioneQuestions
 * 
 * some code and guidance taken from Microsoft Bing search AI generator, Stack Overflow, envato tuts+ and sitepoint
 */
function displayHermioneQuestion() {
    //places the question and choices in the correct locations within quiz area and assigns them a variable
    let questionElement = document.getElementById("question");
    let choicesElement = document.getElementById("answer-choices");

    //fetches the current question from hermioneQuestion variable and places it in a variable
    let displayQuestion = hermioneQuestions[currentQuestion];
    questionElement.textContent = displayQuestion.question;

    //creates the button choices for the question displayed above
    choicesElement.innerHTML = "";
    displayQuestion.choices.forEach((choice, index) => {
        let input = document.createElement('BUTTON');
        input.value = "index";
        input.textContent = choice;
        input.setAttribute('class', 'button-choices');
        input.addEventListener('click', () => checkHermioneAnswer(choice));
        choicesElement.appendChild(input);
    });

    //calls the scoreCard function and adds the home button to the bottom of the section
    scoreCard();
    btnOne.setAttribute('onclick', 'home();');
    btnOne.setAttribute('aria-label', 'select to navigate back to the home screen');
    btnOne.textContent = "home";
    quizArea.appendChild(btnOne);
};

/**
 * This function will run when a choice is selected within the game
 * it passes the selected choice and checks that it is equal to or the same as the string property within the correct key of the current question
 * @param {string} choice 
 * if the choice is the same as or equal to it will display an alert which informs the player they are correct and calls the addScore function
 * if the choice is not the same as or equal to the correct property it will display an alert informing the player they are wrong and calls the addIncorrectScore function
 * It will then call the nextQuestion function
 */
function checkHermioneAnswer(choice) {
    let correct = hermioneQuestions[currentQuestion].correct;
    if (choice === correct) {
        alert('correct'), addScore();;
    } else {
        alert('wrong'), addIncorrectScore();
    }
    nextQuestionThree();
};

/**
 * This function has multiple properties
 * It will take the value from the username input and apply that the alert message
 * It will take the value from the correct element of the scoreboard and apply that to the alert message
 * It will proceed to display the next question and associated choices if the current question is less than the total length of the hermioneQuestions options array
 * If the current question is the last question it will display an alert
 * the displayed alert will be conditional to if the player got 0 out of 10, 10 out of 10 or a correct value in between
 * the value of the correct element will be applied to the total score element within the footer and then reset back to 0 if the game is run again
 */
function nextQuestionThree() {
    let username = document.getElementById('username').value;
    let finalScore = document.getElementById('correct').textContent;
    let totalScore = document.getElementById('total-score-three');
    currentQuestion++;
    if (currentQuestion < hermioneQuestions.length) {
        displayHermioneQuestion();
    } else if (finalScore === "0") {
        alert(`Quiz complete!! Sorry ${username} you got 0 correct answers. Return to the Home Page and either replay this quiz to try and beat your score, or why not try testing your knowledge on Harry and Ron?`);
        totalScore.appendChild(totalScoreNumberThree);
        totalScoreNumberThree.textContent = finalScore;
        currentQuestion = 0;
    } else if (finalScore === "10") {
        alert(`Quiz complete!! Well done ${username}, you got ${finalScore} out of 10 correct. You know your Potter facts! Return to Home Page and try testing your knowledge on Harry and Ron?`);
        totalScore.appendChild(totalScoreNumberThree);
        totalScoreNumberThree.textContent = finalScore;
        currentQuestion = 0;
    } else {
        alert(`Quiz complete!! Well done ${username}, you got ${finalScore} out of 10 correct. Return to Home Page and either replay this quiz to try and beat your score, or why not try testing your knowledge on Harry and Ron?`);
        totalScore.appendChild(totalScoreNumberThree);
        totalScoreNumberThree.textContent = finalScore;
        currentQuestion = 0;
    }
};

/**
 * This function will run the Hermione Game
 * It will first check that a username has been created
 * If it has it will call the hideMainContent function, displayQuizArea function and runGameThree function.
 * If no username has been created it will diplay an alert informing the user they are required to do this before proceeding
 */
function runHermioneGame() {
    let valueCheck = document.getElementById('username').value;
    if (valueCheck === "") {
        alert('You must create a username before proceeding');
    } else {
        hideMainContent();
        displayQuizArea();
        runGameThree();
    }
};

/**
 * This function will run when the home button is selected
 * It will call the relevant functions that:
 * display the main content, 
 * hide the quiz area, 
 * remove the question heading, 
 * remove the scorecard, 
 * reset the total score in the footer 
 * reset the questions for the game it has exited back to question 1
 */
function home() {
    displayMainContent();
    hideQuizArea();
    removeQuestionHeading();
    removeScoreCard();
    resetScore();
    currentQuestion = 0;
};