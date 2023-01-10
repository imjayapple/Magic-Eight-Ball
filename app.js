//Create a variable to capture the username and set it initially to a empty string
let userName = '';

//Create a variable to present the user with a question
const userQuestion = 'Are you having a marvelous start to the year 2023?'; 

//Create a variable to capture the resulting string, from the saved set of strings, as the random answer
let eightBall = '';

//Our eightBall will have 8 total questions so generate a random whole number between 0 (inclusive) and 9 (exclusive)
let randomNumber = Math.floor(Math.random() * 8);

//Switch statement that takes the randomNumber input and outputs the appropriate string/eightBall assignment
switch (randomNumber) {
  case (0):
    eightBall = 'It is certain';
     break;
  case (1):
    eightBall = 'It is decidedly so'
     break;
  case (2):
    eightBall = 'Reply hazy try again'
     break;
  case (3):
    eightBall = 'Cannot predict now'
     break;
  case (4):
    eightBall = 'Do not count on it'
     break;
  case (5):
    eightBall = 'My sources say no'
     break;
  case (6):
    eightBall = 'Outlook not so good'
     break;
  case (7):
    eightBall = 'Signs point to yes'
     break;
  Default:
    console.log('Invalid entry');
}

//Run some tests

if (randomNumber == 0) {
  eightBall = 'It is decidedly so'
} else if (randomNumber == 1) {
   eightBall = 'Reply hazy try again'
};



console.log(`${userName}, ${userQuestion}`);
console.log(eightBall);