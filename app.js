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
<div>
</div>
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
let index = 0;
const images = document.querySelectorAll("#imageSlider img");
const totalImages = images.length;

document.getElementById("next").addEventListener("click", function() {
  index = (index + 1) % totalImages;
  slider.style.transform = `translateX(-${index * 100}%)`;
});

document.getElementById("prev").addEventListener("click", function() {
  index = (index - 1 + totalImages) % totalImages;
  slider.style.transform = `translateX(-${index * 100}%)`;
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