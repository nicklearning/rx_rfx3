const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard'); // GETS the /dashboard endpoint
    } else {
      alert('Failed to log in');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document.addEventListener("DOMContentLoaded", function () {
  // Select the Create Account button
  var createAccountButton = document.getElementById("createAccountButton");

  // Add event listener to the Create Account button
  createAccountButton.addEventListener("click", function () {
    // Execute the createAccount.handlebars file or perform any other action you need
    // For example, you can redirect to a new page using window.location.href
    window.location.href = "/api/users/createAccount";
  });
});

