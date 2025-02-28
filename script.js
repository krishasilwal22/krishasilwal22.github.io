document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded Successfully!");

    document.querySelectorAll(".project-title").forEach(button => {
        button.addEventListener("click", function () {
            let details = this.nextElementSibling;
            details.style.display = (details.style.display === "block") ? "none" : "block";
        });
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

