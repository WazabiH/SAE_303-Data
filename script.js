// Charger le fichier JSON local
fetch('data/movies.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors du chargement du fichier JSON');
        }
        return response.json();
    })
    .then(data => {
        const content = document.getElementById('content');
        data.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.style.border = "1px solid #ccc";
            movieElement.style.margin = "10px";
            movieElement.style.padding = "10px";

            movieElement.innerHTML = `
                <h2>${movie.title_fr} (${movie.year})</h2>
                <p>Score Bechdel : ${movie.bechdel_score}</p>
                <img src="${movie.poster_path}" alt="${movie.title}" style="width: 200px;">
            `;
            content.appendChild(movieElement);
        });
    })
    .catch(error => console.error('Erreur:', error));
