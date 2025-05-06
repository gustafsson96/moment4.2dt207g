"use strict";

function updateMenu() {
    const logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("token");
            window.location.href = "login.html";
        });
    }
}

// Replace with actual url
const url = "https://your-api-url.com/login";

// Login user
async function loginUser(e) {
    e.preventDefault();

    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    if (!usernameInput || !passwordInput) {
        console.log("Please enter both username and password");
        return;
    }

    const user = {
        username: usernameInput,
        password: passwordInput
    };

    try {
        const resp = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        if (resp.ok) {
            const data = await resp.json();
            localStorage.setItem("token", data.token);
            window.location.href = "funfacts.html";
            console.log(data);
        } else {
            console.log("Login failed: Invalid username or password");
        }

    } catch (error) {
        console.error("An error occurred during login:", error);
    }
}