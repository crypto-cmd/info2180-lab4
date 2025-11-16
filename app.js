document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('search-btn');

    searchBtn.addEventListener('click', () => {
        fetch('superheroes.php')
            .then(response => {
                if (response.ok) {
                    return response.text();
                } else {
                    throw new Error('Something went wrong');
                }
            })
            .then(data => {
                alert(data); // This will show the HTML list in an alert
            })
            .catch(error => console.error('Error:', error));
    });
});