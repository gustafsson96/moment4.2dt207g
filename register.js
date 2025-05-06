"use strict";

document.getElementById("signup-form").addEventListener("submit", registerUser);

const url = "https://moment4dt207g-aa8u.onrender.com/api/register";

// Register (signup)
async function registerUser(e) {
    e.preventDefault();

    const usernameInput = document.getElementById("signup-username").value;
    const passwordInput = document.getElementById("signup-password").value;

    if (!usernameInput || !passwordInput) {
        showFeedback("Please enter both username and password.");
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
        } else {
            const errorData = await resp.json();
            const errorMessage = errorData.message || errorData.error || "Registration failed";
            showFeedback(errorMessage);
        }

    } catch (error) {
        showFeedback("An error occurred during registration.")
        console.error(error);
    }
}