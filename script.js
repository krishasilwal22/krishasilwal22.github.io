// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
        function toggleProject(id) {
    var project = document.getElementById(id);
    
    // Check current display state
    if (project.style.display === "block" || project.style.display === "") {
        project.style.display = "none";
    } else {
        project.style.display = "block";
    }
}

    });
});
