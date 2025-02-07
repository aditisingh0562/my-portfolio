document.addEventListener("DOMContentLoaded", function () {
    alert("Welcome to my portfolio!");
    });
    // Dynamic Greeting based on time of day
    const greeting = document.getElementById("greeting");
    
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
    greeting.textContent = "Good Morning!";
    } else if (currentHour < 18) {
    greeting.textContent = "Good Afternoon!";
    } else {
    greeting.textContent = "Good Evening!";
    }
    
    // Theme Toggle Functionality
    const themeToggleButton = document.getElementById("theme-toggle");
    
    themeToggleButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    
    // Toggle button text based on current theme
    if (document.body.classList.contains("dark-mode")) {
    themeToggleButton.textContent = "Switch to Light Mode";
    } else {
    themeToggleButton.textContent = "Switch to Dark Mode";
    }
    
    // Optional: Save the theme preference in localStorage
    if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    } else {
    localStorage.setItem("theme", "light");
    }
    });
    
    // Check saved theme preference and apply it
    window.addEventListener("load", function() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggleButton.textContent = "Switch to Light Mode";
    }
    });