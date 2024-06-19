document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = form.username.value;
        const password = form.password.value;

        // Here you can implement your login logic.
        // For demonstration purposes, let's check if the username and password are both "admin".
        if (username === 'admin' && password === 'admin') {
            // Redirect to a new page or perform other actions upon successful login.
            alert('Login successful!');
            // For demonstration, redirecting to another page
            window.location.href = 'dashboard.html';
        } else {
            // Display error message if login fails
            errorMessage.innerText = 'Invalid username or password';
            errorMessage.style.display = 'block';
        }
    });
});
