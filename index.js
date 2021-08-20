const chalk = require('chalk');
var readlineSync = require('readline-sync');
var score =0;
console.log(chalk.blue('----------------------------------------'));
console.log("Welcome to "+chalk.bgRed("Mohammed's Quiz"));
console.log(chalk.blue('----------------------------------------'));

var q1={
  question:"where do i live \n a: chennai \n b: bangalore",
  answer:"a",
};

var q2={
  question:"What is my favourite series \n a: Stranger Things \n b: Prison break",
  answer:"a",
};

var q3={
  question:"What is my favourite sweet \n a: Laddoo \n b: Rasamalai",
  answer:"b",
};

var q4={
  question:"What is my favourite car \n a: porsche \n b: BMW",
  answer:"b",
};

var q5={
  question:"What is my native language \n a: Tamil \n b: Malayalam",
  answer:"b",
};

function quiz(question,answer){
  var userAnswer = readlineSync.question(question+"\n");
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log(chalk.bgGreen("Right!"));
    score++;
  }else{
    console.log(chalk.bgYellow("Wrong :("));
  }

  console.log("Current Score : "+score);
}

quiz(q1.question,q1.answer);
console.log(chalk.cyan('----------------------------------------'));
quiz(q2.question,q2.answer);
console.log(chalk.cyan('----------------------------------------'));
quiz(q3.question,q3.answer);
console.log(chalk.cyan('----------------------------------------'));

quiz(q4.question,q4.answer);
console.log(chalk.cyan('----------------------------------------'));
quiz(q5.question,q5.answer);
console.log(chalk.cyan('----------------------------------------'));


console.log("High score : 5\nYour score : ",score);