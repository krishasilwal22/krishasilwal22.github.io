// Typing Animation for "I Am Into ..."
const textElement = document.querySelector(".typed-text");
const words = ["Data Science", "Analytics", "Machine Learning", "Economics"];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, letterIndex - 1);
        letterIndex--;
    } else {
        textElement.textContent = currentWord.substring(0, letterIndex + 1);
        letterIndex++;
    }

    let typingSpeed = isDeleting ? 100 : 200;
    if (!isDeleting && letterIndex === currentWord.length) {
        isDeleting = true;
        typingSpeed = 1000;
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 500;
    }

    setTimeout(typeEffect, typingSpeed);
}

// Start Typing Effect
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 500);
});
