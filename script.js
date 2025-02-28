// Dark Mode Toggle with Local Storage
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check if dark mode was previously enabled
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
}

// Toggle dark mode and save preference
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Resume Download
const resumeBtn = document.querySelector('.btn');
resumeBtn.addEventListener('click', () => {
    window.location.href = 'assets/resume.pdf'; // Ensure your resume is in an "assets" folder
});

// Contact Form Handling
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            alert('Your message has been sent!');
            form.reset();
        } else {
            alert('Oops! There was a problem submitting your form.');
        }
    }).catch(() => {
        alert('Oops! There was a problem submitting your form.');
    });
});
