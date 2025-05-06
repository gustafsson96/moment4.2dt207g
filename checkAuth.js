"use strict";

// Check if token exists in local storage
if(!localStorage.getItem("token")) {
    window.location.href = "login.html";
}