// nav bar
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
  toggleButton.classList.toggle("open");
})



const progress = document.querySelector(".progress-done");
const progressNew = document.querySelector(".progress-done-new");
const progressUpdate = document.querySelector(".progress-done-update");

setTimeout(function () {
  progress.style.width = progress.getAttribute("data-done") + "%";
  progress.style.opacity = 1;
}, 500);
setTimeout(function () {
  progressNew.style.width = progressNew.getAttribute("data-done") + "%";
  progressNew.style.opacity = 1;
}, 500);
setTimeout(function () {
  progressUpdate.style.width = progressUpdate.getAttribute("data-done") + "%";
  progressUpdate.style.opacity = 1;
}, 500);

const btn = document.querySelector("button");
const btnRemove = document.querySelector("button");
const para = document.querySelector(".hurry");
btn.addEventListener("mouseover", function(){
   para.classList.add("active-hurry");
});
btnRemove.addEventListener("mouseout", function(){
  para.classList.remove("active-hurry");
});

//full view

const  smallImage =  document.querySelectorAll(".things-1 img");
const model = document.querySelector(".model");
const largeImage = document.querySelector(".full-img");

smallImage.forEach(function(img){
    img.addEventListener("click" , function(){
        model.classList.add("open");
        largeImage.classList.add("open");
        // dynamic 
        const original = img.getAttribute("alt");
        largeImage.src = `../../public/images/full/${original}.png`;
    });
});

model.addEventListener("click",function(o){
    if(o.target.classList.contains("model")){
        model.classList.remove("open");
        largeImage.classList.remove("open"); 
    }
});


const slides = document.querySelector(".slider").children;
const indicatorImgs = document.querySelector(".indicator").children;

for (let i = 0; i < indicatorImgs.length; i++) {

  indicatorImgs[i].addEventListener("click", function () {
    for (let j = 0; j < indicatorImgs.length; j++) {
      indicatorImgs[j].classList.remove("active");
    }

    indicatorImgs[i].classList.add("active");

    const id = indicatorImgs[i].getAttribute("data-id");
    for (let k = 0; k < slides.length; k++) {
      slides[k].classList.remove("active");
    }

    slides[id].classList.add("active");
  });
}