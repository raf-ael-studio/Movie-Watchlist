const API_KEY = "f135cbac";

// const inputValue = document.getElementById("search").value;
const submit = document.getElementById("submit");
const searchForm = document.getElementById("search-api");
const searchList = document.getElementById("search-list");

let watchlist = localStorage.getItem("watchlist")
  ? JSON.parse(localStorage.getItem("watchlist"))
  : [];

searchForm.addEventListener("submit", async (event) => {
  const inputValue = document.getElementById("search").value;
  event.preventDefault();
  const res = await fetch(
    `http://www.omdbapi.com/?t=${inputValue}&apikey=${API_KEY}`
  );
  const data = await res.json();
console.log(data);
  let found = `
  <article class="movie">
  <div class="poster-wrapper">
    <img class="movie-poster" src="${data.Poster}"/>
    </div>
    <div class="movie-info-wrapper">
      <div class="movie-header" 
      <h2>${data.Title}</h2>
      <p2>${data.Ratings[0].Value}</p2>
    </div>
    <div class="movie-subheader">
      <p2>${data.Runtime}</p2>
      <p2>${data.Genre}</p2>
      <a class="add-to-watchlist" 
      data-id = "${data.imdbID}"
      data-title="${data.Title}"
      data-poster="${data.Poster}"
      data-rating="${data.Ratings[0].Value}"
      data-runtime="${data.Runtime}"
      data-genre="${data.Genre}"
      data-plot="${data.Plot}"
      >WATCHLIST</a>
    </div>
      <p>${data.Plot}</p>
    </div>
</article>
<hr>
`;

  searchList.innerHTML = found;
  const addToWatchlistBtn = document.querySelectorAll(".add-to-watchlist");

  addToWatchlistBtn.forEach((button) => {
    button.addEventListener("click", (e) => {
      const btn = e.target;
      const movieData = {
        id: btn.dataset.id,
        title: btn.dataset.title,
        poster: btn.dataset.poster,
        rating: btn.dataset.rating,
        runtime: btn.dataset.runtime,
        genre: btn.dataset.genre,
        plot: btn.dataset.plot,
      };

      watchlist.push(movieData);
      console.log(watchlist);
      localStorage.setItem("watchlist", JSON.stringify(watchlist));
    });
  });
});
