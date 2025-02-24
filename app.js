//Navigation
const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const body = document.querySelector("body")
const hLinks = document.querySelectorAll("#hLink")

hamburger.addEventListener("click", ()=>{
  menu.classList.toggle("hidden")
  hamburger.classList.toggle("bg-white")
})

hLinks.forEach(link=>{
  link.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    hamburger.classList.toggle("bg-white")
  })
})




//Search
function performSearch() {
  let query = document.getElementById("search-input").value;
  if (query.trim() !== "") {
      window.location.href = `results.html?search=${encodeURIComponent(query)}`;
  }
}


//Slider
const container = document.getElementById('container');
const lisItem = [
    {Image: "IMAG/A.jpg"},
    {Image: "IMAG/B.jpg"},
    {Image: "IMAG/C.jpg"},
    {Image: "IMAG/D.jpg"},
];

let currentIndex = 0;

const rebderEacheImage = (data) => {
const item = `
<div class="item px-8 w-auto h-auto">
<img src="${data.Image}" alt="${currentIndex}">
</div>
`
container.innerHTML = item;
};
const nextImage = () => {
    currentIndex++;
    if(currentIndex === lisItem.length){
        currentIndex = 0;
    }
    rebderEacheImage(lisItem[currentIndex]);
};
const prevImage = () => {
    clearInterval(intervalId);
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = lisItem.length - 1;
    }
    rebderEacheImage(lisItem[currentIndex]);
};

rebderEacheImage(lisItem[currentIndex]);

const intervalId = setInterval(() => {
    nextImage();
}, 3000);




//1-Slider
const slider = document.getElementById("imageSlider");
const images = document.querySelectorAll("#imageSlider img");
const totalImages = images.length;

let index = 0;
const imageWidth = images[0].clientWidth + 16; // Image width + gap (adjust if needed)

// Clone the first and last images for smooth infinite scrolling
const firstClone = images[0].cloneNode(true);
const lastClone = images[totalImages - 29].cloneNode(true);

// Append clones to the slider
slider.appendChild(firstClone);
slider.prepend(lastClone);

const allImages = document.querySelectorAll("#imageSlider img");
const totalSlides = allImages.length; // Includes clones

// Adjust initial position
slider.style.transform = `translateX(-${imageWidth}2px)`;

function updateSlider() {
  slider.style.transition = "transform 0.5s ease-in-out";
  slider.style.transform = `translateX(-${(index + 1) * imageWidth}2px)`;
}

// Move to next image
document.getElementById("next").addEventListener("click", function() {
  if (index >= totalImages - 1) {
    index++;
    updateSlider();
    setTimeout(() => {
      slider.style.transition = "none"; // Remove transition for instant jump
      index = 0;
      slider.style.transform = `translateX(-${imageWidth}2px)`;
    }, 500);
  } else {
    index++;
    updateSlider();
  }
});

// Move to previous image
document.getElementById("prev").addEventListener("click", function() {
  if (index <= 0) {
    index--;
    updateSlider();
    setTimeout(() => {
      slider.style.transition = "none"; // Remove transition for instant jump
      index = totalImages - 1;
      slider.style.transform = `translateX(-${(totalImages) * imageWidth}2px)`;
    }, 500);
  } else {
    index--;
    updateSlider();
  }
});




// Back to Top button
const backToTopBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});