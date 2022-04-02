const navSlide = document.getElementById('navSlide');
const navToggle = document.getElementById('navToggle');
const navClose = document.getElementById('navClose');

navToggle.addEventListener('click', () => {
    navSlide.classList.toggle('-translate-x-full');
});
navClose.addEventListener('click', () => {
    navSlide.classList.toggle('-translate-x-full');
})

// generating copyright year
const copyrightYear = document.querySelector(".copyright .yyyy")
const currentDate = new Date()
copyrightYear.innerHTML = currentDate.getFullYear()