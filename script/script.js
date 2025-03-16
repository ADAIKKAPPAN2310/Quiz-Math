"use strict"

const question = document.querySelector(".question");
const number = document.querySelector(".number");
const submit = document.querySelector(".submit");
const answer = document.querySelector(".answer");
const refresh = document.querySelector(".refresh");

let randomNumber1 = Math.floor(Math.random() * 100);
let randomNumber2 = Math.floor(Math.random() * 100);

const arr = ["+", "-", "*", "/"];
let randomSymbolNumber = Math.floor(Math.random() * arr.length);
let randomSymbol = arr[randomSymbolNumber];

question.textContent = `${randomNumber1} ${randomSymbol} ${randomNumber2}`;
let userInput = Number(number.value);

submit.addEventListener("click", function () {
    if (userInput) {
        let questionUser = 0;
        if (randomSymbol === "+") questionUser = randomNumber1 + randomNumber2;
        else if (randomSymbol === "-") questionUser = randomNumber1 - randomNumber2;
        else if (randomSymbol === "*") questionUser = randomNumber1 * randomNumber2;
        else if (randomSymbol === "/") questionUser = Math.trunc(randomNumber1 / randomNumber2);
        console.log(questionUser);

        answer.textContent = questionUser === userInput ? "correct" : `incorrect, ${questionUser} is the correct answer!`;
    }
    else {
        answer.textContent = "No value!";
    }
});

refresh.addEventListener("click", function () {
    if (userInput) {
        number.value = "";
        randomNumber1 = Math.floor(Math.random() * 100);
        randomNumber2 = Math.floor(Math.random() * 100);
        answer.textContent = "";
        question.textContent = `${randomNumber1} + ${randomNumber2}`;
        randomSymbolNumber = Math.floor(Math.random() * arr.length);
        randomSymbol = arr[randomSymbolNumber];
        question.textContent = `${randomNumber1} ${randomSymbol} ${randomNumber2}`;
    }
    else {
        answer.textContent = "No value!";
    }
})