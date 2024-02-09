document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.querySelector('.submit-button');

    submitButton.addEventListener('click', async function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        const form = document.getElementById('patientForm');
        const formData = new FormData(form);

        const jsonData = {};
        formData.forEach((value, key) => {
            jsonData[key] = value;
        });

        try {
            const response = await fetch('/api/users/createAccount', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(jsonData)
            });

            if (response.ok) {
                window.location.href = '/'; // Redirect to the homepage
            } else {
                console.error('Failed to create user:', response.statusText);
                // Handle the error, e.g., display an error message to the user
            }
        } catch (error) {
            console.error('Error creating user:', error);
            // Handle network errors, e.g., display an error message to the user
        }
    });
});
