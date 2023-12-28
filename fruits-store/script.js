// ****** select items **********

const form = document.querySelector(".fruit-form");
const alert = document.querySelector(".alert");
const fruit = document.getElementById("fruit");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".fruit-container");
const list = document.querySelector(".fruit-list");
const clearBtn = document.querySelector(".clear-btn");

form.addEventListener("submit", addFruit);

clearBtn.addEventListener("click", clearFruits);

function addFruit(e) {
  e.preventDefault();
  const inputValue = fruit.value;
  //   list.textContent = inputValue;
  const id = new Date().getTime().toString();

  if (inputValue !== "") {
    const element = document.createElement("article");
    let attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.classList.add("fruit-item");
    console.log(element);
    element.innerHTML = `<p class="title">${inputValue}</p>
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

    //add event listener to edit and delete buttons
    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteFruits);
    const editBtn = element.querySelector(".edit-btn");
    editBtn.addEventListener("click", editFruits);

    list.appendChild(element);
    container.classList.add("show-container");
    displayAlert("item added to the list", "success");
    fruit.value = "";
  } else {
    displayAlert("please enter value", "danger");
  }
}

// display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  // remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

function deleteFruits(e) {
  console.log("fruit deleteted");
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element);
  displayAlert("fruit removed", "danger");
}

function editFruits(e) {
  console.log("edit fruits");
  const element = e.currentTarget.parentElement.parentElement;
  editFruitEl = e.currentTarget.parentElement.previousElementSibling;
  fruit.value = editFruitEl.innerHTML;
  submitBtn.textContent = "edit";
}

function clearFruits() {
  console.log("all fruits removed");
}
