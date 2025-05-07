"use strict";

const list = document.getElementById("funfacts-list");
const token = localStorage.getItem("token");

// Check if token exists
if (!token) {
    showFeedback("You must be logged in to view this page.", true);
    setTimeout(() => {
        window.location.href = "index.html";
    }, 3000);
// Fetch data if token exists
} else {
    fetch("https://moment4dt207g-aa8u.onrender.com/api/protected", {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
        .then(async res => {
            // Handle authorization errors if request fails
            if (!res.ok) {
                const errorData = await res.json();
                const errorMessage = errorData.message || "Authorization failed.";

                showFeedback(errorMessage, true);
                if (res.status === 401 || res.status === 403) {
                    localStorage.removeItem("token");
                    setTimeout(() => {
                        window.location.href = "index.html";
                    }, 3000);
                }
                return null;
            }

            // Return data
            return res.json();
        })
        .then(data => {
            if (!data) return;
            // Display list of facts
            if (data.funFacts && data.funFacts.length > 0) {
                // Show protected content
                document.getElementById("protected-content").classList.remove("hidden");

                data.funFacts.forEach(fact => {
                    const li = document.createElement("li");
                    li.textContent = fact.fact;
                    list.appendChild(li);
                });
            } else {
                list.innerHTML = "<li>No fun facts found.</li>";
            }
        })
        .catch(error => {
            console.error("Error fetching fun facts:", error);
            showFeedback("Failed to load fun facts.", true);
        });
}

// Logout user
document.getElementById("logout-btn").addEventListener("click", () => {
    localStorage.removeItem("token");
    window.location.href = "index.html";
});