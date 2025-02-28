document.addEventListener("DOMContentLoaded", function () {
    // Toggle project details
    const projectButtons = document.querySelectorAll(".project-title");

    projectButtons.forEach(button => {
        button.addEventListener("click", function () {
            const projectDetails = this.nextElementSibling;

            if (projectDetails.style.display === "none" || projectDetails.style.display === "") {
                projectDetails.style.display = "block";
            } else {
                projectDetails.style.display = "none";
            }
        });
    });

    // Smooth scrolling for navbar links
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute("href"));
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
