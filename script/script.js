"use strict"

const question = document.querySelector(".question");
const number = document.querySelector(".number");
const submit = document.querySelector(".submit");
const answer = document.querySelector(".answer");
const refresh = document.querySelector(".refresh");

let randomNumber1 = Math.floor(Math.random() * 100);
let randomNumber2 = Math.floor(Math.random() * 100);

question.textContent = `${randomNumber1} + ${randomNumber2}`;


submit.addEventListener("click", function () {
    let questionUser = randomNumber1 + randomNumber2;
    let userInput = Number(number.value);
    // if (userInput === questionUser) {
    //     answer.textContent = "correct";
    // }
    // else {
    //     answer.textContent = `incorrect, ${questionUser} is the correct answer!`;
    // }
    answer.textContent=questionUser===userInput?"correct":`incorrect, ${questionUser} is the correct answer!`;
})

refresh.addEventListener("click", function () {
    randomNumber1 = Math.floor(Math.random() * 100);
    randomNumber2 = Math.floor(Math.random() * 100);
    answer.textContent = "";
    question.textContent = `${randomNumber1} + ${randomNumber2}`;
})