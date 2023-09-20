const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");
const count = 30;
let imagesLoaded = 0;

// Unsplash API
// Normally, don't store API Keys like this, but an exception made here because it is free, and the data is publicly available!
const apiKey = "-KsOXvdzrmis5K5FFHbUNb1HOJks2OpVmYARueRdjAw";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}&orientation=landscape&topics=nature`;
let photosArray = [];

//get photos from unsplash api
async function getPhotos() {
  const response = await fetch(apiUrl);
  photosArray = await response.json();
  console.log(photosArray);
  displayPhotos();
}

// Create Elements For Links & Photos, Add to DOM
function displayPhotos() {
  imagesLoaded = 0;
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
    loader.hidden = true;
    // Event Listener, check when each is finished loading
    image.addEventListener("load", () => {
      console.log("image loaded");
    });
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
  // console.log(window.scrollY, "scrollY");
  // console.log(window.innerHeight, "innerheight");
  // console.log(document.body.offsetHeight);
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
    // getPhotos();
    console.log(window.scrollY + window.innerHeight, "scrollY");
    console.log(window.innerHeight, "innerheight");
    console.log(document.body.offsetHeight);
    console.log("load more");
  }
}
// window.addEventListener("scroll", fetchNewPhotos);
