// Charger le fichier JSON et afficher les films seulement si la barre de recherche contient un texte
fetch('../data/movies.json') // Ajuster le chemin selon la structure du projet
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors du chargement du fichier JSON');
        }
        return response.json();
    })
    .then(data => {
        const filmList = document.getElementById('film-list');
        const searchBar = document.getElementById('search-bar');

        // Fonction pour afficher les films
        function displayFilms(films) {
            filmList.innerHTML = ''; // Nettoie la liste avant d'afficher
            films.forEach(movie => {
                const filmCard = document.createElement('div');
                filmCard.className = 'film-card';

                filmCard.innerHTML = `
                    <img src="${movie.poster_path}" alt="${movie.title}">
                    <div class="film-info">
                        <h2>${movie.title_fr || movie.title} (${movie.year})</h2>
                        <p>Bechdel Score : <span class="bechdel-score">${movie.bechdel_score}</span></p>
                        <p>Langue : ${movie.lang}</p>
                        <p>Type de Média : ${movie.media_type}</p>
                        <p>Résumé : ${movie.overview || 'Résumé non disponible.'}</p>
                        <a href="https://www.imdb.com/title/${movie.imdbid_full}" target="_blank">Voir sur IMDb</a>
                    </div>
                `;
                filmList.appendChild(filmCard);
            });
        }

        // Ajoute un événement pour filtrer les films lorsque l'utilisateur entre un texte
        searchBar.addEventListener('input', (event) => {
            const searchTerm = event.target.value.toLowerCase();
            // Affiche les films uniquement si un texte est saisi
            if (searchTerm.trim() !== '') {
                const filteredFilms = data.filter(movie => 
                    movie.title.toLowerCase().includes(searchTerm) || 
                    (movie.title_fr && movie.title_fr.toLowerCase().includes(searchTerm)) ||
                    movie.lang.toLowerCase().includes(searchTerm) ||
                    movie.media_type.toLowerCase().includes(searchTerm)
                );
                displayFilms(filteredFilms);
            } else {
                filmList.innerHTML = ''; // Si la barre de recherche est vide, on cache les films
            }
        });
    })
    .catch(error => console.error('Erreur:', error));
