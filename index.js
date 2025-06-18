const API_KEY = "f135cbac";

// const inputValue = document.getElementById("search").value;
const submit = document.getElementById("submit");
const searchForm = document.getElementById("search-api");
const searchList = document.getElementById("search-list");

searchForm.addEventListener("submit", async (event) => {
  const inputValue = document.getElementById("search").value;
  event.preventDefault();
  const res = await fetch(
    `http://www.omdbapi.com/?t=${inputValue}&apikey=${API_KEY}`
  );
  const data = await res.json();

  searchList.innerHTML = `
  <article class="movie">
    <img class="movie-poster" src="${data.Poster}"/>
    <div class="movie-info-wrapper">
      <div class="movie-header" 
      <h2>${data.Title}</h2>
      <p2>${data.Ratings[0].Value}</p2>
    </div>
    <div class="movie-subheader">
      <p2>${data.Runtime}</p2>
      <p2>${data.Genre}</p2>
      <a class="movie-add">WATCHLIST</a>
    </div>
      <p>${data.Plot}</p>
    </div>
</article>
`;
});
