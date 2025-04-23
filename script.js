// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Typing Effect
const text = "I am a passionate web developer!";
let i = 0;
function typeEffect() {
    if (i < text.length) {
        document.getElementById("typing-text").textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}
document.addEventListener("DOMContentLoaded", typeEffect);

// Random Quote Generator
const quotes = [
    "The best way to predict the future is to create it.",
    "Simplicity is the soul of efficiency.",
    "Code is like humor. When you have to explain it, it’s bad."
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
}
