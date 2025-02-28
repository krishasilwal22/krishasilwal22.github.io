document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded Successfully!");  // Debugging message

    // Ensure script is loading
    if (!document.querySelector(".project-title")) {
        console.error("Project title buttons not found. Check your HTML structure.");
    }

    // Toggle Project Details (Expand/Collapse)
    document.querySelectorAll(".project-title").forEach(button => {
        button.addEventListener("click", function () {
            let details = this.nextElementSibling;

            if (!details) {
                console.error("No project details found for", this);
                return;
            }

            // Toggle visibility
            details.style.display = (details.style.display === "block") ? "none" : "block";
        });
    });

    // Smooth Scrolling for Navbar Links
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute("href"));

            if (!target) {
                console.error("Target section not found for link:", this);
                return;
            }

            target.scrollIntoView({ behavior: "smooth" });
        });
    });
});
