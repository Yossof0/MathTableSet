document.addEventListener('DOMContentLoaded', function() {
    const themeButton = document.querySelector('.theme-button');
    const themeDropdown = document.querySelector('.theme-dropdown');
    const themeOptions = document.querySelectorAll('.theme-option');

    themeButton.addEventListener('click', function() {
        themeDropdown.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        if (!themeButton.contains(event.target) && !themeDropdown.contains(event.target)) {
            themeDropdown.classList.remove('active');
        }
    });

    themeOptions.forEach(option => {
        option.addEventListener('click', function() {
            document.body.className = this.getAttribute('data-theme');
            themeDropdown.classList.remove('active');
        });
    });

    const form = document.getElementById('myForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const number = parseInt(document.getElementById('multiplicationNumber').value);
        const count = parseInt(document.getElementById('multiplicationCount').value);

        let resultHTML = `<h2>Multiplication Table for ${number}</h2>`;
        resultHTML += '<ul>';

        for (let i = 1; i <= count; i++) {
            resultHTML += `<li>${number} x ${i} = ${number * i}</li>`;
        }

        resultHTML += '</ul>';
        document.getElementById('resultContainer').innerHTML = resultHTML;
    });
});
