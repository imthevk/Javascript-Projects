// ****** select items **********

const form = document.querySelector(".fruit-form");
const alert = document.querySelector(".alert");
const fruit = document.getElementById("fruit");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".fruit-container");
const list = document.querySelector(".fruit-list");
const clearBtn = document.querySelector(".clear-btn");

form.addEventListener("submit", addFruit);

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
