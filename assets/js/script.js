
// Array with questions
var questions = [
    { q: 'Commonly used data types DO NOT include:',
      a: '3.alerts',
      choices: [{choice: '1. strings'}, {choice: '2. booleans'}, {choice: '3. alerts'}, {choice: '4. numbers'}]
    },
    { q: "The condition in an if / else statement is enclosed within ____.",
      a: '2. curly brackets', 
      choices: [{choice: '1. quotes'}, {choice: '2. curly brackets'}, {choice: '3. parenthesis'}, {choice: '4. square brackets'}]
    },
    { q: 'Arrays in Javascript can be used to store ____.', 
      a: '4. all of the above', 
      choices: [{choice: '1. numbers and strings'}, {choice: '2. other arrays'}, {choice: '3. booleans'}, {choice: '4. all of the above'}]
    },
    { q: 'String values must be enclosed within ____ when being assigned to variables.', 
      a: '3. quotes', 
      choices: [{choice: '1. commas'}, {choice: '2. curly braquets'}, {choice: '3. quotes'}, {choice: '4. parenthesis'}]
    },
    { q: 'A very useful tool for used during development and debugging for printing content to the debugger is:', 
      a: '4. Console log', 
      choices: [{choice: '1. Javascript'}, {choice: '2. terminal / bash'}, {choice: '3. for loops'}, {choice: '4. Console log'}]
    },
    
  ];
// Targeting element using the DOM: specific elements using getElementById method
  var containerQuestionEl = document.getElementById("question-container");
  var containerStartEl = document.getElementById("starter-container");
  var containerEndEl = document.getElementById("end-container")
  var containerScoreEl = document.getElementById("score-banner")
  var formInitials = document.getElementById("initials-form")
  var containerHighScoresEl = document.getElementById("high-score-container")
  var ViewHighScoreEl = document.getElementById("view-high-scores")
  var listHighScoreEl = document.getElementById("high-score-list")
  var correctEl = document.getElementById("correct")
  var wrongEl = document.getElementById("wrong")
  //Targeting buttons
  var btnStartEl = document.querySelector("#start-game");
  var btnGoBackEl = document.querySelector("#go-back")
  var btnClearScoresEl = document.querySelector("#clear-high-scores")
  //questions/answers element
  var questionEl = document.getElementById("question")
  var answerbuttonsEl = document.getElementById("answer-buttons")
  var timerEl = document.querySelector("#timer");
  var score = 0;
  var timeleft;
  var gameover
  timerEl.innerText = 0;

  //Array for high score
var HighScores = [];

//assign array details for questions 
var arrayShuffledQuestions
var QuestionIndex = 0

   //When go back button is hit in the high score page
var renderStartPage = function () {
    containerHighScoresEl.classList.add("hide")
    containerHighScoresEl.classList.remove("show")
    containerStartEl.classList.remove("hide")
    containerStartEl.classList.add("show")
    containerScoreEl.removeChild(containerScoreEl.lastChild)
    QuestionIndex = 0
    gameover = ""
    timerEl.textContent = 0 
    score = 0
  
    if (correctEl.className = "show") {
        correctEl.classList.remove("show");
        correctEl.classList.add("hide")
    }
    if (wrongEl.className = "show") {
        wrongEl.classList.remove("show");
        wrongEl.classList.add("hide");
    }
  }


  //check every second if game-over is true . Start time at 60. 
var setTime = function () {
    timeleft = 60;
  
  var timercheck = setInterval(function() {
    timerEl.innerText = timeleft;
    timeleft--
  
    if (gameover) {
        clearInterval(timercheck)
    }
   
    if (timeleft < 0) {
        showScore()
        timerEl.innerText = 0
        clearInterval(timercheck)
    }
  
    }, 1000)
  }
  

  var startGame = function() {
    //add classes to show/hide start and quiz screen
    containerStartEl.classList.add('hide');
    containerStartEl.classList.remove("show");
    containerQuestionEl.classList.remove('hide');
    containerQuestionEl.classList.add('show');
    //Random questions 
    arrayShuffledQuestions = questions.sort(() => Math.random() - 0.5)
    setTime()
    setQuestion()
  }
  
  // next question for quiz 
  var setQuestion = function() {
    resetAnswers()
    displayQuestion(arrayShuffledQuestions[QuestionIndex])
  }
  
