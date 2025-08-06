// Universal Carousel function
function createCarousel({
  images,
  imgElement,
  prevBtn,
  nextBtn,
  interval = 4000,
  textElement = null,
  texts = [],
}) {
  let currentIndex = 0;

  function showImage(index) {
    imgElement.src = images[index];
    if (textElement && texts.length === images.length) {
      textElement.textContent = texts[index];
    }
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  // Initial show
  showImage(currentIndex);

  // Auto slideshow
  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }, interval);
}

// Data for carousels
const carouselImages = [
  "./images/first.jpeg",
  "./images/second.jpeg",
  "./images/third.jpeg",
  "./images/fourth.png",
];

const eventsImages = [
  "./images/events-1.jpeg",
  "./images/events-2.jpeg",
  "./images/events-3.jpeg",
];
const uniEventsImages = [
  "./images/events-4.jpg",
  "./images/events-5.jpg",
];

const eventsTexts = [
  "Inter Departmental Cricket Match",
  "Industrial Visit to Hotel Regenta , Kanpur",
  "Workshop on Grooming Standards in Hospitality"
];

const uniEventsTexts = [
  "An international invited lecture on the occassion of the 38th convocation week",
  "Talk on Genome Editing"
];

// Initialize carousels

// Carousel without text captions
createCarousel({
  images: carouselImages,
  imgElement: document.getElementById("carousel-img"),
  prevBtn: document.getElementById("carousel-prev"),
  nextBtn: document.getElementById("carousel-next"),
  interval: 4000,
});

// Carousel with text captions
createCarousel({
  images: eventsImages,
  imgElement: document.getElementById("events-img"),
  prevBtn: document.getElementById("events-prev"),
  nextBtn: document.getElementById("events-next"),
  interval: 4000,
  textElement: document.getElementById("events-p"),
  texts: eventsTexts,
});

// Carousel with text captions
createCarousel({
  images: uniEventsImages,
  imgElement: document.getElementById("uniEvents-img"),
  prevBtn: document.getElementById("uniEvents-prev"),
  nextBtn: document.getElementById("uniEvents-next"),
  interval: 4000,
  textElement: document.getElementById("uniEvents-p"),
  texts: uniEventsTexts,
});

let fontSize = 1;

const decreaseFontSizebtn = document.getElementById("decreaseFontSize");
const defaultFontSizebtn = document.getElementById("defaultFontSize");
const increaseFontSizebtn = document.getElementById("increaseFontSize");

decreaseFontSizebtn.addEventListener("click", () => {
  adjustFontSize("decrease");
});
defaultFontSizebtn.addEventListener("click", () => {
  adjustFontSize("default");
});
increaseFontSizebtn.addEventListener("click", () => {
  adjustFontSize("increase");
});

function adjustFontSize(action) {
  if (action === "increase" && fontSize < 1.5) {
    fontSize += .1;
  } else if (action === "decrease" && fontSize > .8) {
    fontSize -= .1;
  } else if (action === "default") {
    fontSize = 1;
  }
  document.documentElement.style.setProperty(
    "--font-size-normal",
    fontSize + "rem"
  );
  document.documentElement.style.setProperty(
    "--font-size-heading",
    fontSize + .2 + "rem"
  );
  document.documentElement.style.setProperty(
    "--font-size-small",
    fontSize - .2 + "rem"
  );
}
