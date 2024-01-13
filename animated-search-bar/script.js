// Selecting the elements using its class
const searchBarContainerEl = document.querySelector(".search-bar-container");
const input = document.querySelector(".input");
const magnifierEl = document.querySelector(".magnifier");

// Adding a click event listener to the document element
document.body.addEventListener("click", (e) => {
  if (e.target === magnifierEl || e.target === input) {
    // remove the "active" class on the search bar container element
    searchBarContainerEl.classList.remove("active");
  } else {
    // add the "active" class on the search bar container element
    searchBarContainerEl.classList.add("active");
  }
});