//remove answer buttons
var resetAnswers = function() {
    while (answerbuttonsEl.firstChild) {
        answerbuttonsEl.removeChild(answerbuttonsEl.firstChild)
    };
  };
  
  //display question information 
  var displayQuestion = function(index) {
    questionEl.innerText = index.q
    for (var i = 0; i < index.choices.length; i++) {
        var answerbutton = document.createElement('button')
        answerbutton.innerText = index.choices[i].choice
        answerbutton.classList.add('btn')
        answerbutton.classList.add('answerbtn')
        answerbutton.addEventListener("click", answerCheck)
        answerbuttonsEl.appendChild(answerbutton)
        }
    };
  //Reveals message: It is correct! on screen
  var answerCorrect = function() {
    if (correctEl.className = "hide") {
        correctEl.classList.remove("hide")
        correctEl.classList.add("banner")
        wrongEl.classList.remove("banner")
        wrongEl.classList.add("hide")
        }
    }  
  //Reveals message :Sorry it is wrong! on screen
  var answerWrong = function() {
    if (wrongEl.className = "hide") {
        wrongEl.classList.remove("hide")
        wrongEl.classList.add("banner")
        correctEl.classList.remove("banner")
        correctEl.classList.add("hide")
    }
  }
  
  //check if answer is correct    
  var answerCheck = function(event) {
    var selectedanswer = event.target
        if (arrayShuffledQuestions[QuestionIndex].a === selectedanswer.innerText){
            answerCorrect()
            score = score + 8 ;
        }
  
        else {
          answerWrong()
          score = score - 5
          timeleft = timeleft - 5
      };
  
    //go to next question, check if there is more questions
      QuestionIndex++
        if  (arrayShuffledQuestions.length > QuestionIndex + 1) {
            setQuestion()
        }   
        else {
           gameover = "true";
           showScore();
            }
  }
  
    //Display total score screen at end of game
  var showScore = function () {
    containerQuestionEl.classList.add("hide");
    containerEndEl.classList.remove("hide");
    containerEndEl.classList.add("show");
  
    var scoreDisplay = document.createElement("p");
    scoreDisplay.innerText = ("Your final score is " + score + "!");
    containerScoreEl.appendChild(scoreDisplay);
  }       
  
  //create high score values
  var createHighScore = function(event) { 
    //The preventDefault() method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.
    event.preventDefault() 
    var initials = document.querySelector("#initials").value;
    if (!initials) {
      alert("Enter your intials!");
      return;
    }
  
  formInitials.reset();
  
  var HighScore = {
  initials: initials,
  score: score
  } 
  
  //push and sort scores
  HighScores.push(HighScore);
  HighScores.sort((a, b) => {return b.score-a.score});
  
  //clear visibile list to resort
  while (listHighScoreEl.firstChild) {
   listHighScoreEl.removeChild(listHighScoreEl.firstChild)
  }
  //create elements in order of high scores
  for (var i = 0; i < HighScores.length; i++) {
  var highscoreEl = document.createElement("li");
  highscoreEl.ClassName = "high-score";
  highscoreEl.innerHTML = HighScores[i].initials + " - " + HighScores[i].score;
  listHighScoreEl.appendChild(highscoreEl);
  }
  
  saveHighScore();
  displayHighScores();
  
  }
  //save high score. The JSON.stringify() method converts a JavaScript value to a JSON string
  var saveHighScore = function () {
    localStorage.setItem("HighScores", JSON.stringify(HighScores))
        
  }
  
  //load values/ called on page load
  var loadHighScore = function () {
    var LoadedHighScores = localStorage.getItem("HighScores")
        if (!LoadedHighScores) {
        return false;
    }
  //The JSON.parse()  method parses a JSON string, constructing the JavaScript value or object described by the string.
    LoadedHighScores = JSON.parse(LoadedHighScores);
    //The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. 
    LoadedHighScores.sort((a, b) => {return b.score-a.score})
  
  
    for (var i = 0; i < LoadedHighScores.length; i++) {
        var highscoreEl = document.createElement("li");
        highscoreEl.ClassName = "high-score";
        highscoreEl.innerText = LoadedHighScores[i].initials + " - " + LoadedHighScores[i].score;
        //The appendChild() method appends a node (element) as the last child of an element
        listHighScoreEl.appendChild(highscoreEl);
  
        HighScores.push(LoadedHighScores[i]);
        
    }
  }  
  
  //display high score screen from link or when intiials entered
  var displayHighScores = function() {
  
    containerHighScoresEl.classList.remove("hide");
    containerHighScoresEl.classList.add("show");
    gameover = "true"
  // Using conditional to hide or show
    if (containerEndEl.className = "show") {
        containerEndEl.classList.remove("show");
        containerEndEl.classList.add("hide");
        }
    if (containerStartEl.className = "show") {
        containerStartEl.classList.remove("show");
        containerStartEl.classList.add("hide");
        }
        
    if (containerQuestionEl.className = "show") {
        containerQuestionEl.classList.remove("show");
        containerQuestionEl.classList.add("hide");
        }
  
    if (correctEl.className = "show") {
        correctEl.classList.remove("show");
        correctEl.classList.add("hide");
    }
  
    if (wrongEl.className = "show") {
        wrongEl.classList.remove("show");
        wrongEl.classList.add("hide");
        }
    
  }
  //clears high scores
  var clearScores = function () {
    HighScores = [];
  
    while (listHighScoreEl.firstChild) {
        listHighScoreEl.removeChild(listHighScoreEl.firstChild);
    }
  
    localStorage.clear(HighScores);
  
  } 
  
  loadHighScore()
    
  // start game after click using addEventListener method
  btnStartEl.addEventListener("click", startGame)

  formInitials.addEventListener("submit", createHighScore)
  //View your high score
  ViewHighScoreEl.addEventListener("click", displayHighScores)
  // Click go back button to return to start over another quiz
  btnGoBackEl.addEventListener("click", renderStartPage)
  //clear scores button
  btnClearScoresEl.addEventListener("click", clearScores)
  
