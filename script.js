document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const formButton = document.querySelector('form button');
    formButton.textContent = 'Sending...';
    formButton.disabled = true;

    setTimeout(() => {
        alert("Thank you for contacting me! I'll get back to you shortly.");
        formButton.textContent = 'Send Message';
        formButton.disabled = false;
    }, 1500);
});
