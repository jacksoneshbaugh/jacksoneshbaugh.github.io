/**
 * Code relating to the hamburger menu for the navbar.
 *
 * @author Jackson Eshbaugh
 * @version 03/14/2024
 */

let hamburger = document.getElementById('hamburger');
let close = document.getElementById('close-side-nav');

hamburger.addEventListener('click', function() {
    let nav = document.getElementById('side-nav');
    if (nav.style.display === 'none') {
        nav.style.display = 'block';
        nav.classList.add('active');
        hamburger.classList.add('active');
    } else {
        nav.style.display = 'none';
        nav.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// any tap outside the side nav will close it
document.addEventListener('click', function(event) {
    let nav = document.getElementById('side-nav');
    if (nav.classList.contains('active')) {
        if (event.target.id !== 'hamburger' && event.target.id !== 'side-nav') {
            nav.style.display = 'none';
            nav.classList.remove('active');
            hamburger.classList.remove('active');
        }
    }
});