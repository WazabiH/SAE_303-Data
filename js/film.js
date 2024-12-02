// Récupère les éléments HTML
const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');
const filmList = document.getElementById('film-list');

// Fonction pour afficher les films (utilisée après une recherche)
function displayFilms(filteredFilms) {
    filmList.innerHTML = ''; // Efface les films déjà affichés

    filteredFilms.forEach(film => {
        const filmDiv = document.createElement('div');
        filmDiv.className = 'film-item';

        filmDiv.innerHTML = `
            <img src="${film.poster_path}" alt="${film.title}" class="film-poster">
            <h2>${film.title_fr || film.title} (${film.year})</h2>
            <p>Bechdel Score : ${film.bechdel_score}</p>
            <p>Langue : ${film.lang}</p>
            <p>Type de Média : ${film.media_type}</p>
            <a href="https://www.imdb.com/title/${film.imdbid_full}" target="_blank">Voir sur IMDb</a>
        `;

        filmList.appendChild(filmDiv);
    });
}

// Fonction pour rechercher des films
function searchFilms() {
    const query = searchBar.value.toLowerCase(); // Récupère la valeur de l'input (en minuscule)

    // Filtre les films selon le titre ou le Bechdel Score
    const filteredFilms = filmsData.filter(film => {
        const titleMatch = film.title_fr?.toLowerCase().includes(query) || film.title.toLowerCase().includes(query);
        const bechdelMatch = film.bechdel_score.toString().includes(query);

        return titleMatch || bechdelMatch; // Garde les films qui correspondent
    });

    // Met à jour l'affichage
    displayFilms(filteredFilms);
}

// Ajoute un événement au bouton de recherche
searchButton.addEventListener('click', searchFilms);

// Optionnel : Recherche automatique quand on tape dans la barre
searchBar.addEventListener('input', searchFilms);
