"use strict";
const number = document.querySelector("#adviceNumber");
const advice = document.querySelector(".adivce__par");
const btn = document.querySelector("button");

const adviceFunc = () => {
  let randomNumber = Math.trunc(Math.random() * 100);

  fetch(`https://api.adviceslip.com/advice/${randomNumber}`)
    .then((response) => response.json())
    .then((data) => {
      const ad = data.slip.advice;
      number.textContent = data.slip.id;
      advice.textContent = ad;
    });
};

btn.addEventListener("click", adviceFunc);
