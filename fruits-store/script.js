// ****** select items **********

// Selecting elements from the DOM
const form = document.querySelector(".fruit-form");
const alert = document.querySelector(".alert");
const fruit = document.getElementById("fruit");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".fruit-container");
const list = document.querySelector(".fruit-list");
const clearBtn = document.querySelector(".clear-btn");

// Variables to track the editing state
let editID;
let editFlag = false;
let editFruitEl;

// Event listener for when the window has finished loading
window.addEventListener("DOMContentLoaded", setupFruitList);

// Event listener for form submission
form.addEventListener("submit", addFruit);

// Event listener for clearing fruits
clearBtn.addEventListener("click", clearFruits);

// Function to handle adding a new fruit
function addFruit(e) {
  e.preventDefault();
  const inputValue = fruit.value;
  const id = new Date().getTime().toString();

  if (inputValue !== "" && !editFlag) {
    // Creating and adding a new fruit element
    createFruitList(id, inputValue);
    displayAlert("item added to the list", "success");
    container.classList.add("show-container");
    addToLocalStorage(id, inputValue);
    setBackToDefault();
  } else if (inputValue !== "" && editFlag) {
    // Editing an existing fruit element
    editFruitEl.innerHTML = inputValue;
    displayAlert("value changed", "success");
    editLocalStorage(editID, inputValue);
    setBackToDefault();
  } else {
    displayAlert("please enter a value", "danger");
  }
}

// Function to display an alert message
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  // Remove alert after a short delay
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

// Function to delete a fruit
function deleteFruits(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element);

  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
  displayAlert("fruit removed", "danger");
  removeFromLocalStorage(id);
}

// Function to edit a fruit
function editFruits(e) {
  const element = e.currentTarget.parentElement.parentElement;
  editFruitEl = e.currentTarget.parentElement.previousElementSibling;
  fruit.value = editFruitEl.innerHTML;
  editID = element.dataset.id;
  editFlag = true;
  submitBtn.textContent = "edit";
}

// Function to clear all fruits
function clearFruits() {
  const fruitItem = document.querySelectorAll(".fruit-item");
  if (fruitItem.length > 0) {
    fruitItem.forEach((item) => list.removeChild(item));
  }
  container.classList.remove("show-container");
  displayAlert("empty list", "danger");
  localStorage.removeItem("list");
}

// Function to set back to default state
function setBackToDefault() {
  fruit.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}

// Function to add a new fruit to local storage
function addToLocalStorage(id, value) {
  const fruit = { id, value };
  let items = getLocalStorage();
  items.push(fruit);
  localStorage.setItem("list", JSON.stringify(items));
}

// Function to get items from local storage
function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

// Function to remove a fruit from local storage
function removeFromLocalStorage(id) {
  const fruitList = getLocalStorage();
  const fruits = fruitList.filter((fruit) => fruit.id !== id);
  localStorage.setItem("list", JSON.stringify(fruits));
}

// Function to edit a fruit in local storage
function editLocalStorage(id, value) {
  const fruitList = getLocalStorage();
  const fruits = fruitList.map((fruit) => {
    if (fruit.id === id) {
      fruit.value = value;
    }
    return fruit;
  });
  localStorage.setItem("list", JSON.stringify(fruits));
}

// Function to create a fruit list item in the DOM
function createFruitList(id, value) {
  const element = document.createElement("article");
  let attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.classList.add("fruit-item");
  element.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
      <!-- edit btn -->
      <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <!-- delete btn -->
      <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  `;
  // Adding event listeners to edit and delete buttons
  const deleteBtn = element.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", deleteFruits);
  const editBtn = element.querySelector(".edit-btn");
  editBtn.addEventListener("click", editFruits);
  list.appendChild(element);
}

// Function to set up the fruit list on page load
function setupFruitList() {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach((item) => createFruitList(item.id, item.value));
  }
}
