var readlineSync=require("readline-sync");
const chalk = require('chalk');
var username=readlineSync.question(chalk.yellow(" hey what is your name:"));
var score=0;
console.log(chalk.red("hello " + username + " welcome!Lets Play game"));
function play(question , answer)
{
  var useranswer=readlineSync.question(chalk.green(question));
  if(useranswer==answer)
  {
    score=score+1;
    console.log("Right answer!")
  }
  else{
    console.log("Wrong answer!")
  }
}
//array of objects

var questions=[
  {
    question:"what is surname of vinay?:",
    answer:"patil"
  },
  {
    question:"what is age of vinay?:",
    answer:"19"
  },
  {
    question:"what is favourite editor theme?: ",
    answer:"dark"
  },
  {
    question:"what is favourite favourite language?: ",
    answer:"cpp"
  },
  {
    question:"who is favourite marvel superhero?: ",
    answer:"Iron man"
  },
  {
    question:"Favourite philosophical fiction?: ",
    answer:"Metamorphosis"
  }

]

for(var i=0;i<6;i++){
  play(questions[i].question,questions[i].answer);
}
var highscore=4;
console.log("your score is "+ score);
if(score>highscore)
{
  console.log(username+" you have a highscore!")
  highscore=score;
}
