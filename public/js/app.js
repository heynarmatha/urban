// nav bar
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
  toggleButton.classList.toggle("open");
})
const progress = document.querySelector(".progress-done");

setTimeout(function () {
  progress.style.width = progress.getAttribute("data-done") + "%";
  progress.style.opacity = 1;
}, 500);


const progressNew = document.querySelector(".progress-done-new");

setTimeout(function () {
  progressNew.style.width = progressNew.getAttribute("data-done") + "%";
  progressNew.style.opacity = 1;
}, 500);