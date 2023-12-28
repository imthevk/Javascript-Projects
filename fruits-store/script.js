// ****** select items **********

const form = document.querySelector(".fruit-form");
const alert = document.querySelector(".alert");
const fruit = document.getElementById("fruit");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".fruit-container");
const list = document.querySelector(".fruit-list");
const clearBtn = document.querySelector(".clear-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = fruit.value;
  //   list.textContent = inputValue;
});
