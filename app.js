const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const moon = document.querySelector("#moon")
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

moon.addEventListener("click", ()=>{
  body.classList.toggle("dark")
})




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