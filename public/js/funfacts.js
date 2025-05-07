"use strict";
const list = document.getElementById("funfacts-list");
const token = localStorage.getItem("token");

if (!token) {
    window.location.href = "index.html";
} else {
    fetch("https://moment4dt207g-aa8u.onrender.com/api/protected", {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
        .then(res => res.json())
        .then(data => {
            if (data.funFacts && data.funFacts.length > 0) {
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
            list.innerHTML = "<li>Failed to load fun facts.</li>";
        });
}

// Logout user
document.getElementById("logout-btn").addEventListener("click", () => {
    localStorage.removeItem("token");
    window.location.href = "index.html";
});