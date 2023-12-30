// Selecting all elements with the class "fa-star"
const starsEl = document.querySelectorAll(".fa-star");

// Selecting all elements with the class "far"
const emojiEl = document.querySelectorAll(".far");

// Array of colors to be applied to emojis
const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"];

// Initial call to updateRating with index 0
updateRating(0);

// Adding click event listeners to each star element
starsEl.forEach((star, i) =>
  star.addEventListener("click", () => {
    console.log(i);
    // When a star is clicked, update the rating with its index
    updateRating(i);
  })
);

// Function to update the rating based on the selected index
function updateRating(index) {
  // Updating the stars based on the index
  starsEl.forEach((star, i) => {
    if (i < index + 1) {
      // Adding the "active" class to stars up to the selected index
      star.classList.add("active");
    } else {
      // Removing the "active" class from stars beyond the selected index
      star.classList.remove("active");
    }
  });

  // Updating emojis based on the selected index
  emojiEl.forEach((emoji) => {
    // Translating emojis horizontally based on the selected index
    emoji.style.transform = `translateX(-${index * 90}px)`;
    emoji.style.transition = `all 1s`;

    // Applying a color to emojis based on the selected index
    emoji.style.color = colorsArray[index];
  });
}
