// Form submit handler (basic version)
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    alert("Thank you for contacting me! I'll get back to you shortly.");
    // Here you can add logic to send the form data to your server or email service
});
