// Sélectionne les éléments nécessaires
const searchBar = document.getElementById("search-bar");
const filmList = document.getElementById("film-list");

// Fonction pour charger le fichier JSON
async function loadFilms() {
    try {
        const response = await fetch("../data/films.json");
        const films = await response.json();
        displayFilms(films); // Affiche les films au chargement
        setupSearch(films); // Configure la recherche
    } catch (error) {
        console.error("Erreur lors du chargement des films :", error);
    }
}

// Fonction pour afficher les films
function displayFilms(films) {
    filmList.innerHTML = ""; // Vide la liste des films
    films.forEach(film => {
        const filmItem = `
            <div class="film-card">
                <img src="${film.poster_path}" alt="${film.title_fr}" class="film-poster">
                <div class="film-info">
                    <h2>${film.title_fr} (${film.year})</h2>
                    <p>Score Bechdel : ${film.bechdel_score}</p>
                    <p>Langue : ${film.lang.toUpperCase()}</p>
                </div>
            </div>
        `;
        filmList.innerHTML += filmItem; // Ajoute le film à la liste
    });
}

// Fonction pour configurer la recherche
function setupSearch(films) {
    searchBar.addEventListener("input", () => {
        const query = searchBar.value.trim(); // Récupère la recherche
        if (!isNaN(query) && query !== "") {
            const filteredFilms = films.filter(film => film.bechdel_score === parseInt(query));
            displayFilms(filteredFilms);
        } else if (query === "") {
            displayFilms(films); // Affiche tous les films si la barre est vide
        }
    });
}

// Charge les films au chargement de la page
loadFilms();
