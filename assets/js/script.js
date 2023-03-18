var questionsArr = [
{
    question: 'Commonly used data types DO NOT include:',
    choices: {
        a:'A. strings',
        b: 'B. booleans',
        c:'C.numbers',
        d:'D. alerts',
    },
    answer:'d'
},

{  quetion:'The condition in an if else statement is enclosed with_____',
   choices: {
    a:'A. quotes',
    b:'B. curly braquets',
    c:'parenthesis',
    d:'square brackets',
}   ,

answer: 'c'
},

{  quetion:'Arrays in Javascript can be use to store______',
   choices: {
    a:'A.numbers and strings',
    b:'B.others arrays',
    c:'C.booleans',
    d:'D.all of the above',
}   ,

answer: 'd'
},

{  quetion:'String values must be enclosed within____ when being assigned to variables',
   choices: {
    a:'A.quotes',
    b:'B.curly braquets',
    c:'c.parenthesis',
    d:'D.square brackets',
}   ,

answer: 'a'
},

{  quetion:'A very useful tool used during development for printing content to the debugger is',
   choices: {
    a:'A. Javascript',
    b:'B.terminal/bash',
    c:'C.For loops',
    d:'D. console.log',
}   ,

answer: 'd'
},

];

// variables set to target specific classes in the html file using 'querySelector'.
var header = document.querySelector('.header');
var opening = document.querySelector('.open');
var container = document.querySelector('.container');
var divider = document.querySelector('.divide');
var result = document.querySelector('.final');
var scores = [];
var mark = 0;
var index = 0;
var record = [];



// create view high scores using ' createElement' and 'add' methods
var viewScore = document.createElement('p');
viewScore.classList.add('banner', 'view-score');
viewScore.textContent = 'View High Scores';

 // create time using 'appendChild' method
 var time = document.createElement('p');
 time.classList.add('banner', 'time');
 time.textContent = 'Time: ';
 var second = document.createElement('span');
 second.setAttribute('id', 'second');
 time.appendChild(second);


 // create container title
 var title = document.createElement('h1');
 title.classList.add('title');
 title.textContent = 'Code quiz challenge';

 // create container text
 var text = document.createElement('p');
 text.classList.add('text');
 text.textContent = 'Try to answer the questions within the time limit. Incorrect answers will remove 10 seconds from the timer and from your score!';

  // create container start btn
  var startBtn = document.createElement('button');
  startBtn.classList.add('btn', 'btn-start');
  startBtn.textContent = 'Start Quiz';
// With these appendChild method, these arguments: View score, time, title text, and start button are displayed in the browser!
  header.appendChild(viewScore);
  header.appendChild(time);
  container.appendChild(title);
  container.appendChild(text);
  container.appendChild(startBtn);
