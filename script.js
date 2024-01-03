// Registration //

// Script which selects which form is active/clicked so that the corresponding form can be displayed
// Assigns each variable with a class from the html code
const form = document.querySelector('.form')
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.register-link')

// If register link is clicked, the register form will then be active
registerLink.addEventListener('click', () => {
    form.classList.add('active');
});

// Same thing goes for the login link and form
loginLink.addEventListener('click', () => {
    form.classList.remove('active');
});

// Function to validate the Login Form
function validate_login() {
    // Gets values for each input
    let email = document.getElementById('l-email').value;
    let password = document.getElementById('l-password').value;
    // Regular expressions of the format each input must be
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // if statements which ensure the requirements are met
    if (email === '' || password === '') {
        alert('Email and password fields cannot be incomplete!')
    } else if (!emailRegex.test(email)) {
        alert("The email must follow this format: 'user@example.com'")
    } else if (!passwordRegex.test(password)) {
        alert("Password must have minimum 8 characters,\nand at least one uppercase letter, one lowercase letter,\none digit, and one special character")
    } else {
        alert('Login successful!');
        // Once successful, page is redirected to the schedule page
        window.location.href = 'schedule.html'
    }
}

// Function to validate the Register Form
function validate_register() {
    // Gets values for each input
    let email = document.getElementById('r-email').value;
    let password = document.getElementById('r-password').value;
    let name = document.getElementById('r-fullname').value;
    // Regular expressions of the format each input must be
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // if statements which ensure the requirements are met
    if (email === '' || password === '' || name === '') {
        alert('Fields cannot be incomplete!')
    } else if (!emailRegex.test(email)) {
        alert("The email must follow this format: 'user@example.com'")
    } else if (!passwordRegex.test(password)) {
        alert("Password must have minimum 8 characters,\nand at least one uppercase letter, one lowercase letter,\none digit, and one special character")
    } else {
        alert("Register successful!");
        // Once successful, page is redirected to the schedule page
        window.location.href = 'schedule.html'
    }
}

// ----------------- Schedule Page ------------------//

// function to hide all the other schedules for each day when they are not in use
function showSchedule(selectedDay) {
    var schedules = document.querySelectorAll('.schedule');
    schedules.forEach(function (schedule) {
        schedule.classList.add('hidden');
    });

    // This will show the schedule that was clicked
    var selectedSchedule = document.getElementById(selectedDay);
    selectedSchedule.classList.remove('hidden');
}

// ------------------- Speakers Page ---------------------//

// This function displays the bio and profile of the current and active speaker
function showBio(id) {
    // Hides all bio containers
    var bioContainers = document.querySelectorAll('.bio-container');
    bioContainers.forEach(function (container) {
        container.style.display = 'none';
    });

    // Shows the selected bio container
    var selectedBio = document.getElementById(id);
    selectedBio.style.display = 'block';
}

