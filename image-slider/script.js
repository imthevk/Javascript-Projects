// Selecting the next and previous navigation buttons
const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");

// Selecting all image elements
const imgsEl = document.querySelectorAll("img");

// Selecting the container for the images
const imageContainerEl = document.querySelector(".image-container");

// Initializing the current image index
let currentImg = 1;

// Variable to store the timeout ID for controlling the automatic image change
let timeout;

// Adding a click event listener to the "Next" button
nextEl.addEventListener("click", () => {
  // Incrementing the current image index
  currentImg++;
  // Clearing any existing timeout to prevent automatic image change
  clearTimeout(timeout);
  // Updating the displayed image
  updateImg();
});

// Adding a click event listener to the "Previous" button
prevEl.addEventListener("click", () => {
  // Decrementing the current image index
  currentImg--;
  // Clearing any existing timeout to prevent automatic image change
  clearTimeout(timeout);
  // Updating the displayed image
  updateImg();
});

// Initial call to updateImg to set the initial image display
updateImg();

// Function to update the displayed image
function updateImg() {
  // Resetting the index if it goes beyond the number of images
  if (currentImg > imgsEl.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgsEl.length;
  }

  // Updating the transform property to display the appropriate image
  imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;

  // Setting a timeout for automatic image change after 3000 milliseconds (3 seconds)
  timeout = setTimeout(() => {
    // Incrementing the current image index for the automatic transition
    currentImg++;
    // Calling updateImg recursively to continue the automatic image change
    updateImg();
  }, 3000);
}
