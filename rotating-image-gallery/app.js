const imageContainerEl = document.querySelector(".image-container");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let x = 0; // initiate deg angle
let timer; // initiate timer

prevBtn.addEventListener("click", () => {
  x = x + 45;
  clearTimeout(timer);
  updateGallery();
});

nextBtn.addEventListener("click", () => {
  x = x - 45;
  clearTimeout(timer);
  updateGallery();
});

function updateGallery() {
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  timer = setTimeout(() => {
    x = x - 45;
    //call updateGallery recursively after every 3s
    updateGallery();
  }, 3000);
}
