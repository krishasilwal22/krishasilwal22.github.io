document.addEventListener("DOMContentLoaded", function () {
    const expandButtons = document.querySelectorAll(".expand");

    expandButtons.forEach(button => {
        button.addEventListener("click", function () {
            const projectDetails = this.nextElementSibling;

            if (projectDetails.style.display === "block") {
                projectDetails.style.display = "none";
                this.textContent = "Expand ⬇";
            } else {
                projectDetails.style.display = "block";
                this.textContent = "Collapse ⬆";
            }
        });
    });
});
