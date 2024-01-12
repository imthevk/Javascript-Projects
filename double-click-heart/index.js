// Select the element
const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

// Initialize variables to track click time and count
let clickTime = 0;
let timesClicked = 0;

// Add a click event listener
loveMe.addEventListener("click", (e) => {
  // Check if it's the first click
  if (clickTime === 0) {
    // Record the time of the first click
    clickTime = new Date().getTime();
  } else {
    // Check if the time between clicks is less than 800 milliseconds
    if (new Date().getTime() - clickTime < 800) {
      // If clicked quickly, create a heart
      createHeart(e);
      // Reset clickTime to 0
      clickTime = 0;
    } else {
      // If not clicked quickly, record the time of the click
      clickTime = new Date().getTime();
    }
  }
});

// Function to create a heart element at the click position
const createHeart = (e) => {
  // Create a new 'i' element for the heart
  const heart = document.createElement("i");
  // Add classes for the heart icon (assuming Font Awesome is used)
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  // Get the mouse coordinates
  const x = e.clientX;
  const y = e.clientY;

  // Get the offset of the 'loveMe' element
  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  // Calculate the position of the click inside the 'loveMe' element
  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  // Set the position of the heart element
  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  // Append the heart element to the 'loveMe' element
  loveMe.appendChild(heart);

  // Increment and display the number of clicks
  times.innerHTML = ++timesClicked;

  // Remove the heart element after 1000 milliseconds (1 second)
  setTimeout(() => heart.remove(), 1000);
};
