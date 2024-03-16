/**
 * Provides functionality to cycle through images in a carousel.
 * Displays 2 images at a time, allowing the user to scroll through
 * the images, one at a time.
 *
 * @author Jackson Eshbaugh
 * @version 03/16/2024
 */

let index = 1;

showSlides(index);

/**
 * Displays the nth next image in the carousel.
 * @param n the number of the image from this image to display
 */
function plusSlides(n) {
    showSlides(index += n);
}

/**
 * Displays the nth image in the carousel.
 * @param n the index of the image to display
 */
function currentSlide(n) {
    showSlides(index = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('carousel-item');
    let dots = document.getElementsByClassName('dot');
    if (n > slides.length) {
        index = 1
    }
    if (n < 1) {
        index = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[index - 1].style.display = 'block';
    dots[index - 1].className += ' active';
}