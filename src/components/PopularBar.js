import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import "../pages/MoviePage.css";

function PopularBar() {
  const { movies } = useContext(MoviesContext);
  const popularMovies = movies
    .filter((movie) => movie.vote_average > 7.0)
    .slice(0, 15);

  return (
    <div className="popular-sidebar">
      <h3 className="pop-h3">Most Popular</h3>
      {popularMovies.map((movie) => (
        <div key={movie.id} className="popular-movie-list">
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
            className="popular-poster"
          />
          <div className="popular-info">
            <h4 className="pop-title">{movie.title}</h4>
            <p className="pop-date">{movie.release_date.substring(0, 4)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PopularBar;
