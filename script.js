document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded Successfully!");

    // Toggle Project Details (Expand/Collapse)
    document.querySelectorAll(".project-title").forEach(button => {
        button.addEventListener("click", function () {
            let details = this.nextElementSibling;
            if (details.style.display === "block") {
                details.style.display = "none";
            } else {
                details.style.display = "block";
            }
        });
    });

    // Smooth Scrolling for Navbar Links
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Debugging to check if script is working
    if (!document.querySelector(".project-card")) {
        console.error("Project cards not found. Check your HTML structure.");
    }
});
