document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!");

    // Smooth Scroll for Navigation Links
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });
});
