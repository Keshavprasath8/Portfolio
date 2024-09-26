document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simple form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
    } else {
        alert('Thank you for your message, ' + name + '!');
        // Here you would typically send the form data to a server
    }
});
