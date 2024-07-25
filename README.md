# Potter Quiz

## Intro

![Responsice Mockup]()

## User Experience Stories

 - As a user I want to test my knowledge on the three main characters of Harry Potter.
 - As a user I want to understand the rules of the game.
 - As a users I want to try and beat my score each time.


## Design

- __Color Scheme__
 - There are two primary colors used throughout the game. They are black and white smoke. 
 - The supporting colors which are used for box-shadows around the buttons are dark red and dark grey.
 - The Header and Footer have a black background with white smoke font.
 - The Main Content and Quiz Area have a white smoke background with black font.

- __Typography__
 - The fonts Philosopher and Julius Sans One are used for the Header and h2 headers throughout the game to keep consistency. They are clear and fit with the Harry Potter magic theme.
 - The font Cormorant Garamond is used for the remaining text. This is also clear text and fits with the Harry Potter Theme, closely resembling the font used for the text within the Harry Potter books.
 - The font sans-serif is set as the fallback for all fonts in the instance the browser does not import the fonts correctly.

## Features 


### Existing Features

-__Header__
  
  - The Header encompasses the Title of the Game. It located at the top of the page with the Title centered.
  - The Header has a black background with white smoke font which which is clear and stands out to the user. 
  - The font is capitalized to clearly identify to the user its the title of the game. 

-__Welcome Section__

  - The Welcome Section introduces the player to the game. It includes a How to Play section which talks the user through the steps to start the game. It also informs them they can play as many times as they wish to try and beat their previous score and that their final score from each attempt at a game will display at the bottom of the page.
  - The font is black on a white smoke background which is clear for the player to read.
  - Its located before the Create Username section so that the player understands they are required to create a username to start playing.

-__Username Section__

 - The Username section encompases a title asking the user to create a username, an input field for the user to enter a username and a button to create the username.
 - The font is black on white background which is clear and stands out to the user.
 - This section is located at the top of the page before the user reaches the game itself. 
 - The player is also unable to enter a blank value within the username field, if they attempt to do this an alert will appear once Create is selected informing the player they are required to enter a valid username.

-__Game Area__

 - Main Contents:
    - The Main Contents of the Game Area Section consists of the three game choices for the player, defined in 3 clear sections which are either stacked vertically on smaller screens or horizontally on larger screens.
    - The 3 sections are identified to the player with:
      - a title of the character.
      - a short paragraph asking the player to test their knowledge on the character.
      - an image of the character.
      - a button labelled 'Begin Quiz'.
    - All font within the Main Contents are black on white background which is clear for the player.
    - The button has a box-boarder shadow of dark red.

  - Quiz Area: 
    - The Quiz Area of the Game Area Section is hidden initially to the player. Once the player selects a game choice the Quiz Section for that game choice appears and replaces the Main Contents section of the Game Area.
    - The Quiz Area consists of:
      - A question for the player.
      - 4 answer choices in the form of buttons. These are either stacked vertically on smaller screens or horizontally on larger screens.
      - A home button for the player to return to the Main Contents.
      - A score board labelled with 'Correct' and 'Incorrect'. The relative label will increment after each question depending on if the user selects the correct or incorrect answer. If the player replays the game the score for both 'Correct' and 'Incorrect' will reset to 0.
    - All font within the Quiz Area is black on white background which is clear for the user.
    - If the player exists the game and selects 'Begin Quiz' again the game resets back to the start and the user starts the game again.
  

-__Footer__

 - The aim of this section is showcase the total scores of each game once the player has completed each game.
 - The background is black with white font to mimic the Header of the game and make the text clear for the user to read.
 - If the player attempts a game again and receives a new score, the corresponding total score will be replaced with the new score.


### Features Left to Implement

  - Further quiz games under the following categories;
    - Other Harry Potter characters.
    - To sort the user into a Hogwarts House depending on the answers they choose.
  - Further levels for each game so that the user can progress further.
  - Create a timer feature to set a limit on how long the user has to complete the quiz.
  - Animation on the home screen when the user firsts accesses the site.
  - The user is informed of the correct answers when selecting an incorrect answer in the game.
  - Receive a final score which is a combination of all 3 total scores after completeting all 3 games.



## Testing 

  - I have tested the game in the following browsers to confirm it works across different browsers:
    - Safari
    - Chrome
    - Mozilla Firefox
    - Microsoft Edge

  - Through the use of DevTools I can confirm that the site is responsive across the standard screen sizes;
    - Mobile < = 768px
    - Tablet > = 768px
    - Laptop > = 992px
    - Desktop > = 1200px

  - I confirm that the Header and Footer are clearly defined to the user and easy to read. The rules of the game are clearly layed out and the function of the game is simple to navigate. 

  - I have tested that the create username input works and that the input is required to be a valid string input.

  - I have tested that the player is required to create a username before they can proceed with playing the game.

  - I have tested each quiz to ensure that all questions appear correctly, that the checkAnswer function works and identifies the correct answer for the choice selected by the player. I have checked that when either the correct or incorrect selection is identifies, the relevant score increments correctly. 
  
  - I have tested that the correct alert message appears depending on the score the player achieves;
    - If the player achieves 0 correct scores the alert message offers condolences.
    - If the player achieves some correct score and some incorrect scores the alert message congratulates the user but suggests they play again and try and beat the score.
    - If the player achieves 10 out of 10 correct they are congratulated but not offered to beat their score as this is not possible.
  
  - I have tested that when replaying a game:
    - The total score within the footer resets back to 0.
    - The values for correct and incorrect within the scoreboard reset back to 0.
    - The questions and corresponding choices reset back to question one.
  


### Validator Testing 

  -__HTML__
    - No errors were returned when passing HTML code from index.html through the official W3C validator.

  -__CSS__
    - No errors were returned when passing through the official (Jigsaw) validator.


  -__JavaScript__


  -__Accessibility__
    - By running the game through lighthouse in Chrome DevTools I was able to confirm:
      - that the fonts and colors chosen throughout the game are easy to read and accessible.
      - that the buttons and input elements were accessible throughout the game.


### Unfixed Bugs


## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub) 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://code-institute-org.github.io/love-running-2.0/index.html 


## Credits 


### Content 


### Media



