const navSlide = document.getElementById('navSlide');
const navToggle = document.getElementById('navToggle');
const navClose = document.getElementById('navClose');

navToggle.addEventListener('click', () => {
    navSlide.classList.toggle('-translate-x-full');
});
navClose.addEventListener('click', () => {
    navSlide.classList.toggle('-translate-x-full');
})