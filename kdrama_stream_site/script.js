
const apiKey = 'af5a330cacf224cd83c1d587c2354cec';
const moviesContainer = document.getElementById('movies');

async function fetchKdramas() {
    const response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&with_original_language=ko&sort_by=popularity.desc`);
    const data = await response.json();
    showMovies(data.results);
}

function showMovies(movies) {
    moviesContainer.innerHTML = '';
    movies.forEach(movie => {
        const div = document.createElement('div');
        div.classList.add('movie');
        div.innerHTML = `<img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" alt="${movie.name}">`;
        div.addEventListener('click', () => {
            window.open(`https://www.youtube.com/results?search_query=${movie.name}+trailer`, '_blank');
        });
        moviesContainer.appendChild(div);
    });
}

fetchKdramas();
