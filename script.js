document.addEventListener("DOMContentLoaded", function () {
    const expandButtons = document.querySelectorAll(".expand");
    
    expandButtons.forEach(button => {
        button.addEventListener("click", function () {
            const projectDetails = this.nextElementSibling;
            if (projectDetails.style.display === "block") {
                projectDetails.style.display = "none";
            } else {
                projectDetails.style.display = "block";
            }
        });
    });

    // File Upload Handling
    document.getElementById("fileUploadProject2").addEventListener("change", function (event) {
        handleFileUpload(event, "fileUploadProject2");
    });

    document.getElementById("fileUploadProject3").addEventListener("change", function (event) {
        handleFileUpload(event, "fileUploadProject3");
    });

    function handleFileUpload(event, projectId) {
        const file = event.target.files[0];
        if (file) {
            alert(`File "${file.name}" uploaded successfully for ${projectId}.`);
        } else {
            alert("No file selected.");
        }
    }
});
