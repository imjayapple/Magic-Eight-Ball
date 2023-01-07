//Create a variable to capture the username and set it initially to a empty string
let userName = '';

//Create a variable to present the user with a question
const userQuestion = 'Are you having a marvelous start to the year 2023?'; 

//Create a variable to capture the resulting string, from the saved set of strings, as the random answer
let eightBall = '';

//Our eightBall will have 8 total questions so generate a random whole number between 0 (inclusive) and 9 (exclusive)
let randomNumber = Math.floor(Math.random() * 8);