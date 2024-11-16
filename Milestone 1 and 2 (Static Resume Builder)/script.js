var toggleButton = document.getElementById('toggle-skills');
var skills = document.getElementById('skills');
skills.style.display = 'block';
toggleButton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block'; // Show skills
        toggleButton.textContent = 'Hide Skills'; // This is the update button section
    }
    else {
        skills.style.display = 'none'; // Hide skills
        toggleButton.textContent = 'Show Skills'; // Update button text
    }
});
