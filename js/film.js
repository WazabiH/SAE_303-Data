// Charger le fichier JSON et afficher les films
fetch('../data/movies.json') // Ajuster le chemin selon la structure du projet
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors du chargement du fichier JSON');
        }
        return response.json();
    })
    .then(data => {
        const filmList = document.getElementById('film-list');

        // Parcourir chaque film et créer une carte
        data.forEach(movie => {
            const filmCard = document.createElement('div');
            filmCard.className = 'film-card';

            filmCard.innerHTML = `
                <img src="${movie.poster_path}" alt="${movie.title}">
                <div class="film-info">
                    <h2>${movie.title_fr || movie.title} (${movie.year})</h2>
                    <p>Bechdel Score : <span class="bechdel-score">${movie.bechdel_score}</span></p>
                    <p>Langue : ${movie.lang}</p>
                    <p>Type de Média : ${movie.media_type}</p>
                    <a href="https://www.imdb.com/title/${movie.imdbid_full}" target="_blank">Voir sur IMDb</a>
                </div>
            `;
            filmList.appendChild(filmCard);
        });
    })
    .catch(error => console.error('Erreur:', error));
