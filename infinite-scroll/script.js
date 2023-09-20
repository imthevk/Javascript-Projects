const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];
let allImageLoaded = false;

// Unsplash API
// Normally, don't store API Keys like this, but an exception made here because it is free, and the data is publicly available!
const count = 30;
const apiKey = "QTh-XZKMsc3wSPAPsNs5Y9wK0odx7-UoME6SHcju2Hg";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}&orientation=landscape&topics=nature`;

//get photos from unsplash api
async function getPhotos() {
  const response = await fetch(apiUrl);
  photosArray = await response.json();
  displayPhotos();
}

function imageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    allImageLoaded = true;
    loader.hidden = true;
  }
}

// Create Elements For Links & Photos, Add to DOM
function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photosArray.length;
  photosArray.forEach((photo) => {
    const a = document.createElement("a");
    setAttributes(a, {
      href: photo.links.download,
      target: "_blank",
    });
    const image = document.createElement("img");
    setAttributes(image, {
      src: photo.urls.full,
      alt: photo.alt_description,
    });
    a.appendChild(image);
    imageContainer.appendChild(a);

    // Event Listener, check when each is finished loading
    image.addEventListener("load", imageLoaded);
  });
}
//on first time load
getPhotos();

// Helper Function to Set Attributes on DOM Elements
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

function fetchNewPhotos() {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    allImageLoaded
  ) {
    allImageLoaded = false;
    getPhotos();
    // console.log(window.scrollY + window.innerHeight);
    // console.log(document.body.offsetHeight);
  }
}
window.addEventListener("scroll", fetchNewPhotos);
