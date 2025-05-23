"use script";

// Function to display user feedback
function showFeedback(message, isError = true) {
    const feedback = document.getElementById("user-feedback");
    feedback.textContent = message;
    feedback.style.color = isError ? "red" : "green";

    if (feedback.timeoutId) {
        clearTimeout(feedback.timeoutId);
    }

    feedback.timeoutId = setTimeout(() => {
        feedback.textContent = "";
    }, 5000);
}