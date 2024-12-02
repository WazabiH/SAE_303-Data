// Plus besoin de fetch, on utilise filmsData directement
const films = filmsData; // filmsData vient de films.js

// Affiche la liste des films
const filmListElement = document.getElementById("film-list");

films.forEach(film => {
    const filmElement = document.createElement("div");
    filmElement.className = "film";

    filmElement.innerHTML = `
        <img src="${film.poster_path}" alt="${film.title_fr}" />
        <h2>${film.title_fr}</h2>
        <p>Bechdel Score: ${film.bechdel_score}</p>
    `;

    filmListElement.appendChild(filmElement);
});
