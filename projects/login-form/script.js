const form = document.getElementById('loginForm');
const errorMsg = document.getElementById('errorMsg');
const loginBox = document.querySelector('.login-box');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Empty check
    if(username === "" || password === "") {
        errorMsg.style.color = "#ff6b6b";
        errorMsg.textContent = "Please enter both username and password!";
        loginBox.classList.remove("success");
        loginBox.classList.add("shake");
        setTimeout(() => loginBox.classList.remove("shake"), 500);
        return;
    }

    // Demo login
    if(username === "admin" && password === "1234") {
        errorMsg.style.color = "#42e695";
        errorMsg.textContent = "Login Successful!";
        loginBox.classList.remove("shake");
        loginBox.classList.add("success");
        setTimeout(() => {
            alert("Redirect to dashboard or homepage");
        }, 500);
    } else {
        errorMsg.style.color = "#ff6b6b";
        errorMsg.textContent = "Invalid Username or Password!";
        loginBox.classList.remove("success");
        loginBox.classList.add("shake");
        setTimeout(() => loginBox.classList.remove("shake"), 500);
    }
});