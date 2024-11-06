// script.js
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form submission

    // Sample login credentials (just for demonstration)
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // You can replace this with actual login validation
    if (username === "user" && password === "password") {
        // Redirect to map page
        window.location.href = "map.html";
    } else {
        alert("Invalid username or password");
    }
});
