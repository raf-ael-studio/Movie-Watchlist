const watchlistSection = document.getElementById("watch-list");

// let watchlistData = localStorage.getItem("watchlist");
// let parsedWatchlist = JSON.parse(watchlistData);

// console.log(parsedWatchlist);

function renderMovieHTML(movie) {
  return `
  <article class="movie">
  <div class="poster-wrapper">
    <img class="movie-poster" src="${movie.poster}"/>
    </div>
    <div class="movie-info-wrapper">
      <div class="movie-header" 
      <h2>${movie.title}</h2>
      <p2>${movie.rating}</p2>
    </div>
    <div class="movie-subheader">
      <p2>${movie.runtime}</p2>
      <p2>${movie.genre}</p2>
      <a class="remove-from-watchlist" id="remove"
      data-id="${movie.id}"
      data-title="${movie.title}"
      data-poster="${movie.poster}"
      data-rating="${movie.rating}"
      data-runtime="${movie.runtime}"
      data-genre="${movie.genre}"
      data-plot="${movie.plot}"
      >REMOVE</a>
    </div>
      <p>${movie.plot}</p>
    </div>
</article>
`;
}

function renderWatchlist(watchlist) {
  watchlistSection.innerHTML = watchlist.map(renderMovieHTML).join("");
  const removeBtns = document.querySelectorAll(".remove-from-watchlist");

  removeBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
      const movieID = e.target.dataset.id;
      const updatedWatchlist = watchlist.filter((movie) => movie.id != movieID);
      localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
      renderWatchlist(updatedWatchlist);
    });
  });
}

const saved = JSON.parse(localStorage.getItem('watchlist')) || [];
renderWatchlist(saved);



// watchlistSection.innerHTML = parsedWatchlist.map(renderMovieHTML).join("");

// const removeBtns = document.querySelectorAll(".remove-from-watchlist");

// removeBtns.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     const btn = e.target;
//     const movieID = btn.dataset.id;
//     const updatedWatchlist = parsedWatchlist.filter(
//       (movie) => movie.id != movieID
//     );
//     localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
//     console.log(localStorage.getItem("watchlist"));

//     watchlistData = localStorage.getItem("watchlist");
//     parsedWatchlist = JSON.parse(watchlistData);
//     watchlistSection.innerHTML = parsedWatchlist.map(renderMovieHTML).join("");
//   });
// });
