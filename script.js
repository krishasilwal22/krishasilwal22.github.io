// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Formspree email update
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    formData.set('_replyto', 'krishasilwal22@augustana.edu');

    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Your message has been sent!');
            form.reset();
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    alert(data['errors'].map(error => error['message']).join(', '));
                } else {
                    alert('Oops! There was a problem submitting your form');
                }
            });
        }
    }).catch(error => {
        alert('Oops! There was a problem submitting your form');
    });
});
