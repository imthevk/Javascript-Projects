// Get references to HTML elements
const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container");

// Event listener for button click
btnEl.addEventListener("click", () => {
  // Call function to create a password
  createPassword();
});

// Event listener for copy icon click
copyIconEl.addEventListener("click", () => {
  // Check if the input has a value
  if (inputEl.value) {
    // Call function to copy password
    copyPassword();
    // Show and hide the alert container
    alertContainerEl.classList.remove("active");
    setTimeout(() => {
      alertContainerEl.classList.add("active");
    }, 2000);
  } else {
    alert("Please click on generate button");
  }
});

// Function to create a random password
function createPassword() {
  // Characters to use in the password
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 14;
  let password = "";
  // Generate the password
  for (let index = 0; index < passwordLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
  }

  // Set the generated password to the input field
  inputEl.value = password;

  // Set the alert message
  alertContainerEl.innerText = password + " copied!";
}

// Function to copy the password to the clipboard
function copyPassword() {
  // Select the text in the input field
  inputEl.select();
  inputEl.setSelectionRange(0, 9999);
  document.execCommand("copy");
  // Copy the selected text to the clipboard
  navigator.clipboard.writeText(inputEl.value);
}
