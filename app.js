document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('search-btn');
    const searchField = document.getElementById('search-field');
    const resultDiv = document.getElementById('result');

    searchBtn.addEventListener('click', () => {
        const query = searchField.value.trim();
        const url = `superheroes.php?query=${encodeURIComponent(query)}`;

        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.text();
                } else {
                    throw new Error('Something went wrong');
                }
            })
            .then(data => {
                resultDiv.innerHTML = data; // Display result in the div
            })
            .catch(error => console.error('Error:', error));
    });
});