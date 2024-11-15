// Slideshow functionality
let slideIndex = 1;
showSlides(slideIndex);

// Automatically change slides every 4.5 seconds
let autoSlideInterval = setInterval(() => {
    plusSlides(1); // Move to the next slide
}, 4500);

// Function to go to the next or previous slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to show a specific slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Main function to display the slides
function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Pause and resume slideshow on hover
const slideshowContainer = document.querySelector('.slideshow-container');
slideshowContainer.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
slideshowContainer.addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(() => {
        plusSlides(1);
    }, 4500);
});

// JavaScript function for the back button
function goBack() {
    window.history.back();
}
