// 1. Define ALL your elements at the top
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.getElementById('contact-form');

// 2. Navigation Toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 3. Form Submission
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Stops the page from reloading

    // Get the actual elements
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');

    // Check if the values are not empty
    if (nameField.value.trim() !== "" && emailField.value.trim() !== "") {
        alert('Your request has been submitted!');
        contactForm.reset(); // Optional: clears the form after success
    } else {
        alert('Please fill in your details correctly.');
    }
});