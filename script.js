// Scroll to top functionality
document.querySelector('.scroll-to-top').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Form submit handler (basic version)
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    alert("Thank you for contacting me! I'll get back to you shortly.");
    // Here you can add logic to send the form data to your server or email service
});
