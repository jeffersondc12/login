document.addEventListener('DOMContentLoaded', function () {
    // Dropdown button functionality
    var dropdownBtn = document.querySelector('.dropbtn');
    dropdownBtn.addEventListener('click', function () {
        var dropdownContent = document.querySelector('.dropdown-content');
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.style.display === 'block') {
                    openDropdown.style.display = 'none';
                }
            }
        }
    }
});
document.getElementById('beautifyButton').addEventListener('click', function() {
    // Change background color
    document.body.style.backgroundColor = '#f0f8ff';

    // Style the container
    const container = document.getElementById('container');
    container.style.padding = '20px';
    container.style.margin = '50px auto';
    container.style.width = '80%';
    container.style.maxWidth = '600px';
    container.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    container.style.backgroundColor = '#fff';
    container.style.borderRadius = '10px';

    // Style the title
    const title = document.getElementById('title');
    title.style.color = '#333';
    title.style.fontFamily = 'Arial, sans-serif';
    title.style.textAlign = 'center';
    title.style.fontSize = '2em';
    title.style.marginBottom = '10px';

    // Style the description
    const description = document.getElementById('description');
    description.style.color = '#666';
    description.style.fontFamily = 'Georgia, serif';
    description.style.fontSize = '1.2em';
    description.style.lineHeight = '1.6';
    description.style.textAlign = 'justify';

    // Style the button
    const button = document.getElementById('beautifyButton');
    button.style.padding = '10px 20px';
    button.style.fontSize = '1em';
    button.style.color = '#fff';
    button.style.backgroundColor = '#007BFF';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.display = 'block';
    button.style.margin = '20px auto';
    button.style.transition = 'background-color 0.3s';

    // Add hover effect to the button
    button.addEventListener('mouseover', function() {
        button.style.backgroundColor = '#0056b3';
    });
    button.addEventListener('mouseout', function() {
        button.style.backgroundColor = '#007BFF';
    });
});

