document.addEventListener('DOMContentLoaded', function () {
    // Get the radio button elements
    var selfRadio = document.getElementById('selfRadio');
    var kulliyyahRadio = document.getElementById('kulliyyahRadio');
    var kulliyyahDropdown = document.getElementById('Kulliyah');

    // Add event listeners for radio button changes
    selfRadio.addEventListener('change', function () {
        // If the 'Self' radio button is selected, hide the Kulliyyah dropdown
        if (selfRadio.checked) {
            kulliyyahDropdown.style.display = 'none';
        }
    });

    kulliyyahRadio.addEventListener('change', function () {
        // If the 'Kulliyyah-based' radio button is selected, show the Kulliyyah dropdown
        if (kulliyyahRadio.checked) {
            kulliyyahDropdown.style.display = 'block';
        }
    });
});